const engineer = require("../lib/engineer");

describe("Engineer", () => {

  it("Should create an engineer object", () => {

    const test = new engineer("troy", "3", "tfreed94@gmail.com", "github");

    expect(test.name).toBe("troy");
    expect(test.id).toBe("3");
    expect(test.email).toBe("tfreed94@gmail.com");
    expect(test.github).toBe("github");
  });

  it("Should obtain role via getRole()", () => {
    const roleTest = "Engineer"
    const test = new engineer("troy", "3", "tfreed94@gmail.com", roleTest);

    expect(test.getRole()).toBe(roleTest);
  })

  it("Should obtain GitHub", () => {
    const gitTest = "https://github.com/tfreed94"
    const test = new engineer("troy", "3", "tfreed94@gmail.com", gitTest);

    expect(test.github).toBe(gitTest);
  })

});