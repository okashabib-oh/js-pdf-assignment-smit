function questionOne() {
  let value_of_a = prompt("Enter  the value of 'A':");

  document.write(`<h1>Result:</h1>`);
  document.write(`<h1>The Value of a is:${value_of_a}</h1><hr>`);

  ++value_of_a;
  document.write(`The value of <b>++a</b> is: <b>${value_of_a}</b><br>`);
  document.write(`Now The value of <b>a</b> is: <b>${value_of_a}</b><br><br>`);
  console.log(value_of_a);

  document.write(`The value of <b>a++</b> is: <b>${value_of_a}</b><br>`);
  value_of_a++;
  document.write(
    `Now The value of <b>a++</b> is: <b>${value_of_a}</b><br><br>`
  );
  console.log(value_of_a);

  document.write(`The value of <b>--a</b> is: <b>${value_of_a}</b><br>`);
  --value_of_a;
  document.write(`Now The value of <b>a</b> is: <b>${value_of_a}</b><br><br>`);

  console.log(value_of_a);

  document.write(`The value of <b>a--</b> is: <b>${value_of_a}</b><br>`);

  value_of_a--;
  document.write(`NowThe value of <b>a--</b> is: <b>${value_of_a}</b><br>`);

  console.log(value_of_a);
}
// questionOne()

function questionTwo() {}

// questionTwo()

function questionThree() {
  let userName = prompt("Emter your name: ");

  document.write(`<h2>Welcome to our website, <b>${userName}</b></h2>`);
}

// questionThree();

// "Write a program to take input a number from user and display it's multiplication table on your browser. if user does not enter a new number, multiplication table of 5 should be displayed by default"


function questionSix(){
  let subjectOne = prompt("Enter first subject name:")
  let subjectSecond = prompt("Enter second subject name:")
  let subjectThird = prompt("Enter third subject name:")

  let totalMarks = 300;

  let subjectOneMarks = parseInt(prompt("Enter first subject marks: "))
  let subjectTwoMarks = parseInt(prompt("Enter second subject marks: "))
  let subjectThreeMarks = parseInt(prompt("Enter third subject marks: "))

  let obtainedMarks = subjectOneMarks + subjectTwoMarks + subjectThreeMarks;
  let result = obtainedMarks / totalMarks * 100;


  document.write(`
    <table border=1 width=500>

      <th>Subject</th>
      <th>Total Marks</th>
      <th>Obtained Marks</th>
      <th>Percentage</th>
      <tr>
        <td>${subjectOne}</td>
        <td>100</td>
        <td>${subjectOneMarks}</td>
        <td>${subjectOneMarks / 100 * 100}%</td>
      </tr>
      <tr>
        <td>${subjectSecond}</td>
        <td>100</td>
        <td>${subjectTwoMarks}</td>
        <td>${subjectTwoMarks / 100 * 100}%</td>
      </tr>
      <tr>
        <td>${subjectThird}</td>
        <td>100</td>
        <td>${subjectThreeMarks}</td>
        <td>${subjectThreeMarks / 100 * 100}%</td>
      </tr>
      <tr>
          <td></td>
          <td><b>${totalMarks}</b></td>
          <td><b>${obtainedMarks}</b></td>
          <td><b>${result.toFixed(2)}%</b></td>
      </tr>
    
    </table>
  `)
}

// questionSix()