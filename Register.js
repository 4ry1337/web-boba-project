jQuery(document).ready(function($){
    $('body').on('click', '.password-control', function(){
     
        if ($('#password-input').attr('type') == 'password'){
      $(this).addClass('view');
      $('#password-input').attr('type', 'text');
     } else {
      $(this).removeClass('view');
      $('#password-input').attr('type', 'password');
     }
     return false;
    });
 
    $('body').on('click', '.password-control2', function(){
        if ($('#password-input2').attr('type') == 'password'){
         $(this).addClass('view');
         $('#password-input2').attr('type', 'text');
        } else {
         $(this).removeClass('view');
         $('#password-input2').attr('type', 'password');
        }
        return false;
       });
    
    $("#password-input2").on("keyup", function() {
            var value_input1 = $("#password-input").val();
            var value_input2 = $(this).val();
            
            if(value_input1 != value_input2) {
                $(".error").html("Passwords don't match!");
                $("#submit").attr("disabled", "disabled");
            } else {
                $("#submit").removeAttr("disabled");
                $(".error").html("");
            }
        });
    
    $('input[type=password]').keyup(function() {
        var pswd = $(this).val();
        if ( pswd.length < 8 ) {
            $('#length').removeClass('valid').addClass('invalid');
        } else {
            $('#length').removeClass('invalid').addClass('valid');
        }
        //validate letter
        if ( pswd.match(/[A-z]/) ) {
            $('#letter').removeClass('invalid').addClass('valid');
        } else {
            $('#letter').removeClass('valid').addClass('invalid');
        }

        //validate capital letter
        if ( pswd.match(/[A-Z]/) ) {
            $('#capital').removeClass('invalid').addClass('valid');
        } else {
            $('#capital').removeClass('valid').addClass('invalid');
        }

        //validate number
        if ( pswd.match(/\d/) ) {
            $('#number').removeClass('invalid').addClass('valid');
        } else {
            $('#number').removeClass('valid').addClass('invalid');
        }
    });
    $('input[type=password]').focus(function() {
        // focus code here
    });
    $('input[type=password]').blur(function() {
        // blur code here
    });
    
    $('input[type=password]').keyup(function() {
    }).focus(function() {
        $('#pswd_info').show();
    }).blur(function() {
        $('#pswd_info').hide();
    });

    
    });
