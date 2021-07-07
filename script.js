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
            name: 'credits',
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

    
    const template = `# ${answers.title}

* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Credits](#credits)
* [Licenses](#license)
# Installation
${answers.installation}
## Usage
${answers.usage}
## Contribution
${answers.contribution}
### Instructions
${answers.instructions}
## Credits
${answers.credits}
## License
${answers.license}

# Contact
* GitHub :${answers.git}
* E-mail :${answers.email}`;

createNewFile(answers.title,template);

})


function createNewFile(fileName,template){
    fs.writeFile(`./${fileName.toLowerCase().split('').join('')}.md`,template,(err)=>{
        if(err){
            console.log(err)
        }
        console.log('Your README has been generated!');
    })
}