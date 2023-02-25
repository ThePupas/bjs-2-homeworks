"use strict"

const solveEquation = (a, b, c) => {
  const discriminant = ((b ** 2) - 4 * a * c);
  if (discriminant < 0) {
    return array = [];
  } else if (discriminant === 0) {
      return array = [-b / (2 * a)];
  } else {
      return [(-b + Math.sqrt(discriminant))/(2*a), (-b - Math.sqrt(discriminant)) / (2 * a)];
  }
};

// const testCase = (a, b, c) => console.log(solveEquation(a, b, c))
// testCase(11, 122, 4);

const calculateTotalMortgage = (percent, contribution, amount, countMonths) => {
  if (isNaN(percent) === true ||
      isNaN(contribution) === true ||
      isNaN(amount) === true ||
      isNaN(countMonths) === true) {
    return false
  } else {
    percent = (percent / 100) / 12;
    const loanBody = amount - contribution;
    const monthlyInstallment = loanBody * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
    const totalAmount = (monthlyInstallment * countMonths);
    return Number(totalAmount.toFixed(2));
  }
}; 



// const testCase = (a, b, c, d) => console.log(calculateTotalMortgage(a, b, c, d))
// testCase(10, 0, 50000, 12);
// testCase(10, 1000, 50000, 12);
// testCase(10, 0, 20000, 24);
// testCase(10, 1000, 20000, 24);
// testCase(10, 20000, 20000, 24);
// testCase(10, 0, 10000, 36);
// testCase(15, 0, 10000, 36);














