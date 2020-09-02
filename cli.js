const { program } = require('commander');
const api = require('./index');
program
    .option('-d, --debug', 'output extra debugging');
program
    .command('add')
    .description('add a task')
    .action((args) => {
        const title = args.args.join(" ");
        api.add(title)
    });

program
    .command('clear')
    .description('clear all task')
    .action((args) => {
        console.log(args);
    });

program.parse(process.argv);