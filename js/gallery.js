//---------
//gallery fancybox
//---------

// init fancybox
$(function(){
        $('img').each(function() {      

        if(!$(this).hasClass('no-gallery')){

	        $(this).attr({
	        'data-fancybox' : 'group',
	        'data-type'     : 'image',
	        'data-src'      : $(this).attr('src') 
	        });  
   		}
  });        
});
// 记1个坑 (fancybox3) 