
//import FS module
const fs = require('fs');

//import readline module
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//read file contents
const content = fs.readFileSync('tasks.json', "utf-8");

// Parse the JSON content to convert it into a JavaScript object
const tasks = JSON.parse(content);

// Export the tasks object for use in other files
module.exports = tasks;

const getAllTasks = require('./getAllTasks');
const listTasks = require('./listTasks');
const addTask = require('./addTask');
const completeTask = require('./completeTask');

// Call the function to get all tasks
let tasksArr = getAllTasks();


rl.question('Select from one of the following options: \n' +
    '1: List all tasks.\n' +
    '2: Add a new task.\n' +
    '3: Mark a task as complete.\n' +
    'Anything else to end the program.\n\n', 
(option) => {

    switch(option)
    {
        //List all tasks
        case '1':
            //Lists all of my current tasks. 
            listTasks(tasksArr, (err) => {
                if(err) throw err;
            });
            rl.close();
            break;

        //Add a new task
        case '2':

        rl.question('Enter the title of your new task: ', (title) => {
            rl.question('Enter the description of the new task: ', (description) => {

        //Push new task to tasks.json
        let updatedTaskList = addTask(title, description);

        try{
            fs.writeFileSync('tasks.json', JSON.stringify(updatedTaskList, null, 2), 'utf8');
            console.log("File has been updated successfully!");
        } catch (err) {
            console.error("Error occurred while writing to tasks.json:", err);
        }
            rl.close();
    });
});
            break;

        //Mark a task as complete
        case '3':

            rl.question('Enter the title of a task to complete: ', (title) => {

            //updating task status
            let updatedTaskStatus = completeTask(title);
        
            try{
                fs.writeFileSync('tasks.json', JSON.stringify(updatedTaskStatus, null, 2), 'utf8');
                
            } catch (err) {
                console.error("Error occurred while writing to tasks.json:", err);
            }
            rl.close();
        });
            break;

        default:
            rl.close();
            break;

    }

});























