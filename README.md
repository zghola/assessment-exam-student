# Assessment Test

This repository helps you (the student) with your assessment test. From this repo you will start your test, write your solution codes, and submit your answers using the command line.

## Getting Started

Please carefully follow the instructions below to get started:

---

> 0) To start, **CLONE** (not _fork_) the following repo to your local Vagrant machine:

```terminal
git clone git@github.com:lighthouse-labs/assessment-exam-student.git
```

---

> 1) Specify your **GitHub user name** in the file `.student-id` 

This file should contain only your **user name** (without any spaces, new lines, or other text).

* **NOTE: Ensure your user name is spelled correctly!** 

---

> 2) Install Required Packages

```terminal
npm install --no-bin-links
```

---

> 3) Start an Exam from a terminal window

Enter the command below to start an exam. 

* **NOTE:** replace `[EXAM-ID]` with the exam ID provided by the instructor
* Once you start the exam, the test timer will start (typically 3 hours).

```terminal
npm run start-exam [EXAM-ID]
```

This command downloads the test questions to your local file system. You should see new files in the `answers/` directory.

---

## Answering Questions

Now you're ready to start answering questions!

1. Open the `answers/` directory in your code editor to write your solution.

2. From the command line, execute a specific test question using the command below:

* **NOTE:** replace `[QUESTION-ID]` with the question number starting at 0

```terminal
npm run question [QUESTION-#]
npm run question 0
```

## Submission Grading

* You can submit questions multiple times during your development process
* Points are awarded based on how your solutions perform during evaluation
* Points are deducted for lint (style) errors
* Submissions will still be accepted after the end of the test period
