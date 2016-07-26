/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener('DOMContentLoaded', function (){
	var gallery= document.getElementById('gallery');
	
	var images = document.getElementsByTagName('img');
	var show = document.getElementById('showButton');
	var hidden = document.getElementById('hideButton');
	var tagImput = document.getElementById('tagInput');
		
		
		show.addEventListener('click', function (){
			
				var textShow = tagImput.value;
					for (var i=0; i<images.length; i++) {	
										
						if (images[i].dataset.tag.includes(tagImput.value)) {
							images[i].classList.remove('invisible');
						}
							
							
					}
					
					tagImput.value='';
					
				
		});	
		
		hidden.addEventListener('click', function (){
		
			var textHide = tagImput.value;
				for (var i=0; i<images.length; i++) {
					
					if (images[i].dataset.tag.includes(tagImput.value)) {
							images[i].classList.add('invisible');
					}
				}
					
			tagImput.value='';	   
		});

		
});