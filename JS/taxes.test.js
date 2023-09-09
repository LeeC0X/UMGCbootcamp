describe("calculateTaxes test", function () {
  it("should calculate the high tax bracket", function () {
    expect(calculateTaxes(5000)).toEqual(12500);
  });

  it("should reject invalid incomes", function () {
    expect(() => calculateTaxes("ahhaj")).toThrowError();
    expect(() => calculateTaxes(true)).toThrowError();
    expect(() => calculateTaxes([])).toThrowError();
  });

  it("should calculate the low tax bracket", function () {
    expect(calculateTaxes(10000)).toEqual(1500);
  });
});

describe("removeDupes tests", function () {
  it("should remove duplicates from an array", function () {
    expect(removeDupes([1, 1, 2, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  it("should remove duplicates from a string", function () {
    expect(removeDupes("hello")).toEqual("helo");
    expect(removeDupes("hello")).toBeInstanceOf(String);
  });
});
describe("remove tests", function () {
  it("should remove value from array", function () {
    expect(remove([1, 2, 3, 4, 5, 6], 6)).not.toContain(6);
  });
});

describe("submitForm() tests", () => {
  it("saves input val to usernames array", () => {
    input.value = "chickenGal";
    submitForm();
    expect(usernames.length).toBe(1);
    expect(usernames).toContain("chickenGals");
  });
  it("saves long usernames", () => {
    input.value = "dude eat asparagus";
    submitForm();
    expect(usernames.length).toBe(1);
  });
});
afterEach(function () {
  input.value = "";
  usernames = [];
});
