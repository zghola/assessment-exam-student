## Assessment Exam

Let's start by cloning this repo to your local Vagrant machine

```terminal
git clone git@github.com:lighthouse-labs/assessment-exam-student.git
```

### Usage

You'll need to complete the following setup steps before continuing:

#### 1) Student Id

Specify your **GitHub user name** in the file `.student-id`. 

This file should contain only your user name (without any spaces, new lines, or other text).

#### 2) Install Required Packages

First install the requirements (`npm install`).

#### 3) Start an Exam

The command to start an exam `npm run start-exam {EXAM-ID}`

```terminal
npm run start-exam web-01
```

#### 4) Running Test Questions

Then from the command line, execute a specific test question using `npm run question {QUESTION-#}`

For instance:

```terminal
npm run question 0
```

You can run this command multiple times for any of the test's questions throughout your development process.

### Answering Questions

Now you're ready to start answering questions!

Your solutions should be entered in the `answers/` directory. Each question has a corresponding solution file (`00.js` corresponding to _Question 0_).



### Debugging Questions Independently

You can run your code independently by doing: `node answers/00.js`
