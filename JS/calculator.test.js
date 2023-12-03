it("should calculate the monthly rate correctly", function () {
  let values = {
    amount: 10000,
    years: 8,
    rate: 5.8,
  };
  expect(calculateMonthlyPayment(values)).toEqual("130.44");
});

it("should return a result with two decimal places", function () {
  let values = {
    amount: 10043,
    years: 8,
    rates: 5.8,
  };
  expect(calculateMonthlyPayment(values)).toEqual("131.00");
});

it("should handle high interests rates", function () {
  let values = {
    amount: 1000,
    years: 40,
    rate: 99,
  };
  expect(calculateMonthlyPayment(values)).toEqual("82.50");
});
