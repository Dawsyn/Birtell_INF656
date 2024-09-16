const getAllTasks = require("./getAllTasks.js");

let taskList = getAllTasks();

function completeTask(title) 
{
    let foundTask = taskList.tasks.find(task => task.title.toLowerCase() === title.toLowerCase())

    // Update the task status to "completed"
    if(!foundTask) {
        console.log(`Task with the title "${title}" not found.`);
    }
    else if (foundTask.status === "completed") {
        console.log("That task is already complete. Choose a different task.")
    }else{
        foundTask.status = "completed"; 
        console.log("File has been updated successfully!");
    }
    
    return taskList;
}

module.exports = completeTask