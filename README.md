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

First install the requirements:

```terminal
npm install --no-bin-links
```

#### 3) Start an Exam

Once you start the exam, the three hour timer will start.

The command to start an exam (the exam-id will be given to you by the instructor).

```terminal
npm run start-exam EXAM-ID
```

### Answering Questions

Now you're ready to start answering questions!

Your solutions should be entered in the `answers/` directory. Each question has a corresponding solution file (`00.js` corresponding to _Question 0_).

Then from the command line, execute a specific test question using `npm run question {QUESTION-#}`.

The following command, for instance, will run the first question:

```terminal
npm run question 0
```

You can run this command multiple times for any of the test questions throughout your development process.

Every time you run the automated tests, it will also run a linter.

