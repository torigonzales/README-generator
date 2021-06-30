const inquirer = require("inquirer");
const fs = require('fs');

inquirer.prompt(
    [
        {
            type: 'input',
            message:'Whats the project title?',
            name:'title',
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
            
        },
        {
            type:'input',
            message:'Installation Instructions',
            name: 'installation',
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
       
        {
            type:'input',
            message:'What licenses were used?',
            name: 'license',
            choices:['ISC'],
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},

        },
        {
            type:'input',
            message:'GitHub Username:',
            name: 'git',
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},

        },
        {
            type:'input',
            message:'Email:',
            name: 'email',
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},

        }  
    ]
).then((answers)=>{

})


const template = `# ${title}

*[Title](#title)
*[Installation](#installation)
*[Usage]{#usage}


}
)`
