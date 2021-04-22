const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./src/generateHtml');
const { writeFile, copyFile } = require('./utils/generateSite.js');

let teamArray = [];

function Team () {
    this.manager;
    this.engineers = [];
    this.interns = [];
}

Team.prototype.init = function(teamArray) {
    console.log(teamArray);
    generateHtml(teamArray);
    writeFile(generateHtml(teamArray));
};

Team.prototype.promptManager = function () {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the team manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the team manager's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the team manager's email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the team manager's office number?"
        },
    ])
    .then(({ name, id, email, officeNumber }) => {
        this.manager = new Manager(name, id, email, officeNumber, 'Manager');
        console.log(this.manager);

        teamArray.push(this.manager);
        return this.promptTeam(teamArray);
        }) 
};

Team.prototype.promptTeam = function (teamArray) {

    return inquirer
        .prompt([
        {
            type: "list",
            name: "add",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I'm finished building my team."]
        }
    ])
    .then(promptResults => {
        if(promptResults.add === 'Engineer') {
            return this.promptEngineer(teamArray);
        } else if (promptResults.add === 'Intern') {
            return this.promptIntern(teamArray);
        } else {
            return this.init(teamArray);
        }
    });
};

Team.prototype.promptEngineer = function(teamArray) {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your engineer's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your engineer's email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is your engineer's github username?"
        },
    ])
    .then(({ name, id, email, github }) => {
        this.engineer = new Engineer(name, id, email, github, 'Engineer');
        teamArray.push(this.engineer);
        console.log(teamArray);
        return this.promptTeam(teamArray);
    })
};

Team.prototype.promptIntern = function(teamArray) {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your intern's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "What is your intern's school?"
        },
    ])
    .then(({ name, id, email, school }) => {
        this.intern = new Intern(name, id, email, school, 'Intern');
        teamArray.push(this.intern);
        console.log(teamArray);
        return this.promptTeam(teamArray);
    }) 
};



new Team().promptManager()
    
