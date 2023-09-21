const backToTopButton = document.getElementById("back-to-top-button");
backToTopButton.addEventListener("click", () => {
window.scrollTo({
  top: 0,
  behavior: "smooth"
  });
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 800) {
      backToTopButton.style.display = "block";
  } else {
      backToTopButton.style.display = "none";
  }
});

const home_big = document.getElementById("home");
if (window.innerWidth >= 1000) {
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const fontSize = 40 + scrollPosition * 8 + "px"; 
    if (parseFloat(fontSize) >= 1000) {
      home_big.style.fontSize = "1000px"; 
      home_big.style.marginTop = "100px";
    } else if (parseFloat(fontSize) < 1000){
      home_big.style.fontSize = fontSize;
      home_big.style.marginTop = scrollPosition / 10 + "px";
      home_big.style.whiteSpace = "nowrap";
    }
  });
}