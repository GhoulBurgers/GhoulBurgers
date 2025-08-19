// Fade-in effect for sections when scrolling
document.addEventListener("scroll", () => {
    document.querySelectorAll("section").forEach(section => {
        const position = section.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            section.classList.add("visible");
        }
    });
});

// Flickering effect for main title
const title = document.querySelector("h1");
setInterval(() => {
    title.style.textShadow = Math.random() > 0.5 
        ? "0 0 20px #ff1c1c, 0 0 40px #b30000"
        : "0 0 10px #ff1c1c";
}, 500);

// Console Easter egg
const spookyMessages = [
    "💀 Beware… The ghouls are watching.",
    "🍔 A burger a night keeps the spirits in sight.",
    "🩸 Hungry? The feast has only begun...",
    "👻 Boo! Thought this console was safe?"
];
console.log(spookyMessages[Math.floor(Math.random() * spookyMessages.length)]);
