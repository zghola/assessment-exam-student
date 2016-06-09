const eslint  = require("eslint");
const fs      = require("fs");
const Mocha   = require("mocha");

const LINT_RULES = require("./lint-rules.json");

class TestRunner {
  constructor() {
    this.mocha = new Mocha();
  }

  run(questionNumber, cb) {
    const results = {
      examId:         "web-01", // TODO get this from config file or something (!)
      questionNumber: parseInt(questionNumber), 
      lintResults:    this.runLint(questionNumber),
      testResults:    null, // Mocha, next step
      errors:         []
    };
    
    try {
      this.runMocha(questionNumber)
        .then(
          (testResults) => {
            results.testResults = testResults;
            cb(null, results);
          },
          (err) => {
            console.console.error(err);
          });
    } catch (e) {
      console.error(e);
      results.errors.push(e);
      cb(e, results);
    }
  }

  runLint(questionNumber) {
    const lintOptions = { 
      rules: LINT_RULES,
      globals: { module: {} }
    };
    const codeFile = this.getCodeFile(questionNumber);
    const code = fs.readFileSync(codeFile, "utf8");
    return eslint.linter.verify(code, lintOptions);
  }
  
  runMocha(questionNumber, cb) {
    const testFile = this.getTestFile(questionNumber);
    return new Promise((resolve, reject) => {
      this.mocha.addFile(testFile);
      this.mocha
        .run((failures) => {})
        .on("end", function() {
          resolve(this.stats); // return test statistics
        });
    });
  }
  
  getCodeFile(questionNumber) {
    const paddedNumber = this.padNumber(questionNumber, 2);
    return `./answers/${paddedNumber}.js`;
  }
  
  getTestFile(questionNumber) {
    const paddedNumber = this.padNumber(questionNumber, 2);
    return `./tests/test_${paddedNumber}.js`;
  }
  
  padNumber(num, length) {
    let s = num+"";
    while (s.length < length) {
      s = "0" + s;
    }
    return s;
  }
}

module.exports = TestRunner;
