function questionOne() {
  let userInput = prompt("Enter your input: ");

  let input = userInput.charCodeAt;

  let message;

  if (input >= 65 && input <= 90) {
    message = "Your input is a Cpital letter";
  } else if (input >= 97 && input <= 122) {
    message = "Your input is lowercase  letter";
  } else if (input >= 48 && input <= 57) {
    message = "Your input is a Number";
  }
}

let input1 = "64";
console.log(input1.charCodeAt());

function questionTwo() {
  let userInputFirst = prompt("Enter first number: ");
  let userInputSecond = prompt("Enter second number: ");

  let message;

  if (userInputFirst > userInputSecond) {
    message = `${userInputFirst} is larger `;
  } else if (userInputFirst < userInputSecond) {
    message = `${userInputSecond} is larger`;
  } else {
    message = "Both numbers are equal";
  }

  document.write(
    `<h2 style="text-align: center;">First Number: ${userInputFirst}</h2>`
  );

  document.write(
    `<h2 style="text-align: center;">Second Number: ${userInputSecond}</h2>`
  );

  document.write(
    `<b style="display: flex; align-items: center; justify-content: center; text-align: center; background: green; padding: 20px; color: white; border-radius: 20px;">${message}</b>`
  );
}

// questionTwo()

function questionThree() {
  let userInput = prompt("Enter the number: ");

  let message;

  if (userInput >= 0) {
    message = " is a positive number.";
  } else if (userInput < 0) {
    message = " is a negative number.";
  } else {
    message = "is an Invalid entry. Please enter a number.";
  }
  document.write(
    `<h2 style="text-align: center;"> "${userInput}"  ${message} </h2>`
  );
}

// questionThree();

function questionFour() {
  let userInput = prompt("Enter a vowels");

  if (
    userInput == "a" ||
    userInput == "e" ||
    userInput == "i" ||
    userInput == "o" ||
    userInput == "u"
  ) {
    document.write(
      `<h2 style="text-align: center;"><b style= "color:green;">"True"</b> ${userInput} is vowel. </h2><br>`
    );
  } else {
    document.write(
      `<h2 style="text-align: center;"><b style= "color:red;">"False"</b> ${userInput} is not a vowel. </h2><br>`
    );
  }
}
// questionFour();

function questionFive() {
  let message;

  let password = "123456789";

  let enterPassword = prompt("Enter your password: ");

  if (enterPassword === "") {
    message = "Please enter your password!";
  } else if (enterPassword === password) {
    message = "Correct! The password you entered matches the original password";
  } else {
    message = "inCorrect! password";
  }
  console.log(message);
}
// questionFive();

function questionSix() {
  var greeting;

  var hour = 13;

  if (hour < 18) {
    greeting = "Good day";
  } else {
    greeting = "Good Evening";
  }

  console.log(greeting);
}

// questionSix()

function questionSeven() {
  let message;
  let userInput = prompt("Enter time in 24 hours format without ':' ");

  let time = parseInt(userInput);

  let startTime = "0000";
  if (time >= parseInt(startTime) && time < 1200) {
    message = "Good Morning";
  } else if (time >= 1200 && time < 1700) {
    message = "Good Afternoon";
  } else if (time >= 1700 && time < 2100) {
    message = "Good Evening";
  } else if (time >= 2100 && time <= 2359) {
    message = "Good night!";
  } else {
    message = "Invalid input";
  }

  console.log(message);
}

// questionSeven()
