//------------------
// index script
//------------------

// set clicked menu underline
 $(function(){  
    // get the url
 	var href = window.location.href;
 	// find the clicked menu
 	var clicked_menu = $('#header-menu-home');

 	if( href.indexOf("archives") > 0){

 		clicked_menu = $('#header-menu-archives');

 	}else if( href.indexOf("categories") > 0 ){

 		clicked_menu = $('#header-menu-categories');

 	}else if( href.indexOf("tags") > 0 ){

 		clicked_menu  = $('#header-menu-tags');

 	}else if( href.indexOf("about") > 0 ){

 		clicked_menu  =  $('#header-menu-about');

 	}

    // set clicked menu underline and color 	 
    clicked_menu.addClass('header-menu-active');
});  


// windows scroll function
 $(function() {            

    $(window).scroll(function() {

        if( isPC() ){
            slideHeader();  
        }
            initBackToTop();

    });    
 });

var last_scroll = 0;

function slideHeader(){

    if( last_scroll !=0){             
        if(  $(window).scrollTop() == 0 ){
          setHeader();

        }else if($(window).scrollTop() - last_scroll > 0 ) {
        //下滑
        hideHeader();        
        }else{
        //上划
        showHeader(); 
       }
    }   
    last_scroll = $(window).scrollTop();
}


function initBackToTop(){
    //back to top  
    if ($(window).scrollTop() > 800 ){
            $('.back-to-top')
            .addClass('slideRIn')
            .show();
        }
    else{
            $('.back-to-top')
            .removeClass('slideRIn')
            .hide();
        }
  
    $('.back-to-top').click(function() {
            $('html,body')
            .animate({
                scrollTop: 0
            }, 600);   

            $(window)
            .scrollTop() = 0;
    });

}

function showHeader(){
   
    $('.header')
    .removeClass('header-static')
    .addClass('header-fixed')
    .addClass('slideDown')
    .removeClass('slideUp');

}

function hideHeader( ){
  　 $('.header')
    .addClass('slideUp')
    .removeClass('slideDown');  
}

function setHeader(){
    
    $('.header').removeClass('header-fixed')
    .addClass('header-static')
    .removeClass('slideUp')
    .removeClass('slideDown');
}









console.log("%c Nayo %c","background:#000; color:#fff","","山水一程 三生有幸");
console.log("%c Mail %c","background:#000; color:#fff","","lemonreds@163.com ");
console.log("https://github.com/Lemonreds/hexo-theme-nayo");