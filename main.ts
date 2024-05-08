import inquirer from 'inquirer';
let todos = [];
let condition = true;

while(condition)
    {
    let addTask = await inquirer.prompt(
        [
         {
                name: 'todo',
                type: 'input',
                message:'EID KI SHOPPING KIA KIA KI'
            },
            {
                name: 'addMore',
                type: 'confirm',
                message: 'AUR KUCH LIA',
                default: 'false'
            }
        ]
    );

    todos.push(addTask.todo);
    condition = addTask.addMore
    console.log(todos)
}