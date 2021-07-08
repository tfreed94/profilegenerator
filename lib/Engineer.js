const Employee = require("./Employee");
class Engineer extends Employee {
    
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    gitHub() {
        return this.github;
    }
    role() {
        return "Engineer";
    }

}
module.exports = Engineer;
