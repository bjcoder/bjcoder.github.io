//------------------
//post
//------------------

var logo;
var logoTitle;

//post页面标题跟踪
$(function(){

	 if(!isPC ()){
	 	setTitle();
	 	return ;
	 }  

	 //初始化
	 logo = $('.header-logo');
	 logoTitle =  $('.header-logo').text();


	$(window).scroll(function() {

		var $header =$('.header');
		//下滑了header则修改logo
		if($header.hasClass('slideDown')){				
			setTitle();
		}else if($(window).scrollTop() == 0){
			//还原logo
			setLogo();
		}
	})

	
})

//把logo设置成标题
function setTitle(){

	//获取post标题
	var postTitle = $('.post-title').text();
	$('.header-logo').addClass('header-title').text(postTitle);		

	
}
//还原logo
function setLogo(){
	
	$('.header-logo').removeClass('header-title').text(logoTitle);	

}
//-----------
// donate
//-----------
$(function(){
	$('.donate-btn').click(function(){				
		showDonateBox();
	})
})
//显示DonateBox
function showDonateBox(){

		var $donate_box = $('#donate-box');
		var $msk = $('.mask');


		if( $donate_box.is(':visible')){

			$donate_box.hide();			

		}else{

			$donate_box.show();	
			$msk.show();

			showDonateQR($('.icon-donate-wechat'));	

			$('.donate-cancel,.mask').click(function(){

				$donate_box.hide();		
				$msk.hide();
			})


			$('.icon-donate-wechat,.icon-donate-alipay').click(function (){							
				showDonateQR( $(this) );
			})		
		}
}


//显示Donate二维码
function showDonateQR( $icon ){


	var icon_name = $icon.attr('class');
	
	$('.donate-list span').removeClass('donate-active');
	$icon.addClass('donate-active');


	if(icon_name.indexOf('wechat') > 0 ){
	
	$('.donate-img').hide();	
	$('#donate-qr-wechat').show();
	
	}else if(icon_name.indexOf('alipay') > 0){
		
	$('.donate-img').hide();
	$('#donate-qr-alipay').show();		
	}
}

//---------
// share
//---------
$(function (){

	$('.share-btn').click(function(){

		 $iconShare = $('.-mob-share');

		 if($iconShare.is(':visible')){
          $iconShare.hide();      
         }else {     
          $iconShare.show();     
        }

	});


})

