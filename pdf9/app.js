function questionOne() {
  let studentNames = [];
}

function questionTwo() {
  let studentNames = {
    names: [],
  };
}

function questionThree() {
  let myArray;

  myArray = ["MK-4", "R-35", "M5", ""];
}

function questionFour() {
  let myArray;

  myArray[(2, 65, 97, 23, 99)];
}

function questionFive() {
  let myArray;

  myArray[(true, false, true, false)];
}

function questionSix() {
  let myArray;

  myArray[("Yakutsk", 99, true, "New York", false)];
}

function questionSeven() {
  let availableQualification = [
    "SSC",
    "HSC",
    "BS",
    "BCOM",
    "MS",
    "M. Phil.",
    "PhD",
  ];

  for (i = 0; i < availableQualification.length; i++) {
    document.write(`<ul> <li> ${availableQualification[i]} </li> </ul> <br>`);
  }
}

// questionSeven();

function questionEight() {
  let studentNames = ["Rafay", "Subhan", "Sufyan"];
  let studentmarks = [467, 397, 401];
  let totalMarks = 500;

  for (i = 0; i < studentNames.length; i++) {
    document.write(
      `<h2 style="text-align:center;"> ${studentNames[i]} : Marks: ${
        studentmarks[i]
      }/${totalMarks}. Percentage: ${
        (studentmarks[i] / totalMarks) * 100
      }% </h2> <br> <br>`
    );
  }
}
// questionEight();

function questionNine() {
  let colorNames = [
    "white",
    "tan",
    "yellow",
    "orange",
    "red",
    "pink",
    "purple",
    "blue",
    "green",
    "brown",
    "gray",
    "black",
  ];
  console.log(colorNames);

  // document.write(`<h2>${colorNames}</h2>`);
  // document.write(`<br /> ${colorNames.length} Colors In List<br>`);

  // let addColorInput = prompt(
  //   "What color would you like to add in the beginig of list of colors?"
  // );

  // colorNames.unshift(addColorInput);
  // alert(`"${addColorInput}" has been added to the begining of list of colors.`);
  // console.log(colorNames);

  // let addColorInEndInput = prompt(
  //   "What color would you like to add in the end of list of colors?"
  // );

  // colorNames.push(addColorInEndInput);
  // alert(`"${addColorInEndInput}" has been added to the end of list of colors.`);
  // console.log(colorNames);

  // let firstColorInput = prompt(
  //   "Enter first color to add in the begining of color list"
  // );
  // let secondColorInput = prompt(
  //   "Enter second color to add in the begining of color list"
  // );

  // colorNames.unshift(firstColorInput, secondColorInput);
  // console.log(colorNames);

  // colorNames.shift();
  // document.write(`<h3>${colorNames}</h3>`);

  // colorNames.pop();
  // document.write(`<h3>${colorNames}</h3>`);

  // let userInputToAddColorOnIndex = prompt(
  //   "Enter the Index where you want to add the color: "
  // );
  // let userInputToAddColorNameOnIndex = prompt(
  //   "Enter the color name you want to add "
  // );

  // console.log(userInputToAddColorOnIndex);

  // console.log(userInputToAddColorNameOnIndex);

  // let index = parseInt(userInputToAddColorOnIndex);

  // colorNames.splice(index, 0, userInputToAddColorNameOnIndex);

  // console.log(colorNames);

  // document.write(`${colorNames}`);
  // document.write(`<br /> ${colorNames.length} Colors In List`);

  // let userInputToDelteAtIndex = prompt(
  //   "Enter the index you want to delete the number: "
  // );

  // let userInputToDeleteColorsCount = prompt(
  //   "Enter the number how many you want to delete"
  // );

  // let deleteIndex = parseInt(userInputToDelteAtIndex);

  // let colorIndex = parseInt(userInputToDeleteColorsCount);

  // colorNames.splice(deleteIndex, colorIndex);

  // console.log(deleteIndex);
  // console.log(colorIndex);

  // console.log(colorNames);
}

// questionNine();

function questionTen() {
  let studentScores = [320, 230, 480, 120, 301, 340, 109, 201];

  document.write(`<b>Scores of Students: ${studentScores} </b> <br> <br>`);

  studentScores.sort();

  document.write(`<b>Ordered Scores of Students: ${studentScores} </b>`);
}

// questionTen();

function questionEleven() {
  let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
  document.write(`Cities List: ${cities}<br><br>`);

  let selectedCities = [cities[2], cities[3]];

  document.write("Selected Cities are : ");

  for (let i = 0; i < selectedCities.length; i++) {
    document.write(selectedCities[i] + ", ");
  }
}

// questionEleven();

function questionTwelve() {
  let arr = ["This ", "is ", "my ", "cat"];

  document.write(`<b>Array: <br>${arr} </b><br><br>`);

  document.write(`<b>String: <br>${arr.join("")} </b><br><br>`);
}

// questionTwelve();

function questionThirteen() {
  let devices = [];

  devices.push("Keyboard");
  devices.push("Mouse");
  devices.push("Printer");
  devices.push("Monitor");

  for (i = 0; i < devices.length; i++) {
    console.log(`Out: ${devices[i]}`);
  }
}

// questionThirteen();

function questionFourteen() {
  let devices = [];

  devices.push("Keyboard");
  devices.push("Mouse");
  devices.push("Printer");
  devices.push("Monitor");

  for (i = devices.length - 1; i >= 0; i--) {
    console.log(`Out: ${devices[i]}`);
  }
}

// questionFourteen();

function questionFifteen() {
  let phoneManufacturers = [
    "Apple",
    "Samsung",
    "Motorolla",
    "Nokia",
    "Sonia",
    "LG",
  ];

  document.write(`<h1>Phone Manufacturers</h1>`);
  document.write(`<select>`);

  for (i = 0; i < phoneManufacturers.length; i++) {
    document.write(
      `
        <option value="${phoneManufacturers[i]}">
          ${phoneManufacturers[i]}
        </option>
      `
    );
  }

  document.write(`</select>`);
}

questionFifteen();
