function onItemClick(a){Ext.MessageBox.alert("Menu Click","You clicked the "+a+" menu item.")}function str_replace(a,b,c){a=new String(a);for(var d=a.length,e=b.length,f="",g=0,h=0;d>h;h++)1==e?f+=a.charAt(h)==b?c:a.charAt(h):(g=a.indexOf(b,h),h>=g&&g>=0?(f+=c,h+=e-1):f+=a.charAt(h));return f}function addTooltip(a,b){return b.tdAttr="data-qtip='"+a+"'",a}function ubahCapcha(){Ext.Ajax.request({url:base_url+"quran/randCapcha",success:function(response){var hasil=eval(response.responseText);formBukuTamu.getForm().setValues({capcha_int:hasil[0],capcha_hide:hasil[1]})}})}function randRGB1(){return Math.floor(255*Math.random())}function randRGB(){return Math.floor(106*Math.random()+150)}function viewAyat(id){Ext.Ajax.request({waitMsg:"Silakan Tunggu...",url:base_url+"quran/getAyatInfo",method:"POST",params:{ayatId:id},success:function(response){var hasilText=eval(response.responseText);windowAyat.setTitle(hasilText[1]),Ext.getCmp("prevAyat").setText(hasilText[0]),Ext.getCmp("nextAyat").setText(hasilText[2])},failure:function(a){a.responseText,Ext.MessageBox.alert("Gagal","Tidak dapat mengambil informasi ayat")}}),dynamicPanel=Ext.create("Ext.Component",{loader:{url:base_url+"quran/displayAyat/"+id,params:{cariKata:""},renderer:"html",text:"Memuat...",autoLoad:!0,scripts:!0}}),Ext.getCmp("panelAyat").removeAll(),Ext.getCmp("panelAyat").add(dynamicPanel),windowAyat.show()}function randomAyat(){var randValue=Math.floor(6236*Math.random());dynamicPanel=new Ext.Component({loader:{url:base_url+"quran/displayAyat/"+randValue,renderer:"html",loadMask:!0,autoLoad:!0,scripts:!0}}),Ext.getCmp("panelAyat").removeAll(),Ext.getCmp("panelAyat").add(dynamicPanel),Ext.getCmp("CurrAyatId").setValue(randValue),Ext.Ajax.request({waitMsg:"Silakan Tunggu...",url:base_url+"quran/getAyatInfo",method:"POST",params:{ayatId:randValue},success:function(response){var hasilText=eval(response.responseText);windowAyat.setTitle(hasilText[1]),Ext.getCmp("prevAyat").setText(hasilText[0]),Ext.getCmp("nextAyat").setText(hasilText[2]),_gaq.push(["_trackEvent","Random Ayat",hasilText[0],hasilText[1]])},failure:function(a){a.responseText,Ext.MessageBox.alert("Gagal","Tidak dapat mengambil ayat selanjutnya")}}),windowAyat.show()}var jumPaging=20;Ext.override(Ext.data.Store,{setExtraParam:function(a,b){this.proxy.extraParams=this.proxy.extraParams||{},this.proxy.extraParams[a]=b,this.proxy.applyEncoding(this.proxy.extraParams)}}),clock=Ext.create("Ext.toolbar.TextItem",{text:Ext.Date.format(new Date,"Y-M-d H:i:s")}),Ext.Loader.setConfig({enabled:!0}),Ext.Loader.setPath("Ext.ux","http://cdn.sencha.io/ext-4.1.1-gpl/examples/ux"),Ext.require(["*","Ext.ux.layout.Center","Ext.ux.RowExpander","Ext.ux.data.PagingMemoryProxy","Ext.ux.ProgressBarPager","Ext.ux.PreviewPlugin","Ext.ux.statusbar.StatusBar","Ext.ux.TabScrollerMenu","Ext.ux.TabCloseMenu","Ext.ux.grid.FiltersFeature","Ext.ux.IFrame"]);var groupingFeature=Ext.create("Ext.grid.feature.Grouping",{groupHeaderTpl:"Surah: {name}",enableGroupingMenu:!1}),bukuTamuTplMarkup=['<b><center>Dari: <a href="mailto:{email}" target="_blank">{name}</a></center></b><hr noshade size=1>',"Tanggal:<br>{tgl}<hr noshade size=1>","Isi Komentar:<br/><br/>{text}"],bukuTamuTpl=Ext.create("Ext.Template",bukuTamuTplMarkup),windowAyat=Ext.create("Ext.Window",{title:"Isi Ayat",closable:!1,modal:!0,width:800,height:460,layout:"border",border:!1,items:{xtype:"panel",id:"panelAyat",region:"center",bodyPadding:20,border:!1,autoScroll:!0,setLoading:!0,layout:"fit",bodyStyle:"padding:5px"},dockedItems:[{xtype:"toolbar",dock:"bottom",layout:{type:"hbox",pack:"center"},items:[{xtype:"button",text:"Ayat Sebelumnya",id:"prevAyat",iconCls:"prev",handler:function(){var currAyatId=Ext.getCmp("CurrAyatId").getValue();prevAyatId=eval(currAyatId.valueOf())-1,0==prevAyatId?Ext.MessageBox.alert("Gagal","Ini adalah ayat pertama!"):(Ext.getCmp("CurrAyatId").setValue(prevAyatId),Ext.Ajax.request({waitMsg:"Silakan Tunggu...",url:base_url+"quran/getAyatInfo",method:"POST",params:{ayatId:prevAyatId},success:function(response){var hasilText=eval(response.responseText);windowAyat.setTitle(hasilText[1]),Ext.getCmp("prevAyat").setText(hasilText[0]),Ext.getCmp("nextAyat").setText(hasilText[2]),_gaq.push(["_trackEvent","Prev Button",hasilText[0],hasilText[1]])},failure:function(a){a.responseText,Ext.MessageBox.alert("Gagal","Tidak dapat mengambil ayat sebelumnya")}}),dynamicPanel=new Ext.Component({loadMask:!0,loader:{url:base_url+"quran/displayAyat/"+prevAyatId,renderer:"html",text:"Memuat...",autoLoad:!0,scripts:!0}}),Ext.getCmp("panelAyat").removeAll(),Ext.getCmp("panelAyat").add(dynamicPanel))}},"-",{xtype:"button",text:"Tutup",iconCls:"close",handler:function(){windowAyat.hide()}},"-",{xtype:"button",text:"Ayat Selanjutnya",iconCls:"next",id:"nextAyat",handler:function(){var currAyatId=Ext.getCmp("CurrAyatId").getValue();nextAyatId=eval(currAyatId.valueOf())+1,nextAyatId>6236?Ext.MessageBox.alert("Gagal","Ini adalah ayat terakhir!"):(Ext.getCmp("CurrAyatId").setValue(nextAyatId),Ext.Ajax.request({waitMsg:"Silakan Tunggu...",url:base_url+"quran/getAyatInfo",method:"POST",params:{ayatId:nextAyatId},success:function(response){var hasilText=eval(response.responseText);windowAyat.setTitle(hasilText[1]),Ext.getCmp("prevAyat").setText(hasilText[0]),Ext.getCmp("nextAyat").setText(hasilText[2]),_gaq.push(["_trackEvent","Next Button",hasilText[0],hasilText[1]])},failure:function(a){a.responseText,Ext.MessageBox.alert("Gagal","Tidak dapat mengambil ayat selanjutnya")}}),dynamicPanel=new Ext.Component({loadMask:!0,loader:{url:base_url+"quran/displayAyat/"+nextAyatId,renderer:"html",text:"Memuat...",autoLoad:!0,scripts:!0}}),Ext.getCmp("panelAyat").removeAll(),Ext.getCmp("panelAyat").add(dynamicPanel))}}]}]}),windowDownload=Ext.create("Ext.Window",{title:"Download File",closable:!1,constrainHeader:!0,modal:!0,width:400,height:140,layout:"fit",border:!1,items:{xtype:"form",url:base_url+"quran/download",buttonAlign:"center",id:"formDownload",border:!1,frame:!0,bodyStyle:"padding:5px",fieldDefaults:{msgTarget:"side",labelWidth:60},defaultType:"textfield",defaults:{anchor:"100%"},items:[{fieldLabel:"Email",name:"emailField",id:"emailField",vtype:"email",allowBlank:!1},{xtype:"hidden",name:"urlField",id:"urlField",allowBlank:!1},{xtype:"displayfield",value:'<center><i><font color="#969696">Isi email dengan benar, karena password aplikasi akan di kirimkan ke email tersebut</font></i></center>',hideLable:!0}],buttons:[{text:"Download File",formBind:!0,iconCls:"download",handler:function(){var a=Ext.getCmp("urlField").getValue(),b=Ext.getCmp("formDownload").getForm().getFieldValues(),c="Aplikasi ini berbentuk .exe dan hanya dapat dijalankan di Windows, untuk menjalankan aplikasinya diperlukan password dan untuk mengetahuinya harap balas email yang akan dikirimkan setelah mengisikan email yang benar dalam form ini kepada kontak@indoquran.web.id, download file ini?",d="Aplikasi ini berbentuk .chm dan hanya dapat dijalankan di Windows, untuk platform linux dan lainnya mungkin dibutuhkan plugins untuk menjalankan aplikasi ini, download file ini?",e="",f="";"http://www.indoquran.web.id/download/AlQuranDigital.chm"==a?(e=d,f="file CHM"):(e=c,f="file EXE"),Ext.MessageBox.confirm("Download",e,function(a){"yes"==a&&(""==b.urlField?Ext.MessageBox.alert("Gagal","Silakan pilih terlebih dahulu aplikasi yang akan di download."):""==b.emailField?Ext.MessageBox.alert("Gagal","Email masih kosong"):Ext.getCmp("formDownload").getForm().submit({success:function(a,b){_gaq.push(["_trackEvent","Download","Download File",f]),Ext.getCmp("emailField").setValue(null),windowDownload.hide(),Ext.MessageBox.alert("Berhasil",b.result.Msg)},failure:function(a,b){Ext.getCmp("emailField").setValue(null),windowDownload.hide(),Ext.MessageBox.alert("Gagal",b.result.Msg)}}))})}},{text:"Tutup",iconCls:"close",handler:function(){windowDownload.hide()}}]}}),formBukuTamu=Ext.create("Ext.form.Panel",{url:base_url+"quran/bukuTamu/insert",frame:!0,monitorValid:!0,bodyStyle:"padding:5px 5px 0",fieldDefaults:{msgTarget:"side",labelWidth:75},defaultType:"textfield",defaults:{anchor:"100%",allowBlank:!1},buttonAlign:"center",items:[{fieldLabel:"Nama",name:"name"},{fieldLabel:"Email",name:"email",vtype:"email"},{xtype:"htmleditor",fieldLabel:"Komentar",id:"komentarField",name:"text"},{xtype:"fieldcontainer",fieldLabel:"Berapa",msgTarget:"side",layout:"hbox",defaults:{hideLabel:!0},items:[{xtype:"displayfield",name:"capcha_int",id:"capcha_int",value:"",width:100},{xtype:"hidden",name:"capcha_hide",value:""},{xtype:"numberfield",name:"capcha",width:100,margin:"0 5 0 0",allowBlank:!1}]}],listeners:[{afterrender:{fn:ubahCapcha()},beforeexpand:{fn:function(){formBukuTamu.getForm().reset(),ubahCapcha()}}}],buttons:[{text:"Ubah Capcha",iconCls:"recapcha",handler:function(){ubahCapcha()}},{text:"Kirim",formBind:!0,iconCls:"bukutamuSend",handler:function(){Ext.MessageBox.confirm("Kirim","Kirim Buku Tamu Ini?",function(a){if("yes"==a){var b=formBukuTamu.getForm().getValues();if(b.capcha_hide==b.capcha){var c=Ext.getCmp("komentarField").getValue().length;8>=c?Ext.MessageBox.alert("Gagal","Isi komentar minimal 8 karakter"):formBukuTamu.getForm().submit({success:function(a,b){Ext.MessageBox.alert("Terima kasih",b.result.Msg),formBukuTamu.getForm().reset(),ubahCapcha(),windowBukuTamu.hide(),bukuTamuStore.load(),_gaq.push(["_trackEvent","Buku Tamu","Button","Isi bukutamu"])},failure:function(a,b){Ext.MessageBox.alert("Gagal",b.result.Msg)}})}else Ext.MessageBox.alert("Gagal","Salah Perhitungan Dari "+Ext.getCmp("capcha_int").getValue())}})}},{text:"Reset",iconCls:"reset",handler:function(){formBukuTamu.getForm().reset(),ubahCapcha()}}]}),windowBukuTamu=Ext.create("Ext.window.Window",{title:"Isi Buku Tamu",hideTitle:!0,closable:!1,modal:!0,width:650,autoHeight:!0,layout:"fit",buttonAlign:"center",border:!1,items:formBukuTamu,buttons:[{text:"Tutup",iconCls:"close",handler:function(){windowBukuTamu.hide()}}]});Ext.chart.theme.White=Ext.extend(Ext.chart.theme.Base,{constructor:function(){Ext.chart.theme.White.superclass.constructor.call(this,{axis:{stroke:"rgb(8,69,148)","stroke-width":1},axisLabel:{fill:"rgb(8,69,148)",font:"12px Arial","font-family":'"Arial',spacing:2,padding:5,renderer:function(a){return a}},axisTitle:{font:"bold 18px Arial"}})}}),Ext.define("Quran",{extend:"Ext.data.Model",fields:[{name:"ID",type:"int"},"nama","arti",{name:"SuraID",type:"int"},{name:"VerseID",type:"int"},"AyahText","img","mp3","qs","namaSurah","asbabunNuzul","baca"],idProperty:"ID"}),Ext.define("Pengunjung",{extend:"Ext.data.Model",fields:[{name:"VisID",type:"int"},"VisIP","VisRef","VisUrl",{name:"VisDate",type:"date",dateFormat:"Y-m-d H:i:s"},"VisAgent","VisPlatform","VisAgentString"],idProperty:"VisID"}),Ext.define("Statistik",{extend:"Ext.data.Model",fields:["judul",{name:"jumlah",type:"int"}]}),Ext.define("Surah",{extend:"Ext.data.Model",fields:[{name:"id",type:"int"},"nama_surah","arti","head_body","head"]}),Ext.define("Juz",{extend:"Ext.data.Model",fields:[{name:"id",type:"int"},"juz","desc"]}),Ext.define("BukuTamu",{extend:"Ext.data.Model",fields:["id",{name:"date",type:"date",dateFormat:"Y-m-d H:i:s"},"name","email","text","email_status","tgl"]}),Ext.define("ModelSurahAyat",{extend:"Ext.data.Model",fields:["id","head","txt"]}),Ext.define("Topik",{extend:"Ext.data.Model",fields:["id","parent_id","is_title","text","isi","adaTopik","jumTopik"]}),Ext.define("Post",{extend:"Ext.data.Model",proxy:{type:"jsonp",url:base_url+"quran/autoCompleteSearch",reader:{type:"json",root:"data",totalProperty:"total"},actionMethods:{create:"POST",read:"POST",update:"POST",destroy:"POST"}},fields:[{name:"ID",mapping:"ID"},{name:"SuraID",mapping:"SuraID"},{name:"VerseID",mapping:"VerseID"},{name:"AyahText",mapping:"AyahText"}]});var quranStore=Ext.create("Ext.data.Store",{model:"Quran",remoteSort:!0,loadMask:!0,pageSize:jumPaging,groupField:"nama",proxy:{type:"ajax",url:base_url+"quran/getAllAyat",extraParams:{limit:jumPaging},reader:{root:"data",totalProperty:"total"},simpleSortMode:!0,actionMethods:{create:"POST",read:"POST",update:"POST",destroy:"POST"}},autoLoad:!0}),pengunjungStore=Ext.create("Ext.data.Store",{model:"Pengunjung",remoteSort:!0,loadMask:!0,pageSize:jumPaging,proxy:{type:"ajax",url:base_url+"quran/getPengunjung",extraParams:{limit:jumPaging},reader:{root:"data",totalProperty:"total"},simpleSortMode:!0,actionMethods:{create:"POST",read:"POST",update:"POST",destroy:"POST"}}}),statistikStore=Ext.create("Ext.data.Store",{model:"Statistik",loadMask:!0,pageSize:12,proxy:{type:"ajax",url:base_url+"quran/statistik",extraParams:{limit:12},reader:{root:"rows",totalProperty:"total"},simpleSortMode:!0,actionMethods:{create:"POST",read:"POST",update:"POST",destroy:"POST"}}}),bukuTamuStore=Ext.create("Ext.data.Store",{model:"BukuTamu",loadMask:!0,remoteSort:!0,pageSize:20,proxy:{type:"ajax",url:base_url+"quran/bukuTamu/read",extraParams:{limit:20},reader:{root:"rows",totalProperty:"total"},simpleSortMode:!0,actionMethods:{create:"POST",read:"POST",update:"POST",destroy:"POST"}},autoLoad:!0}),surahStoreId=Ext.create("Ext.data.Store",{model:"ModelSurahAyat",loadMask:!0,proxy:{type:"ajax",url:base_url+"json/getListSurahId.json",reader:{root:"rows"}},autoLoad:!0}),ayatStoreId=Ext.create("Ext.data.Store",{model:"ModelSurahAyat",loadMask:!0,proxy:{type:"ajax",url:base_url+"quran/getListAyatId",reader:{root:"rows"},actionMethods:{create:"POST",read:"POST",update:"POST",destroy:"POST"}},autoLoad:!0}),surahStore=Ext.create("Ext.data.Store",{model:"Surah",loadMask:!0,proxy:{type:"ajax",url:base_url+"json/getListSurah.json",reader:{root:"rows"}},autoLoad:!0}),juzStore=Ext.create("Ext.data.Store",{model:"Juz",loadMask:!0,proxy:{type:"ajax",url:base_url+"json/juzdata.json",reader:{root:"rows"}},autoLoad:!0}),tipeChart=Ext.create("Ext.data.Store",{fields:["tipe","txt"],data:[{tipe:"harian",txt:"Harian"},{tipe:"bulanan",txt:"Bulanan"},{tipe:"tahunan",txt:"Tahunan"}]}),downloadfile=Ext.create("Ext.data.Store",{fields:["url","txt"],data:[{url:"http://www.4shared.com/file/6F3hFxSJ/application.html?",txt:"Aplikasi v.1 (274MB)"},{url:"http://www.indoquran.web.id/download/AlQuranDigital.chm",txt:"Al Quran Digital.chm (9,4MB)"}]}),topikStore=Ext.create("Ext.data.TreeStore",{model:"Topik",proxy:{type:"ajax",url:base_url+"topik/getTreeTopik",actionMethods:{create:"POST",read:"POST",update:"POST",destroy:"POST"}},folderSort:!0});ds=Ext.create("Ext.data.Store",{pageSize:10,model:"Post"});var treeTopik=Ext.create("Ext.tree.Panel",{title:"Daftar Topik",useArrows:!0,rootVisible:!1,store:topikStore,singleExpand:!0,border:!0,viewConfig:{stripeRows:!0,enableTextSelection:!0},columns:[{text:"Jumlah Topik",width:80,dataIndex:"jumTopik"},{menuDisabled:!0,sortable:!1,xtype:"actioncolumn",text:"Buka",width:40,items:[{icon:base_url+"assets/images/ico/accept.png",tooltip:"Buka Topik",handler:function(a,b,c,d,e,f){if("ada"==f.get("adaTopik")){var g=Ext.getCmp("topik-panel"),h=f.get("text"),i=f.get("id");_gaq.push(["_trackEvent","Buka Topik","Judul",h]),g.add({closable:!0,border:!1,iconCls:"tabs",title:h,loader:{url:base_url+"topik/getTopikContent/"+i,contentType:"html",loadMask:!0},bodyPadding:10,listeners:{render:function(a){a.loader.load()}}}).show()}else Ext.MessageBox.alert("Kosong",'Topik : "'+f.get("text")+'" kosong')}}]},{xtype:"treecolumn",text:"Topik",flex:1,sortable:!0,dataIndex:"text"},{text:"Daftar Ayat",flex:1,dataIndex:"isi"}]}),platformStore=Ext.create("Ext.data.Store",{fields:["id","text"],proxy:{type:"ajax",url:base_url+"quran/getListPlatform",reader:{type:"json"}}}),createColumnsPengunjung=function(a,b){var c=[{text:"No.",xtype:"rownumberer",width:40,filterable:!1},{id:"VisIP",text:"Alamat IP",width:120,dataIndex:"VisIP",filter:{type:"string"}},{text:"Refferer",dataIndex:"VisRef",flex:1,renderer:addTooltip,filter:{type:"string"}},{text:"Tanggal / Waktu",dataIndex:"VisDate",width:120,renderer:Ext.util.Format.dateRenderer("d M Y H:i:s"),filter:{type:"date"}},{text:"User Agent",dataIndex:"VisAgent",flex:1,renderer:addTooltip,filter:{type:"string"}},{text:"Platform",dataIndex:"VisPlatform",flex:1,renderer:addTooltip,filter:{type:"list",store:platformStore,phpMode:!0}}];return c.slice(b||0,a)};