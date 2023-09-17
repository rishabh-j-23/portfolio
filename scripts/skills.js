var appendTools = (name, icon, className) => {
    var skillsDisplay = document.querySelector(className);
    var skillBox = `
        <!-- ${name} -->
        <div class="skill-box">
            <div class="skill-logo">
                <i class="${icon}"></i>
            </div>
            <div class="skill-name">
                <span>${name}</span>
            </div>
        </div>
    `;

    skillsDisplay.innerHTML += skillBox;
};

var skills = {
    "C Language": "devicon-c-plain-wordmark colored",
    "Java" : "devicon-java-plain colored",
    "Python": "devicon-python-plain",
    "HTML": "devicon-html5-plain colored",
    "CSS" : "devicon-css3-plain colored",
    "Javascript": "devicon-javascript-plain colored",
    "MySql" : "devicon-mysql-plain colored",
    "MongoDB" : "devicon-mongodb-plain colored"
};

for (const lang in skills) {
    var icon = skills[lang]
    appendTools(lang, icon, '.skills-display')
}

var frameworkAndLibs = {
    "Node.js" : "devicon-nodejs-plain colored",
    "Express.js" : "devicon-express-original",
    "React.js" : "devicon-react-original colored",
    "Next.js" : "devicon-nextjs-original"
};

for (const skill in frameworkAndLibs) {
    var icon = frameworkAndLibs[skill]
    appendTools(skill, icon, '.framework-libs-display')
}

var devTools = {
    "git" : "devicon-git-plain",
    "Github": "devicon-github-original",
    "VS Code": "devicon-vscode-plain colored"
}

for (const skill in devTools) {
    var icon = devTools[skill]
    appendTools(skill, icon, '.dev-tools')
}