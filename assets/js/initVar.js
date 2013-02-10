/*
===================================VARIABLES & FUNCTION===================================
*/
var jumPaging = 20;
//untuk menambah param secara permanen ke dalam store
Ext.override(Ext.data.Store, {
    setExtraParam: function (name, value){
        this.proxy.extraParams = this.proxy.extraParams || {};
        this.proxy.extraParams[name] = value;
        this.proxy.applyEncoding(this.proxy.extraParams);
    }
});
function onItemClick(item){
	Ext.MessageBox.alert('Menu Click', 'You clicked the '+item+' menu item.');
}
//untuk jam pada west border
clock = Ext.create('Ext.toolbar.TextItem', {
    text: Ext.Date.format(new Date(), 'H:i:s')
})

function str_replace(str,search_target,replacement) {
    str = new String(str);
    var n_str = str.length;
    var n_search = search_target.length;
    var result = "",searching = 0;
    for(var i=0;i<n_str;i++)
    {   
        if (n_search == 1)
        {
            if (str.charAt(i) == search_target) result += replacement;
            else result+=str.charAt(i);
        }else
        {           
            searching = str.indexOf(search_target,i);
            if (searching <= i && searching >= 0)
            {
                result += replacement;                               
                i+=n_search-1;
            }
            else
            {
                result+=str.charAt(i);
            }
                   
        }           
    }
    return result;
}

Ext.Loader.setConfig({
    enabled: true
});

// Ext.Loader.setPath('Ext.ux', base_url+'assets/extjs/examples/ux');
Ext.Loader.setPath('Ext.ux', 'http://cdn.sencha.io/ext-4.1.1-gpl/examples/ux');

Ext.require([
	'*',
    'Ext.ux.layout.Center',
    'Ext.ux.RowExpander',
    'Ext.ux.data.PagingMemoryProxy',
    'Ext.ux.ProgressBarPager',
    'Ext.ux.PreviewPlugin',
    'Ext.ux.statusbar.StatusBar',
	'Ext.ux.TabScrollerMenu',
	'Ext.ux.TabCloseMenu',
	'Ext.ux.grid.FiltersFeature',
	'Ext.ux.IFrame',
]);

var groupingFeature = Ext.create('Ext.grid.feature.Grouping',{
    groupHeaderTpl: 'Surah: {name}',
    enableGroupingMenu: false
});

function addTooltip(value, metadata, record, rowIndex, colIndex, store){
    metadata.tdAttr = 'data-qtip=\'' + value + '\'';
    return value;
}

var bukuTamuTplMarkup = [
	'<b><center>Dari: <a href="mailto:{email}" target="_blank">{name}</a></center></b><hr noshade size=1>',
	'Tanggal:<br>{tgl}<hr noshade size=1>',
	'Isi Komentar:<br/><br/>{text}'
];
var bukuTamuTpl = Ext.create('Ext.Template', bukuTamuTplMarkup);

function ubahCapcha() {
    Ext.Ajax.request({
        url: base_url+'quran/randCapcha',
        success: function(response){
            var hasil = eval(response.responseText);
			formBukuTamu.getForm().setValues({
                capcha_int: hasil[0],
                capcha_hide: hasil[1]
            });
        }
    });
}

function randRGB1() {
    return Math.floor(Math.random()*255);
}

function randRGB()
{
    return Math.floor(Math.random()*(255-150+1)+150);
}

function viewAyat(id) {
	Ext.Ajax.request({
		waitMsg: 'Silakan Tunggu...',
		url: base_url+'quran/getAyatInfo',
		method: 'POST',
		params: {
			ayatId: id
			},
		success: function(response){
			var hasilText = eval(response.responseText);
			windowAyat.setTitle(hasilText[1]);
			Ext.getCmp('prevAyat').setText(hasilText[0]);
			Ext.getCmp('nextAyat').setText(hasilText[2]);
		},
		failure: function(response){
			var result=response.responseText;
			Ext.MessageBox.alert('Gagal','Tidak dapat mengambil informasi ayat');
		}
	});
	dynamicPanel = Ext.create('Ext.Component', {
		loader: {
			url: base_url+'quran/displayAyat/'+id,
			params: {
				cariKata: ''
			},
			renderer: 'html',
			text: 'Memuat...',
			autoLoad: true,
			scripts: true
		}
	});
	Ext.getCmp('panelAyat').removeAll();
	Ext.getCmp('panelAyat').add(dynamicPanel);
	windowAyat.show();
}

