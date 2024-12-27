const title=document.querySelector("h1")
const app=new Typewriter(title, {
    delay:200,
    loop:true

})
.typeString("Le paradis sucré votre destination <span>Gourmande</span>")
.pauseFor(3000)
.deleteAll()
.pauseFor(2000)
.start();

// code destinee au scrollReveal

const sr=ScrollReveal({
    duration:1500,
    origin:"top",
    distance:"30px",
    reset:true
})
sr.reveal(".home, .services, .et-a-decouvrir, .product, .contact, .copy", {interval:200})


// partie destinee au swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });