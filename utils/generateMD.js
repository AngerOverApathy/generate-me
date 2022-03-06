function generateMD(data) {
    return `# ${data.title}
${data.repo}

# Table of Contents
1. [Description](#description)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#useage)
5. [Contribution](#contribution)
6. [Questions] (#questions)

<a name="description"/>
## Description 
${data.description}

<a name="features"/>
## Features
${data.features}

<a name="installation"/>
## Installation 
${data.installation}

<a name="usage"/>
## Usage
${data.usage}

<a name="contribution"/>
## Contribution
${data.contribution}

<a name="testing"/>
## Testing
${data.test}

<a name="license"/>
## License
${data.license}

<a name="questions"/>
## Questions? Reach Out
${data.github}
${data.email}
    `
}

module.exports = generateMD;