function randomAyat() {
    var randValue = Math.floor(Math.random()*6236);
    dynamicPanel = new Ext.Component({
        loader: {
            url: base_url+'quran/displayAyat/'+randValue,
            renderer: 'html',
            loadMask: true,
            autoLoad: true,
            scripts: true
        }
    });
    Ext.getCmp('panelAyat').removeAll();
    Ext.getCmp('panelAyat').add(dynamicPanel);
    Ext.getCmp('CurrAyatId').setValue(randValue);
    Ext.Ajax.request({
        waitMsg: 'Silakan Tunggu...',
        url: base_url+'quran/getAyatInfo',
        method: 'POST',
        params: {
            ayatId: randValue
        },
        success: function(response){
            var hasilText = eval(response.responseText);
            windowAyat.setTitle(hasilText[1]);
            Ext.getCmp('prevAyat').setText(hasilText[0]);
            Ext.getCmp('nextAyat').setText(hasilText[2]);
        },
        failure: function(response){
            var result=response.responseText;
            Ext.MessageBox.alert('Gagal','Tidak dapat mengambil ayat selanjutnya');
        }
    });
    windowAyat.show();
}

var windowAyat = Ext.create('Ext.Window', {
    title: 'Isi Ayat',
    closable: false,
    modal: true,
    width: 800,
    height: 460,
    // headerPosition: 'left',
    layout: 'border',
    border: false,
    items: {
        xtype : 'panel',
        id:'panelAyat',
        region: 'center',
        border: false,
        autoScroll: true,
        setLoading: true,
        layout: 'fit',
        bodyStyle:'padding:5px'
    },
	dockedItems: [{
		xtype: 'toolbar',
		dock: 'bottom',
		layout : {
			type : 'hbox',
			pack : 'center'
		},
		items: [
			{
				xtype: 'button',
				text: 'Ayat Sebelumnya',
				id: 'prevAyat',
				iconCls: 'prev',
				handler: function(){
					var currAyatId = Ext.getCmp('CurrAyatId').getValue();
					prevAyatId = eval(currAyatId.valueOf()) - 1;
					if(prevAyatId == 0) {
						Ext.MessageBox.alert('Gagal', 'Ini adalah ayat pertama!');
					}
					else {
						Ext.getCmp('CurrAyatId').setValue(prevAyatId);
						Ext.Ajax.request({
							waitMsg: 'Silakan Tunggu...',
							url: base_url+'quran/getAyatInfo',
							method: 'POST',
							params: {
								ayatId: prevAyatId
							},
							success: function(response){
								var hasilText = eval(response.responseText);
								windowAyat.setTitle(hasilText[1]);
								Ext.getCmp('prevAyat').setText(hasilText[0]);
								Ext.getCmp('nextAyat').setText(hasilText[2]);
							},
							failure: function(response){
								var result=response.responseText;
								Ext.MessageBox.alert('Gagal','Tidak dapat mengambil ayat sebelumnya');
							}
						});
						dynamicPanel = new Ext.Component({
							loadMask: true,
							loader: {
								url: base_url+'quran/displayAyat/'+prevAyatId,
								renderer: 'html',
								text: 'Memuat...',
								autoLoad: true,
								scripts: true
							}
						});							
						Ext.getCmp('panelAyat').removeAll();
						Ext.getCmp('panelAyat').add(dynamicPanel);
					}
				}
			},'-',{
				xtype: 'button',
				text: 'Tutup',
				iconCls: 'close',
				handler: function(){
					windowAyat.hide();
				}
			},'-',{
				xtype: 'button',
				text: 'Ayat Selanjutnya',
				iconCls: 'next',
				id: 'nextAyat',
				handler: function(){
					var currAyatId = Ext.getCmp('CurrAyatId').getValue();
					nextAyatId = eval(currAyatId.valueOf()) + 1;
					if(nextAyatId > 6236) {
						Ext.MessageBox.alert('Gagal', 'Ini adalah ayat terakhir!');
					}
					else {
						Ext.getCmp('CurrAyatId').setValue(nextAyatId);
						Ext.Ajax.request({
							waitMsg: 'Silakan Tunggu...',
							url: base_url+'quran/getAyatInfo',
							method: 'POST',
							params: {
								ayatId: nextAyatId
							},
							success: function(response){
								var hasilText = eval(response.responseText);
								windowAyat.setTitle(hasilText[1]);
								Ext.getCmp('prevAyat').setText(hasilText[0]);
								Ext.getCmp('nextAyat').setText(hasilText[2]);
							},
							failure: function(response){
								var result=response.responseText;
								Ext.MessageBox.alert('Gagal','Tidak dapat mengambil ayat selanjutnya');
							}
						});
						dynamicPanel = new Ext.Component({
							loadMask: true,
							loader: {
								url: base_url+'quran/displayAyat/'+nextAyatId,
								renderer: 'html',
								text: 'Memuat...',
								autoLoad: true,
								scripts: true
							}
						});							
						Ext.getCmp('panelAyat').removeAll();
						Ext.getCmp('panelAyat').add(dynamicPanel);
					}
				}
			}
		]
	}]
});

