function generateMD(data) {
    return `# ${data.title}
${data.repo}
${data.description}
${data.installation}
    `
}

module.exports = generateMD;