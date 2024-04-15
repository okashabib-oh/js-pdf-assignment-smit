function questionOne() {
  let myArray = [[], [], []];
  console.log(myArray);
}

// questionOne();

function questionTwo() {
  let myArray = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1],
  ];

  console.log(myArray);
}

// questionTwo();

function questionThree() {
  let i = 1;

  for (i; i <= 10; i++) {
    console.log(i);
  }
}

// questionThree();

function questionFour() {
  let multiplyNumber = prompt(
    "Enter a number to show its multiplicatio table "
  );

  let lengthOfTable = prompt("Enter length of multiplication table");

  document.write(
    `<h2 style="text-align: center;">Multiplication table of <b>${multiplyNumber} </b></h2>`
  );
  document.write(
    `<h2 style="text-align: center;">Length of Table <b>${lengthOfTable}</b></h2>`
  );

  for (let i = 1; i <= lengthOfTable; i++) {
    let number = multiplyNumber * i;
    document.write(
      `<p style="text-align: center;"> ${multiplyNumber} x ${i} = ${number}<p>`
    );
  }
}

// questionFour();

function questionFive() {
  let fruitsArray = ["apple", "banana", "mango", "orange", "strawberry"];

  for (let i = 0; i < fruitsArray.length; i++) {
    document.write(`<h2>Element at index ${i} is ${fruitsArray[i]}</h2>`);
  }
}

// questionFive();

function questionSix() {
  document.write(`<h1>Counting: </h1>`);

  for (i = 0; i <= 15; i++) {
    document.write(`<b>${i},</b> `);
  }

  document.write("<h1>Reverse Counting</h1>");

  for (i = 10; i > 0; i--) {
    console.log(i);
    document.write(`<b>${i},</b> `);
  }

  document.write("<h1>Even: </h1>");

  for (i = 0; i <= 20; i += 2) {
    document.write(`<b>${i}, </b> `);
  }

  document.write("<h1>Odd: </h1>");
  for (i = 1; i <= 19; i += 2) {
    document.write(`<b>${i},</b> `);
  }

  document.write("<h1>Series: </h1>");

  for (i = 1; i <= 10; i++) {
    document.write(`<b>${2 * i}k, </b> `);
  }
}

// questionSix();

function questionSeven() {
  let items = ["cake", "apple pie", "cookie", "chips", "patties"];

  let userInput = prompt(
    "Welcome to 7even Bakery. What do you want to order sir/ma'am?"
  ).toLowerCase();

  let found = false;

  for (let i = 0; i < items.length; i++) {
    if (userInput === items[i]) {
      document.write(
        `<h1 style="text-align: center;">${userInput} is <b  style="color: green;"> available </b> at index ${i} in our bakery</h1>`
      );
      found = true;
      break;
    }
  }

  if (!found) {
    document.write(
      `<h1 style="text-align: center;">We are sorry ${userInput} is <b style="color: red;"> not available </b> in our bakery</h1>`
    );
  }
}

// questionSeven();

function questionEightNine() {
  let myArray = [24, 53, 78, 91, 12];

  let smallest = Math.min(...myArray);
  console.log("The smallest number in array is: ", smallest);

  let largest = Math.max(...myArray);
  console.log("The largest number in array is: ", largest);
}

questionEightNine();

function questionTen() {
  for (i = 1; i <= 20; i++) {
    document.write(`<b>${5 * i}, </b>`);
  }
}

// questionTen();
