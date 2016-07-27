/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener('DOMContentLoaded', function (){
	var ul = document.getElementById('taskList');
	var addTask = document.getElementById('addTaskButton');
	var removeTask = document.getElementById('removeFinishedTasksButton');
	var task = document.getElementById('taskInput');
	var creatLi= document.createElement('li');
	var counter = document.getElementById('couter');
	var nr=0;
				creatLi.innerHTML= task.value;
				creatLi.style.border = '2px solid black';
				creatLi.style.margin = '20px';
				creatLi.style.display = 'block';
				creatLi.style.position = 'relative';
				creatLi.style.verticalAlign = 'top';
				creatLi.style.top = '20px';
				creatLi.style.textAlign = 'center';
				creatLi.style.lineHeight = '20px';
				creatLi.style.width = '150px';
				creatLi.style.height = '200px';
				
	
	var creatBatton = document.createElement('button');
				creatBatton.innerHTML='Done';
				creatBatton.style.margin ='5px';
				creatBatton.style.position ='absolute';
				creatBatton.style.top ='170px';
				creatBatton.style.left ='10px';
	var deleteBatton = document.createElement('button');
				deleteBatton.innerHTML='Delete';
				deleteBatton.style.margin ='5px';
				deleteBatton.style.position ='absolute';
				deleteBatton.style.top ='170px';
				deleteBatton.style.right ='10px';
				ul.style.listStyleType ='none';
				
				
		addTask.addEventListener('click', function (){
			
				if (task.value.length <5 || task.value.length>100) {
					alert('Case cant be  shorter than 5 words and longer than 100 words');
					return;
				}
				nr++;
				counter.innerHTML=nr;		
					var myCloneLi = creatLi.cloneNode(true);
					var myCloneDone = creatBatton.cloneNode(true);
					var myCloneDelete= deleteBatton.cloneNode(true);
					myCloneLi.innerHTML= task.value;
					myCloneLi.appendChild(myCloneDone);
					myCloneLi.appendChild(myCloneDelete);
					myCloneLi.style.display = 'inline-block';
					
					ul.appendChild(myCloneLi);
					
				myCloneDone.addEventListener('click', function (){
					myCloneLi.style.backgroundColor='red';
					myCloneLi.classList.add('dele');
						nr--;
						counter.innerHTML=nr;		
											
				})
					myCloneDelete.addEventListener('click', function (){
						ul.removeChild(myCloneLi)
					})
					task.value='';
				removeTask.addEventListener('click', function (){
					for (var i=0; i<ul.children.length; i++) {
						if (ul.children[i].className=='dele') {
							ul.removeChild(ul.children[i]);
							
						}
					}
				})	
		})
		
			
		
		  
		  
})










