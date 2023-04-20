
const todos = []

const todo_container = document.querySelector(".todos")



function  newTodo(todo){

    //create parent todo
const todoDiv = document.createElement("div")
todoDiv.classList.add("todo")


//create other div
const inputDiv = document.createElement("div")
inputDiv.classList.add("actions")

//create checkbox
const checkedInp = document.createElement("input")
checkedInp.setAttribute("type", "checkbox")
checkedInp.addEventListener("change",function markDone() {
    if (this.checked) {
        for (let index in todos){
            if (todos[index].id == todo.id){
                  todo.is_complete = true
                  todoTitle.style.textDecoration = "line-through"
                  break
            }
      } 
    } else{
        for (let index in todos){
            if (todos[index].id == todo.id){
                  todo.is_complete = false
                  todoTitle.style.textDecoration = "none"
                  break
            }
      }
    }    
})

//create p tag for titles
const todoTitle = document.createElement("p")
todoTitle.innerHTML = todo.title;
if (todo.is_complete ==true){
    todoTitle.style.textDecoration = "line-through" 
      checkedInp.checked = true
}

//creating delete button
const delBt = document.createElement("button")
delBt.innerHTML = "del"
delBt.id = todo.id
delBt.addEventListener("click", deleteFunc)

 function deleteFunc(){
    for (let index in todos){
        if (todos[index].id == todo.id){
              todos.splice(index,1)
              break
        }
  } 
  addEachTodo(todos)
}

//putting all created elements into parent div
inputDiv.append(checkedInp,delBt)
todoDiv.append(todoTitle,inputDiv)

return todoDiv
}

const addEachTodo= (todos)=> {
    todo_container.innerHTML = ""
    todos.map((todo)=>{
        todo_container.appendChild(newTodo(todo))
    })
}

addEachTodo(todos);

const btAdd = document.querySelector("#addItem")
btAdd.addEventListener("click", addTodoList)

const freshInput = document.getElementById("taskInput")



function addTodoList(){
    
    if (freshInput.value !== ""){
        const task = freshInput.value.trim()
        const newItem = { id: new Date().getUTCMilliseconds, title: task, is_complete: false   }
        todos.push(newItem)
        addEachTodo(todos);
        freshInput.value = ""
    }else{
        alert("please enter a valid task")
    }
  
}