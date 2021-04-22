const fs = require('fs');

function getDetail(item) {
    if (item.role === "Manager") {
        return `<li class="list-group-item">Office Number: ${item.officeNumber}</li>`
    } else if (item.role === "Engineer") {
        return `<li class="list-group-item">Github: <a href="http://www.github.com/${item.github}">${item.github}</a></li>`
    } else if (item.role === "Intern") {
        return `<li class="list-group-item">School: ${item.school}</li>`
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
                    .map((item) => {

                    return `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <div class="card-header bg-primary text-white">
                            <h4 class="card-title">${item.name}</h4>
                            <h5 class="card-title">${item.role}</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${item.id}</li>
                            <li class="list-group-item">Email: <a href = "mailto: ${item.email}">${item.email}</a></li>
                            ${getDetail(item)}
                        </ul>
                    </div>
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