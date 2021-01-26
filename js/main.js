/*
Оброник зміна фона при скроле
 */
/*
$(document).ready(function () {
    $(window).scroll(function(){
        var height = $(window).scrollTop();
        if (height !=0){
            $('.scrolled').addClass('bg-gradient-1');
        }
        if (height == 0 && colBtnClick == 1)
        {
            $('.menu').css('display','none');
            $('.scrolled').removeClass('bg-gradient-1');
        }
        if (height == 0)
        {
            $('.scrolled').removeClass('bg-gradient-1');
        }
    });

Обробник дії клік по бургеру

    var colBtnClick = 0;

    $('.menu-btn').on('click', function(){
        var btnClick = colBtnClick + 1;

        if(btnClick == 1)
        {

            $('.menu').css('display','block');
            $('.scrolled').addClass('bg-gradient-1');
            colBtnClick = 1;
        }

        if(btnClick == 2)
        {

            $('.menu').css('display','none');
            $('.scrolled').removeClass('bg-gradient-1');
            colBtnClick = 0;
        }
    });
});
*/

