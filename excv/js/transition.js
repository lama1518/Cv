document.addEventListener("DOMContentLoaded", function() {
    const divSection = document.getElementById("div-section");
    const contentDivs = document.querySelectorAll("section");
    let currentIndex = 0;
    
    // Funzione per mostrare il div corrente
    function showCurrentDiv() {
      contentDivs.forEach((div, index) => {
        if (index === currentIndex) {
          div.style.opacity = "1";
        } else {
          div.style.opacity = "0";
        }
      });
    }
      
    // Inizializza il div corrente
    showCurrentDiv();
    
    // Gestione dell'evento di rotazione della rotella del mouse
    divSection.addEventListener("wheel", function(event) {
      // Aumenta o diminuisci l'indice in base alla direzione della rotazione
      if (event.deltaY > 0) {
        currentIndex = (currentIndex + 1) % contentDivs.length;
      } else {
        currentIndex = (currentIndex - 1 + contentDivs.length) % contentDivs.length;
      }
      
      // Applica la transizione di opacità
      showCurrentDiv();
    });
  });
  