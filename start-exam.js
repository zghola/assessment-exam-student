const fs = require("fs");
const APIClient = require("./api-client");
const Messages = require("./messages");

const examToken = process.argv[2] && process.argv[2].trim();

if (!examToken) {
  console.log(Messages.StartExamUsageInstructions)
  process.exit(1)
  return
}

try {
  const answerFiles = fs.readdirSync('./answers')
  if (answerFiles.length > 1) {
    throw new Error('Answer files exist, please remove them before continuing')
  }

  const testFiles = fs.readdirSync('./tests')
  if (testFiles.length > 1) {
    throw new Error('Test files exist, please remove them before continuing.')
  }
} catch (err) {
  console.log('An error has occured')
  console.log(err.message)
  process.exit(1)
  return
}

const apiClient = new APIClient();
console.log(`Contacting Server to Start Exam with token: "${examToken}"\n`);
apiClient.startExam(examToken, (err, res, body) => {
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

  writeMetadata(examToken, exam);

  console.log("\n"); // create blank space
});

const writeMetadata = (token, exam) => {
  const examData = {
    examId: exam.examId,
    token,
    linting: exam.lintingEnabled,
    type: exam.type
  };

  const examDataString = JSON.stringify(examData, null, 2);
  fs.writeFileSync(".exam-data", examDataString);
};

const writeSupportingFiles = (exam) => {
  if (!exam.supportingFiles || exam.supportingFiles.length === 0) {
    return;
  }

  console.log(""); // Empty line
  console.log("Writing Supporting Files:");
  exam.supportingFiles.forEach(({ name, content }) => {
    const path = `supporting-files/${name}`;
    const fileContent = Buffer.from(content, 'base64');
    console.log(`\tWriting file: ${path}`);
    fs.writeFileSync(path, fileContent);
  });
};

const printServerError = function (statusCode, body) {
  console.error(`Server Error (Status Code ${statusCode}):\n`);
  console.log(body.error);
};
