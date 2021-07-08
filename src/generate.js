const teamGenerator = team => {
    // Template literal that will render manager card with user's input
    const managerTemplate = manager => {
        return `
        <div>
        <div class="card-header">
            <h2 class="card-title">${manager.names()}</h2>
            <h3 class="card-title">${manager.role()}</h3>
        </div>
        <div class="card-body">
            <p>ID: ${manager.ID()}</p>
            <p>Email: <a href="mailto:${manager.eMail()}">
            ${manager.eMail()}</a></p>
            <p>Office number: ${manager.office()}</p>
        </div>
        </div>
        `;
    };

    // Template Literal that will render engineer card with user's input
    const engineerTemplate = engineer => {
        return `
        <div>
    <div class="card-header">
        <h2 class="card-title">${engineer.names()}</h2>
        <h3 class="card-title">${engineer.role()}</h3>
    </div>
    <div class="card-body">
        <p>ID: ${engineer.ID()}</p>
        <p>Email: <a href="mailto:${engineer.eMail()}">
        ${engineer.eMail()}</a></p>
        <p>GitHub: <a href="https://github.com/${engineer.gitHub()}">
        ${engineer.gitHub()}</a></p>
    </div>
    </div>
        `;
    };

    // Template Literal that will render intern card with user's input
    const internTemplate = intern => {
        return `
        <div>
    <div class="card-header">
        <h2 class="card-title">${intern.names()}</h2>
        <h3 class="card-title">${intern.role()}</h3>
    </div>
    <div class="card-body">
        <p>ID: ${intern.ID()}</p>
        <p>Email: <a href="mailto:${intern.eMail()}">
        ${intern.eMail()}</a></p>
        <p>School: ${intern.schoolName()}</p>
    </div>
    </div>
        `;
    };


    const generatedHTML = [];
    generatedHTML.push(team.filter(employee => employee.role() === "Manager").map(manager => managerTemplate(manager)));
    generatedHTML.push(team.filter(employee => employee.role() === "Engineer").map(engineer => engineerTemplate(engineer)).join(""));
    generatedHTML.push(team.filter(employee => employee.role() === "Intern").map(intern => internTemplate(intern)).join(""));
    return generatedHTML.join("");
}


module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <title>Team Profiles</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<body>
    <div class="container-fluid">

        <div class="col-12">
            <h1 class="text-center">Team Profiles</h1>
        </div>
    </div>
    <div class="container-fluid">
        <div class="col-12 d-flex justify-content-center">${teamGenerator(team)}</div>
    </div>
</body>
</html>
    `;
};
