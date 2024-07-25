$(document).ready(function () {
    function toast() {
        const toastLiveExample = document.getElementById('liveToast')
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastBootstrap.show();
    }
    $('.loading').hide();
    $("#form_site").submit(function (e) {
        e.preventDefault();
        $('.loading').show();
        $.ajax({
            type: "POST",
            url: "http://api.magiclamp.com.br/api/form-site",
            data: $(this).serialize(),
            success: function (msg) {               
                $('.loading').hide();
                toast();
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $('.loading').hide();
            }
           
        });
    });

});