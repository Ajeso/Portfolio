const header=document.querySelector("header");
const lastName=document.querySelector("h1 span");

window.addEventListener('scroll', function(){
    
    if(window.scrollY>50) {

        header.classList.add("bg-red");
        lastName.classList.add("text-white");
      } else {
        header.classList.remove("bg-red");
        lastName.classList.remove("text-white");
      }
    });
    
    