var windowDownload = Ext.create('Ext.Window', {
    title: 'Download File',
    closable: false,
    constrainHeader: true,
    modal: true,
    width: 400,
    height: 140,
    layout: 'fit',
    border: false,
    items: {
        xtype : 'form',
        url: base_url+'quran/download',
        buttonAlign: 'center',
        id: 'formDownload',
        border: false,
        frame:true,
        bodyStyle:'padding:5px',
        fieldDefaults: {
            msgTarget: 'side',
            labelWidth: 60
        },
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },
        items: [{
            fieldLabel: 'Email',
            name: 'emailField',
            id: 'emailField',
            vtype:'email',
            allowBlank:false
        },{
            xtype:'hidden',
            name: 'urlField',
            id: 'urlField',
            allowBlank:false
        },{
			xtype:'displayfield',
            value: '<center><i><font color="#969696">Isi email dengan benar, karena password aplikasi akan di kirimkan ke email tersebut</font></i></center>',
			hideLable: true
        }],
        buttons: [{
            text: 'Download File',
            formBind: true,
            iconCls: 'download',
            handler: function(){
                var urlDownload = Ext.getCmp('urlField').getValue();
                var values = Ext.getCmp('formDownload').getForm().getFieldValues();
                var konfirmasi1 = 'Aplikasi ini berbentuk .exe dan hanya dapat dijalankan di Windows, untuk menjalankan aplikasinya diperlukan password dan untuk mengetahuinya harap balas email yang akan dikirimkan setelah mengisikan email yang benar dalam form ini kepada kontak@indoquran.web.id, download file ini?';
                var konfirmasi2 = 'Aplikasi ini berbentuk .chm dan hanya dapat dijalankan di Windows, untuk platform linux dan lainnya mungkin dibutuhkan plugins untuk menjalankan aplikasi ini, download file ini?';
                var konfirmasi = '';
				
                if(urlDownload == 'http://www.indoquran.web.id/download/AlQuranDigital.chm') {
                    konfirmasi = konfirmasi2
                    } //jika .chm
                else {
                    konfirmasi = konfirmasi1
                    }
				
                Ext.MessageBox.confirm('Download', konfirmasi, function(btn) {
                    if(btn == "yes") {
                        if(values['urlField'] == '') {
                            Ext.MessageBox.alert('Gagal', 'Silakan pilih terlebih dahulu aplikasi yang akan di download.');
                        }
                        else {
                            if(values['emailField'] == '') {
                                Ext.MessageBox.alert('Gagal', 'Email masih kosong');
                            }
                            else {
                                Ext.getCmp('formDownload').getForm().submit({
                                    success: function(f,a){
                                        Ext.getCmp('emailField').setValue(null);
                                        windowDownload.hide();
                                        Ext.MessageBox.alert('Berhasil', a.result.Msg);
                                    },
                                    failure: function(f,a){
                                        Ext.getCmp('emailField').setValue(null);
                                        windowDownload.hide();
                                        Ext.MessageBox.alert('Gagal', a.result.Msg);
                                    }
                                });
                            }
                        }
                    }
                })
            }
        },{
            text: 'Tutup',
            iconCls: 'close',
            handler: function(){
                windowDownload.hide();
            }
        }]
    }
});

