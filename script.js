/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */

//had some help from chatgpt in terms of structuring the code properly :))

//
// Variables
//

let todoItems = [];
let counter = 0;

// Constants
const appID = "app";

// DOM Elements
let appContainer = document.getElementById(appID);

//
// Functions
//

// Add a heading to the app container
function updateToDoList() {
    const listContainer = document.getElementById("todoList");

  if (listContainer) {
    listContainer.innerHTML = "";

    todoItems.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.innerText = item.text;

       // Add a "Mark as Completed" button
       const completeButton = document.createElement("button");
       completeButton.innerText = "Complete";
       completeButton.onclick = () => markToDoItemAsCompleted(item.id);
 
       listItem.appendChild(completeButton);

      // Add a delete button
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.onclick = () => removeToDoItem(item.id);

      listItem.appendChild(deleteButton);

      if (item.completed) {
        listItem.style.textDecoration = "line-through";
      }
      listContainer.appendChild(listItem);
    });
  }
}

function addToDoItem(text) {
  var inputValue = document.getElementById("myInput").value;
  if (inputValue.trim() !== "") {
    // Create a new todo item object
    const newTodoItem = {
      id: counter++,
      text: inputValue,
      completed: false
    };

    // Add the new todo item to the array
    todoItems.push(newTodoItem);

    // Clear the input field
    document.getElementById("myInput").value = "";

    // Update the todo list display
    updateToDoList();
  }
}

function removeToDoItem(todoId) {
  // Implement the logic to add a task here

  for (let index = 0; index < todoItems.length; index++)
  {
    if (todoItems[index].id === todoId)
    {
      todoItems.splice(index, 1);
      break;
    }
  }
  updateToDoList();
}

function markToDoItemAsCompleted(todoId) {
  // Implement the logic to mark a task as completed here
  for (let index = 0; index < todoItems.length; index++) {
    if (todoItems[index].id === todoId) {
      todoItems[index].completed = !todoItems[index].completed;
      break;
    }
  }
  updateToDoList();
}


markToDoItemAsCompleted(1)
console.log(todoItems[index]);

function clearCompletedTasks() {
  // Implement the logic to clear completed tasks here
  todoItems = todoItems.filter(item => !item.completed);
  updateToDoList();
}

//
// Inits & Event Listeners
//

initialise();
document.getElementById("clearCompletedButton").addEventListener("click", clearCompletedTasks);