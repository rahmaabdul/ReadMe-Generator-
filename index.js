// TODO: Include packages needed for this applicatio
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your name?",
    name: "username",
  },
  {
    type: "input",
    name: "Title",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "Description",
    message: "Please write a short description of what your project is about",
  },
  {
    type: "input",
    name: "installation",
    message: "How to install your application?",
  },
  {
    type: "input",
    name: "Usage",
    message: "Describe the usage of this application",
  },
  {
    type: "input",
    name: "linkedin",
    message: "Enter your LinkedIn URL.",
  },

  {
    type: "input",
    name: "license",
    message: "Provide licenses",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  Fs.writefile(filename, data, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("Success! The README.md has been generated");
  });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
