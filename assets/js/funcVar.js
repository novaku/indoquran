function getAllLayouts() {
	return {
        /*
        * ================  Quran Grid  =======================
        */
        quranGrid: {
            id: 'start-panel',
            xtype: 'grid',
            title: 'Al-Qur\'anul Karim',
            store: quranStore,
			loadMask: true,
            region: 'center',
			viewConfig:{
				loadingText: 'Memuat..'
			},
            features: [groupingFeature],
            plugins: [{
                ptype: 'rowexpander',
                rowBodyTpl : [
                '<hr noshade size=1><table width="100%">',
                '<tr><td valign="top"><b>QS. [{nama} Ayat {VerseID}]<br><br>',
                '<i>"{AyahText}"</i></b></td><td valign="top">',
                '<div align="right">',
                '<img src="'+base_url+'assets/quran_img/{img}" />&nbsp;&nbsp;&nbsp;<br>',
				'{baca}<br>',
                '<object type="application/x-shockwave-flash" data="'+base_url+'assets/swf/player.swf" id="audioplayer1" height="24" width="460">',
                '<param name="movie" value="'+base_url+'assets/swf/player.swf">',
                '<param name="FlashVars" value="playerID=1&amp;bg=0xEFEFEF&amp;leftbg=0xCCCCCC&amp;lefticon=0x666666&amp;rightbg=0xB6E1E1&amp;                 rightbghover=0x9BA948&amp;righticon=0x798732&amp;righticonhover=0xFFFFFF&amp;   text=0x666666&amp;slider=0x666666&amp;track=0xFFFFFF&amp;border=0x666666&amp;loader=0xEDF4CA&amp;soundFile='+base_url+'assets/quran_mp3/{mp3}">',
                '<param name="quality" value="high">',
                '<param name="menu" value="true">',
                '<param name="wmode" value="transparent">',
                '</object>',
                '</div></td></tr>',
                '<tr><td colspan="2"><hr noshade size="1">Link ke ayat ini : <a href="'+base_url+'quran/viewAyat/{ID}" target="_blank">'+base_url+'quran/viewAyat/{ID}</a><hr noshade size="1"></td></tr>',
                '</table>'
                ],
				listeners: {
					expandbody : function( rowNode, record, expandRow, eOpts ){
						alert(record.get('qs'));
					}
				}
            }],
            columns:[{
                text: "No.",
                xtype: 'rownumberer',
                width: 40
            },{
                xtype: 'actioncolumn',
                width: 60,
				sortable: false,
                menuDisabled:true,
                text: 'Baca',
                items: [{
					icon: base_url+'assets/images/ico/book_open.png',
                    getClass: function(v, meta, rec) {
                        this.items[0].tooltip = 'Buka ' + rec.get('qs');
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = quranStore.getAt(rowIndex);
						this.tooltip = 'Buka ' + rec.get('qs');
						var cariKataHidden = Ext.getCmp('cariKataHidden').getValue();
                        Ext.getCmp('CurrAyatId').setValue(rec.get('ID'));
                        Ext.Ajax.request({
                            waitMsg: 'Silakan Tunggu...',
                            url: base_url+'quran/getAyatInfo',
                            method: 'POST',
                            params: {
                                ayatId: rec.get('ID')
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
                                url: base_url+'quran/displayAyat/'+rec.get('ID'),
								params: {
									cariKata: cariKataHidden
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
                },{
					icon: base_url+'assets/images/ico/separator.png',
				},{
					getClass: function(v, meta, rec) {
						if (rec.get('asbabunNuzul') != '') {
							this.items[2].tooltip = 'AsbabunNuzul ' + rec.get('qs');
							return 'view-an';
						}
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = quranStore.getAt(rowIndex);
						windowAsbabunNuzul.setTitle('AsbabunNuzul ' +rec.get('qs'));
						Ext.getCmp('areaAsbabunNuzul').removeAll();
						var isi = Ext.create('Ext.Component', {
							html: rec.get('asbabunNuzul')
						});
						Ext.getCmp('areaAsbabunNuzul').add(isi);
						windowAsbabunNuzul.show();
						// Ext.MessageBox.alert('AsbabunNuzul ' +rec.get('qs') , rec.get('asbabunNuzul'));
					}
				}]
            },{
                id: 'qs',
                text: "QS",
                width: 80,
				sortable: false,
                menuDisabled:true,
                dataIndex: 'qs'
            },{
                id: 'AyahText',
                text: "Tarjamah",
                flex: 1,
				sortable: false,
                menuDisabled:true,
                dataIndex: 'AyahText',
                renderer: addTooltip
            },{
                text: "Surah",
                dataIndex: 'nama',
                width: 100,
				sortable: false,
                menuDisabled:true,
                align: 'right'
            },{
                text: "Ayat",
                dataIndex: 'VerseID',
				sortable: false,
                menuDisabled:true,
                width: 50
            }],
            bbar: Ext.create('Ext.PagingToolbar', {
                pageSize: jumPaging,
                store: quranStore,
                displayInfo: true,
                afterPageText: 'dari {0}',
                beforePageText: 'Halaman',
                displayMsg: 'Menampilkan {0} - {1} dari {2}',
                plugins: Ext.create('Ext.ux.ProgressBarPager', {})
            }),
			tbar: {
				xtype: 'container',
				layout: 'anchor',
				defaults: {anchor: '0'},
				defaultType: 'toolbar',
				items: [
					{
						items: [
							,'-',
							new Ext.form.Checkbox({
								id: 'cocokanCheck',
								name: 'cocokanCheck',
								fieldLabel: 'Cocokan Seluruh Kata',
								labelWidth: 120,
								value: true
							}),'-',
							{
								xtype: 'combo',
								labelWidth: 60,
								width: 600,
								store: ds,
								id:'cariKata',
								fieldLabel:'Cari Kata',
								displayField: 'AyahText',
								valueField: 'ID',
								minChars: 1,
								name: 'cariKata',
								typeAhead: false,
								hideTrigger:true,
								listeners: {
									specialkey : function(func,g){
										if (g.getKey() == g.ENTER) {
											var patt = this.getValue();
											var jumKar = patt.length;
											var cocok = Ext.getCmp('cocokanCheck').getValue();
											Ext.getCmp('cariKataHidden').setValue(patt);
											quranStore.setExtraParam('kata', patt);
											quranStore.setExtraParam('sesuai', cocok);
											quranStore.loadPage(1);
										// quranStore.load();
										}
										else if (g.getKey() == g.ESC) {
											this.setValue();
										}
									},
									select: function(combo, record, index) {
										var nilai = record[0].data.ID;
										//alert(nilai);
										windowAyat.show();
										var cariKataHidden = Ext.getCmp('cariKataHidden').getValue();
										Ext.getCmp('CurrAyatId').setValue(nilai);
										Ext.Ajax.request({
											waitMsg: 'Silakan Tunggu...',
											url: base_url+'quran/getAyatInfo',
											method: 'POST',
											params: {
												ayatId: nilai
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
												url: base_url+'quran/displayAyat/'+nilai,
												params: {
													cariKata: cariKataHidden
												},
												renderer: 'html',
												text: 'Memuat...',
												autoLoad: true,
												scripts: true
											}
										});
										Ext.getCmp('panelAyat').removeAll();
										Ext.getCmp('panelAyat').add(dynamicPanel);
									}
								},
								listConfig: {
									loadingText: 'Mencari...',
									emptyText: 'Kata Tidak Ditemukan.',
									getInnerTpl: function() {
										var cariKata = Ext.getCmp('cariKata').getValue();
										var txtFormat = str_replace('{AyahText}', cariKata, '<font color="red"><b>'+cariKata+'</b></font>');
										return txtFormat+'<h3><code>Q.S. [{SuraID}:{VerseID}]</code></h3>';
									}
								},
								pageSize: 10
							}
							
							// { //text box diubah menjadi bombo box auto complete
								// xtype:'textfield',
								// fieldLabel:'Cari Kata',
								// labelWidth: 60,
								// name: 'cariKata',
								// width: 600,
								// id:'cariKata',
								// listeners: actField
							// }
							
							
							,'-',
							{
								xtype: 'hidden',
								id: 'cariKataHidden'
							},
							{
								xtype: 'button',
								text: 'Cari',
								iconCls: 'bukutamuSend',
								handler: function() {
									var patt = Ext.getCmp('cariKata').getValue();
									var jumKar = patt.length;
									var cocok = Ext.getCmp('cocokanCheck').getValue();
									if(jumKar < 1) {
										Ext.MessageBox.alert('Gagal','Kolom pencarian masih kosong');
									} else {
										Ext.getCmp('cariKataHidden').setValue(patt);
										quranStore.setExtraParam('kata', patt);
										quranStore.setExtraParam('sesuai', cocok);
										quranStore.loadPage(1);
									}
								}
							},'-',{
								xtype: 'button',
								text: 'Kosongkan Pencarian',
								iconCls: 'clear',
								handler: function() {
									Ext.getCmp('cariKata').setValue(null);
									Ext.getCmp('surahID').setValue(null);
									Ext.getCmp('juzId').setValue(null);
									Ext.getCmp('cariKataHidden').setValue(null);
									Ext.getCmp('cocokanCheck').setValue(false);
									quranStore.setExtraParam('kata', null);
									quranStore.setExtraParam('sesuai', null);
									quranStore.setExtraParam('SuraID', null);
									quranStore.loadPage(1);
								}
							},{
								xtype: 'hidden',
								name: 'CurrAyatId',
								id: 'CurrAyatId',
								value : ''
							}
						]
					},{
						items: [
							{
								xtype: 'button',
								text: 'Random Ayat',
								iconCls: 'random',
								handler: function() {
									randomAyat();
								}
							},'-',{
								xtype: 'combo',
								fieldLabel: 'Pilih Surah',
								displayField: 'nama_surah',
								valueField: 'id',
								hiddenName: 'surahID',
								id: 'surahID',
								editable: false,
								name: 'surahID',
								emptyText: 'Pilih Surah..',
								width: 300,
								labelWidth: 60,
								store: surahStore,
								queryMode: 'local',
								typeAhead: true,
								listeners: {
									select: function(){
										var nilai = this.getValue();
										if(nilai=="0") this.setValue(null);
										Ext.getCmp('juzId').setValue(null);
										quranStore.setExtraParam('SuraID', nilai);
										quranStore.setExtraParam('kata', Ext.getCmp('cariKata').getValue());
										quranStore.setExtraParam('juzID', '');
										quranStore.loadPage(1);
									}
								},
								listConfig: {
									tpl: [
										'<ul><tpl for=".">',
												'<li role="option" class="x-boundlist-item" data-qtip="{head_body}" data-qtitle="{head}">{nama_surah}</li>',
										'</tpl></ul>'
									]
								}
							},'-',{
								xtype: 'combo',
								fieldLabel: 'Pilih Juz',
								displayField: 'juz',
								valueField: 'id',
								hiddenName: 'juzId',
								id: 'juzId',
								editable: false,
								name: 'juzId',
								emptyText: 'Pilih Juz..',
								width: 230,
								labelWidth: 60,
								store: juzStore,
								queryMode: 'local',
								typeAhead: true,
								listeners: {
									select: function(){
										var nilai = this.getValue();
										if(nilai=="0") this.setValue(null);
										Ext.getCmp('surahID').setValue(null);
										quranStore.setExtraParam('juzID', nilai);
										quranStore.setExtraParam('SuraID', '');
										quranStore.setExtraParam('kata', Ext.getCmp('cariKata').getValue());
										quranStore.loadPage(1);
									}
								},
								listConfig: {
									tpl: [
										'<ul><tpl for=".">',
												'<li role="option" class="x-boundlist-item" data-qtip="{desc}" data-qtitle="Juz-{id}">{juz}</li>',
										'</tpl></ul>'
									]
								}
							},'-',{
								xtype: 'fieldcontainer',
								fieldLabel: 'Buka Ayat',
								labelWidth: 55,
								msgTarget : 'side',
								layout: 'hbox',
								defaults: {
									flex: 1,
									hideLabel: true
								},
								items: [
									{xtype: 'displayfield', value: 'Q.S.['},
									{
										xtype: 'combo',
										displayField: 'id',
										valueField: 'id',
										id: 'comboSurahId',
										width: 60,
										editable: false,
										emptyText: 'Surah',
										store: surahStoreId,
										queryMode: 'local',
										typeAhead: true,
										listeners: {
											select: function(){
												var nilai = this.getValue();
												if(nilai==0) this.setValue(null);
												Ext.getCmp('comboAyatId').setValue(null);
												ayatStoreId.setExtraParam('SuraID', nilai);
												ayatStoreId.load();
											}
										},
										listConfig: {
											tpl: [
												'<ul><tpl for=".">',
														'<li role="option" class="x-boundlist-item" data-qtip="{txt}" data-qtitle="{head}">{id}</li>',
												'</tpl></ul>'
											]
										}
									},
									{xtype: 'displayfield', value: ':'},
									{
										xtype: 'combo',
										displayField: 'id',
										valueField: 'id',
										id: 'comboAyatId',
										width: 60,
										editable: false,
										emptyText: 'Ayat',
										store: ayatStoreId,
										queryMode: 'local',
										typeAhead: true,
										listeners: {
											select: function(){
												var comboAyatId = this.getValue();
												var comboSurahId = Ext.getCmp('comboSurahId').getValue();
												
												Ext.Ajax.request({
													waitMsg: 'Silakan Tunggu...',
													url: base_url+'quran/getAyatId',
													method: 'POST',
													params: {
														surah: comboSurahId,
														ayat : comboAyatId
													},
													success: function(response){
														var hasil = eval(response.responseText);
														Ext.getCmp('CurrAyatId').setValue(hasil);
													}
												});
											},
											beforequery : function( queryEvent, eOpts ) {
												var nilai = Ext.getCmp('comboSurahId').getValue();
												if(nilai == null) {
													Ext.Msg.alert('Gagal', 'Pilih Surah Terlebih Dahulu');
													queryEvent.cancel = true;
												}
											}
										},
										listConfig: {
											tpl: [
												'<ul><tpl for=".">',
														'<li role="option" class="x-boundlist-item" data-qtip="{txt}" data-qtitle="{head}">{id}</li>',
												'</tpl></ul>'
											]
										}
									},
									{xtype: 'displayfield', value: ']'},
									{xtype: 'button', text: 'Buka Ayat',iconCls: 'bukutamuSend',handler: function() {
										var comboSurahId = Ext.getCmp('comboSurahId').getValue();
										var comboAyatId = Ext.getCmp('comboAyatId').getValue();
										
										if(comboSurahId == null) Ext.MessageBox.alert('Gagal','Pilih Surah Terlebih Dahulu');
										else {
											if(comboAyatId == null) Ext.MessageBox.alert('Gagal','Pilih Ayat Terlebih Dahulu');
											else {
												var CurrAyatId = Ext.getCmp('CurrAyatId').getValue();
												windowAyat.show();
												
												Ext.Ajax.request({
													waitMsg: 'Silakan Tunggu...',
													url: base_url+'quran/getAyatInfo',
													method: 'POST',
													params: {
														ayatId: CurrAyatId
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
														url: base_url+'quran/displayAyat/'+CurrAyatId,
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
									}}
								]
							}
						]
					}
				]
			}
        },
        /*
         * ================  tentang panel  =======================
         */
        tentang: {
            id: 'tentang-panel',
            xtype: 'tabpanel',
            items: [{
                title: 'Selamat Datang',
				loader: {
                    url: base_url+'quran/tab/tentang',
                    contentType: 'html',
                    loadMask: true
                },
				listeners: {
                    activate: function(tab) {
                        tab.loader.load();
                    }
                }
            },{
                title: 'Link',
				loader: {
                    url: base_url+'quran/tab/link',
                    contentType: 'html',
                    loadMask: true
                },
				listeners: {
                    activate: function(tab) {
                        tab.loader.load();
                    }
                }
            },{
                title: 'Donasi',
				loader: {
                    url: base_url+'quran/tab/donasi',
                    contentType: 'html',
                    loadMask: true
                },
				listeners: {
                    activate: function(tab) {
                        tab.loader.load();
                    }
                }
            }],
            title: 'Tentang Aplikasi',
            layout: 'fit',
			defaults :{
				autoScroll: true,
				bodyPadding: 25
			}
        },
        /*
		* ================  (Buku tamu)  =======================
		*/
        buku_tamu: {
            // listeners: {
                // activate : {
                    // fn: function() {
                        // bukuTamuStore.load();
                    // }
                // }
            // },
            layout: 'border',
            border: false,
            id: 'bukutamu-panel',
            region:'center',
            items: [{
                xtype: 'grid',
                id:'gridBukuTamu',
                region:'center',
                title: 'Data Buku Tamu',
                store: bukuTamuStore,
                loadMask: true,
				viewConfig:{
					loadingText: 'Memuat..'
				},
                listeners: {
                    selectionchange: function(sm, selectedRecord) {
                        if (selectedRecord.length) {
                            var detailPanel = Ext.getCmp('detailPanel');
                            bukuTamuTpl.overwrite(detailPanel.body, selectedRecord[0].data);
                        }
                    }
                },
                tbar: [
                '-',{
                    xtype: 'button', 
                    text: 'Isi Buku Tamu', 
                    iconCls: 'bukutamuNew',
                    handler: function() {
                        windowBukuTamu.show();
                    }
                },'-',
                ],
                columns:[{
                    text: "No.",
                    xtype: 'rownumberer',
                    width: 40
                },{
                    text: "Tanggal/Waktu",
                    flex: 1,
                    dataIndex: 'date',
                    renderer : Ext.util.Format.dateRenderer('d M Y H:i:s')
                },{
                    text: "Nama",
                    dataIndex: 'name',
                    flex: 1
                }
				// ,{
                    // text: "Email",
                    // dataIndex: 'email',
                    // flex: 1
                // }
				// ,{
                    // text: "Isi Komentar",
                    // dataIndex: 'text',
                    // flex: 1
                // }
				],
                bbar: Ext.create('Ext.PagingToolbar', {
                    pageSize: 20,
                    store: bukuTamuStore,
                    displayInfo: true,
                    afterPageText: 'dari {0}',
                    beforePageText: 'Halaman',
                    displayMsg: 'Data {0} - {1} dari {2}',
                    plugins: Ext.create('Ext.ux.ProgressBarPager', {})
                })
            },{
                id: 'detailPanel',
                region: 'east',
                title: 'Detail Buku Tamu',
                width: 350,
                layout: 'fit',
                bodyPadding: 7,
                autoScroll: true,
                split:true,
                collapsible: true,
                bodyStyle: "background: #ffffff;",
                html: 'Pilih Buku Tamu.'
            }]
        },
        /*
         * ================  (Panel Pengunjung)  =======================
         */
        pengunjungTab: {
            listeners: {
                activate : {
                    fn: function() {
                        pengunjungStore.loadPage(1);
                        statistikStore.load();
                    }
                }
            },
            xtype: 'tabpanel',
            title: 'Pengunjung',
            id: 'pengunjung-panel',
            layout: 'fit',
            activeTab: 1,
            style: 'background-color:#dfe8f6; ',
            defaults: {
                bodyStyle: 'padding:0px'
            },
            items:[{
                xtype: 'grid',
				id: 'gridPengunjung',
                title: 'Data Pengunjung Aplikasi',
                store: pengunjungStore,
                loadMask: true,
                viewConfig: {
					loadingText: 'Memuat..',
                    style: {
                        overflow: 'auto'
                    }
                },
                plugins: [{
                    ptype: 'rowexpander',
                    rowBodyTpl : [
                    '<table border="1" cellspacing="0" cellpadding="0" style="font-size:11" width="100%">',
                    '<tr><td valign="top"><b>IP :</b></td><td>{VisIP}</td></tr>',
                    '<tr><td valign="top"><b>Tgl/Jam :</b></td><td>{VisDate:date("d M Y H:i:s")}</td></tr>',
                    '<tr><td valign="top"><b>Reff :</b></td><td><a href="{VisRef}" target="_blank">{VisRef}</a></td></tr>',
                    '<tr><td valign="top"><b>Agent :</b></td><td>{VisAgent}</td></tr>',
                    '<tr><td valign="top"><b>Platform :</b></td><td>{VisPlatform}</td></tr>',
                    '<tr><td valign="top"><b>Agent Raw Data :</b></td><td>{VisAgentString}</td></tr>',
                    '</table>'
                    ]
                }],
				features: [{ftype: 'filters'}],
                columns: createColumnsPengunjung(20),
                bbar: Ext.create('Ext.PagingToolbar', {
                    pageSize: jumPaging,
                    store: pengunjungStore,
                    displayInfo: true,
                    afterPageText: 'dari {0}',
                    beforePageText: 'Halaman',
                    displayMsg: 'Data {0} - {1} dari {2}',
                    plugins: Ext.create('Ext.ux.ProgressBarPager', {})
                }),
                tbar: [
					{
						xtype:'datefield',
						fieldLabel:'Lihat Pertanggal',
						name: 'tglKunjungan',
						minValue: '02/18/2011',
						maxValue: new Date(),
						width: 250,
						format: 'd-M-Y',
						editable: false,
						id:'tglKunjungan',
						listeners: {
							select: function(){
								pengunjungStore.setExtraParam('tglKunjung', this.getValue());
								pengunjungStore.loadPage(1);
							}
						}
					},'-',{
						xtype: 'button', 
						text: 'Lihat Semua', 
						iconCls: 'reset',
						handler: function() {
							Ext.getCmp('tglKunjungan').setValue(null);
							pengunjungStore.setExtraParam('tglKunjung', '');
							pengunjungStore.loadPage(1);
							Ext.getCmp('gridPengunjung').filters.clearFilters();
						}
					}
                ]
            },
            Ext.create('Ext.panel.Panel', {
                title: 'Chart Pengunjung',
                layout: {
                    type: 'fit',
                    align: 'stretch'
                },
				loadMask: true,
				viewConfig:{
					loadingText: 'Memuat..'
				},
                tbar: [{
                    xtype: 'combo',
                    fieldLabel: 'Tipe Chart',
                    displayField: 'txt',
                    valueField: 'tipe',
                    hiddenName: 'tipeChart',
                    id: 'tipeChart',
                    editable: false,
                    name: 'tipeChart',
                    emptyText: 'Pilih Tipe Chart..',
                    width: 300,
                    labelWidth: 60,
                    store: tipeChart,
                    queryMode: 'local',
                    typeAhead: true,
                    value: 'harian',
                    listeners: {
                        select: function(){
                            Ext.getCmp('chartVar').setValue(0);
                            statistikStore.setExtraParam('tipe', this.getValue());
                            statistikStore.setExtraParam('limit', 12);
                            statistikStore.setExtraParam('chartVar', Ext.getCmp('chartVar').getValue());
                            statistikStore.load();
                            Ext.getCmp('nextButton').disable();
							
                            Ext.Ajax.request({
                                url: base_url+'quran/statistikLast',
                                params: {
                                    tipe: this.getValue(),
                                    limit: 12,
                                    chartVar: Ext.getCmp('chartVar').getValue()
                                },
                                success: function(response){
                                    var hasil = parseInt(eval(response.responseText));
                                    if(hasil <= 0) {
                                        Ext.getCmp('prevButton').disable();
                                    } else {
                                        Ext.getCmp('prevButton').enable();
                                    }
                                }
                            });
                        }
                    }
                },'-',{
                    text: 'Prev',
                    iconCls: 'prev',
                    id: 'prevButton',
                    handler: function() {
                        var nil1 = parseInt(Ext.getCmp('chartVar').getValue());
                        var nil2 = nil1 - 1;
                        Ext.getCmp('chartVar').setValue(nil2);
						
                        var tipe = (Ext.getCmp('tipeChart').getValue() == null) ? 'harian' : Ext.getCmp('tipeChart').getValue();
						
                        Ext.getCmp('nextButton').enable();
						
                        statistikStore.setExtraParam('tipe', tipe);
                        statistikStore.setExtraParam('limit', 12);
                        statistikStore.setExtraParam('chartVar', Ext.getCmp('chartVar').getValue());
                        statistikStore.load();
						
                        Ext.Ajax.request({
                            url: base_url+'quran/statistikLast',
                            params: {
                                tipe: tipe,
                                limit: 12,
                                chartVar: nil2
                            },
                            success: function(response){
                                var hasil = parseInt(eval(response.responseText));
                                if(hasil <= 0) {
                                    Ext.getCmp('prevButton').disable();
                                } else {
                                    Ext.getCmp('prevButton').enable();
                                }
                            }
                        });
                    }
                },'-',{
                    text: 'Now',
                    iconCls: 'current',
                    id: 'currentButton',
                    handler: function() {
                        Ext.getCmp('chartVar').setValue(0);
                        Ext.getCmp('nextButton').disable();
						
                        var tipe = (Ext.getCmp('tipeChart').getValue() == null) ? 'harian' : Ext.getCmp('tipeChart').getValue();
						
                        statistikStore.setExtraParam('tipe', tipe);
                        statistikStore.setExtraParam('limit', 12);
                        statistikStore.setExtraParam('chartVar', 0);
                        statistikStore.load();
                        Ext.Ajax.request({
                            url: base_url+'quran/statistikLast',
                            params: {
                                tipe: tipe,
                                limit: 12,
                                chartVar: 0
                            },
                            success: function(response){
                                var hasil = parseInt(eval(response.responseText));
                                if(hasil <= 0) {
                                    Ext.getCmp('prevButton').disable();
                                } else {
                                    Ext.getCmp('prevButton').enable();
                                }
                            }
                        });
                    }
                },'-',{
                    text: 'Next',
                    iconCls: 'next',
                    id: 'nextButton',
                    disabled: true,
                    handler: function() {
                        Ext.getCmp('prevButton').enable();
                        var nil1 = parseInt(Ext.getCmp('chartVar').getValue());
                        var nil2 = nil1 + 1;
                        Ext.getCmp('chartVar').setValue(nil2);
                        if(Ext.getCmp('chartVar').getValue() == 0) Ext.getCmp('nextButton').disable();
						
                        var tipe = (Ext.getCmp('tipeChart').getValue() == null) ? 'harian' : Ext.getCmp('tipeChart').getValue();
						
                        statistikStore.setExtraParam('tipe', tipe);						
                        statistikStore.setExtraParam('limit', 12);
                        statistikStore.setExtraParam('chartVar', Ext.getCmp('chartVar').getValue());
                        statistikStore.load();
                    }
                },'-',{
					text: 'Simpan Chart',
					handler: function() {
						Ext.MessageBox.confirm('Download Chart', 'Simpan chart ini dalam bentuk gambar?', function(btn){
							if(btn == 'yes'){
								Ext.getCmp('chartPengunjung').save({
									type: 'image/png'
								});
							}
						});
					}
				},{
                    xtype: 'hidden',
                    name: 'chartVar',
                    id: 'chartVar',
                    value: '0'
                },'-'],
                items: [{
                    xtype: 'chart',
					id: 'chartPengunjung',
                    animate: true,
                    shadow: true,
                    store: statistikStore,
					mask: 'true',
					listeners: {
						select: {
							fn: function(me, selection) {
								me.setZoom(selection);
								me.mask.hide();
							}
						}
					},
                    axes: [{
                        type: 'Numeric',
                        position: 'bottom',
                        fields: ['jumlah'],
                        label: {
                            renderer: Ext.util.Format.numberRenderer('0,0')
                        },
                        title: 'Jumlah Pengunjung',
                        grid: true,
                        minimum: 0
                    }, {
                        type: 'Category',
                        position: 'left',
                        fields: ['judul'],
                        title: 'Tanggal'
                    }],
                    theme: 'White',
                    background: {
                        gradient: {
                            id: 'backgroundGradient',
                            angle: 45,
                            stops: {
                                0: {
                                    color: '#ffffff'
                                },
                                100: {
                                    color: '#eaf1f8'
                                }
                            }
                        }
                    },
                    series: [{
                        type: 'bar',
                        axis: 'bottom',
                        highlight: true,
                        tips: {
                            trackMouse: true,
                            width: 300,
                            height: 28,
                            renderer: function(storeItem, item) {
                                this.setTitle(storeItem.get('judul') + ' : ' + Ext.util.Format.number(storeItem.get('jumlah'),'0,0') + ' Kunjungan');
                            }
                        },
                        label: {
                            display: 'insideEnd',
                            field: 'jumlah',
                            renderer: Ext.util.Format.numberRenderer('0,0'),
                            orientation: 'horizontal',
                            color: '#333',
                            'text-anchor': 'middle'
                        },
                        xField: 'judul',
                        yField: ['jumlah'],
                        //color renderer
                        renderer: function(sprite, record, attr, index, store) {
                            var fieldValue = Math.random() * 20 + 10;
                            var value = (record.get('jumlah') >> 0) % 5;
                            var color = ['rgb('+randRGB()+', '+randRGB()+', '+randRGB()+')', 
                            'rgb('+randRGB()+', '+randRGB()+', '+randRGB()+')', 
                            'rgb('+randRGB()+', '+randRGB()+', '+randRGB()+')', 
                            'rgb('+randRGB()+', '+randRGB()+', '+randRGB()+')',
                            'rgb('+randRGB()+', '+randRGB()+', '+randRGB()+')',
                            'rgb('+randRGB()+', '+randRGB()+', '+randRGB()+')',
                            'rgb('+randRGB()+', '+randRGB()+', '+randRGB()+')',
                            'rgb('+randRGB()+', '+randRGB()+', '+randRGB()+')',
                            'rgb('+randRGB()+', '+randRGB()+', '+randRGB()+')',
                            'rgb('+randRGB()+', '+randRGB()+', '+randRGB()+')',
                            'rgb('+randRGB()+', '+randRGB()+', '+randRGB()+')',
                            'rgb('+randRGB()+', '+randRGB()+', '+randRGB()+')'][value];
                            return Ext.apply(attr, {
                                fill: color
                            });
                        }
                    }]
                }]
            })]
        },
        /*
         * ================  (Panel Hosting)  =======================
         */
        hostingPanel: {
            title: 'Hosting Gratis',
            xtype: 'panel',
            id: 'hosting-panel',			
            defaults :{
                autoScroll: true,
                bodyPadding: 0
            },
            layout: 'fit',
            items: [{
				xtype: 'uxiframe',
				border: false,
				autoRender: true,
				loadMask: true,
                // src: base_url+'quran/viewHosting',
                src: 'http://mobilbekas.mobil123.com/',
			}
            ],
            tbar: ['-',{
                xtype: 'button',
                text: 'Buat Akun Hosting Baru',
                iconCls: 'link',
                handler: function() {
                    window.open("http://api.idhostinger.com/redir/157270");
                }
            },'-',{
                xtype: 'button',
                text: 'Informasi',
                handler: function() {
                    Ext.create('Ext.Window', {
                        title: 'Informasi Hosting',
                        width: 400,
                        height: 200,
                        plain: true,
                        modal: true,
                        headerPosition: 'bottom',
                        layout: 'fit',
                        defaults :{
                            autoScroll: true,
                            bodyPadding: 15
                        },
                        items: {
                            html : 'Website ini menggunakan jasa hosting ini, yaitu dengan alamat :<br><a href="http://api.idhostinger.com/redir/157270" target="_blank">www.idhostinger.com</a>'
                        }
                    }).show();
                }
            }
            ]
        },
        /*
         * ================  (Panel Download)  =======================
         */
        downloadPanel: {
            title: 'Download Aplikasi',
            xtype: 'panel',
            id: 'download-panel',
            bodyPadding: 20,
            autoScroll: true,
            layout: 'fit',
            listeners: {
                beforeshow: function(){
                    loadPanel = new Ext.Component({
                        loader: {
                            url: base_url+'quran/prakata',
                            renderer: 'html',
                            text: 'Memuat...',
                            autoLoad: true,
                            scripts: true
                        }
                    });							
                    this.removeAll();
                    this.add(loadPanel);
                }
            },
            tbar: [{
                xtype: 'combo',
                displayField: 'txt',
                valueField: 'url',
                hiddenName: 'downloadfile',
                editable: false,
                name: 'downloadfile',
                emptyText: 'Pilih File..',
                width: 300,
                store: downloadfile,
                queryMode: 'local',
                typeAhead: true,
                listeners: {
                    select: function(){
                        var nilai = this.getValue();
                        Ext.getCmp('urlField').setValue(nilai);
                        Ext.getCmp('downloadButton').enable();
                    }
                }
            },'-',{
                xtype: 'button',
                text: 'Download File',
                iconCls: 'download',
                id: 'downloadButton',
                disabled: true,
                handler: function() {
                    windowDownload.show();
                }
            }]
        },
        /*
         * ================  (Panel API)  =======================
         */
        apiPanel: {
            title: 'API (Application Programming Interface)',
            xtype: 'panel',
            id: 'api-panel',
            bodyPadding: 20,
            autoScroll: true,
            layout: 'fit',
            listeners: {
                beforeshow: function(){
                    loadPanel = new Ext.Component({
                        loader: {
                            url: base_url+'quran/api',
                            renderer: 'html',
                            text: 'Memuat...',
                            autoLoad: true,
                            scripts: true
                        }
                    });							
                    this.removeAll();
                    this.add(loadPanel);
                }
            }
        },
		/*
         * ================  (Referensi Panel)  =======================
         */
		reffPanel: {
            id: 'reff-panel',
            xtype: 'tabpanel',
			activeTab: 0,
            items: [{
                title: 'Database',
                loader: {
                    url: base_url+'quran/reff/db',
                    contentType: 'html',
                    autoLoad: true
                    //,params: 'foo=123&bar=abc'
                }
            },{
                title: 'Images',
                loader: {
                    url: base_url+'quran/reff/img',
                    contentType: 'html',
                    autoLoad: true
                }
            },{
                title: 'Audio',
                loader: {
                    url: base_url+'quran/reff/mp3',
                    contentType: 'html',
                    autoLoad: true
                }
            },{
                title: 'ExtJS',
                loader: {
                    url: base_url+'quran/reff/ext',
                    contentType: 'html',
                    autoLoad: true
                }
            },{
                title: 'CodeIgniter',
                loader: {
                    url: base_url+'quran/reff/ci',
                    contentType: 'html',
                    autoLoad: true
                }
            }],
            title: 'Daftar Referensi Dari Aplikasi Ini',
            layout: 'fit',
            bodyStyle: 'padding:0px'
        },
		/*
         * ================  (Artikel Panel)  =======================
         */
		artikelPanel: {
            id: 'artikel-panel',
            xtype: 'tabpanel',
			activeTab: 0,
            items: [{
                title: 'Database',
                loader: {
                    url: base_url+'quran/reff/db',
                    contentType: 'html',
                    autoLoad: true
                    //,params: 'foo=123&bar=abc'
                }
            },{
                title: 'Images',
                loader: {
                    url: base_url+'quran/reff/img',
                    contentType: 'html',
                    autoLoad: true
                }
            },{
                title: 'Audio',
                loader: {
                    url: base_url+'quran/reff/mp3',
                    contentType: 'html',
                    autoLoad: true
                }
            },{
                title: 'ExtJS',
                loader: {
                    url: base_url+'quran/reff/ext',
                    contentType: 'html',
                    autoLoad: true
                }
            },{
                title: 'CodeIgniter',
                loader: {
                    url: base_url+'quran/reff/ci',
                    contentType: 'html',
                    autoLoad: true
                }
            }],
            title: 'Daftar Referensi Dari Aplikasi Ini',
            layout: 'fit',
            bodyStyle: 'padding:0px'
        },
		/*
         * ================  topik panel  =======================
         */
        topik: {
            id: 'topik-panel',
			itemId: 'topik-panel',
			xtype: 'tabpanel',
			plugins: [{
                ptype: 'tabscrollermenu',
                maxText  : 25,
                pageSize : 5
            }],
			defaults: {
				autoScroll: true,
				bodyPadding: 0
			},
			resizeTabs: true,
			enableTabScroll: true,
			// tabPosition: 'bottom',
			title: 'Alquran Berdasarkan Topik',
			layout : 'fit',
			items: treeTopik,
			plugins: Ext.create('Ext.ux.TabCloseMenu', {
				extraItemsTail: [
					'-',
					{
						text: 'Closable',
						checked: true,
						hideOnClick: true,
						handler: function (item) {
							currentItem.tab.setClosable(item.checked);
						}
					},
					'-',
					{
						text: 'Enabled',
						checked: true,
						hideOnClick: true,
						handler: function(item) {
							currentItem.tab.setDisabled(!item.checked);
						}
					}
				],
				listeners: {
					aftermenu: function () {
						currentItem = null;
					},
					beforemenu: function (menu, item) {
						menu.child('[text="Closable"]').setChecked(item.closable);
						menu.child('[text="Enabled"]').setChecked(!item.tab.isDisabled());

						currentItem = item;
					}
				}
			})
			// listeners: {
                // render: function(){
					// Ext.Ajax.request({
						// url: base_url+'topik/get',
						// success: function(response){
							// Ext.getCmp('topik-panel').add(Ext.decode(response.responseText));
							// Ext.getCmp('topik-panel').setActiveTab(0);
						// },
						// failure: function(response){
							// Ext.MessageBox.alert('Gagal','Tidak dapat mengambil data topik');
						// }
					// });
				// }
			// }
        },
		/*
         * ================  GOOGLE APP  =======================
         */
        googleApp: {
            id: 'google-panel',
			xtype: 'tabpanel',
			title: 'Google Apps for indoquran.web.id',
            items: [{
                title: 'Gmail',
                html: 'gmail'
            },{
                title: 'Google Docs',
                html: 'docs'
            },{
                title: 'Google Talk',
                html: 'talk'
            },{
                title: 'Situs',
                html: 'situs'
            },{
                title: 'Kalender',
                html: 'kalender'
            },{
                title: 'Kontak',
                html: 'kontak'
            }],
            layout: 'fit',
			defaults :{
				autoScroll: true,
				bodyPadding: 25
			}
        }
    };
}
