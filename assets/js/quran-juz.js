function getAyatId(a, b) {
	$("#ayatModal .modal-body").html('<img src="' + base_url + 'assets/images/loading-min.gif" />'), $("#myModalLabel").html(b), $.get(base_url + "mobile/displayAyat/" + a, function (a) {
		$("#ayatModal .modal-body").html(a)
	}), $.post(base_url + "mobile/getAyatInfo", {
		ayatId: a
	}, function (b) {
		"" == b[0] ? $("#prevBtn").html('<a class="btn btn-info disabled">Ayat Pertama</a>') : $("#prevBtn").html('<a class="btn btn-info" onclick="getAyatId(' + (a - 1) + ",'" + b[0] + "')\">" + b[0] + "&nbsp;&laquo;</a>"), "" == b[1] ? $("#nextBtn").html('<a class="btn btn-info disabled">Ayat Terakhir</a>') : $("#nextBtn").html('<a class="btn btn-info" onclick="getAyatId(' + (a + 1) + ",'" + b[1] + "')\">&raquo;&nbsp;" + b[1] + "</a>")
	}, "json")
}

$("#collapse1").on("show", function () {
	var a = $("#collapse1 .accordion-inner");
	$.get(base_url + "json/juz1.json", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapse2").on("show", function () {
	var a = $("#collapse2 .accordion-inner");
	$.get(base_url + "json/juz2.json", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapse3").on("show", function () {
	var a = $("#collapse3 .accordion-inner");
	$.get(base_url + "json/juz3.json", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapse4").on("show", function () {
	var a = $("#collapse4 .accordion-inner");
	$.get(base_url + "json/juz4.json", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapse5").on("show", function () {
	var a = $("#collapse5 .accordion-inner");
	$.get(base_url + "json/juz5.json", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapse6").on("show", function () {
	var a = $("#collapse6 .accordion-inner");
	$.get(base_url + "json/juz6.json", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapse7").on("show", function () {
	var a = $("#collapse7 .accordion-inner");
	$.get(base_url + "json/juz7.json", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapse8").on("show", function () {
	var a = $("#collapse8 .accordion-inner");
	$.get(base_url + "json/juz8.json", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapse9").on("show", function () {
	var a = $("#collapse9 .accordion-inner");
	$.get(base_url + "json/juz9.json", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapse10").on("show", function () {
	var a = $("#collapse10 .accordion-inner");
	$.get(base_url + "json/juz10.json", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapse11").on("show", function () {
	var a = $("#collapse11 .accordion-inner");
	$.get(base_url + "json/juz11.json", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapse12").on("show", function () {
	var a = $("#collapse12 .accordion-inner");
	$.get(base_url + "json/juz12.json", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapse13").on("show", function () {
	var a = $("#collapse13 .accordion-inner");
	$.get(base_url + "json/juz13.json", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapse14").on("show", function () {
	var a = $("#collapse14 .accordion-inner");
	$.get(base_url + "json/juz14.json", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapse15").on("show", function () {
	var a = $("#collapse15 .accordion-inner");
	$.get(base_url + "json/juz15.json", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapse16").on("show", function () {
	var a = $("#collapse16 .accordion-inner");
	$.get(base_url + "json/juz16.json", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapse17").on("show", function () {
	var a = $("#collapse17 .accordion-inner");
	$.get(base_url + "json/juz17.json", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapse18").on("show", function () {
	var a = $("#collapse18 .accordion-inner");
	$.get(base_url + "json/juz18.json", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapse19").on("show", function () {
	var a = $("#collapse19 .accordion-inner");
	$.get(base_url + "json/juz19.json", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapse20").on("show", function () {
	var a = $("#collapse20 .accordion-inner");
	$.get(base_url + "json/juz20.json", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapse21").on("show", function () {
	var a = $("#collapse21 .accordion-inner");
	$.get(base_url + "json/juz21.json", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapse22").on("show", function () {
	var a = $("#collapse22 .accordion-inner");
	$.get(base_url + "json/juz22.json", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapse23").on("show", function () {
	var a = $("#collapse23 .accordion-inner");
	$.get(base_url + "json/juz23.json", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapse24").on("show", function () {
	var a = $("#collapse24 .accordion-inner");
	$.get(base_url + "json/juz24.json", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapse25").on("show", function () {
	var a = $("#collapse25 .accordion-inner");
	$.get(base_url + "json/juz25.json", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapse26").on("show", function () {
	var a = $("#collapse26 .accordion-inner");
	$.get(base_url + "json/juz26.json", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapse27").on("show", function () {
	var a = $("#collapse27 .accordion-inner");
	$.get(base_url + "json/juz27.json", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapse28").on("show", function () {
	var a = $("#collapse28 .accordion-inner");
	$.get(base_url + "json/juz28.json", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapse29").on("show", function () {
	var a = $("#collapse29 .accordion-inner");
	$.get(base_url + "json/juz29.json", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapse30").on("show", function () {
	var a = $("#collapse30 .accordion-inner");
	$.get(base_url + "json/juz30.json", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah1").on("show", function () {
	var a = $("#contentSurah1");
	$.get(base_url + "mobile/getJumAyat/1", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah2").on("show", function () {
	var a = $("#contentSurah2");
	$.get(base_url + "mobile/getJumAyat/2", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah3").on("show", function () {
	var a = $("#contentSurah3");
	$.get(base_url + "mobile/getJumAyat/3", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah4").on("show", function () {
	var a = $("#contentSurah4");
	$.get(base_url + "mobile/getJumAyat/4", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah5").on("show", function () {
	var a = $("#contentSurah5");
	$.get(base_url + "mobile/getJumAyat/5", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah6").on("show", function () {
	var a = $("#contentSurah6");
	$.get(base_url + "mobile/getJumAyat/6", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah7").on("show", function () {
	var a = $("#contentSurah7");
	$.get(base_url + "mobile/getJumAyat/7", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah8").on("show", function () {
	var a = $("#contentSurah8");
	$.get(base_url + "mobile/getJumAyat/8", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah9").on("show", function () {
	var a = $("#contentSurah9");
	$.get(base_url + "mobile/getJumAyat/9", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah10").on("show", function () {
	var a = $("#contentSurah10");
	$.get(base_url + "mobile/getJumAyat/10", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah11").on("show", function () {
	var a = $("#contentSurah11");
	$.get(base_url + "mobile/getJumAyat/11", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah12").on("show", function () {
	var a = $("#contentSurah12");
	$.get(base_url + "mobile/getJumAyat/12", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah13").on("show", function () {
	var a = $("#contentSurah13");
	$.get(base_url + "mobile/getJumAyat/13", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah14").on("show", function () {
	var a = $("#contentSurah14");
	$.get(base_url + "mobile/getJumAyat/14", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah15").on("show", function () {
	var a = $("#contentSurah15");
	$.get(base_url + "mobile/getJumAyat/15", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah16").on("show", function () {
	var a = $("#contentSurah16");
	$.get(base_url + "mobile/getJumAyat/16", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah17").on("show", function () {
	var a = $("#contentSurah17");
	$.get(base_url + "mobile/getJumAyat/17", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah18").on("show", function () {
	var a = $("#contentSurah18");
	$.get(base_url + "mobile/getJumAyat/18", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah19").on("show", function () {
	var a = $("#contentSurah19");
	$.get(base_url + "mobile/getJumAyat/19", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah20").on("show", function () {
	var a = $("#contentSurah20");
	$.get(base_url + "mobile/getJumAyat/20", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah21").on("show", function () {
	var a = $("#contentSurah21");
	$.get(base_url + "mobile/getJumAyat/21", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah22").on("show", function () {
	var a = $("#contentSurah22");
	$.get(base_url + "mobile/getJumAyat/22", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah23").on("show", function () {
	var a = $("#contentSurah23");
	$.get(base_url + "mobile/getJumAyat/23", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah24").on("show", function () {
	var a = $("#contentSurah24");
	$.get(base_url + "mobile/getJumAyat/24", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah25").on("show", function () {
	var a = $("#contentSurah25");
	$.get(base_url + "mobile/getJumAyat/25", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah26").on("show", function () {
	var a = $("#contentSurah26");
	$.get(base_url + "mobile/getJumAyat/26", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah27").on("show", function () {
	var a = $("#contentSurah27");
	$.get(base_url + "mobile/getJumAyat/27", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah28").on("show", function () {
	var a = $("#contentSurah28");
	$.get(base_url + "mobile/getJumAyat/28", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah29").on("show", function () {
	var a = $("#contentSurah29");
	$.get(base_url + "mobile/getJumAyat/29", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah30").on("show", function () {
	var a = $("#contentSurah30");
	$.get(base_url + "mobile/getJumAyat/30", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah31").on("show", function () {
	var a = $("#contentSurah31");
	$.get(base_url + "mobile/getJumAyat/31", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah32").on("show", function () {
	var a = $("#contentSurah32");
	$.get(base_url + "mobile/getJumAyat/32", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah33").on("show", function () {
	var a = $("#contentSurah33");
	$.get(base_url + "mobile/getJumAyat/33", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah34").on("show", function () {
	var a = $("#contentSurah34");
	$.get(base_url + "mobile/getJumAyat/34", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah35").on("show", function () {
	var a = $("#contentSurah35");
	$.get(base_url + "mobile/getJumAyat/35", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah36").on("show", function () {
	var a = $("#contentSurah36");
	$.get(base_url + "mobile/getJumAyat/36", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah37").on("show", function () {
	var a = $("#contentSurah37");
	$.get(base_url + "mobile/getJumAyat/37", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah38").on("show", function () {
	var a = $("#contentSurah38");
	$.get(base_url + "mobile/getJumAyat/38", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah39").on("show", function () {
	var a = $("#contentSurah39");
	$.get(base_url + "mobile/getJumAyat/39", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah40").on("show", function () {
	var a = $("#contentSurah40");
	$.get(base_url + "mobile/getJumAyat/40", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah41").on("show", function () {
	var a = $("#contentSurah41");
	$.get(base_url + "mobile/getJumAyat/41", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah42").on("show", function () {
	var a = $("#contentSurah42");
	$.get(base_url + "mobile/getJumAyat/42", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah43").on("show", function () {
	var a = $("#contentSurah43");
	$.get(base_url + "mobile/getJumAyat/43", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah44").on("show", function () {
	var a = $("#contentSurah44");
	$.get(base_url + "mobile/getJumAyat/44", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah45").on("show", function () {
	var a = $("#contentSurah45");
	$.get(base_url + "mobile/getJumAyat/45", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah46").on("show", function () {
	var a = $("#contentSurah46");
	$.get(base_url + "mobile/getJumAyat/46", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah47").on("show", function () {
	var a = $("#contentSurah47");
	$.get(base_url + "mobile/getJumAyat/47", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah48").on("show", function () {
	var a = $("#contentSurah48");
	$.get(base_url + "mobile/getJumAyat/48", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah49").on("show", function () {
	var a = $("#contentSurah49");
	$.get(base_url + "mobile/getJumAyat/49", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah50").on("show", function () {
	var a = $("#contentSurah50");
	$.get(base_url + "mobile/getJumAyat/50", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah51").on("show", function () {
	var a = $("#contentSurah51");
	$.get(base_url + "mobile/getJumAyat/51", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah52").on("show", function () {
	var a = $("#contentSurah52");
	$.get(base_url + "mobile/getJumAyat/52", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah53").on("show", function () {
	var a = $("#contentSurah53");
	$.get(base_url + "mobile/getJumAyat/53", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah54").on("show", function () {
	var a = $("#contentSurah54");
	$.get(base_url + "mobile/getJumAyat/54", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah55").on("show", function () {
	var a = $("#contentSurah55");
	$.get(base_url + "mobile/getJumAyat/55", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah56").on("show", function () {
	var a = $("#contentSurah56");
	$.get(base_url + "mobile/getJumAyat/56", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah57").on("show", function () {
	var a = $("#contentSurah57");
	$.get(base_url + "mobile/getJumAyat/57", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah58").on("show", function () {
	var a = $("#contentSurah58");
	$.get(base_url + "mobile/getJumAyat/58", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah59").on("show", function () {
	var a = $("#contentSurah59");
	$.get(base_url + "mobile/getJumAyat/59", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah60").on("show", function () {
	var a = $("#contentSurah60");
	$.get(base_url + "mobile/getJumAyat/60", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah61").on("show", function () {
	var a = $("#contentSurah61");
	$.get(base_url + "mobile/getJumAyat/61", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah62").on("show", function () {
	var a = $("#contentSurah62");
	$.get(base_url + "mobile/getJumAyat/62", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah63").on("show", function () {
	var a = $("#contentSurah63");
	$.get(base_url + "mobile/getJumAyat/63", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah64").on("show", function () {
	var a = $("#contentSurah64");
	$.get(base_url + "mobile/getJumAyat/64", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah65").on("show", function () {
	var a = $("#contentSurah65");
	$.get(base_url + "mobile/getJumAyat/65", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah66").on("show", function () {
	var a = $("#contentSurah66");
	$.get(base_url + "mobile/getJumAyat/66", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah67").on("show", function () {
	var a = $("#contentSurah67");
	$.get(base_url + "mobile/getJumAyat/67", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah68").on("show", function () {
	var a = $("#contentSurah68");
	$.get(base_url + "mobile/getJumAyat/68", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah69").on("show", function () {
	var a = $("#contentSurah69");
	$.get(base_url + "mobile/getJumAyat/69", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah70").on("show", function () {
	var a = $("#contentSurah70");
	$.get(base_url + "mobile/getJumAyat/70", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah71").on("show", function () {
	var a = $("#contentSurah71");
	$.get(base_url + "mobile/getJumAyat/71", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah72").on("show", function () {
	var a = $("#contentSurah72");
	$.get(base_url + "mobile/getJumAyat/72", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah73").on("show", function () {
	var a = $("#contentSurah73");
	$.get(base_url + "mobile/getJumAyat/73", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah74").on("show", function () {
	var a = $("#contentSurah74");
	$.get(base_url + "mobile/getJumAyat/74", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah75").on("show", function () {
	var a = $("#contentSurah75");
	$.get(base_url + "mobile/getJumAyat/75", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah76").on("show", function () {
	var a = $("#contentSurah76");
	$.get(base_url + "mobile/getJumAyat/76", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah77").on("show", function () {
	var a = $("#contentSurah77");
	$.get(base_url + "mobile/getJumAyat/77", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah78").on("show", function () {
	var a = $("#contentSurah78");
	$.get(base_url + "mobile/getJumAyat/78", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah79").on("show", function () {
	var a = $("#contentSurah79");
	$.get(base_url + "mobile/getJumAyat/79", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah80").on("show", function () {
	var a = $("#contentSurah80");
	$.get(base_url + "mobile/getJumAyat/80", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah81").on("show", function () {
	var a = $("#contentSurah81");
	$.get(base_url + "mobile/getJumAyat/81", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah82").on("show", function () {
	var a = $("#contentSurah82");
	$.get(base_url + "mobile/getJumAyat/82", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah83").on("show", function () {
	var a = $("#contentSurah83");
	$.get(base_url + "mobile/getJumAyat/83", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah84").on("show", function () {
	var a = $("#contentSurah84");
	$.get(base_url + "mobile/getJumAyat/84", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah85").on("show", function () {
	var a = $("#contentSurah85");
	$.get(base_url + "mobile/getJumAyat/85", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah86").on("show", function () {
	var a = $("#contentSurah86");
	$.get(base_url + "mobile/getJumAyat/86", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah87").on("show", function () {
	var a = $("#contentSurah87");
	$.get(base_url + "mobile/getJumAyat/87", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah88").on("show", function () {
	var a = $("#contentSurah88");
	$.get(base_url + "mobile/getJumAyat/88", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah89").on("show", function () {
	var a = $("#contentSurah89");
	$.get(base_url + "mobile/getJumAyat/89", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah90").on("show", function () {
	var a = $("#contentSurah90");
	$.get(base_url + "mobile/getJumAyat/90", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah91").on("show", function () {
	var a = $("#contentSurah91");
	$.get(base_url + "mobile/getJumAyat/91", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah92").on("show", function () {
	var a = $("#contentSurah92");
	$.get(base_url + "mobile/getJumAyat/92", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah93").on("show", function () {
	var a = $("#contentSurah93");
	$.get(base_url + "mobile/getJumAyat/93", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah94").on("show", function () {
	var a = $("#contentSurah94");
	$.get(base_url + "mobile/getJumAyat/94", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah95").on("show", function () {
	var a = $("#contentSurah95");
	$.get(base_url + "mobile/getJumAyat/95", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah96").on("show", function () {
	var a = $("#contentSurah96");
	$.get(base_url + "mobile/getJumAyat/96", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah97").on("show", function () {
	var a = $("#contentSurah97");
	$.get(base_url + "mobile/getJumAyat/97", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah98").on("show", function () {
	var a = $("#contentSurah98");
	$.get(base_url + "mobile/getJumAyat/98", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah99").on("show", function () {
	var a = $("#contentSurah99");
	$.get(base_url + "mobile/getJumAyat/99", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah100").on("show", function () {
	var a = $("#contentSurah100");
	$.get(base_url + "mobile/getJumAyat/100", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah101").on("show", function () {
	var a = $("#contentSurah101");
	$.get(base_url + "mobile/getJumAyat/101", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah102").on("show", function () {
	var a = $("#contentSurah102");
	$.get(base_url + "mobile/getJumAyat/102", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah103").on("show", function () {
	var a = $("#contentSurah103");
	$.get(base_url + "mobile/getJumAyat/103", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah104").on("show", function () {
	var a = $("#contentSurah104");
	$.get(base_url + "mobile/getJumAyat/104", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah105").on("show", function () {
	var a = $("#contentSurah105");
	$.get(base_url + "mobile/getJumAyat/105", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah106").on("show", function () {
	var a = $("#contentSurah106");
	$.get(base_url + "mobile/getJumAyat/106", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah107").on("show", function () {
	var a = $("#contentSurah107");
	$.get(base_url + "mobile/getJumAyat/107", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah108").on("show", function () {
	var a = $("#contentSurah108");
	$.get(base_url + "mobile/getJumAyat/108", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah109").on("show", function () {
	var a = $("#contentSurah109");
	$.get(base_url + "mobile/getJumAyat/109", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah110").on("show", function () {
	var a = $("#contentSurah110");
	$.get(base_url + "mobile/getJumAyat/110", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah111").on("show", function () {
	var a = $("#contentSurah111");
	$.get(base_url + "mobile/getJumAyat/111", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah112").on("show", function () {
	var a = $("#contentSurah112");
	$.get(base_url + "mobile/getJumAyat/112", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah113").on("show", function () {
	var a = $("#contentSurah113");
	$.get(base_url + "mobile/getJumAyat/113", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
}), $("#collapseSurah114").on("show", function () {
	var a = $("#contentSurah114");
	$.get(base_url + "mobile/getJumAyat/114", function (b) {
		var c = 1;
		a.html(null), $.each(b, function (b, d) {
			a.append('<a href="#ayatModal" role="button" class="btn btn-small" data-toggle="modal" onclick="getAyatId(' + d.ID + ",'" + d.surah + " : " + d.VerseID + "')\">Buka QS. " + d.surah + ":" + d.VerseID + "<i class='icon-ok-circle'></i></a>"), c++
		})
	}, "json")
});