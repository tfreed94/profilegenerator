class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    eMail() {
        return this.email;
    }
    ID() {
        return this.id;
    }
    role() {
        return "Employee";
    }
    names() {
        return this.name;
    }
}
module.exports = Employee
