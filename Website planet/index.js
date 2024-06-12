const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});

/*----typing */
const dynamicText = document.querySelector("h3 span");
const words = ["Fullstack devloper  ", "Web design", "Website devlopment ", "App development"];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}
typeEffect();

function showAlert() {
    var emailValue = document.getElementById('inputEmail').value;
    alert('Hello Wellcome to Website Planet :: ' + emailValue);

    document.getElementById("my").reset();
  }

  /*--------slide ----------*/

 
  let currentIndex = 0;
  let interval;
  
  function changeSlide(direction) {
      const slides = document.querySelectorAll('.slide');
      const totalSlides = slides.length;
  
      currentIndex += direction;
  
      if (currentIndex < 0) {
          currentIndex = totalSlides - 1;
      } else if (currentIndex >= totalSlides) {
          currentIndex = 0;
      }
  
      const slider = document.querySelector('.slider');
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
  
  function startAutoSlide() {
      interval = setInterval(() => {
          changeSlide(1);
      }, 3000); // Change slide every 3 seconds
  }
  
  function stopAutoSlide() {
      clearInterval(interval);
  }
  
  document.addEventListener('DOMContentLoaded', (event) => {
      startAutoSlide();
  
      document.querySelector('.slider-container').addEventListener('mouseover', stopAutoSlide);
      document.querySelector('.slider-container').addEventListener('mouseout', startAutoSlide);
  });
  
  document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
          changeSlide(-1);
      } else if (event.key === 'ArrowRight') {
          changeSlide(1);
      }
  });
  

  /**=========offer ========== */
 