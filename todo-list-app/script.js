
// Creating Element and Adding new task 
function addTask(){
    let task = document.getElementById("todo").value;
    let newTask = `<span class="task">${task}</span>
    <span class="icons"><i class="edit fa-solid fa-pen-to-square"></i>
<i class="delete fa-solid fa-trash"></i></span>`;
if(task != ''){
    let newLi = document.createElement("li");
    newLi.className = "list-item";
    newLi.innerHTML = newTask;

    document.getElementById("myList").appendChild(newLi);
    
document.getElementById("todo").value = null;

deleteList(); // function to add onclick delete function
editList(); // function to add onclick edit
}else{
    alert("Enter Some task");
}
}

// Deleteting Task
function deleteList(){
let close = document.querySelectorAll(".delete");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement.parentElement;
      div.remove();
    }
  }
}

// checked Task
let toDoItems = document.querySelector("#myList");
 toDoItems.addEventListener("click", (item) => {
  if(item.target.tagName === 'LI'){
    item.target.classList.toggle("checked");
  }
 });


 // edit ToDo limit
 function editList(){
  let editLi = document.querySelectorAll(".edit");
  for (let i = 0; i < editLi.length; i++) {
    editLi[i].onclick = function() {
        let editText = this.parentElement.parentElement.firstChild;
        let editIcon = this.parentElement.parentElement.children[1].firstChild;

        if(editText.firstChild.tagName === 'INPUT'){
         editText.innerHTML = editText.firstChild.value;
        } else{
          editText.innerHTML = `<input type="text" value="${editText.innerText}">`;
        }

    editIcon.classList.toggle("fa-square-check");
    editIcon.classList.toggle("fa-pen-to-square");
        
      }
    }
  }
