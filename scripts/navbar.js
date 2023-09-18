var navBar = `
    <div class="logo">
        Portfolio
        <button id="white-mode-toggle">White Mode</button>
    </div>
    <div class="navigation">
        <a href="/index.html" ><span>Home</span></a> |
        <a href="/projects.html" ><span>Projects</span></a> |
        <a href="/skills.html"><span>Skills</span></a> 
    </div>
`

var header = document.getElementsByClassName('header')[0];
header.innerHTML = navBar;
