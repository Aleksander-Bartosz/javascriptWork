/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener('DOMContentLoaded', function (){
	console.log('fgf');
	var tultip = document.getElementsByClassName('tooltip');
	var creatSpan = document.createElement('span');
		for (var i =0; i<tultip.length; i++) {
			tultip[i].addEventListener('mouseover', function (){
				creatSpan.innerHTML = this.dataset.text;
				creatSpan.style.position= 'absolute';
				creatSpan.style.left= '50px';
				creatSpan.style.top= '25px';
				creatSpan.style.borderRadius = '5px';
				creatSpan.style.padding = '5px';
				creatSpan.style.backgroundColor= 'black';
				creatSpan.style.zIndex= '5';
				creatSpan.style.color= 'white';
				
					this.appendChild(creatSpan);
			})
			tultip[i].addEventListener('mouseout', function (){
					this.removeChild(creatSpan);
			})
		}
})

/*
 <span class="tooltipText">Text tooltipa</span>
 */
