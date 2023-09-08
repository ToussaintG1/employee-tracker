const fs = require('fs');
const inquirer = require('inquirer');
const connection = require('./db/server');
const gradient = require('gradient-string');


connection.connect(function (err) {
    init();
    if (err) {console.log(err)
}});

  // TODO: Create a function to initialize app
  function init() {
    inquirer.prompt({
        type: 'list',
      name: 'options',
      message: 'Please choose an option...',
      choices: [
        'View All departments',
        'View All roles',
        'View All employees',
        'Add Department',
        'Add Role',
        'Add New Employee',
        'Update An Existing Employee Role'
      ]
    })
      .then((data) => {
        // IF statement to figure out what user chose
          if (data.options === 'View All departments') {
            console.log("View Departments line 35");
              viewDepartments();
          } else if (data.options === 'View All roles') {
              viewRoles();
          } else if (data.options === 'View All employees') {
              viewEmployees();
          } else if (data.options === 'Add Department') {
              addDepartment();
          } else if (data.options === 'Add Role') {
              addRole();
          } else if (data.options === 'Add New employee') {
              addEmployee();
          } else if (data.options === 'Update An Existing Employee Role') {
              updateRole();
          } 
      })
    };
  
  
  //   Function to view department
function viewDepartments() {
    console.log("View Departments");
  connection.query('SELECT * FROM department', function (err, result) {
    console.log(result);
    if (err) { console.log(err) }
    console.table(result)
    init();
  });
}


// Function to view employees
function viewEmployees() {
  connection.query('SELECT * FROM employee;', 
      function (err, result) {
          if (err) { console.log(err) }
          console.table(result)
          init();
      })
  };

  // Function to view roles 
  function viewRoles() {
    connection.query('SELECT * FROM role;', 
        function (err, result) {
            if (err) { console.log(err) }
            console.table(result)
            init();
        })
    };


    // Function to add a department
    function addDepartment() {
      inquirer.prompt({
          type: 'input',
          name: 'addDepartment',
          message: 'Please enter the department name:',
      })
          .then((data) => {
              connection.query('INSERT INTO department SET ?;',
              {
                  name: data.addDepartment,
              },
              function (err, result) {
                  if (err) { console.log(err) }
                  console.table(result)
                  init();
              })
          })
      
  };
// Function to add role

function addRole() {
  var roleQuestions = [
      {
          type: 'input',
          name: 'roleName',
          message: 'Please enter the name of the role.'
      },
      {
          type: 'input',
          name: 'roleSalary',
          message: 'Please enter the salary of the role.'
      },
      {
          type: 'input',
          name: 'roleDepartment',
          message: 'Please enter the department this role belongs to.'
      },
  ]

  inquirer.prompt(roleQuestions)
        .then((data) => {
            connection.query('INSERT INTO role SET ?;',
            {
                title: data.roleName,
                salary: data.roleSalary,
                department_id: data.roleDepartment
            },
            function (err, result) {
                if (err) { console.log(err) }
                console.table(result)
                init();
            })
        })
    };

    // Function to add an employee

    function addEmployee() {
      var employeeQuestions = [
          {
              type: 'input',
              name: 'firstName',
              message: 'Please the employees first name.'
          },
          {
              type: 'input',
              name: 'lastName',
              message: 'Please enter the employees last name.'
          },
          {
              type: 'input',
              name: 'employeeRoleID',
              message: 'Please enter the employees role ID.'
          },
          {
              type: 'input',
              name: 'employeeManagerID',
              message: 'Please enter the employees manager ID.'
          },
      ]

      inquirer.prompt(employeeQuestions)
      .then((data) => {
          connection.query('INSERT INTO employee SET ?;',
          {
              first_name: data.firstName,
              last_name: data.lastName,
              role_id: data.employeeRoleID,
              manager_id: data.employeeManagerID
          },
          function (err, result) {
              if (err) { console.log(err) }
              console.table(result)
              init();
          })
      })
  };

  // Function to Update a role

  function updateRole() {
    var updateRoleQuestions = [
        {
            type: 'input',
            name: 'updateEmployee',
            message: 'Please enter the employee ID to update their role.'
        },
        {
            type: 'input',
            name: 'newRole',
            message: 'Please assign the new role ID to selected employee.'
        },
    ]

    inquirer.prompt(updateRoleQuestions)
        .then((data) => {
            connection.query('UPDATE employee SET role_id = ? WHERE id = ?',
            [data.newRole, data.updateEmployee],
            function (err, result) {
                if (err) { console.log(err) }
                console.table(result)
                init();
            })
        })
    };
      
