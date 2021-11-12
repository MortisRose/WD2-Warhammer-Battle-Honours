/* ~~~~~~~~~~~~ GSAP SCROLL TRIGGER REVEAL ANIMATIONS: START ~~~~~~~~~~~~ */
// GSAP DEMO: basic reveal animations https://codepen.io/GreenSock/pen/pojzxwZ

function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if(elem.classList.contains("fromLeft")) { // If the elements class contains "fromLeft" do this
      x = -100;
      y = 0;
    } else if (elem.classList.contains("fromRight")) { // If the elements class contains "fromRight" do that
      x = 100;
      y = 0;
    }

    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
      duration: 2, 
      x: 0,
      y: 0, 
      autoAlpha: 1, 
      ease: "expo", 
      overwrite: "auto"
    });
  }

function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
}
  
document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    
gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
    hide(elem); // assure that the element is hidden when scrolled into view
      
    ScrollTrigger.create({
        trigger: elem,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
        });
    });
});

/* ~~~~~~~~~~~~ GSAP SCROLL TRIGGER REVEAL ANIMATIONS: END ~~~~~~~~~~~~ */


/* ~~~~~~~~~~~~~~~ GSAP HERO SLOGAN ANIMATION: START ~~~~~~~~~~~~~~~ */

// Create a gsap timeline called "slogan"
// Repeat the timeline on an infinite loop

var slogan = gsap.timeline({repeat: -1, repeatDelay: 1 })                            // Delay of 1 second before timeline animation repeats
    slogan.from(".slogan1", {duration: 3, x: 2000, ease: "power1.inOut"})
          .to(".slogan1", {duration: 2.5, x: -2000, ease: "power1.inOut"}, "+=1")    // Adds a delay of +1 seconds, pausing text on screen
          .from(".slogan2", {duration: 3, x: 2000, ease: "power1.inOut"}, "<+=2")    // Adds a delay of +2 seconds between slogan1 leaving screen and slogan2 entering
          .to(".slogan2", {duration: 2.5, x: -2000, ease: "power1.inOut"}, "+=1")    // Adds a delay of +1 seconds, pausing text on screen
          .from(".slogan3", {duration: 3, x: 2000, ease: "power1.inOut"}, "<+=2")    // Adds a delay of +2 seconds between slogan2 leaving screen and slogan3 entering
          .to(".slogan3", {duration: 2.5, x: -2000, ease: "power1.inOut"}, "+=1")    // Adds a delay of +1 seconds, pausing text on screen

/* ~~~~~~~~~~~~~~~ GSAP HERO SLOGAN ANIMATION: END ~~~~~~~~~~~~~~~ */


/* ~~~~~~~~~ REWARDS OVERLAY CONTAINER: START ~~~~~~~~~~ */

// get the back-button
const backButton = document.querySelector('.back-button')

// listen for a click and "close" the rewards overlay section
// NOTE: onclick function exists in HTML

backButton.addEventListener('click', function(){
    document.querySelector("#rewards-underlay").style.display = "block";
    document.querySelector("#rewards-overlay").style.display = "none";
})

// get ".circle" buttons
const buttonR1 = document.querySelector('.r1')
const buttonR2 = document.querySelector('.r2')
const buttonR3 = document.querySelector('.r3')
const buttonR4 = document.querySelector('.r4')
const buttonR5 = document.querySelector('.r5')

// get reward contents
const reward1 = document.querySelector('.r1overlay')
const reward2 = document.querySelector('.r2overlay')
const reward3 = document.querySelector('.r3overlay')
const reward4 = document.querySelector('.r4overlay')
const reward5 = document.querySelector('.r5overlay')

// Show rewards overlay on .circle click
// Note: onclick event within HTML
// "function, if this, do that"

function showRewardOne() {
  if (document.querySelector("#rewards-underlay").style.display = "block"){
    document.querySelector("#rewards-underlay").style.display = "none";
    document.querySelector("#rewards-overlay").style.display = "block";
    reward2.style.display = "none";
    reward3.style.display = "none";
    reward4.style.display = "none";
    reward5.style.display = "none";
    reward1.style.display = "flex";
  }
} 

function showRewardTwo() {
  if (document.querySelector("#rewards-underlay").style.display = "block"){
    document.querySelector("#rewards-underlay").style.display = "none";
    document.querySelector("#rewards-overlay").style.display = "block";
    reward1.style.display = "none";
    reward3.style.display = "none";
    reward4.style.display = "none";
    reward5.style.display = "none";
    reward2.style.display = "flex";
  }
} 

function showRewardThree() {
  if (document.querySelector("#rewards-underlay").style.display = "block"){
    document.querySelector("#rewards-underlay").style.display = "none";
    document.querySelector("#rewards-overlay").style.display = "block";
    reward1.style.display = "none";
    reward2.style.display = "none";
    reward4.style.display = "none";
    reward5.style.display = "none";
    reward3.style.display = "flex";
  }
} 

function showRewardFour() {
  if (document.querySelector("#rewards-underlay").style.display = "block"){
    document.querySelector("#rewards-underlay").style.display = "none";
    document.querySelector("#rewards-overlay").style.display = "block";
    reward1.style.display = "none";
    reward2.style.display = "none";
    reward3.style.display = "none";
    reward5.style.display = "none";
    reward4.style.display = "flex";
  }
} 

function showRewardFive() {
  if (document.querySelector("#rewards-underlay").style.display = "block"){
    document.querySelector("#rewards-underlay").style.display = "none";
    document.querySelector("#rewards-overlay").style.display = "block";
    reward1.style.display = "none";
    reward2.style.display = "none";
    reward3.style.display = "none";
    reward4.style.display = "none";
    reward5.style.display = "flex";
  }
} 

// Add click event to each rewards-overlay button when overlay is visible
// "click event, do this"

buttonR1.addEventListener('click', () => {
  reward2.style.display = "none";
  reward3.style.display = "none";
  reward4.style.display = "none";
  reward5.style.display = "none";
  reward1.style.display = "flex";
})

buttonR2.addEventListener('click', () => {
  reward1.style.display = "none";
  reward3.style.display = "none";
  reward4.style.display = "none";
  reward5.style.display = "none";
  reward2.style.display = "flex";
})

buttonR3.addEventListener('click', () => {
  reward1.style.display = "none";
  reward2.style.display = "none";
  reward4.style.display = "none";
  reward5.style.display = "none";
  reward3.style.display = "flex";
})

buttonR4.addEventListener('click', () => {
  reward1.style.display = "none";
  reward2.style.display = "none";
  reward3.style.display = "none";
  reward5.style.display = "none";
  reward4.style.display = "flex";
})

buttonR5.addEventListener('click', () => {
  reward1.style.display = "none";
  reward2.style.display = "none";
  reward3.style.display = "none";
  reward4.style.display = "none";
  reward5.style.display = "flex";
})

/* ~~~~~~~~~ REWARDS OVERLAY CONTAINER: END ~~~~~~~~~~ */


/* ~~~~~~~~~ SWIPER HAPPENING IN STORE SECTION: START ~~~~~~~~~~ */
// SWIPER: https://swiperjs.com/get-started

const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
})

/* ~~~~~~~~~ SWIPER HAPPENING IN STORE SECTION: END ~~~~~~~~~~ */