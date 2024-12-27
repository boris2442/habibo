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
sr.reveal(".home, .services, .product, .contact, .copy", {interval:200})