var formBukuTamu = Ext.create('Ext.form.Panel', {
	url: base_url+'quran/bukuTamu/insert',
	frame:true,
	monitorValid: true,
	bodyStyle:'padding:5px 5px 0',
	fieldDefaults: {
		msgTarget: 'side',
		labelWidth: 75
	},
	defaultType: 'textfield',
	defaults: {
		anchor: '100%',
		allowBlank:false
	},
	buttonAlign: 'center',
	items: [{
		fieldLabel: 'Nama',
		name: 'name'
	}, {
		fieldLabel: 'Email',
		name: 'email',
		vtype:'email'
	}, {
		xtype: 'htmleditor',
		fieldLabel: 'Komentar',
		id: 'komentarField',
		name: 'text'
	}, {
		xtype: 'fieldcontainer',
		fieldLabel: 'Berapa',
		msgTarget : 'side',
		layout: 'hbox',
		defaults: {
			hideLabel: true
		},
		items: [
		{
			xtype: 'displayfield',
			name: 'capcha_int',
			id: 'capcha_int',
			value: '',
			width: 100
		},{
			xtype: 'hidden',
			name: 'capcha_hide',
			value: ''
		},{
			xtype: 'numberfield',
			name: 'capcha',
			width: 100,
			margin: '0 5 0 0',
			allowBlank: false
		}
		]
	}],
	listeners: [{
		afterrender : {
			fn: ubahCapcha()
		},
		beforeexpand : {
			fn: function() {
				formBukuTamu.getForm().reset();
				ubahCapcha();
			}
		}
	}],
	buttons: [{
		text: 'Ubah Capcha',
		iconCls: 'recapcha',
		handler: function() {
			ubahCapcha();
		}
	},{
		text: 'Kirim',
		formBind: true,
		iconCls: 'bukutamuSend',
		handler: function() {
			Ext.MessageBox.confirm('Kirim', 'Kirim Buku Tamu Ini?', function(btn) {
				if(btn == "yes") {
					var vals = formBukuTamu.getForm().getValues();
					if(vals['capcha_hide'] == vals['capcha']) {
						var jumKar = Ext.getCmp('komentarField').getValue().length;
						if(jumKar <= 8) {
							Ext.MessageBox.alert('Gagal' , 'Isi komentar minimal 8 karakter');
						} else {
							formBukuTamu.getForm().submit({
								success: function(f,a){
									Ext.MessageBox.alert('Terima kasih' , a.result.Msg);
									formBukuTamu.getForm().reset();
									ubahCapcha();
									windowBukuTamu.hide();
									bukuTamuStore.load();
								},
								failure: function(f,a){
									Ext.MessageBox.alert('Gagal' , a.result.Msg);
								}
							});
						}
					}
					else {
						Ext.MessageBox.alert('Gagal' , 'Salah Perhitungan Dari '+Ext.getCmp('capcha_int').getValue());
					}
				}
			});
		}
	},{
		text: 'Reset',
		iconCls: 'reset',
		handler: function() {
			formBukuTamu.getForm().reset();
			ubahCapcha();
		}
	}]
});

