function questionOne(){
    let userInput = prompt("Enter city name:");
    if(userInput.toLowerCase() === "karachi"){
        document.write(`<h1>Welcome to the city of lights!</h1>`)
    }else{
        document.write(`<h1>You should enter karachi. It's a beautiful city.</h1>`);
    }
}

// questionOne()

function questionTwo(){
    let userInput = prompt(`Enter you gender:`);
    if(userInput.toLowerCase() === 'male'){
        document.write(`<h1>Good Morning Sir!</h1>`)
    }else if(userInput.toLowerCase() === 'female'){
        document.write(`<h1>Good Morning Ma'am!</h1>`)
    }else{
        document.write(`<h1 style="color: red">Invalid input!</h1>`)
    }
}

// questionTwo()

function questionThree(){
    let userInput = prompt('Enter signal light color to know rules of it. e.g: Red, Green or Yellow');

    if(userInput.toLowerCase() === 'red'){
        document.write(`<h1 style="color: red">Traffic light: Red</h1>`)
        document.write(`<b>Must stop!</b>`)

    }else if(userInput.toLowerCase() === 'yellow'){
        document.write(`<h1 style="color: yellow">Traffic light: Yellow</h1>`)
        document.write(`<b>Ready to move!</b>`)

    }else if(userInput.toLowerCase() === 'green'){
        document.write(`<h1 style="color: green">Traffic light: Green</h1>`)
        document.write(`<b>Move now</b>`)

    }else{
        document.write(`<h1 style="color: red">Invalid input!  Please follow instructions.</h1>`)
    }
}

// questionThree()


function questionFour(){
    let userInput = prompt('Enter remaining fuel in car (in liters):');

    if (userInput < 0.25){
        document.write(`<h1 style="color: red">Please refill the fuel in your car</h1>`)
    }else{
        document.write(`<h1>Your fuel level is sufficient.</h1>`)
    }
}

// questionFour()

function questionFive(){
    var a = 4;

    if(++a === 5){
        console.log('Given condition is true!');
    }else{
        console.log('given condition for variable a is false!')
    }

    var b = 82
    if(b++ === 83){
        console.log("Given condition for variable is true!");
    }else{
        console.log("The given condition for variable b is false!")
    }

    var c = 12

    if(c++ === 13){
        console.log('Condition 1 is true!');
    }
    if(c === 13){
        console.log('Condition 2 is true!');
    }
    if(++c < 14){
        console.log('Condition 3 is true!');
    }
    if(c === 14 ){
        console.log('Condition 4 is true!');
    }

    var materialCost = 2000
    var laborCost = 2000
    var totalCost = materialCost + laborCost

    if(totalCost === laborCost + materialCost){
        console.log(`The cost equals`);
    }

    // if(true){
    //     console.log("True");
    // }

    // if(false){
    //     console.log("False");
    // }

    if("car" < "cat"){
        console.log("car is smaller then cat");
    }
}

// questionFive()

function questionSix(){
    let computerMarks = prompt("Enter your computer marks: ")
    let mathsMarks = prompt("Enter your Maths marks: ")
    let physicsMarks = prompt("Enter your Physics marks: ")
    
    let  obtainedMarks = parseInt(computerMarks) + parseInt(mathsMarks) + parseInt(physicsMarks)
    const totalMarks = 300;

    let percentage = obtainedMarks / totalMarks * 100;
    let remarks;
    let grade;

    if(percentage>=80){
        grade = "A-one";
        remarks = "Excellent"
    }else if(percentage >= 70){
        grade = "A"
        remarks = "Good"
    }else if(percentage >= 60){
        grade = "B";
        remarks = "You need to improve"
    }else if(percentage < 60){
        grade = "Fail"
        remarks = "Sorry"
    }

    document.write(`<h1>Marks Sheet</h1>`)
    document.write(`<b>Total Marks: ${totalMarks}</b><br>`)
    document.write(`<b>Marks obtained: ${obtainedMarks}</b><br>`)
    document.write(`<b>Percentage: ${percentage}%</b><br>`)
    document.write(`<b>Grade: ${grade}</b><br>`)
    document.write(`<b>Remarks: ${remarks}</b><br>`)

}

// questionSix()

function questionSeven(){
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);

    let userInput = prompt("Guess the secret number between 1 to 10")

    if(userInput == randomNumber){
        document.write(`Bingo! Correct answer`)
    }else if(userInput == randomNumber + 1 ||  userInput == randomNumber - 1){
        document.write(`Close enough to the correct answer`)
    }else{
        document.write(`Wrong Answer The correct answer was <b>${randomNumber}</b>`);
    }
}

// questionSeven()
function questionEight(){
    let userInput = prompt("Enter number to check if it is divisible by 3.")

    if(userInput % 3 == 0){
        document.write(`Your number is divisible by 3`)
    }else{
        document.write(`Your number is not divisible by 3`)
    }
}

// questionEight()

function questionNine(){
    let userInput = prompt("Enter number to check if it is even or odd")

    if(userInput % 2 == 0){
        document.write("Your number is even")
    }else{
        document.write(`Your  number is odd`)
    }
}

// questionNine()

function questionTen(){
    let userInput = prompt("Enter temperature in Centigrade")

    if(userInput > 40){
        document.write("It's hot outside")
    }else if(userInput > 30){
        document.write(`The weather today is normal.`)
    }else if(userInput > 20){
        document.write(`Today's weather is cool.`)
    }else if(userInput > 10){
        document.write(`OMG! Today's weather is so Cool.`)
    }
}

// questionTen()


function questionEleven(){
    let firstNum = prompt("Enter first number: ")
    let secondNum = prompt("Enter second number: ")
    let operation = prompt("What operation you want to perform? +, -, *, /")
    if(operation == '+'){
        result = parseInt(firstNum) + parseInt(secondNum)
        document.write(`${firstNum} + ${secondNum} = ${result} `)
    }else if(operation == '-'){
        result = parseInt(firstNum) - parseInt(secondNum)
        document.write(`${firstNum} - ${secondNum} = ${result}`)
    }else if(operation == '*'){
        result = parseInt(firstNum) + parseInt(secondNum)
        document.write(`${firstNum} - ${secondNum} = ${result}`)
    }else if(operation == '/'){
        result = parseInt(firstNum) / parseInt(secondNum)
        document.write(`${firstNum} / ${secondNum} = ${result}`)
    }else{
        document.write(`<h1 style="color: red; text-align: center;">Invalid input</h1>`)
    }
}

// questionEleven()