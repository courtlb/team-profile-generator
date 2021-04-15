const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

function Team () {
    this.manager;
    this.engineers = [];
    this.interns = [];
}

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
        this.manager = new Manager(name, id, email, officeNumber);
        console.log(this.manager);

        this.promptTeam()
        }) 
};

Team.prototype.promptTeam = function (teamArray) {

    // if (!teamArray.members) {
    //     teamArray.members = [];
    // }
    return inquirer
        .prompt([
        {
            type: "list",
            name: "add",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I'm finished building my team."]
        }
    ])
    .then(teamArray => {
        console.log(teamArray.add)

        if(teamArray.add === 'Engineer') {
            console.log(teamArray.add)
            return this.promptEngineer(teamArray);
        } else if (teamArray.add === 'Intern') {
            return this.promptIntern(teamArray);
        } else {
            return teamArray;
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
        this.engineer = new Engineer(name, id, email, github);
        console.log(this.engineer);
    }) 
    .then(teamMember => {
        teamArray.members.push(teamMember);
        return promptTeam(teamArray);
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
            name: "github",
            message: "What is your intern's school?"
        },
    ])
    .then(({ name, id, email, school }) => {
        this.intern = new Intern(name, id, email, school);
        console.log(this.intern);
    })
    .then(teamMember => {
        teamArray.members.push(teamMember);
        return promptTeam(teamArray);
    }) 
};

new Team().promptManager()
