// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "![License: MIT](https://img.shields.io/badge/licence-MIT-green)";

    case "Boost Software License 1.0":
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]";

    case "Apache 2.0 License":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";

    case "None":
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";

    case "Boost Software Licence 1.0":
      return "https://www.boost.org/LICENSE_1_0.txt";

    case "Apache 2.0 License":
      return "https://opensource.org/licenses/Apache-2.0";

    case "None":
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Description](#description)
  * [Usage](#usage)
  * [License](#license)
  * [Questions](#questions)
   
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
 



`;
}

module.exports = generateMarkdown;
