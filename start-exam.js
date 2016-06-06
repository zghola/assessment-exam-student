const fs          = require("fs");
const APIClient   = require("./api-client");

const studentId = fs.readFileSync("./.student-id", "utf8");
if (!studentId) {
  printStudentIdWarning();
  process.exit(1);
}

const examId = process.argv[2] || "web-01";

const apiClient = new APIClient();
apiClient.startExam(studentId, examId, (err, res, body) => {
  const exam = body;
  for (let question of exam.questions) {
    console.log('question', question);
  }
});
