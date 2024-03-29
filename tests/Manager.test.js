const manager = require("../lib/manager");

describe("Manager", () => {
  it("Should create an manager object", () => {
    const test = new manager("troy", "3", "tfreed94@gmail.com", "100");

    expect(test.name).toBe("troy");
    expect(test.id).toBe("3");
    expect(test.email).toBe("tfreed94@gmail.com");
    expect(test.officeNumber).toBe("100");
  });

  it("Should obtain role via getRole()", () => {
    const roleTest = "Manager";
    const test = new manager("troy", "3", "tfreed94@gmail.com", roleTest);

    expect(test.getRole()).toBe(roleTest);
  });

  it("Should obtain office number via getOfficeNumber()", () => {
    const officeTest = "100";
    const test = new manager("troy", "3", "tfreed94@gmail.com", officeTest);

    expect(test.getOfficeNumber()).toBe(officeTest);
  });
});