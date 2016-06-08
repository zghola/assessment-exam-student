const fs          = require("fs");
const APIClient   = require("./api-client");
const Messages    = require("./messages");

const studentId = fs.readFileSync("./.student-id", "utf8");
if (!studentId) {
  console.log(Messages.StudentIdWarning);
  process.exit(1);
}

const examId = process.argv[2] || "web-01";

const apiClient = new APIClient();
apiClient.startExam(studentId, examId, (err, res, body) => {
  const exam = body;
  for (let question of exam.questions) {
    if (!question) {
      continue;
    }
    
    // write exam files to local disk
    fs.writeFileSync(question.testPath, question.testCode);
    fs.writeFileSync(question.codePath, question.code);
  }
});
