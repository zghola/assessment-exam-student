# Assessment Exam

Let's start by cloning this repo to your local Vagrant machine

```terminal
git clone git@github.com:lighthouse-labs/assessment-exam-student.git
```

## Usage

Please complete the following setup steps before continuing:

### 1) Specify your **GitHub user name** in the file `.student-id` 

This file should contain only your user name (without any spaces, new lines, or other text).

### 2) Install Required Packages

```terminal
npm install --no-bin-links
```

### 3) Start an Exam from a terminal window

Enter the command to start an exam. (**NOTE:** replace `[EXAM-ID]` with the exam ID provided by the instructor)

```terminal
npm run start-exam [EXAM-ID]
```

Once you start the exam, the three hour timer will start.

## Answering Questions

Now you're ready to start answering questions!

Your solutions should be entered in the `answers/` directory.  For example, open `answers/00.js` in your text editor to write your solution code

Then from the command line, execute a specific test question using `npm run question [QUESTION-#]`. For instance,

```terminal
npm run question 0
```

You can submit questions multiple times during your development process.

Points are awarded based on how your solutions perform during evaluation.

Points are deducted for syntax errors.
