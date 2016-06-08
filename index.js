const fs          = require("fs");

const APIClient   = require("./api-client");
const Messages    = require("./messages");
const TestRunner  = require("./test-runner");

const studentId = fs.readFileSync("./.student-id", "utf8");
if (!studentId) {
  console.log(Messages.StudentIdWarning);
  process.exit(1);
}

const questionNumber = process.argv[2];
if (!questionNumber) {
  console.log(Messages.UsageInstructions);
  process.exit(1);
}

const testRunner = new TestRunner();
const apiClient = new APIClient();

testRunner.run(questionNumber, (err, results) => {
  results.studentId = studentId.trim();
  apiClient.submit(results, (err, response, body) => {
    if (err) {
      console.error(err);
    }
    console.log(body);
  });
});
