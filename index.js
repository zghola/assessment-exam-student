const fs          = require("fs");

const SubmissionClient  = require("./submission-client");
const TestRunner        = require("./test-runner");

const studentId = fs.readFileSync("./.student-id", "utf8");
if (!studentId) {
  printStudentIdWarning();
  process.exit(1);
}

const testNumber = process.argv[2];
if (!testNumber) {
  printUsageInstructions();
  process.exit(1);
}

const testRunner = new TestRunner(studentId);
const submissionClient = new SubmissionClient();

testRunner.run(testNumber, (err, results) => {
  results.studentId = studentId.trim();
  
  submissionClient.submit(results, (err, response, body) => {
    if (err) {
      console.error(err);
    }
    printGradeResults(body);
  });
});

function printGradeResults(gradeObj) {
  console.log(gradeObj);
}

function printUsageInstructions() {
  console.log("Usage:");
  console.log("    npm run test {Test#}");
  console.log("Ex: npm run test 1");
}

function printStudentIdWarning() {
  console.warn("Enter a unique Student Id in the file .student-id");
}
