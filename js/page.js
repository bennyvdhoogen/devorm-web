var cursorKeyNavStuck = true; 

function moveToSlickSlide(toSlide){
    lazyCollapse(250);
    $('.container').slick('slickGoTo', toSlide);
}

function moveThroughSplash(){
    $('.nav').css('opacity', 1);
    
//    lazyHideAndDestroy(800,'#slide-splash');
    unveilSplash(200,'#slide-splash','#slide-0',0,1); 
  //  $('.container').slick('slickGoTo', 1);
  //  $('.container').slick('slickRemove', 0);
    $('.container').slick("slickSetOption",'accessibility', true);
    $('.container').slick("slickSetOption",'draggable', true);
    $('.container').slick("slickGetOption",'draggable');
}

function lazyCollapse(time) {
    setTimeout(function () {
            $('#nav-collapse-btn').click();
    }, time);
}


function unveilSplash(time, elementA, elementB, slideNoA, slideNoB){
    cursorKeyNavStuck = false;
    $(elementB).css('opacity', 0);
    $(elementA).css('opacity', 0);
    $('.container').slick('slickRemove', slideNoA);
    $('.container').slick('slickGoTo', slideNoB);
    setTimeout(function () {
            $(elementA).css('opacity', 1);
            $(elementB).css('opacity', 1);
        //    $('.container').slick('slickGoTo', slideNoB);
    }, time);
}

function lazyHideAndDestroy(time, element) {
    $(element).css('opacity', 0);
    $('.container').slick('slickGoTo', 1);
    setTimeout(function () {
            $('.container').slick('slickRemove', 0);
    }, time);
}

$(document).keydown(function(e) {
    console.log(e);
    
    if(!cursorKeyNavStuck){
        if(e.which == 37) {
            $('.container').slick('slickPrev');
        }
    
        if(e.which == 39) {
            $('.container').slick('slickNext');
        }
    }
    
});