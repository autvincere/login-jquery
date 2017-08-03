$(document).ready(function () {
    
    $('div.block-white , div.block-gray').hover(function () {
        $(this).find('img.avatar').addClass('hover-avatar');
        }, function() {
        $(this).find('img.avatar').removeClass('hover-avatar');
        });  
    
    $("a#login").on('click', function() {
        $("section.modal-content").show("slow")
        });
    
    $('#close').on('click',function () {
        $("section.modal-content").hide("fast");
    });
    
    $("form").submit(function (e) {
        e.preventDefault();
        var re = /\S+@\S+\.\S+/;
        var email = $("input[name=email]").val();
        var contrasena = $("input[name=contrasena]").val();
        //console.log(email, contrasena);

        if( email =="" && contrasena == ""){
            $("div#error_form").html("<h3>Porfavor llene los campos</h3>");
            return false;
        }else{
            $("div#error_form").remove();
            //            console.log("campos escritos")
        }
        if (email == "" || !re.test(email)) {

            $("div#error_email").html("<h3>error de email</h3>");
            return false;

        } else {
            $("div#error_email").remove();
            //            console.log("email correcto")
        };
        
        if (contrasena == "") {
            $("div#error_contrasena").html("<h3>error de contraseña</h3>");
            return false;
            
        } else {
            $("div#error_contrasena").remove();
            console.log("contraseña correcta")
        };

    });


});