var windowBukuTamu = Ext.create('Ext.window.Window', {
    title: 'Isi Buku Tamu',
    hideTitle: true,
    closable: false,
    modal: true,
    width: 650,
	autoHeight: true,
    layout: 'fit',
    buttonAlign: 'center',
    border: false,
    items:formBukuTamu,
    buttons: [{
        text: 'Tutup',
        iconCls: 'close',
        handler: function() {
            windowBukuTamu.hide();
        }
    }]
});
/*
===================================END VARIABLES & FUNCTION===================================
*/
Ext.chart.theme.White = Ext.extend(Ext.chart.theme.Base, {
    constructor: function() {
        Ext.chart.theme.White.superclass.constructor.call(this, {
            axis: {
                stroke: 'rgb(8,69,148)',
                'stroke-width': 1
            },
            axisLabel: {
                fill: 'rgb(8,69,148)',
                font: '12px Arial',
                'font-family': '"Arial',
                spacing: 2,
                padding: 5,
                renderer: function(v) {
                    return v;
                }
            },
            axisTitle: {
                font: 'bold 18px Arial'
            }
        });
    }
});
/*
================================MODEL================================
*/
Ext.define('Quran', {
    extend: 'Ext.data.Model',
    fields: [
    {
        name:'ID',
        type:'int'
    },
    'nama','arti',
    {
        name:'SuraID',
        type:'int'
    },

    {
        name:'VerseID',
        type:'int'
    },
    'AyahText','img','mp3','qs','namaSurah','asbabunNuzul','baca'
    ],
    idProperty: 'ID'
});

Ext.define('Pengunjung', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name:'VisID',
            type:'int'
        },
        'VisIP','VisRef','VisUrl',
        {
            name:'VisDate', 
            type: 'date', 
            dateFormat: 'Y-m-d H:i:s'
        },
        'VisAgent','VisPlatform','VisAgentString'
    ],
    idProperty: 'VisID'
});

Ext.define('Statistik', {
    extend: 'Ext.data.Model',
    fields: [
    'judul',
    {
        name:'jumlah',
        type:'int'
    }
    ]
});

Ext.define('Surah', {
    extend: 'Ext.data.Model',
    fields: [
    {name: 'id', type: 'int'},
    'nama_surah','arti','head_body','head'
    ]
});

Ext.define('Juz', {
    extend: 'Ext.data.Model',
    fields: [
    {name: 'id',type: 'int'},
    'juz','desc'
    ]
});

Ext.define('BukuTamu', {
    extend: 'Ext.data.Model',
    fields: [
    'id', {
        name: 'date', 
        type: 'date', 
        dateFormat: 'Y-m-d H:i:s'
    },
    'name','email','text','email_status','tgl'
    ]
});

Ext.define('ModelSurahAyat', {
    extend: 'Ext.data.Model',
    fields: ['id','head','txt']
});

Ext.define('Topik', {
    extend: 'Ext.data.Model',
    fields: [
    'id','parent_id','is_title','text','isi','adaTopik','jumTopik'
    ]
});

Ext.define("Post", {
    extend: 'Ext.data.Model',
    proxy: {
        type: 'jsonp',
        url : base_url+'quran/autoCompleteSearch',
        reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'total'
        },
        actionMethods: {
            create: 'POST',
            read: 'POST',
            update: 'POST',
            destroy: 'POST'
        }
    },
    fields: [
		{name: 'ID', mapping: 'ID'},
		{name: 'SuraID', mapping: 'SuraID'},
		{name: 'VerseID', mapping: 'VerseID'},
		{name: 'AyahText', mapping: 'AyahText'}
	]
});
/*
================================END MODEL================================
*/

