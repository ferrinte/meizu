window.onload = function(){
	var banner = document.querySelector('.banner');
	var circle = document.querySelector('.circle');
	var oPic = banner.children;
	var oCir = circle.children;
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

	var pre = document.querySelector('.hot-prev');
	var nxt = document.querySelector('.hot-next');
	var log = document.querySelector('.item');
	var itm = log.children;
	console.log(log);
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