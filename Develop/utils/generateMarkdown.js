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
  
  # Description
  ${description}
  
  # Table of Contents
  
      1. [Installation](#installation)
      2. [Usage](#usage)
      3. [License](#license)
      4. [Contributing](#contributing)
      5. [Tests](#tests)
      6. [Questions](#questions)
  
  # Installation
  ${install}
  
  # Usage
  ${usage}
  
  # License
  ${license}
  
  # Contributing
  ${contribution}

  # Tests
  ${test}

  # Questions
  If you have any questions please feel free to contact me on github or by email!

  Github: ${github}
  Email: ${email}`
}

module.exports = {
  renderReadMe: (info) => {
    fs.writeFile("README.md", renderReadMe(info), "utf8", (err) => {
      if (err) console.log(err);
      console.log("We wrote the file.")
      
    })
  }
}
