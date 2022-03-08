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


## Description <a name="description"/>
${data.description}


## Features <a name="features"/>
${data.features}


## Installation <a name="installation"/>
${data.installation}


## Usage <a name="usage"/>
${data.usage}


## Contribution <a name="contribution"/>
${data.contribution}


## Testing <a name="testing"/>
${data.test}


## License <a name="license"/>
${data.license}


## Questions? Reach Out <a name="questions"/>
${data.github}
${data.email}
    `
}

module.exports = generateMD;