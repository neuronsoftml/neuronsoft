
$(document).ready(function () {
    $(window).scroll(function(){
        var height = $(window).scrollTop();
        if (height !=0){
            $('.logo').css('font-size','1.2em');
            $('.navbar').removeClass('.p-3');

            $('.navbar').removeClass('.shadow');
            $('.navbar').addClass('.shadow-lg');
        }
        if (height == 0)
        {
            $('.logo').css('font-size','1.9em');
            $('.navbar').addClass('.p-3');
            $('.navbar').removeClass('.shadow-lg');
            $('.navbar').addClass('.shadow');
        }
    });
});




