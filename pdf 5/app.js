function addOperation() {
  let firstNum = prompt("Enter first number for Addition: ");
  let secondNum = prompt("Enter second number for Addition: ");

  let result = parseInt(firstNum) + parseInt(secondNum);

  document.write(`Addition of ${firstNum} and ${secondNum} is ${result} <br>`);
}

// mathOperation();

function subtractOperation() {
  let firstNum = prompt("Enter first number for subtraction: ");
  let secondNum = prompt("Enter second number for subtraction: ");

  let result = parseInt(firstNum) - parseInt(secondNum);

  document.write(
    `Subtraction of ${firstNum} and ${secondNum} is ${result} <br>`
  );
}
// subtractOperation();

function multiplyOperation() {
  let firstNum = prompt("Enter first number for Multiplication: ");
  let secondNum = prompt("Enter second number for Multiplication: ");

  let result = parseInt(firstNum) * parseInt(secondNum);

  document.write(
    `Multiplication of ${firstNum} and ${secondNum} is ${result} <br>`
  );
}
// multiplyOperation();

function divideOperation() {
  let firstNum = prompt("Enter first number for Division: ");
  let secondNum = prompt("Enter second number for Division: ");

  let result = parseInt(firstNum) / parseInt(secondNum);

  document.write(`Division of ${firstNum} and ${secondNum} is ${result} <br>`);
}

// divideOperation();

function questionTwo() {
  let intialValue = 9;

  document.write(`Initial value is <b>${intialValue} </b> <br>`);
  intialValue++;

  document.write(`Initial value after increment is <b>${intialValue}</b> <br>`);

  intialValue += 7;

  document.write(`Initial value after addition is <b>${intialValue} </b><br>`);

  intialValue--;

  document.write(`Initial value after decrement is <b>${intialValue}</b> <br>`);

  intialValue %= 3;

  document.write(`The remainder is <b>${intialValue}</b> <br>`);
}

// questionTwo();

function questionFour() {
  let ticketPrice = 600;
  ticketPrice *= 5;

  document.write(
    `Total cost to buy 5 tickets to movie is ${ticketPrice} PKR <br> `
  );
}

// questionFour();

function questionFive() {
  let inputTable = prompt("Enter a number for table");

  for (let i = 1; i <= 10; i++) {
    let result = inputTable * i;
    document.write(`${inputTable} x ${i} = ${result}<br>`);
  }
}

// questionFive();

function questionSix() {
  let fahrenheitTemp = prompt(
    "Enter temperature in Fahrenheit to convert in celsius: "
  );
  let convertCelsius = ((fahrenheitTemp - 32) * 5) / 9;
  let convertedCel = `Temperature in Celsius : <b> ${convertCelsius}°C </b><br>`;
  document.write(convertedCel);

  let celsiusTemp = prompt(
    "Enter temperature in Celsius to convert in  Fahrenheit: "
  );

  let convertInFahrenheit = (celsiusTemp * 9) / 5 + 32;
  let convertedFah = `Temperature in Fahrenheit is: <b>${convertInFahrenheit}°F </b>`;
  document.write(convertedFah);
}

// questionSix();

function questionSeven() {
  let heading = "Shopping Cart";
  document.write(`<h1>${heading}<hr></h1>`);
  let itemOnePrice = 650;
  let itemoneQuantity = 3;
  let itemOneResult = `Item one Price is <b>$${itemOnePrice} </b><br> Item quantity is <b> $${itemoneQuantity} </b><br><hr>`;

  document.write(itemOneResult);

  let itemTwoPrice = 120;
  let itemTwoQuantity = 8;
  let itemTwoResult = `Item Two Price is <b>$${itemTwoPrice} </b><br> Item Two quantity is <b> $${itemTwoQuantity} </b><br><hr>`;
  document.write(itemTwoResult);

  let shippingCharges = 100;
  document.write(`Shipping Charges is <b> $${shippingCharges} </b><hr>`);

  let total =
    itemOnePrice * itemoneQuantity +
    itemTwoPrice * itemTwoQuantity +
    shippingCharges;

  document.write(`Total cost of your order is <b> $${total} </b><hr>`);
}

// questionSeven();

function questionEight() {
  let heading = "Mark Sheet";
  document.write(`<h1>${heading}</h1><hr>`);

  let totalMarks = 800;
  let obtainedMarks = parseInt(prompt("Enter the marks you got :"));

  let percentage = (obtainedMarks / totalMarks) * 100;

  document.write(`Total Marks: <b> ${totalMarks} </b><br>`);
  document.write(`Obtain Marks: <b> ${obtainedMarks} </b><br>`);
  document.write(`Percentage:  <b> ${percentage}% </b><br>`);
}

// questionEight();

function questionNine() {
  let heading = "Currency in PKR";
  document.write(`<h1> ${heading}</h1>`);

  let dollar = 104.8;
  let riyal = 28;

  let convertToPkr = dollar * 10 + riyal * 25;
  document.write(`Total Currency in PKR: <b> ${convertToPkr} </b>`);
}

// questionNine();

function questionTen() {
  let result = ((9 + 10) * 10) / 2;
  console.log(result);
}

// questionTen();

function questionEleven() {
  let heading = "Age Calculator";

  document.write(`<h1>${heading}</h1>`);
  let currentYear = 2024;
  let birthYear = 2003;

  document.write(`Current Year is: <b>${currentYear}</b>`);
  document.write(`<br>Birth Year is: <b>${birthYear}</b><br>`);

  let age = currentYear - birthYear;

  document.write(`Your age is:<b> ${age}</b>`);

  console.log(age);
}
// questionEleven();

function questionTwelve() {
  let heading = "The Geometrizer";

  document.write(`<h1>${heading}</h1>`);

  let circleRadius = 20;
  let piValue = 3.142;

  document.write(`Radius of a circle is <b>${circleRadius}</b>.`);
  let circumFerence = 2 * piValue;
  let resultCircumFerence = circumFerence * circleRadius;

  document.write(`<br>The circumference is <b>${resultCircumFerence}</b>`);

  let area = piValue * circleRadius ** 2;
  document.write(`<br>The area is <b>${area}</b>`);
  console.log(area);
  console.log(circumFerence * circleRadius);
}
// questionTwelve();

function questionThirteen() {
  let heading = "THE lifetime supply calculator";

  document.write(`<h1>${heading}</h1>`);
  let favouriteSnack = "Pizza";

  let currentAge = 21;

  let maximumAge = 99;

  let estimatedAmount = 2;

  document.write(`Favourite Snack: <b>${favouriteSnack}</b><br><br>`);
  document.write(`Current Age: <b>${currentAge}</b><br><br>`);
  document.write(`Estimated maximum Age: <b>${maximumAge}</b><br><br>`);
  document.write(`Amount of snacks per day: <b>${estimatedAmount}</b><br><br>`);

  let remainingYears = maximumAge - currentAge;

  let totalSupply = remainingYears * estimatedAmount;

  console.log(
    "You will need " +
      totalSupply +
      " " +
      favouriteSnack +
      " to last you until the ripe old age of " +
      maximumAge +
      "."
  );

  document.write(
    `You will need <b>${totalSupply} ${favouriteSnack}</b> to last you until the ripe old age of <b>${maximumAge}</b>`
  );
}
// questionThirteen();
