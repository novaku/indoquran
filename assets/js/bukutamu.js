function HTMLDecode(a){return jQuery("<div></div>").html(a).text()}function getBukutamuId(a){$.get(base_url+"mobile/getBukuTamuId/"+a,function(a){var b=$.parseJSON(a),c="Tanggal : "+b[0].date+"<br/>Email : "+b[0].email+"<br/>Isi :<br/>"+HTMLDecode(b[0].text);$("#bukutamuModalLabel").text("Dari : "+b[0].name),$("#bukutamuModalBody").html(c)})}$(".pagination ul li a").click(function(a){a.preventDefault();var b=$(this).attr("href");$.get(b,function(a){$("#bukutamu-daftar").html(a)})});