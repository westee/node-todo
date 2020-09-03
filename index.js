const db = require('./db');

module.exports.add = async (title) => {
    const list = await db.read();
    console.log(list);

    list.push({
        title,
        done: false
    });

    const writeResult = await db.write(list);
};