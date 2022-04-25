const form=document.getElementById('form');
const input=document.getElementById('input');
const todosUL=document.getElementById('todos');

const todos=JSON.parse(localStorage.getItem('todos'));  //For Refresh

if(todos){                   //For Refresh
    todos.forEach((todo)=>{  //For Refresh
        addTodo(todo);       //For Refresh
    });                      //For Refresh
}

form.addEventListener('submit',(e)=>{   
     e.preventDefault(); //Submit data will br appeared below of text

     addTodo();

});

//Function to add note Logic
function addTodo(todo) {  //For Refresh-just pass the parameter of todo
    let todoText = input.value;  //Texted Value from input element
    
    if(todo){                 //For Refresh - for passing in the parameters above- we put the todo in if condition
        todoText = todo.text; //For Refresh
    }                         //For Refresh

     if(todoText){
         const todoEl = document.createElement('li');
        if(todo && todo.completed){             //For Refresh
              todoEl.classList.add("completed") //For Refresh
        }                                       //For Refresh

         todoEl.innerText=todoText;
        
        //Submitted text will appear below Logic
        todoEl.addEventListener('click',()=>{
            todoEl.classList.toggle('completed');

            updateLs();
        });
        //By Right click it will remove
        todoEl.addEventListener('contextmenu',(e)=>{
             e.preventDefault();

             todoEl.remove();

             updateLs();
        });
        
        todosUL.appendChild(todoEl);

        input.value = ''; //after submitted input text will gone
     
    }
    //  else{
    //      alert('Type something')
    //  }
     updateLs()
};

function updateLs() {
    const todosEl = document.querySelectorAll('li');

    const todos = [];

    todosEl.forEach((todosEl)=>{
        todos.push({
             text: todosEl.innerText,
             completed: todosEl.classList.contains('completed')
         });   
    });

    localStorage.setItem('todos',JSON.stringify(todos));
}

//Mistakes Took
//1.By giving the Const to the "todoText" in "addTodo(todo)" i got - Uncaught TypeError: Assignment to constant variable.
//  so i just replaced into let by that no error got
