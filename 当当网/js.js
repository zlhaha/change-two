var imgleft=document.getElementsByClassName('imgleft')[0];
var aa=document.getElementsByClassName('aa');
var ww=document.getElementsByName('ww');
var gg=document.getElementsByClassName('gg');
var bodytop=document.getElementsByClassName('bodytop')[0];
var shiying=document.getElementsByClassName("shiying")[0];
var yushu=document.getElementById("yushu");


for(var i=0;i<aa.length;i++){
	aa[i].index=i;
	aa[i].onmouseover=function(){
		for(var j=0;j<aa.length;j++){
			aa[j].style.backgroundColor="";
		}
		aa[this.index].style.backgroundColor="red";
		imgleft.setAttribute("src","images/"+(this.index+1)+".jpg");
		
	}

}
	var k=0;
	function thing(){	
		if(k<6){
			for(var j=0;j<aa.length;j++){
				aa[j].style.backgroundColor="";
			}
			imgleft.setAttribute("src","images/"+(k+1)+".jpg");
			aa[k].style.backgroundColor="red";
			k++;
		}else{
			k=0;
		}		
	}
	var lun=setInterval(thing,2000);
	bodytop.onmouseover=function(){
		clearInterval(lun);
	}
	bodytop.onmouseout=function(){
 		lun=setInterval(thing,2000);
	}
 	




 for(var i=0;i<4;i++){
 	gg[i].index=i;
 	gg[i].onmouseover=function(){
 		for(var j=0;j<4;j++){
 			gg[j].style="background-color:none;color:black;";
 			ww[j].style.display="none";
 		}
 		gg[this.index].style="background-color:white;color:red;border:1px solid white";
 		ww[this.index].style.display="block";
 	}
 }


 function gun(){
 	if(shiying.offsetHeight-(yushu.scrollTop)<=280){
 		yushu.scrollTop=0;
 	}else{
 		yushu.scrollTop++;
 	}
 }
 var dong=setInterval(gun,30);
 shiying.onmouseover=function(){
 	clearInterval(dong);
 }
shiying.onmouseout=function(){
	dong=setInterval(gun,30);
}



//购物车
var jisuan=document.getElementsByTagName('strong');
console.log(jisuan);