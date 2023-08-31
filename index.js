const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
    
    {
      type: 'list',
      name: 'options',
      message: 'Please choose an option...',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
      ]
    },
   
  
  ];
  
  // TODO: Create a function to initialize app
  function init() {
    inquirer.prompt(questions) 
      .then((data) => {
        // Declare a variable for user choice
        const choice  = data.choices;
        console.log(data)
        //Take the answers and create svg file
        // IF statement to figure out what user chose
        let userShape;
        if (choice === 'View all departments') {
          userShape = new Circle(text, textColor, shapeColor)
        }
        else if (shape === 'Square') {
          userShape = new Square(text, textColor, shapeColor)
        }
        else {
          userShape = new Triangle(text, textColor, shapeColor)
  
        }
          fs.writeFile('logo.svg', userShape.render(), (err) => {
            if(err) {
              console.log(err);
            } else {
              console.log('New Shape Created!!!!!!!!')
            }
          }
          
          
        );
      })
      .catch((err) => {
        console.log(err);
      })
  }
  
  
  // Function call to initialize app
  init();
  
  
//   Function to view department
