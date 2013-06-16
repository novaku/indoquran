function getAllLayouts(){return{quranGrid:{id:"start-panel",xtype:"grid",title:"Al-Qur'anul Karim",store:quranStore,loadMask:!0,region:"center",viewConfig:{loadingText:"Memuat.."},features:[groupingFeature],plugins:[{ptype:"rowexpander",rowBodyTpl:['<hr noshade size=1><table width="100%">','<tr><td valign="top"><b>QS. [{nama} Ayat {VerseID}]<br><br>','<i>"{AyahText}"</i></b></td><td valign="top">','<div align="right">','<img src="'+quran_img+'{img}"><br>',"{baca}<br>",'<object type="application/x-shockwave-flash" data="'+base_url+'assets/swf/player.swf" id="audioplayer1" height="24" width="460">','<param name="movie" value="'+base_url+'assets/swf/player.swf">','<param name="FlashVars" value="playerID=1&bg=0xEFEFEF&leftbg=0xCCCCCC&lefticon=0x666666&rightbg=0xB6E1E1&rightbghover=0x9BA948&righticon=0x798732&righticonhover=0xFFFFFF& text=0x666666&slider=0x666666&track=0xFFFFFF&border=0x666666&loader=0xEDF4CA&soundFile='+quran_mp3+'{mp3}">','<param name="quality" value="high">','<param name="menu" value="true">','<param name="wmode" value="transparent">',"</object>","</div></td></tr>",'<tr><td colspan="2"><hr noshade size="1">Link ke ayat ini : <a href="'+base_url+'quran/viewAyat/{ID}" target="_blank">'+base_url+'quran/viewAyat/{ID}</a><hr noshade size="1"></td></tr>',"</table>"],listeners:{expandbody:function(a,b){alert(b.get("qs"))}}}],columns:[{text:"No.",xtype:"rownumberer",width:40},{xtype:"actioncolumn",width:60,sortable:!1,menuDisabled:!0,text:"Baca",items:[{icon:base_url+"assets/images/ico/book_open.png",getClass:function(a,b,c){this.items[0].tooltip="Buka "+c.get("qs")},handler:function(grid,rowIndex,colIndex){var rec=quranStore.getAt(rowIndex);_gaq.push(["_trackEvent","Buka Ayat",rec.get("nama"),rec.get("qs")]),this.tooltip="Buka "+rec.get("qs");var cariKataHidden=Ext.getCmp("cariKataHidden").getValue();Ext.getCmp("CurrAyatId").setValue(rec.get("ID")),Ext.Ajax.request({waitMsg:"Silakan Tunggu...",url:base_url+"quran/getAyatInfo",method:"POST",params:{ayatId:rec.get("ID")},success:function(response){var hasilText=eval(response.responseText);windowAyat.setTitle(hasilText[1]),Ext.getCmp("prevAyat").setText(hasilText[0]),Ext.getCmp("nextAyat").setText(hasilText[2])},failure:function(a){a.responseText,Ext.MessageBox.alert("Gagal","Tidak dapat mengambil informasi ayat")}}),dynamicPanel=Ext.create("Ext.Component",{loader:{url:base_url+"quran/displayAyat/"+rec.get("ID"),params:{cariKata:cariKataHidden},renderer:"html",text:"Memuat...",autoLoad:!0,scripts:!0}}),Ext.getCmp("panelAyat").removeAll(),Ext.getCmp("panelAyat").add(dynamicPanel),windowAyat.show()}}]},{id:"qs",text:"QS",width:80,sortable:!1,menuDisabled:!0,dataIndex:"qs"},{id:"AyahText",text:"Tarjamah",flex:1,sortable:!1,menuDisabled:!0,dataIndex:"AyahText",renderer:addTooltip},{text:"Surah",dataIndex:"nama",width:100,sortable:!1,menuDisabled:!0,align:"right"},{text:"Ayat",dataIndex:"VerseID",sortable:!1,menuDisabled:!0,width:50}],bbar:Ext.create("Ext.PagingToolbar",{pageSize:jumPaging,store:quranStore,displayInfo:!0,afterPageText:"dari {0}",beforePageText:"Halaman",displayMsg:"Menampilkan {0} - {1} dari {2}",plugins:Ext.create("Ext.ux.ProgressBarPager",{})}),tbar:{xtype:"container",layout:"anchor",defaults:{anchor:"0"},defaultType:"toolbar",items:[{items:[,"-",new Ext.form.Checkbox({id:"cocokanCheck",name:"cocokanCheck",fieldLabel:"Cocokan Seluruh Kata",labelWidth:120,value:!0}),"-",{xtype:"combo",labelWidth:60,width:600,store:ds,id:"cariKata",fieldLabel:"Cari Kata",displayField:"AyahText",valueField:"ID",minChars:1,name:"cariKata",typeAhead:!1,hideTrigger:!0,listeners:{specialkey:function(a,b){if(b.getKey()==b.ENTER){var c=this.getValue();c.length;var d=Ext.getCmp("cocokanCheck").getValue();Ext.getCmp("cariKataHidden").setValue(c),quranStore.setExtraParam("kata",c),quranStore.setExtraParam("sesuai",d),quranStore.loadPage(1)}else b.getKey()==b.ESC&&this.setValue()},select:function(combo,record,index){var nilai=record[0].data.ID;windowAyat.show();var cariKataHidden=Ext.getCmp("cariKataHidden").getValue();Ext.getCmp("CurrAyatId").setValue(nilai),Ext.Ajax.request({waitMsg:"Silakan Tunggu...",url:base_url+"quran/getAyatInfo",method:"POST",params:{ayatId:nilai},success:function(response){var hasilText=eval(response.responseText);windowAyat.setTitle(hasilText[1]),_gaq.push(["_trackEvent","Buka Hasil Cari","Window",hasilText[1]]),Ext.getCmp("prevAyat").setText(hasilText[0]),Ext.getCmp("nextAyat").setText(hasilText[2])},failure:function(a){a.responseText,Ext.MessageBox.alert("Gagal","Tidak dapat mengambil informasi ayat")}}),dynamicPanel=Ext.create("Ext.Component",{loader:{url:base_url+"quran/displayAyat/"+nilai,params:{cariKata:cariKataHidden},renderer:"html",text:"Memuat...",autoLoad:!0,scripts:!0}}),Ext.getCmp("panelAyat").removeAll(),Ext.getCmp("panelAyat").add(dynamicPanel)}},listConfig:{loadingText:"Mencari...",emptyText:"Kata Tidak Ditemukan.",getInnerTpl:function(){var a=Ext.getCmp("cariKata").getValue(),b=str_replace("{AyahText}",a,'<font color="red"><b>'+a+"</b></font>");return b+"<h3><code>Q.S. [{SuraID}:{VerseID}]</code></h3>"}},pageSize:10},"-",{xtype:"hidden",id:"cariKataHidden"},{xtype:"button",text:"Cari",iconCls:"bukutamuSend",handler:function(){var a=Ext.getCmp("cariKata").getValue(),b=a.length,c=Ext.getCmp("cocokanCheck").getValue();1>b?Ext.MessageBox.alert("Gagal","Kolom pencarian masih kosong"):(Ext.getCmp("cariKataHidden").setValue(a),quranStore.setExtraParam("kata",a),quranStore.setExtraParam("sesuai",c),quranStore.loadPage(1))}},"-",{xtype:"button",text:"Kosongkan Pencarian",iconCls:"clear",handler:function(){Ext.getCmp("cariKata").setValue(null),Ext.getCmp("surahID").setValue(null),Ext.getCmp("juzId").setValue(null),Ext.getCmp("cariKataHidden").setValue(null),Ext.getCmp("cocokanCheck").setValue(!1),quranStore.setExtraParam("kata",null),quranStore.setExtraParam("sesuai",null),quranStore.setExtraParam("SuraID",null),quranStore.loadPage(1)}},{xtype:"hidden",name:"CurrAyatId",id:"CurrAyatId",value:""}]},{items:[{xtype:"button",text:"Random Ayat",iconCls:"random",handler:function(){randomAyat()}},"-",{xtype:"combo",fieldLabel:"Pilih Surah",displayField:"nama_surah",valueField:"id",hiddenName:"surahID",id:"surahID",editable:!1,name:"surahID",emptyText:"Pilih Surah..",width:300,labelWidth:60,store:surahStore,queryMode:"local",typeAhead:!0,listeners:{select:function(){var a=this.getValue();"0"==a&&this.setValue(null),Ext.getCmp("juzId").setValue(null),quranStore.setExtraParam("SuraID",a),quranStore.setExtraParam("kata",Ext.getCmp("cariKata").getValue()),quranStore.setExtraParam("juzID",""),quranStore.loadPage(1)}},listConfig:{tpl:['<ul><tpl for=".">','<li role="option" class="x-boundlist-item" data-qtip="{head_body}" data-qtitle="{head}">{nama_surah}</li>',"</tpl></ul>"]}},"-",{xtype:"combo",fieldLabel:"Pilih Juz",displayField:"juz",valueField:"id",hiddenName:"juzId",id:"juzId",editable:!1,name:"juzId",emptyText:"Pilih Juz..",width:230,labelWidth:60,store:juzStore,queryMode:"local",typeAhead:!0,listeners:{select:function(){var a=this.getValue();"0"==a&&this.setValue(null),Ext.getCmp("surahID").setValue(null),quranStore.setExtraParam("juzID",a),quranStore.setExtraParam("SuraID",""),quranStore.setExtraParam("kata",Ext.getCmp("cariKata").getValue()),quranStore.loadPage(1)}},listConfig:{tpl:['<ul><tpl for=".">','<li role="option" class="x-boundlist-item" data-qtip="{desc}" data-qtitle="Juz-{id}">{juz}</li>',"</tpl></ul>"]}},"-",{xtype:"fieldcontainer",fieldLabel:"Buka Ayat",labelWidth:55,msgTarget:"side",layout:"hbox",defaults:{flex:1,hideLabel:!0},items:[{xtype:"displayfield",value:"Q.S.["},{xtype:"combo",displayField:"id",valueField:"id",id:"comboSurahId",width:60,editable:!1,emptyText:"Surah",store:surahStoreId,queryMode:"local",typeAhead:!0,listeners:{select:function(){var a=this.getValue();0==a&&this.setValue(null),Ext.getCmp("comboAyatId").setValue(null),ayatStoreId.setExtraParam("SuraID",a),ayatStoreId.load()}},listConfig:{tpl:['<ul><tpl for=".">','<li role="option" class="x-boundlist-item" data-qtip="{txt}" data-qtitle="{head}">{id}</li>',"</tpl></ul>"]}},{xtype:"displayfield",value:":"},{xtype:"combo",displayField:"id",valueField:"id",id:"comboAyatId",width:60,editable:!1,emptyText:"Ayat",store:ayatStoreId,queryMode:"local",typeAhead:!0,listeners:{select:function(){var comboAyatId=this.getValue(),comboSurahId=Ext.getCmp("comboSurahId").getValue();Ext.Ajax.request({waitMsg:"Silakan Tunggu...",url:base_url+"quran/getAyatId",method:"POST",params:{surah:comboSurahId,ayat:comboAyatId},success:function(response){var hasil=eval(response.responseText);Ext.getCmp("CurrAyatId").setValue(hasil)}})},beforequery:function(a){var b=Ext.getCmp("comboSurahId").getValue();null==b&&(Ext.Msg.alert("Gagal","Pilih Surah Terlebih Dahulu"),a.cancel=!0)}},listConfig:{tpl:['<ul><tpl for=".">','<li role="option" class="x-boundlist-item" data-qtip="{txt}" data-qtitle="{head}">{id}</li>',"</tpl></ul>"]}},{xtype:"displayfield",value:"]"},{xtype:"button",text:"Buka Ayat",iconCls:"bukutamuSend",handler:function(){var comboSurahId=Ext.getCmp("comboSurahId").getValue(),comboAyatId=Ext.getCmp("comboAyatId").getValue();if(null==comboSurahId)Ext.MessageBox.alert("Gagal","Pilih Surah Terlebih Dahulu");else if(null==comboAyatId)Ext.MessageBox.alert("Gagal","Pilih Ayat Terlebih Dahulu");else{var CurrAyatId=Ext.getCmp("CurrAyatId").getValue();windowAyat.show(),Ext.Ajax.request({waitMsg:"Silakan Tunggu...",url:base_url+"quran/getAyatInfo",method:"POST",params:{ayatId:CurrAyatId},success:function(response){var hasilText=eval(response.responseText);windowAyat.setTitle(hasilText[1]),_gaq.push(["_trackEvent","Buka Ayat Tertentu","Window",hasilText[1]]),Ext.getCmp("prevAyat").setText(hasilText[0]),Ext.getCmp("nextAyat").setText(hasilText[2])},failure:function(a){a.responseText,Ext.MessageBox.alert("Gagal","Tidak dapat mengambil informasi ayat")}}),dynamicPanel=Ext.create("Ext.Component",{loader:{url:base_url+"quran/displayAyat/"+CurrAyatId,renderer:"html",text:"Memuat...",autoLoad:!0,scripts:!0}}),Ext.getCmp("panelAyat").removeAll(),Ext.getCmp("panelAyat").add(dynamicPanel)}}}]}]}]}},tentang:{id:"tentang-panel",xtype:"tabpanel",items:[{title:"Selamat Datang",loader:{url:base_url+"quran/tab/tentang",contentType:"html",autoLoad:!0},listeners:{activate:function(a){_gaq.push(["_trackEvent","Tab Tentang","Tab","Selamat Datang"]),a.loader.load()}}},{title:"Link",loader:{url:base_url+"quran/tab/link",contentType:"html",autoLoad:!0},listeners:{activate:function(a){_gaq.push(["_trackEvent","Tab Tentang","Tab","Link"]),a.loader.load()}}},{title:"Donasi",loader:{url:base_url+"quran/tab/donasi",contentType:"html",autoLoad:!0},listeners:{activate:function(a){_gaq.push(["_trackEvent","Tab Tentang","Tab","Donasi"]),a.loader.load()}}}],title:"Tentang Aplikasi",layout:"fit",defaults:{autoScroll:!0,bodyPadding:25}},buku_tamu:{layout:"border",border:!1,id:"bukutamu-panel",region:"center",items:[{xtype:"grid",id:"gridBukuTamu",region:"center",title:"Data Buku Tamu",store:bukuTamuStore,loadMask:!0,viewConfig:{loadingText:"Memuat.."},listeners:{selectionchange:function(a,b){if(b.length){var c=Ext.getCmp("detailPanel");bukuTamuTpl.overwrite(c.body,b[0].data)}}},tbar:["-",{xtype:"button",text:"Isi Buku Tamu",iconCls:"bukutamuNew",handler:function(){windowBukuTamu.show()}},"-"],columns:[{text:"No.",xtype:"rownumberer",width:40},{text:"Tanggal/Waktu",flex:1,dataIndex:"date",renderer:Ext.util.Format.dateRenderer("d M Y H:i:s")},{text:"Nama",dataIndex:"name",flex:1}],bbar:Ext.create("Ext.PagingToolbar",{pageSize:20,store:bukuTamuStore,displayInfo:!0,afterPageText:"dari {0}",beforePageText:"Halaman",displayMsg:"Data {0} - {1} dari {2}",plugins:Ext.create("Ext.ux.ProgressBarPager",{})})},{id:"detailPanel",region:"east",title:"Detail Buku Tamu",width:350,layout:"fit",bodyPadding:7,autoScroll:!0,split:!0,collapsible:!0,bodyStyle:"background: #ffffff;",html:"Pilih Buku Tamu."}]},pengunjungTab:{listeners:{activate:{fn:function(){pengunjungStore.loadPage(1),statistikStore.load()}}},xtype:"tabpanel",title:"Pengunjung",id:"pengunjung-panel",layout:"fit",activeTab:1,style:"background-color:#dfe8f6; ",defaults:{bodyStyle:"padding:0px"},items:[{xtype:"grid",id:"gridPengunjung",title:"Data Pengunjung Aplikasi",store:pengunjungStore,loadMask:!0,viewConfig:{loadingText:"Memuat..",style:{overflow:"auto"}},listeners:{activate:function(){_gaq.push(["_trackEvent","Menu Pengunjung","Grid Pengunjung","View"])}},plugins:[{ptype:"rowexpander",rowBodyTpl:['<table border="1" cellspacing="0" cellpadding="0" style="font-size:11" width="100%">','<tr><td valign="top"><b>IP :</b></td><td>{VisIP}</td></tr>','<tr><td valign="top"><b>Tgl/Jam :</b></td><td>{VisDate:date("d M Y H:i:s")}</td></tr>','<tr><td valign="top"><b>Reff :</b></td><td><a href="{VisRef}" target="_blank">{VisRef}</a></td></tr>','<tr><td valign="top"><b>Agent :</b></td><td>{VisAgent}</td></tr>','<tr><td valign="top"><b>Platform :</b></td><td>{VisPlatform}</td></tr>','<tr><td valign="top"><b>Agent Raw Data :</b></td><td>{VisAgentString}</td></tr>',"</table>"]}],features:[{ftype:"filters"}],columns:createColumnsPengunjung(20),bbar:Ext.create("Ext.PagingToolbar",{pageSize:jumPaging,store:pengunjungStore,displayInfo:!0,afterPageText:"dari {0}",beforePageText:"Halaman",displayMsg:"Data {0} - {1} dari {2}",plugins:Ext.create("Ext.ux.ProgressBarPager",{})}),tbar:[{xtype:"datefield",fieldLabel:"Lihat Pertanggal",name:"tglKunjungan",minValue:"02/18/2011",maxValue:new Date,width:250,format:"d-M-Y",editable:!1,id:"tglKunjungan",listeners:{select:function(){pengunjungStore.setExtraParam("tglKunjung",this.getValue()),pengunjungStore.loadPage(1)}}},"-",{xtype:"button",text:"Lihat Semua",iconCls:"reset",handler:function(){Ext.getCmp("tglKunjungan").setValue(null),pengunjungStore.setExtraParam("tglKunjung",""),pengunjungStore.loadPage(1),Ext.getCmp("gridPengunjung").filters.clearFilters()}}]},Ext.create("Ext.panel.Panel",{title:"Chart Pengunjung",layout:{type:"fit",align:"stretch"},loadMask:!0,viewConfig:{loadingText:"Memuat.."},listeners:{activate:function(){_gaq.push(["_trackEvent","Menu Pengunjung","Chart Pengunjung","View"])}},tbar:[{xtype:"combo",fieldLabel:"Tipe Chart",displayField:"txt",valueField:"tipe",hiddenName:"tipeChart",id:"tipeChart",editable:!1,name:"tipeChart",emptyText:"Pilih Tipe Chart..",width:300,labelWidth:60,store:tipeChart,queryMode:"local",typeAhead:!0,value:"harian",listeners:{select:function(){Ext.getCmp("chartVar").setValue(0),statistikStore.setExtraParam("tipe",this.getValue()),statistikStore.setExtraParam("limit",12),statistikStore.setExtraParam("chartVar",Ext.getCmp("chartVar").getValue()),statistikStore.load(),Ext.getCmp("nextButton").disable(),Ext.Ajax.request({url:base_url+"quran/statistikLast",params:{tipe:this.getValue(),limit:12,chartVar:Ext.getCmp("chartVar").getValue()},success:function(response){var hasil=parseInt(eval(response.responseText));0>=hasil?Ext.getCmp("prevButton").disable():Ext.getCmp("prevButton").enable()}})}}},"-",{text:"Prev",iconCls:"prev",id:"prevButton",handler:function(){var nil1=parseInt(Ext.getCmp("chartVar").getValue()),nil2=nil1-1;Ext.getCmp("chartVar").setValue(nil2);var tipe=null==Ext.getCmp("tipeChart").getValue()?"harian":Ext.getCmp("tipeChart").getValue();Ext.getCmp("nextButton").enable(),statistikStore.setExtraParam("tipe",tipe),statistikStore.setExtraParam("limit",12),statistikStore.setExtraParam("chartVar",Ext.getCmp("chartVar").getValue()),statistikStore.load(),Ext.Ajax.request({url:base_url+"quran/statistikLast",params:{tipe:tipe,limit:12,chartVar:nil2},success:function(response){var hasil=parseInt(eval(response.responseText));0>=hasil?Ext.getCmp("prevButton").disable():Ext.getCmp("prevButton").enable()}})}},"-",{text:"Now",iconCls:"current",id:"currentButton",handler:function(){Ext.getCmp("chartVar").setValue(0),Ext.getCmp("nextButton").disable();var tipe=null==Ext.getCmp("tipeChart").getValue()?"harian":Ext.getCmp("tipeChart").getValue();statistikStore.setExtraParam("tipe",tipe),statistikStore.setExtraParam("limit",12),statistikStore.setExtraParam("chartVar",0),statistikStore.load(),Ext.Ajax.request({url:base_url+"quran/statistikLast",params:{tipe:tipe,limit:12,chartVar:0},success:function(response){var hasil=parseInt(eval(response.responseText));0>=hasil?Ext.getCmp("prevButton").disable():Ext.getCmp("prevButton").enable()}})}},"-",{text:"Next",iconCls:"next",id:"nextButton",disabled:!0,handler:function(){Ext.getCmp("prevButton").enable();var a=parseInt(Ext.getCmp("chartVar").getValue()),b=a+1;Ext.getCmp("chartVar").setValue(b),0==Ext.getCmp("chartVar").getValue()&&Ext.getCmp("nextButton").disable();var c=null==Ext.getCmp("tipeChart").getValue()?"harian":Ext.getCmp("tipeChart").getValue();statistikStore.setExtraParam("tipe",c),statistikStore.setExtraParam("limit",12),statistikStore.setExtraParam("chartVar",Ext.getCmp("chartVar").getValue()),statistikStore.load()}},"-",{text:"Simpan Chart",handler:function(){Ext.MessageBox.confirm("Download Chart","Simpan chart ini dalam bentuk gambar?",function(a){"yes"==a&&Ext.getCmp("chartPengunjung").save({type:"image/png"})})}},{xtype:"hidden",name:"chartVar",id:"chartVar",value:"0"},"-"],items:[{xtype:"chart",id:"chartPengunjung",animate:!0,shadow:!0,store:statistikStore,mask:"true",listeners:{select:{fn:function(a,b){a.setZoom(b),a.mask.hide()}}},axes:[{type:"Numeric",position:"bottom",fields:["jumlah"],label:{renderer:Ext.util.Format.numberRenderer("0,0")},title:"Jumlah Pengunjung",grid:!0,minimum:0},{type:"Category",position:"left",fields:["judul"],title:"Tanggal"}],theme:"White",background:{gradient:{id:"backgroundGradient",angle:45,stops:{0:{color:"#ffffff"},100:{color:"#eaf1f8"}}}},series:[{type:"bar",axis:"bottom",highlight:!0,tips:{trackMouse:!0,width:300,height:28,renderer:function(a){this.setTitle(a.get("judul")+" : "+Ext.util.Format.number(a.get("jumlah"),"0,0")+" Kunjungan")}},label:{display:"insideEnd",field:"jumlah",renderer:Ext.util.Format.numberRenderer("0,0"),orientation:"horizontal",color:"#333","text-anchor":"middle"},xField:"judul",yField:["jumlah"],renderer:function(a,b,c){20*Math.random()+10;var d=(b.get("jumlah")>>0)%5,e=["rgb("+randRGB()+", "+randRGB()+", "+randRGB()+")","rgb("+randRGB()+", "+randRGB()+", "+randRGB()+")","rgb("+randRGB()+", "+randRGB()+", "+randRGB()+")","rgb("+randRGB()+", "+randRGB()+", "+randRGB()+")","rgb("+randRGB()+", "+randRGB()+", "+randRGB()+")","rgb("+randRGB()+", "+randRGB()+", "+randRGB()+")","rgb("+randRGB()+", "+randRGB()+", "+randRGB()+")","rgb("+randRGB()+", "+randRGB()+", "+randRGB()+")","rgb("+randRGB()+", "+randRGB()+", "+randRGB()+")","rgb("+randRGB()+", "+randRGB()+", "+randRGB()+")","rgb("+randRGB()+", "+randRGB()+", "+randRGB()+")","rgb("+randRGB()+", "+randRGB()+", "+randRGB()+")"][d];return Ext.apply(c,{fill:e})}}]}]})]},downloadPanel:{title:"Download Aplikasi",xtype:"panel",id:"download-panel",bodyPadding:20,autoScroll:!0,layout:"fit",listeners:{beforeshow:function(){loadPanel=new Ext.Component({loader:{url:base_url+"quran/prakata",renderer:"html",text:"Memuat...",autoLoad:!0,scripts:!0}}),this.removeAll(),this.add(loadPanel)}},tbar:[{xtype:"combo",displayField:"txt",valueField:"url",hiddenName:"downloadfile",editable:!1,name:"downloadfile",emptyText:"Pilih File..",width:300,store:downloadfile,queryMode:"local",typeAhead:!0,listeners:{select:function(){var a=this.getValue();Ext.getCmp("urlField").setValue(a),Ext.getCmp("downloadButton").enable()}}},"-",{xtype:"button",text:"Download File",iconCls:"download",id:"downloadButton",disabled:!0,handler:function(){windowDownload.show()}}]},apiPanel:{title:"API (Application Programming Interface)",xtype:"panel",id:"api-panel",bodyPadding:20,autoScroll:!0,layout:"fit",listeners:{beforeshow:function(){loadPanel=new Ext.Component({loader:{url:base_url+"quran/api",renderer:"html",text:"Memuat...",autoLoad:!0,scripts:!0}}),this.removeAll(),this.add(loadPanel)}}},reffPanel:{id:"reff-panel",xtype:"tabpanel",activeTab:0,defaults:{styleHtmlContent:!0},items:[{title:"Database",styleHtmlCls:"panel-database",loader:{url:base_url+"quran/reff/db",contentType:"html",autoLoad:!0}},{title:"Images",styleHtmlCls:"panel-images",loader:{url:base_url+"quran/reff/img",contentType:"html",autoLoad:!0}},{title:"Audio",styleHtmlCls:"panel-audio",loader:{url:base_url+"quran/reff/mp3",contentType:"html",autoLoad:!0}},{title:"ExtJS",styleHtmlCls:"panel-extjs",loader:{url:base_url+"quran/reff/ext",contentType:"html",autoLoad:!0}},{title:"CodeIgniter",styleHtmlCls:"panel-codeigniter",loader:{url:base_url+"quran/reff/ci",contentType:"html",autoLoad:!0}}],title:"Daftar Referensi Dari Aplikasi Ini",layout:"fit",bodyStyle:"padding:0px"},artikelPanel:{id:"artikel-panel",xtype:"tabpanel",activeTab:0,items:[{title:"Database",loader:{url:base_url+"quran/reff/db",contentType:"html",autoLoad:!0}},{title:"Images",loader:{url:base_url+"quran/reff/img",contentType:"html",autoLoad:!0}},{title:"Audio",loader:{url:base_url+"quran/reff/mp3",contentType:"html",autoLoad:!0}},{title:"ExtJS",loader:{url:base_url+"quran/reff/ext",contentType:"html",autoLoad:!0}},{title:"CodeIgniter",loader:{url:base_url+"quran/reff/ci",contentType:"html",autoLoad:!0}}],title:"Daftar Referensi Dari Aplikasi Ini",layout:"fit",bodyStyle:"padding:0px"},topik:{id:"topik-panel",itemId:"topik-panel",xtype:"tabpanel",plugins:[{ptype:"tabscrollermenu",maxText:25,pageSize:5}],defaults:{autoScroll:!0,bodyPadding:0},resizeTabs:!0,enableTabScroll:!0,title:"Alquran Berdasarkan Topik",layout:"fit",items:treeTopik,plugins:Ext.create("Ext.ux.TabCloseMenu",{extraItemsTail:["-",{text:"Closable",checked:!0,hideOnClick:!0,handler:function(a){currentItem.tab.setClosable(a.checked)}},"-",{text:"Enabled",checked:!0,hideOnClick:!0,handler:function(a){currentItem.tab.setDisabled(!a.checked)}}],listeners:{aftermenu:function(){currentItem=null},beforemenu:function(a,b){a.child('[text="Closable"]').setChecked(b.closable),a.child('[text="Enabled"]').setChecked(!b.tab.isDisabled()),currentItem=b}}})},mobileTab:{id:"mobile-panel",xtype:"panel",title:"Indoquran.Web.Id Versi Mobile Site ("+base_url+"mobile/)",items:[{xtype:"uxiframe",src:base_url+"mobile",loadMask:"Memuat..."}]}}}