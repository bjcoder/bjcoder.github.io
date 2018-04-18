//---------
// toc
//---------


$(function(){
	$('.toc-contents').click();
})

function change(){
	var $a = $('.toc-contents');

	if( $a.hasClass( "icon-open" )){
	//open
	$('.toc-list').hide();
	$a.removeClass("icon-open").addClass("icon-close");
	}else{ 
	//hide
	$('.toc-list').show();
	$a.removeClass("icon-close").addClass("icon-open");
	}

}


$(function(){
	//获取第一级目录	
	var $level  =  $('h1');	

	//如果是空的话 不显示toc
	if($level.length == 0)		
		return ;	
	else
		$('.toc-container').show();


	//toc 容器
	var $toc =  $('.toc-list');		

	$level.each(function( i ) {		

		//第一级目录添加id
		var id = "content-item"+i;
		$(this).attr("id",id);

		//第一级目录添加标记class 用于toc的follow
		$(this).addClass("itemFollow");


		//添加第一级目录	
		var html = $(this).text();
		
		var li = "<li id=\"toc-item-"+ i +"\"   class=\"toc-item\" >" + html +"</li>";
		$toc.append(li);

		//获取到下一个第一级目录中的所有元素
		var $sub = $(this).nextUntil('h1');
		//遍历判断添加
			$sub.each(function (j){
			var $holder =  $(this);		
			//判断是 h2 h3 的元素则添加
			if( $holder.length != 0 &&　(　$holder[0].tagName =='H2' || 　$holder[0].tagName =='H3' ) ){
				//添加第二级目录的id
				var sub_id = "content-subitem" + i + j ;
				$(this).attr("id",sub_id);
				//第二级目录添加标记class 用于toc的follow
				$(this).addClass("itemSubFollow");

				//创建html语句						
				var sub_html = $holder.text();
				var sub_li = "<li id=\"toc-subitem-"+ i +j + "\" class =\"toc-subitem\">" + sub_html + " </li>" ;
				$toc.append(sub_li);
				//绑定第二级点击跳转事件				
				$('#toc-subitem-'+i+j).click(function(){			
					scrollToId(sub_id);
				});
			}		
		})	
		//绑定第一级点击跳转事件
		$('#toc-item-'+i).click(function(){
			scrollToId(id);
		})		
	})

})


//滑动 固定Toc
$(function(){

   if(isPC()){

   $(window).scroll(function () {

   				if( $(window).scrollTop() <= 10 ){
   					resetTocFollow();
   				}else{
   					openTocFollow();
   				}
   				tocPosition(); 			
        });
   }

})


function tocPosition(){

		//获取 toc 容器 到 document 的 距离
        var a = $(".toc-container").offset().top;      
                          
        if ( a < $(window).scrollTop() ) {

            fixlayout($(".toc-container"));  

        }
          		
        if($(window).scrollTop() < 90){
          	removelayout($(".toc-container"));
		}                

		// 判断滚动条是否到底部 是的话则隐藏toc			
		if(  checkIsHideToc() ){
			removelayout($(".toc-container"));
		}
}

// 更换到绝对布局
function fixlayout( $obj){	

	//if(overflowCheck()){
	$obj.addClass('toc-fixed');		
	//}
}
// 清空之前的绝对布局
function removelayout( $obj ){	
	$obj.removeClass('toc-fixed');
}

//开启所有的Toc跟踪
function openTocFollow(){
	$('.itemFollow').each(function(i){
   				if(	getOffsetTop( $(this) ) <= 40){   							
   							var text = $(this).text();
   							itemHighLigth( text );
   						}   					
   				})

   				$('.itemSubFollow').each(function(j){
   				if(	getOffsetTop( $(this) ) <= 60){   							
   							var text = $(this).text();
   							subItemHighLigth( text );
   						}   					
   				})
}
//清除所有的Toc跟踪
function resetTocFollow(){
	 $('.toc-item').each(function (i){
	 	
	 	if($(this).hasClass('toc-active')){
	 		$(this).removeClass('toc-active');	 	 	
	 	}	
	 })
	 $('.toc-subitem').each(function (i){	 
	 	 
	 	if($(this).hasClass('toc-sub-active')){
	 		$(this).removeClass('toc-sub-active');	 	 	
	 	}	
	 })

}



//toc 大标题的高亮
function itemHighLigth( text ){

	 $('.toc-item').each(function (i){
	 	
	 	if($(this).hasClass('toc-active')){
	 		$(this).removeClass('toc-active');	 	 	
	 	}	
	 	//增加新的item
	 	if($(this).text().trim() == text){
	 		$(this).addClass('toc-active');	 		
	 	}	 	
	 })

}
//toc 小标题的高亮
function subItemHighLigth( text ){
	$('.toc-subitem').each(function (i){	 	

	 	 
	 	if($(this).hasClass('toc-sub-active')){
	 		$(this).removeClass('toc-sub-active');	 	 	
	 	}	
	 	//增加新的item
	 	if($(this).text().trim() == text){	 	
	 		$(this).addClass('toc-sub-active');	 		
	 	}	 	
	 })
}

// 获取元素到浏览器顶部的距离
function  getOffsetTop( $obj ){
    var mTop = $obj.offset().top; 
    var sTop = $(window).scrollTop();
    var result = mTop - sTop;   
    return result;  
}

function checkIsHideToc(){

	var height = $(window).height();

	var nav_height =  $('.post-nav').offset().top - $(document).scrollTop();


	if( nav_height <= height/1.1 ) 
		return true;
	return false;

}