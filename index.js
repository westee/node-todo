const { program } = require('commander');

program
    .option('-d, --debug', 'output extra debugging');
program
    .command('add')
    .description('add a task')
    .action((args) => {
        console.log(args.args.join(""));
    });

program
    .command('clear')
    .description('clear all task')
    .action((args) => {
        console.log(args);
    });

program.parse(process.argv);