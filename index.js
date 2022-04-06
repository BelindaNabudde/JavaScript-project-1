let todoInput=document.querySelector('input');
    todoContainer=document.querySelector('#todo-container');


    const toDos=JSON.parse(localStorage.getItem('toDoItems'));
    

    if(toDos){
        let toDoNodeList=toDos.map((item,index)=>{
            let listElement=document.createElement('li');
            listElement.style.fontFamily="'Lobster', cursive";
            listElement.style.fontSize ="xx-large";
            listElement.style.color ="white";
            let spanElement =document.createElement('span');
            spanElement.innerText=item;
            listElement.id=index;
            listElement.classList.add('list-item');

            let completeIconElement=document.createElement('i');
            completeIconElement.classList.add('fa-solid');
            completeIconElement.classList.add('fa-check');
            
            let editIconElement =document.createElement('i');
            editIconElement.classList.add('fa-solid');
            editIconElement.classList.add('fa-pen-to-square');            
            let deleteIconElement =document.createElement('i');
            deleteIconElement.classList.add('fa-solid');
            deleteIconElement.classList.add('fa-trash-can');              
            listElement.append(spanElement,completeIconElement,editIconElement,deleteIconElement);

            deleteIconElement.addEventListener('click',()=>{
                deleteIconElement.parentNode.remove(); 
            })
            completeIconElement.addEventListener('click',()=>{
                spanElement.style.textDecoration ="line-through";
            })
            editIconElement.addEventListener('click',(events)=>{
                document.querySelector('input').value=spanElement.innerText;
                editIconElement.parentNode.remove()
                let newEdit=document.querySelector('input').value;    
            }
            );
                         
            return listElement;
        });
        todoContainer.append(...toDoNodeList); 
}  
    function addItem(){    
        let toDo=todoInput.value;
        let listElement=document.createElement('li');
        listElement.style.fontFamily="'Lobster', cursive";
        listElement.style.fontSize ="xx-large";
        listElement.style.color ="white";
        listElement.innerText=toDo;
        listElement.classList.add('list-item');
        
            let completeIconElement=document.createElement('i');
            completeIconElement.classList.add('fa-solid');
            completeIconElement.classList.add('fa-check');

            let editIconElement =document.createElement('i');
            editIconElement.classList.add('fa-solid');
            editIconElement.classList.add('fa-pen-to-square');

            let deleteIconElement =document.createElement('i');
            deleteIconElement.classList.add('fa-solid');
            deleteIconElement.classList.add('fa-trash-can'); 

            listElement.append(completeIconElement,editIconElement,deleteIconElement);
        todoContainer.prepend(listElement);
        todoInput.value =""
        addToLocalStorage(toDo);
    }
    todoInput.addEventListener('keypress',function(e){
        if(e.key ==='Enter'){
            addItem()
        }
    });
    function addToLocalStorage(todo){
        const toDos=JSON.parse(localStorage.getItem('toDoItems'));   
        if(toDos){
            toDos.unshift(todo);
            localStorage.setItem('toDoItems',JSON.stringify(toDos));

        }else{
         localStorage.setItem('toDoItems',JSON.stringify([todo]))   
        }
    }
    function editLIstElement(){
        let newEdit=document.querySelector('input').value;
        let spanElement =document.createElement('span');
            spanElement.innerText=item;
            listElement.id=index;
            spanElement.innerText=newEdit
            console.log(newEdit)
    }
    
    
    