/*
================================STORE================================
*/
var quranStore = Ext.create('Ext.data.Store', {
    model: 'Quran',
    remoteSort: true,
    loadMask: true,
    pageSize: jumPaging,
    groupField: 'nama',
    proxy: {
        type: 'ajax',
        url: base_url+'quran/getAllAyat',
        extraParams: {
            limit: jumPaging
        },
        reader: {
            root: 'data',
            totalProperty: 'total'
        },
        simpleSortMode: true,
        actionMethods: {
            create: 'POST',
            read: 'POST',
            update: 'POST',
            destroy: 'POST'
        }
    },
    autoLoad: true
});

var pengunjungStore = Ext.create('Ext.data.Store', {
    model: 'Pengunjung',
    remoteSort: true,
    loadMask: true,
    pageSize: jumPaging,
    proxy: {
        type: 'ajax',
        url: base_url+'quran/getPengunjung',
        extraParams: {
            limit: jumPaging
        },
        reader: {
            root: 'data',
            totalProperty: 'total'
        },
        simpleSortMode: true,
        actionMethods: {
            create: 'POST',
            read: 'POST',
            update: 'POST',
            destroy: 'POST'
        },
    },
// autoLoad: true
});

var statistikStore = Ext.create('Ext.data.Store', {
    model: 'Statistik',
    loadMask: true,
    pageSize: 12,
    proxy: {
        type: 'ajax',
        url: base_url+'quran/statistik',
        extraParams: {
            limit: 12
        },
        reader: {
            root: 'rows',
            totalProperty: 'total'
        },
        simpleSortMode: true,
        actionMethods: {
            create: 'POST',
            read: 'POST',
            update: 'POST',
            destroy: 'POST'
        },
    },
// autoLoad: true
});

var bukuTamuStore = Ext.create('Ext.data.Store', {
    model: 'BukuTamu',
    loadMask: true,
    remoteSort: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',
        url: base_url+'quran/bukuTamu/read',
        extraParams: {
            limit: 20
        },
        reader: {
            root: 'rows',
            totalProperty: 'total'
        },
        simpleSortMode: true,
        actionMethods: {
            create: 'POST',
            read: 'POST',
            update: 'POST',
            destroy: 'POST'
        },
    },
	autoLoad: true
});

var surahStoreId = Ext.create('Ext.data.Store', {
    model: 'ModelSurahAyat',
    loadMask: true,
    proxy: {
        type: 'ajax',
        url: base_url+'json/getListSurahId.json',
        reader: {
            root: 'rows'
        },
        actionMethods: {
            create: 'POST',
            read: 'POST',
            update: 'POST',
            destroy: 'POST'
        },
    },
	autoLoad: true
});

var ayatStoreId = Ext.create('Ext.data.Store', {
    model: 'ModelSurahAyat',
    loadMask: true,
    proxy: {
        type: 'ajax',
        url: base_url+'quran/getListAyatId',
        reader: {
            root: 'rows'
        },
        actionMethods: {
            create: 'POST',
            read: 'POST',
            update: 'POST',
            destroy: 'POST'
        },
    },
	autoLoad: true
});

var surahStore = Ext.create('Ext.data.Store', {
    model: 'Surah',
	loadMask: true,
    proxy: {
        type: 'ajax',
        url: base_url+'json/getListSurah.json',
        reader: {
            root: 'rows'
        },
        actionMethods: {
            create: 'POST',
            read: 'POST',
            update: 'POST',
            destroy: 'POST'
        }
    },
	autoLoad: true
});

var juzStore = Ext.create('Ext.data.Store', {
    model: 'Juz',
	loadMask: true,
    proxy: {
        type: 'ajax',
        url: base_url+'json/juzdata.json',
        reader: {
            root: 'rows'
        }
    },
	autoLoad: true
});

var tipeChart = Ext.create('Ext.data.Store', {
    fields: ['tipe', 'txt'],
    data : [
		{"tipe":"harian", "txt":"Harian"},
		{"tipe":"bulanan", "txt":"Bulanan"},
		{"tipe":"tahunan", "txt":"Tahunan"}
    ]
});

