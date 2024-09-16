const getAllTasks = require('./server.js')


//Lists all tasks
function listTasks(tasks)
{
    tasks.tasks.forEach(task => {
        console.log(`\n${task.title}`)
        console.log(`\tDescription: ${task.description}`)
        console.log(`\tStatus: ${task.status}`)
    });
}

module.exports = listTasks