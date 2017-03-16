window.onload = function(){
	var banner = document.querySelector('.banner');
	var circle = document.querySelector('.circle');
	var oPic = banner.children;
	var oCir = circle.children;
	var iNow =0;
	var timer = null;
	  for(var i=0;i<oCir.length;i++){
	  	oCir[i].index = i;
	  	oCir[i].onmouseover = function(){
	  		for(var i=0;i<oPic.length;i++){
           oPic[i].style.opacity = 0;
           oCir[i].className = '';
	  		}
	  		oPic[this.index].style.opacity = 1;
	  		oCir[this.index].className = 'active';
	  	}
	  }
	  function autoPlay(){
         for(var i=0;i<oPic.length;i++){
           oPic[i].style.opacity = 0;
           oCir[i].className ='';
         }
           oPic[iNow].style.opacity = 1;
           oCir[iNow].className ='active';
           iNow++;
           iNow = iNow > oPic.length-1? 0 : iNow  
	  }
  timer = setInterval(autoPlay,3000);
    banner.addEventListener('mouseover', change1,false);
    banner.addEventListener('mouseout', change2,false);
    function change1(){
         clearInterval(timer);
    };
    function change2(){
         timer = setInterval(autoPlay,3000);
    };

	var pre = document.querySelector('.hot-prev');
	var nxt = document.querySelector('.hot-next');
	var log = document.querySelector('.item');
	var itm = log.children;
	// console.log(log);
	pre.onclick = function(){
     log.style.left = '0';
	}
	nxt.onclick = function(){
     log.style.left = '-100%';
	}

	for(var i=0;i<itm.length;i++){
		itm[i].index =i;
		itm[i].onmouseover = function(){
			for(var i=0;i<itm.length;i++){
				itm[i].style.zIndex = 0;
			}
			itm[this.index].style.zIndex = 1;
		}
		
	}
}