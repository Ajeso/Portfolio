window.addEventListener('scroll', function(){

  
  if(window.pageYOffset>50) {
    navbar.classList.add("sticky-red");
  } else {
    navbar.classList.remove("sticky-red");
  }
});

