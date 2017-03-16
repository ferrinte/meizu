window.onload = function(){

	var oUl = document.querySelector('.detail-tab').children[0];
	var cont = document.querySelector('.detail-content');
	var args = document.querySelector('.detail-argument');
	var oLi = oUl.children;
	var index  = null;

	oUl.addEventListener('click',tab,false);

  function tab(ev){
  	for(var i=0;i<oLi.length;i++){
  		oLi[i].className = '';
  	}
  	if(ev.target.tagName.toLowerCase() === 'li'&&ev.target.value == 1){
        ev.target.className = 'current';
			  cont.style.display = 'block';
			  args.style.display = 'none';
		}
		else{
			  ev.target.className = 'current';
			  args.style.display = 'block';
			  cont.style.display = 'none';
		}
  }
}

