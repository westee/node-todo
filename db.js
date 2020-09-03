const homedir = require('os').homedir();
const home = process.env.HOME || homedir;
const fs = require('fs');
const path = require('path');
const dbPath = path.join(home, '.todo');

const db = {
    read(path = dbPath) {
        return new Promise((resolve, reject) => {
            fs.readFile(path, {flag: 'a+'}, (readErr, data) => {
                let todoList;
                if (readErr) {
                    reject(readErr)
                } else {
                    try {
                        todoList = JSON.parse(data)
                    } catch {
                        todoList = []
                    }
                    resolve(todoList)
                }
            });
        })

    },
    write(list, path = dbPath) {
        return new Promise((resolve, reject)=>{
            let stringTask = JSON.stringify(list);
            fs.writeFile(path, stringTask, (writeErr) => {
                if (writeErr) reject(writeErr);
                else resolve({status: 'success'})
            })
        })
    }
};
module.exports = db;