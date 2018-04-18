//------
// util
//------
function isPC(){  
    var userAgentInfo = navigator.userAgent;  
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
    var flag = true;  
    for (var v = 0; v < Agents.length; v++) {  
    if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
    }  
    return flag;  
}            


function cutString( str ,maxlength ){

	if( str.length > maxlength ) return str.substring(0,maxlength-1)+"...";
	else
		return str;

}

function scrollToId(id) {  

  $("html,body").animate({
  		scrollTop:$("#" + id).offset().top }, 400);   
}