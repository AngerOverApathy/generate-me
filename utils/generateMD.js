function generateMD(data) {
    return `# ${data.title}
${data.repo}

## Description
${data.description}

## Installation and Usage
${data.installation}
${data.usage}
${data.contribution}
${data.test}
${data.license}

## Reach Out
${data.github}
${data.email}
    `
}

module.exports = generateMD;