const licenses = ["Apache-2.0", "GPL-2.0", "GPL-3.0", "ISC", "MIT"];

// TODO: Create a function that return a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case "Apache-2.0":
            return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
        case "GPL-2.0":
            return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]`;
        case "GPL-3.0":
            return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
        case "ISC":
            return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]`;
        case "MIT":
            return `[![License:](https://img.shields.io/badge/License-MIT-blue.svg)]`;
        default:
            return '';
    }
}

// TODO: Create a function that returns the license link
// If there is a no license, return an empty string
function renderLicenseLink(license) {
    const temp = licenses.find((licenseFilter) => licenseFilter === license);

    if (temp) {
        return `(https://choosealicense.com/licenses/${license.toLowerCase()}/)`
    } else {
        return '';
    }
    
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    const temp = licenses.find((licenseFind) => licenseFind === license);
    if (temp) {
        return `Distributed under the ${temp} License.`;
    } else {
        return '';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.name}
${renderLicenseBadge(data.license) + renderLicenseLink(data.license)}

## Description

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.constribution}

## Tests

${data.test}

## License

${renderLicenseSection(data.license)}

## Questions

https://github.com/${data.username}

Email Address: ${data.email}
    `;
}

module.exports = { generateMarkdown };