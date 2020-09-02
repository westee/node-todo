const homedir = require('os').homedir();
const home = process.env.HOME || homedir;
const fs = require('fs');
const path = require('path');
const dbPath = path.join(home, '.todo');

module.exports.add = (title) => {
    fs.readFile(dbPath, {flag: 'a+'}, (readErr, data) => {
        let todoList;
        if(readErr){
            console.log(readErr)
        } else {
            try{
                todoList = JSON.parse(data)
            } catch {
                todoList = []
            }
        }

        const task = {
            title,
            done: false
        };
        console.log(todoList)
        todoList.push(task)

        let stringTask = JSON.stringify(todoList);
        fs.writeFile(dbPath, stringTask, (writeErr)=>{
            if(writeErr) console.log(writeErr);
        })
    });
}