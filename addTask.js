const getAllTasks = require("./getAllTasks.js");

let taskList = getAllTasks();



function addTasks(title, description)
{
    let task = {
        "title": title,
        "description": description,
        "status": "not completed"
    }

taskList.tasks.push(task);
return taskList;
}

module.exports = addTasks