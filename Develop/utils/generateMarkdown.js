const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const renderReadMe = ({ title, description, install, usage, contribution, test, license, github, email }) => {
  return `# ${title}
  ![GitHub License](INTERPOLATE LICENSE BDAGE HERE)
  
  # Description
  ${description}
  
  # Table of Contents
  
      * [Installation](#installation)
      * [Usage](#usage)
      * [License](#license)
      * [Contributing](#contributing)
      * [Tests](#tests)
      * [Questions](#questions)
  
  # Installation
  To install necessary dependencies, run the following command:
  ${install}
  
  # Usage
  Please do not copy!
  ${usage}
  
  # License
  This project is run under the ${license} license.
  
  # Contributing
  ${contribution}

  # Tests
  To test, run the following command:
  ${test}

  # Questions
  If you have any questions please feel free to email me at ${email}. You can view more of my work at ${github}.`
}

module.exports = {
  renderReadMe: (info) => {
    fs.writeFile("README.md", renderReadMe(info), "utf8", (err) => {
      if (err) console.log(err);
      console.log("We wrote the file.")
      
    })
  }
}
