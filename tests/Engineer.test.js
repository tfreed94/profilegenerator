const engineer = require("../lib/engineer");

describe("Engineer", () => {

  it("Should create an engineer object", () => {

    const test = new engineer("troy", "3", "tfreed94@gmail.com", "github");

    expect(test.name).toBe("troy");
    expect(test.id).toBe("3");
    expect(test.email).toBe("troyfreed@gmail.com");
    expect(test.title).toBe("Engineer");
    expect(test.github).toBe("github");
  });

  it("Should obtain role via getRole()", () => {
    const roleTest = "Engineer"
    const test = new engineer("troy", "3", "troyfreed@gmail.com", roleTest);

    expect(test.getRole()).toBe(roleTest);
  })

  it("Should obtain GitHub", () => {
    const gitTest = "https://github.com/tfreed94"
    const test = new engineer("troy", "3", "troyfreed@gmail.com", gitTest);

    expect(test.github).toBe(gitTest);
  })

  it("Should obtain GitHub via getGitHub()", () => {
    const gitTest = "https://github.com/tfreed94"
    const test = new engineer("troy", "3", "troyfreed@gmail.com", gitTest);

    expect(test.getGitHub()).toBe(gitTest);
  })
});