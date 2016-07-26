/**
 * Created by Jacek on 2015-12-16.
 */
 document.addEventListener('DOMContentLoaded', function (){
	 var addClassForMyDiv = document.querySelector('div');
		addClassForMyDiv.classList.add('nav');
		var ul = document.querySelectorAll('ul');
			var li = ul[0].children;
			console.log(li);
			for (var i=0; i<li.length; i++) {
				li[i].addEventListener('mouseover', function (){
					if (this.children.length>0 ) {
							this.children[0].style.display='list-item';
					}	
				})
			    li[i].addEventListener('mouseout', function (){
					if (this.children.length>0) {
						
						this.children[0].style.display='none';
					}	
				})	
			}
 })