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
            message:'How was the application installed?',
            name: 'installation',
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
       
        {
            type:'input',
            message:'Installation instructions:',
            name: 'instructions',
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},

        },
        {
            type:'input',
            message:'Credits?',
            name: 'instructions',
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},


        },
        {
            type:'input',
            message:'How do you use the application?',
            name: 'usage',
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},

        },
        {
            type:'input',
            message:'Licenses used?',
            name: 'license',
            choice:['The MIT license'],
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

*[Installation](#installation)
*[Usage](#usage)
*[Contribution](#contribution)
*[Credits](#credits)
*[Licenses](#license)
#Installation
${installation}
##Usage
${usage}
##Contribution
${contribution}
###Instructions
${insttructions}
##Credits
${credits}
##License
${license}

#Contact
*GitHub :${git}
*Linkedin :${linkedin}
*E-mail :${email}






}
)`
