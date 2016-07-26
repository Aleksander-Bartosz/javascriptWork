/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener("DOMContentLoaded", function(){
	
	var Lis = document.getElementsByTagName('li');
	var Next = document.getElementById('nextPicture');
	var Prev = document.getElementById('prevPicture');
		
		var Index = 0;
		Lis[Index].className='visible';
	 	
		Next.addEventListener('click', function (){
			
			Lis[Index].classList.remove('visible');
			if (Index==(Lis.length-1)) {
				Index=0;
			}
			else {
				Index++;
			}
						
			Lis[Index].className='visible';
			
			console.log(Index);
			
					
			
		})
		
		Prev.addEventListener('click', function (){
			
			Lis[Index].classList.remove('visible');
			if (Index==0) {
				Index=Lis.length-1;
			}
			
			 else {	
				Index--;
			 }
			Lis[Index].className='visible';
			console.log(Index);
			
			
						
		})
		
		
		//  modyfikowac css
	
	
});