//Problem: User interaction doesn't provide desired results.
//Solution: Add interactivty so the user can manage daily tasks.

var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0];
var incompleteTasksHolder = document.getElementById("incomplete-tasks");
var completedTasksHolder= document.getElementById("completed-tasks");

//New task list item
var createNewTaskElement = fuction(taskString) {
    var listItem = document.createElement("li");
    var checkBox = document.createElement("input");
    var label = document.createElement("label");
    var editInput = document.createElement("input");
    var editButton = document.createElement("button");
    var deleteButton = document.createElement("button");
    return listItem;
}

//Add a new task
var addTask = function () {
    console.log("add task...");
    var listItem = createNewTaskElement("Some New Task");
}

var editTask = function () {
    console.log("hello");
}

var deleteTask = function () {
    console.log("hello");
}

var taskCompleted = function () {
    console.log("hello");
}

var taskIncomplete = function () {
    console.log("hello");
}

var bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
    console.log("Bind list item events");
    var checkBox = taskListItem.querySelector("input[type=checkbox]");
    var editButton = taskListItem.querySelector("button.edit");
    var deleteButton = taskListItem.querySelector("button.delete");

    editButton.onclick = editTask;

    deleteButton.onclick = deleteTask;

    checkBox.onchange = checkBoxEventHandler;
}

addButton.onclick = addTask;

// cycles over incompleteTasksHolder ul list items
for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
    bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

// cycles over completedTasksHolder ul list items
for(var i = 0; i < completedTasksHolder.children.length; i++) {
    bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}
