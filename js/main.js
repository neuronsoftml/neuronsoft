
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


const  slider = document.querySelector('.turnabout');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown',(e)=>{
    isDown  = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    console.log(startX);
});
slider.addEventListener('mouseleave',()=>{
    isDown  = true;
});
slider.addEventListener('mouseup',()=>{
    isDown = false;
});
slider.addEventListener('mousemove',(e)=>{
    if(!isDown) return;
    e.preventDefault();
    const  x = e.pageX - slider.offsetLeft;
    const  walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;

});









