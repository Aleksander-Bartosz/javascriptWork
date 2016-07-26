/**
 * Created by Jacek on 2015-12-16.
 */

/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */
document.addEventListener('DOMContentLoaded', function (){
	
	var LiElements = document.querySelectorAll('li img');
	var body = document.getElementsByTagName('body');
	
		for (var i=0; i<LiElements.length; i++) {
			LiElements[i].addEventListener('click', function (){
				
					var adress =  this.getAttributeNode("src").value;
					
					
					 var creatDiv =document.createElement('div');
							creatDiv.className ='fullScreen';
							
					var creatIMG = document.createElement('img');
							creatIMG.setAttribute('src',adress);
							
					
					var creatClose = document.createElement('div');
							creatClose.className='close';
							creatClose.style.backgroundImage='url("images/wrong.png")';
							creatClose.style.backgroundRepeat = "no-repeat";
							creatClose.style.position='absolute';
							creatClose.style.top='0px';
							creatClose.style.right='0px';
							creatClose.style.width='50px';
							creatClose.style.height='50px';
							creatClose.style.backgroundSize='50px 50px';
							
						
							creatDiv.appendChild(creatIMG);
							creatDiv.appendChild(creatClose);
							document.body.appendChild(creatDiv);
							
						creatClose.addEventListener('click', function (event){
							body[0].removeChild(creatDiv);
						})
										
			})
		}	
}) 