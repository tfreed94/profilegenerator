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
    const test = new employee("troy", "003", "tfreed94@gmail.com");

    expect(test.email).toEqual("tfreed94@gmail.com");
  });


});