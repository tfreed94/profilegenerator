const intern = require("../lib/intern");

describe("Intern", () => {

  it("Should create an intern object", () => {

    const test = new intern("troy", "3", "tfreed94@gmail.com", "CWRU");

    expect(test.name).toBe("troy");
    expect(test.id).toBe("3");
    expect(test.email).toBe("tfreed94@gmail.com");
    expect(test.school).toBe("CWRU");
  });

  it("Should obtain role via getRole()", () => {
    const roleTest = "Intern"
    const test = new intern("troy", "3", "tfreed94@gmail.com", roleTest);

    expect(test.getRole()).toBe(roleTest);
  });

  it("Should obtain school via getSchool()", () => {
    const school = "CWRU"
    const test = new intern("troy", "3", "tfreed94@gmail.com", school);

    expect(test.getSchool()).toBe(school);
  });
});