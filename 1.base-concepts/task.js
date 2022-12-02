"use strict"
function solveEquation (a, b, c) {
  let arr = [];
  let discriminant;

  discriminant = b**2 - 4*a*c;

  if (discriminant < 0) {
    return arr;
  } else if (discriminant === 0) {
    arr[0] = -1 * b / (2 * a);
    return arr;
  } else if (discriminant > 0) {
    arr[0] = (-1 * b + Math.sqrt(discriminant)) / (2 * a);
    arr[1] = (-1 * b - Math.sqrt(discriminant)) / (2 * a);
    return arr;
  }
  
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  let percentType = typeof percent;
  let contributionType = typeof contribution;
  let amountType = typeof amount;
  let countMonthsType = typeof countMonths;

  let monthPercentRate = 0;
  let sumBack = 0;
  let monthPayment = 0;
  let generalSum = 0;
  
  if (percentType != 'number') {
    if (isNaN(parseFloat(percent))) {
      return false;
    } else {
      percent = parseFloat(percent);
    }
  }

  if (contributionType != 'number') {
    if (isNaN(parseFloat(contribution))) {
      return false;
    } else {
      contribution = parseFloat(contribution);
    }
  }

  if (amountType != 'number') {
    if (isNaN(parseFloat(amount))) {
      return false;
    } else {
      amount = parseFloat(amount);
    }
  }

  if (countMonthsType != 'number') {
    if (isNaN(parseFloat(countMonths))) {
      return false;
    } else {
      countMonths = parseFloat(countMonths);
    }
  }

  monthPercentRate = percent / 100 / 12;
  sumBack = amount - contribution;

  monthPayment = sumBack * (monthPercentRate  + (monthPercentRate / (((1 + monthPercentRate) ** countMonths) - 1)));

  generalSum = monthPayment * countMonths;

  generalSum = Number(generalSum.toFixed(2));

  return generalSum;

}