const whiteModeToggle = document.getElementById('white-mode-toggle');
const body = document.body;

whiteModeToggle.addEventListener('click', () => {
    var github = document.body.getElementsByClassName('ri-github-fill')[0];
    if(github){
        github.style.color = 'var(--dark-grey)';
    }
    var linkedin = document.body.getElementsByClassName('ri-linkedin-box-fill')[0];
    if(linkedin){
        linkedin.style.color = 'var(--dark-grey)';
    }
    body.classList.toggle('white-mode');
});