function printSubtopik(a,b){var c="#"+b+" .sub-topik-content";$(c).html('<img class="img-responsive" src="'+base_url+'assets/images/loading-min.gif" />'),$.get(base_url+"mobile/printSubTopik/"+a,function(a){$(c).html(a)})}function getAyatId(a,b){$("#ayatModal .modal-body").html('<img class="img-responsive" src="'+base_url+'assets/images/loading-min.gif" />'),$("#myModalLabel").html(b),$.get(base_url+"mobile/displayAyat/"+a,function(a){$("#ayatModal .modal-body").html(a)}),$.post(base_url+"mobile/getAyatInfo",{ayatId:a},function(b){""==b[0]?$("#prevBtn").html('<a class="btn btn-default disabled">Ayat Pertama</a>'):$("#prevBtn").html('<a class="btn btn-default" onclick="getAyatId('+(a-1)+",'"+b[0]+"')\">"+b[0]+'&nbsp;<span class="glyphicon glyphicon-arrow-left"></a></span>'),""==b[1]?$("#nextBtn").html('<a class="btn btn-default disabled">Ayat Terakhir</a>'):$("#nextBtn").html('<a class="btn btn-default" onclick="getAyatId('+(a+1)+",'"+b[1]+'\')"><span class="glyphicon glyphicon-arrow-right"></span>&nbsp;'+b[1]+"</a>")},"json")}$("#loadingDiv").hide(),$(document).ajaxStart(function(){$("#loadingDiv").show()}),$(document).ajaxStop(function(){$("#loadingDiv").hide()}),$("#formCariTarjamah").submit(function(a){a.preventDefault();var b=$(this);$.ajax({type:"POST",url:base_url+"mobile/getHasilCari",data:b.serialize(),success:function(a){var b=$.parseJSON(a);if(b.success){var c='<h3 class="text-center text-success">Ditemukan '+b.data.jum+' ayat dalam pencarian kata "'+b.data.cariKata+'"</h3>';$("#accordionCariQuran").html(b.msg),$.each(b.data.hasil,function(a,b){var d="";$.each(b.ayatList,function(a,c){d+='<button class="btn" data-toggle="modal" data-target="#ayatModal" onclick="getAyatId('+c.ID+",'"+b.surahName+" : "+c.VerseID+"')\">Buka QS. "+b.surahName+":"+c.VerseID+"</button>&nbsp;"}),c+='<div class="panel panel-default"><div class="panel-heading"><h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordionCariQuran" href="#collapseCari'+a+'">'+"["+b.surahId+"] "+b.surahLabel+"</a>"+"</h4></div>"+'<div id="collapseCari'+a+'" class="panel-collapse collapse">'+'<div class="panel-body">'+'<p class="text-info">'+d+"</p>"+"</div>"+"</div>"+"</div>"}),$("#accordionCariQuran").html(c)}else alert(b.msg)}})}),$(".collapse-juz").on("show.bs.collapse",function(){var a=$(this).data("juz-id"),b=$("#collapse"+a+" .panel-body");$.get(base_url+"json/juz"+a+".json",function(c){var d=1;b.html(null),$.each(c,function(c,e){b.append('<button class="btn" data-toggle="modal" data-target="#ayatModal" onclick="getAyatId('+e.ID+",'"+e.surah+" : "+e.VerseID+"'); ; _gaq.push(['_trackEvent', 'Mobile: Quran', 'Klik Juz "+a+"', '"+e.surah+":"+e.VerseID+"']);\">Buka QS. "+e.surah+":"+e.VerseID+"<i class='icon-ok-circle'></i></button>&nbsp;"),d++})},"json")}),$(".collapse-surah").on("show.bs.collapse",function(){var a=$(this).data("surah-id"),b=$("#contentSurah"+a);$.get(base_url+"mobile/getJumAyat/"+a,function(a){var c=1;b.html(null),$.each(a,function(a,d){b.append('<button class="btn" data-toggle="modal" data-target="#ayatModal" onclick="getAyatId('+d.ID+",'"+d.surah+" : "+d.VerseID+"'); _gaq.push(['_trackEvent', 'Mobile: Quran', 'Klik Surah', '"+d.surah+":"+d.VerseID+"']);\">Buka QS. "+d.surah+":"+d.VerseID+"<i class='icon-ok-circle'></i></button>&nbsp;"),c++})},"json")}),$("#form-isi-bukutamu").submit(function(a){a.preventDefault();var b=$(this);$.ajax({type:"POST",url:base_url+"mobile/loadResult",data:b.serialize(),success:function(a){var c=$.parseJSON(a);c.success?(b.trigger("reset"),alert(c.msg),document.location.reload(!0)):alert(c.msg)}})});