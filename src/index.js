/*********************************
 * VARIABLES
 *********************************/

const instituteName = "GBTechive";
const programName = "PSEB Internship";
const durationMonths = 3;

let internName = "Rehmat Ali";
let attendance = 95;

console.log("Institute:", instituteName);
console.log("Program:", programName);
console.log("Duration:", durationMonths, "months");
console.log("Intern:", internName);
console.log("Attendance:", attendance + "%");

/*********************************
 * CONDITIONS (if / else)
 *********************************/

if (attendance >= 90) {
  console.log("Attendance Status: Excellent 👍");
} else if (attendance >= 75) {
  console.log("Attendance Status: Good 🙂");
} else {
  console.log("Attendance Status: Needs Improvement ❌");
}

/*********************************
 * LOOPS
 *********************************/

/* FOR LOOP */
for (let day = 1; day <= 5; day++) {
  console.log("Internship Day:", day);
}

/* WHILE LOOP */
let task = 1;
while (task <= 3) {
  console.log("Completing Task:", task);
  task++;
}

/*********************************
 * ARRAYS WITH LOOP
 *********************************/

const technologies = ["HTML", "CSS", "JavaScript", "Node.js"];

for (const tech of technologies) {
  console.log("Learning Technology:", tech);
}

/*********************************
 * FINAL MESSAGE
 *********************************/

console.log("Daily internship practice completed successfully 🚀");
