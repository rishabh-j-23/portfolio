var currActiveStyle = ` 
    .nav-active {
        cursor: pointer;
        color: var(--white);
        background-color: var(--grey);
        border-radius: 80px;
        font-size: 1.1rem;
    }
`

document.addEventListener("DOMContentLoaded", function() {
    // Check if the body has the 'home' class
    if (document.body.classList.contains("home")) {
      // Get the elements you want to add the class to
      const elementsToAddClassTo = document.querySelectorAll(".home");
  
      // Loop through the elements and add the 'nav-active' class
      elementsToAddClassTo.forEach(function(element) {
        element.classList.add(currActiveStyle);
      });
    }
  });
  