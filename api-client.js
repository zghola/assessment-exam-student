"use strict"      // TODO remove this with newer versions of Node.js

const request = require("request");

const BASE_URL        = "https://lighthouse-proctologist.herokuapp.com";
const EXAM_BASE_URL = `${BASE_URL}/api/v2/exams`;

class APIClient {
  startExam(examToken, cb) {
    request({
      url: EXAM_BASE_URL,
      auth: { bearer: examToken },
      json: {} // Set to automatically parse response as JSON
    }, cb);
  }

  submit(testResultData, cb) {
    request({
      url: `${EXAM_BASE_URL}/${testResultData.examId}`,
      auth: { bearer: testResultData.examToken },
      method: "POST",
      json: testResultData
    }, cb);
  }
}

module.exports = APIClient;
