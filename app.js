var logo = document.querySelectorAll("#logo path");
var svgEltCircle = document.querySelector(".feather-circle");

var animationState = false;
var tlSection1 = gsap.timeline({
  onComplete: () => {tlSection2.play()}
});
var tlSection2 = gsap.timeline({
  onComplete: () => {tlSection3.play()}

});
var tlSection3 = gsap.timeline();

tlSection1.to(".path", {duration: 1, strokeDashoffset: 0, stagger: 0.5, ease:"ease"})
  .to(".path", {duration: 2, stroke:"white", stagger: 0.1, ease:"ease"})
  .to(".transition", {duration: 0.5, left:720, ease:"ease", stagger: 0.3}, "-=.5")
  .to(".transition-3", {duration: .1, visibility:"hidden", ease:"ease"})



tlSection2.pause();
tlSection3.pause();
tlSection2.to(".section-2", {duration: .1, visibility:"visible", ease:"ease"});
tlSection2.to(".feather", {duration: 2, strokeDashoffset: 140, stroke: "white", stagger: .5})
tlSection2.to(".feather", {duration: 1, height: 300, width:300, fill:"white", webkitFilter:"drop-shadow( 20px 20px 20px rgba(0, 0, 0, 0.144))", stagger: .2})

tlSection3.to(".feather", {duration: 1.5, marginBottom: "200px", stagger: 0.2})
tlSection3.to(".feather", {duration: 1.5, marginBottom: "-200px", stagger: 0.2}, "-=1")
tlSection3.to(".feather", {duration: 1.5, marginBottom: "200px", stagger: 0.2}, "-=1")
tlSection3.to(".feather", {duration: 1.5, marginBottom: "0px", stagger: 0.2}, "-=1")
tlSection3.to(".black-hole", {duration: 2.5, height: "450px", width:"450px", ease: "elastic"})
tlSection3.to(".feather-triangle", {duration: 2, marginBottom: "-200px", marginLeft:"-200px", width: 0, height: 0, opacity: 0}, "-=.5")
tlSection3.to(".feather-square", {duration: 1, marginBottom: "-200px", marginLeft:"-200px", width: 0, height: 0, opacity: 0}, "-=.5")
tlSection3.to(".section-2", {duration: 1, background:"url('./images/galaxy.jpeg')", ease:"power2"}, "-=.1")
tlSection3.to(".black-hole", {duration: 1, backgroundImage:"url('./images/moon.png')", webkitFilter:"drop-shadow( -20px 20px 20px rgba(0, 0, 0, 0.2))", ease:"power2"}, "-=1")
tlSection3.to(".feather-circle", {duration: 1, backgroundImage:"url('./images/earth.png')", fill:"none", stroke:"none", webkitFilter:"drop-shadow( 20px 20px 20px rgba(0, 0, 0, 0.8))", ease:"power2"}, "-=1")

tlSection3.delay(4);