var downloadfile = Ext.create('Ext.data.Store', {
    fields: ['url', 'txt'],
    data : [
    {
        "url":"http://www.4shared.com/file/6F3hFxSJ/application.html?", 
        "txt":"Aplikasi v.1 (274MB)"
    },

    {
        "url":"http://www.indoquran.web.id/download/AlQuranDigital.chm", 
        "txt":"Al Quran Digital.chm (9,4MB)"
    }
    ]
});

var topikStore = Ext.create('Ext.data.TreeStore', {
	model: 'Topik',
	proxy: {
		type: 'ajax',
		url: base_url+'topik/getTreeTopik',
		actionMethods: {
			create: 'POST',
			read: 'POST',
			update: 'POST',
			destroy: 'POST'
		}
	},
	folderSort:true
});

ds = Ext.create('Ext.data.Store', {
	pageSize: 10,
	model: 'Post'
});
/*
================================END STORE================================
*/

/*
================================TREE================================
*/
var treeTopik = Ext.create('Ext.tree.Panel', {
	title: 'Daftar Topik',
	useArrows: true,
	rootVisible: false,
	store: topikStore,
	singleExpand: true,
	border: true,
	viewConfig: {
		stripeRows: true,
		enableTextSelection: true
	},
	columns: [{
		text: 'Jumlah Topik',
		width: 80,
		dataIndex: 'jumTopik'
	},{
		menuDisabled: true,
		sortable: false,
		xtype: 'actioncolumn',
		text: 'Buka',
		width: 40,
		items: [{
			icon   : base_url+'assets/images/ico/accept.png',
			tooltip: 'Buka Topik',
			handler: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
				if(record.get('adaTopik') == 'ada') {
					var tabs = Ext.getCmp('topik-panel');
					var judul = record.get('text');
					var idTopik = record.get('id');
					tabs.add({
						closable: true,
						border: false,
						iconCls: 'tabs',
						title: judul,
						loader: {
							url: base_url+'topik/getTopikContent/'+idTopik,
							contentType: 'html',
							loadMask: true
						},
						bodyPadding: 10,
						listeners: {
							render: function(tab) {
								tab.loader.load();
							}
						}
					}).show();
				} else {
					Ext.MessageBox.alert('Kosong' , 'Topik : "'+record.get('text')+'" kosong');
				}
			}
		}]
	},{
		xtype: 'treecolumn',
		text: 'Topik',
		flex: 1,
		sortable: true,
		dataIndex: 'text'
	},{
		text: 'Daftar Ayat',
		flex: 1,
		dataIndex: 'isi'
	}]
});
/*
================================TREE================================
*/

/*
================================COLUMNS================================
*/
var platformStore = Ext.create('Ext.data.Store', {
	fields: ['id', 'text'],
	proxy: {
		type: 'ajax',
		url: base_url+'quran/getListPlatform',
		reader: {type: 'json'}
	}
});

var createColumnsPengunjung = function (finish, start) {
	var columns = [{
			text: "No.",
			xtype: 'rownumberer',
			width: 40,
			filterable: false
		},{
			id: 'VisIP',
			text: "Alamat IP",
			width: 120,
			dataIndex: 'VisIP',
			filter: {type: 'string'}
		},{
			text: "Refferer",
			dataIndex: 'VisRef',
			flex: 1,
			renderer: addTooltip,
			filter: {type: 'string'}
		},{
			text: "Tanggal / Waktu",
			dataIndex: 'VisDate',
			width: 120,
			renderer : Ext.util.Format.dateRenderer('d M Y H:i:s'),
			filter: {type: 'date'}
		},{
			text: "User Agent",
			dataIndex: 'VisAgent',
			flex: 1,
			renderer : addTooltip,
			filter: {type: 'string'}
		},{
			text: "Platform",
			dataIndex: 'VisPlatform',
			flex: 1,
			renderer : addTooltip,
			filter: {
				type: 'list',
				store: platformStore,
				phpMode: true
			}
		}
	];
	return columns.slice(start || 0, finish);
};
