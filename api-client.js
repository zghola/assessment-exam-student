const request = require("request");
const SUBMISSION_URL  = "http://127.0.0.1:3000/submissions/";
const EXAM_BASE_URL   = "http://127.0.0.1:3000/exams/";

class APIClient {
  startExam(studentId, examId="web-01", cb) {
    const url = EXAM_BASE_URL + examId;
    request({
      url: url,
      method: "POST",
      json: {
        studentId: studentId
      }
    }, cb);
  }
  
  submit(testResultData, cb) {
    request({
      url: SUBMISSION_URL,
      method: "POST",
      json: testResultData
    }, cb);
  }
}

module.exports = APIClient;
