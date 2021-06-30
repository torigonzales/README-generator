const inquirer = require("inquirer");
const fs = require('fs');

inquirer.prompt(
    [
        {
            type: 'input',
            message="Whats the project title?",
            name:'title',
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
            
        },
        {
            type:'input',
            message:'How do you install your app?',
            name: 'instillation',

        }




    
    ]
)

