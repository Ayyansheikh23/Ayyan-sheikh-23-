var ul =document.getElementById("ul");

var input=document.getElementById("inp")

var  todos=[];

var todos= JSON.parse(localStorage.getItem("todos"))||[];

var statusTxt = 'Pending'

function todo(){
    ul.innerHTML="";
    // if(input.value.trim()!=="") return;
    
    var obj={
        Id:Date.now(),
        Text:input.value,
        completede:false,
    }
    todos.push(obj);
    localStorage.setItem("todos",JSON.stringify(todos));
    reminder();

}

function reminder(){
    ul.innerHTML="";
    for(let i=0;i<todos.length;i++){
        var li=document.createElement("li");
        li.innerText=todos[i].Text;
        ul.appendChild(li);
        li.classList.add("list-item")
        
        var deltbtn=document.createElement("button");
        deltbtn.innerText="Delete";
        li.appendChild(deltbtn);
        deltbtn.classList.add("delete-btn")

        deltbtn.onclick=function(){
            todos=todos.filter(function(todo){
                return todo.Id!==todos[i].Id;
            });
            localStorage.setItem("todos",JSON.stringify(todos));
            reminder();
        }

        var  editbtn=document.createElement("button");
        editbtn.innerText="Edit";
        li.appendChild(editbtn);
        editbtn.classList.add("edit-btn")
        editbtn.onclick=function(){
            var newText=prompt("edit Your Task",todos[i].Text);
            if(newText!==null && newText.trim()!==""){
                todos[i].Text=newText;
                localStorage.setItem("todos",JSON.stringify(todos));
                reminder();

            }
            
        }
        

    }
    input.value="";
}




renderTodos()