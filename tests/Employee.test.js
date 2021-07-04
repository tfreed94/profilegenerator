const employee = require("../lib/employee");

describe("Employee", () => {

  it("Obtain a name", () => {

    const test = new employee("troy");

    expect(test.name).toEqual("troy");
  });

  it("Obtain an ID", () => {
    const test = new employee("troy", "003");

    expect(test.id).toEqual("003");
  });

  it("Obtain an email", () => {
    const test = new employee("troy", "003", "troyfreed@gmail.com");

    expect(test.email).toEqual("troyfreed@gmail.com");
  });

  it("Obtain employee title", () => {
    const test = new employee("troy", "003", "troyfreed@gmail.com");

    expect(test.title).toEqual("Employee");
  });


});