const fs          = require("fs");
const APIClient   = require("./api-client");
const Messages    = require("./messages");

const studentId = fs.readFileSync("./.student-id", "utf8");
if (!studentId) {
  console.log(Messages.StudentIdWarning);
  process.exit(1);
}

const examId = process.argv[2] || "web-01";
const examDataString = JSON.stringify({examId: examId}, null, 2);
fs.writeFileSync(".exam-data", examDataString);

const apiClient = new APIClient();
console.log(`Contacting Server to Start Exam "${examId}"\n`);
apiClient.startExam(studentId, examId, (err, res, body) => {
  "use strict";     // TODO remove this with newer versions of Node.js

  if (err) {
    console.error(`Error: (${err.code})`);
    console.warn("Your test has NOT been started!\n");
    return;
  }
  if (res.statusCode != 200) {
    return printServerError(res.statusCode, body);
  }
  const exam = body;
  console.log(`Server Response: ${exam.questions.length} Questions:`);
  for (let question of exam.questions) {
    if (!question) {
      continue;
    }

    // write exam files to local disk
    // TODO check if file exists already (avoid overwriting)

    fs.writeFileSync(question.testPath, question.testCode);
    console.log(`\tCreating Question ${question.questionId}\t(${question.maxScore} Points)\tAnswer file: ${question.codePath}`);
    fs.writeFileSync(question.codePath, question.code);
  }
  writeSupportingFiles(exam);

  console.log("\n"); // create blank space
});

const writeSupportingFiles = (exam) => {
  if (!exam.supportingFiles) {
    return;
  }

  console.log(""); // Empty line
  console.log("Writing Supporting Files:");
  exam.supportingFiles.forEach(({name, content}) => {
    const path = `supporting-files/${name}`;
    const fileContent = Buffer.from(content, 'base64');
    console.log(`\tWriting file: ${path}`);
    fs.writeFileSync(path, fileContent);
  });
};

const printServerError = function(statusCode, body) {
  console.error(`Server Error (Status Code ${statusCode}):\n`);
  console.log(`${body}`);
};
