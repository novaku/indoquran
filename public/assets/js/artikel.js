$(document).ready(function () {
    $('#summernote').summernote({
        height: "500px"
    });
    $('#field-kategori').change(function () {
        var kategori = $(this).val();
        if (kategori == '') {
            $('#input-kategori-lain').show();
        } else {
            $('#input-kategori-lain').hide();
        }
    });
    $('#postForm').submit(function () {
        var error = 0;
        var form_array = ['field-kategori', 'field-sumber', 'field-penulis', 'field-judul']; //daftar pengecekan
        $.each(form_array, function (i, nilai) {
            var val2 = $('#' + nilai).val();
            if (val2 == '') {
                if ((nilai == 'field-kategori') || (nilai == 'field-kategori')) {
                    var field_kategori_lain = $('#field-kategori_lain').val();
                    if ((val2 == '') && (field_kategori_lain == '')) {
                        error++;
                    }
                } else {
                    error++;
                }
            }
        });
        if (error) {
            alert('Masih ada kolom pengisian yang masih kosong, harap periksa kembali!');
            return false;
        }
    });
    $('#button-simpan').click(function(){
        $('#myModal').modal('show');
    });
    $('#button-redirect-depan').click(function(){
        top.location=base_url+"artikel/index/depan";
    })
});
var postForm = function () {
    var content = $('textarea[name="content"]').html($('#summernote').code());
}