const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === 'Mozilla') {
    license = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  } else if (license === 'Apache 2.0') {
    license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === 'Artistic License 2.0') {
    license = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
  } else {
    license = ""
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const renderReadMe = ({ title, description, install, usage, contribution, test, license, github, email }) => {
  renderLicenseBadge({ license });
  return `# ${title}
  ${license}
  
  # Description
  ${description}
  
  # Table of Contents
  
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions](#questions)
  
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
  If you have any questions please feel free to email me at ${email}. You can view more of my work at @${github} on GitHub!`
}

module.exports = {
  generateContent: (info) => {
    fs.writeFile("README.md", renderReadMe(info), "utf8", (err) => {
      if (err) console.log(err);
      console.log("We wrote the file.")
      
    })
  }
}
