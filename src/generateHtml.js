const fs = require('fs');

function getDetail(teamArray) {
    if (getRole() === "Manager") {
        return `<li class="list-group-item">Office Number: ${getOfficeNumber()}</li>`
    } else if (getRole() === "Engineer") {
        return `<li class="list-group-item">Github: <a href="www.github.com/${getGithub()}">${getGithub()}</a></li>`
    } else if (getRole() === "Intern") {
        return `<li class="list-group-item">School: ${getSchool()}</li>`
    }
};

function generateHtml(teamArray) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">

    </head>
    <body>
        
    <div class="row align-items-start title">
        <h1 class="text-center text-white">My Team</h1>
    </div>

    <div class="container">
        <div class = "row">
                ${teamArray
                    .map(({ name, id, email, detail }) => {
                    return `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <div class="card-header bg-primary text-white">
                        <h4 class="card-title">${getName()}</h4>
                        <h5 class="card-title">${getRole()}</h5>
                    </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${getId()}</li>
                            <li class="list-group-item">Email: ${getEmail()}</li>
                            ${getDetail(teamArray)}
                        </ul>
                </div>
                `;
            })
            .join('')}
        </div>
    </div>

    </body>
    </html>
    `
}

module.exports = generateHtml;