const navbar = document.querySelector("#navbar");
const lastName = navbar.querySelector(".logo span");

window.addEventListener('scroll', function(){

  
  if(window.pageYOffset>50) {
    navbar.classList.add("sticky-red");
    lastName.classList.add("text-white");
  } else {
    navbar.classList.remove("sticky-red");
    lastName.classList.remove("text-white");
  }
});

