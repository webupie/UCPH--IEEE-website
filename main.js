$(document).ready(function(){
    $('#main2').hide()
    $('#main3').hide();
    $('#main3open').hide();
    $('#main4').hide();
    $('#arduino').hide();
    function seleccionador(actual){
        $('nav ul li a').removeClass('active');
        actual.removeClass('nav-link');
        actual.addClass('nav-link active');
    }
    $('nav ul li.nav-link.primero').addClass('nav-link active');
    $('nav ul li a').click(function(){
        var activeTab =$(this).attr('href');
        if (activeTab=="#main"){
            $('#main').show();
            $('#main2').hide();
            $('#main3').hide();
            $('#main3open').hide();
            $('#main4').hide();
            $('#arduino').hide();
            seleccionador($(this));
        }
        else if(activeTab=="#main2"){
            $('#main').hide();
            $('#main2').show();
            $('#main3').hide();
            $('#main3open').hide();
            $('#main4').hide();
            $('#arduino').hide();
            seleccionador($(this));
        }
        else if(activeTab=="#main3"){
            $('#main').hide();
            $('#main2').hide();
            $('#main3').show();
            $('#main3open').hide();
            $('#main4').hide();
            $('#arduino').hide();
            seleccionador($(this));
        }
        else {
            $('#main').hide();
            $('#main2').hide();
            $('#main3').hide();
            $('#main3open').hide();
            $('#main4').show();
            $('#arduino').hide();
            seleccionador($(this));
        }
        
    })
    $('.imag').click(function(){
        var obtenerimagen =$(this).attr('src');
        $('#image').attr("src" ,id=obtenerimagen );
        $('#main3').hide();
        $('#main3open').show();
    })
    $('#main3open').click(function(){
        $('#main3open').hide();
        $('#main3').show();
    })
    $('#ard').click(function(){
        $('#arduino').show();
        $('#main4').hide();
    })
    $('#arduino').click(function(){
        $('#arduino').hide();
        $('#main4').show();
    })
    
});
