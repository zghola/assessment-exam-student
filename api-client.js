const request = require("request");
const SUBMISSION_URL  = "http://127.0.0.1:3000/assessments/"; // TODO Update this submission URL
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
    }, (err, response, body) => {
      
      cb(err, response, body);
    });
  }
  
  submit(testResultData, cb) {
    request({
      url: SUBMISSION_URL,
      method: "POST",
      json: testResultData
    }, (err, response, body) => {
      
      cb(err, response, body);
    });
  }
}

module.exports = APIClient;
