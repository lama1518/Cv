const personalInfo = {
    home: "Via degli Iris 15/16c, Genova",
    name: "Alessandro Lamattina La Rocca",
    email: "lamattina_alessandro@hotmail.it",
    email2: "lamattinalessandro@gmail.com",
    phone: "+39 3485962997",
  };
  
document.addEventListener("DOMContentLoaded", function() {
    const divSection = document.getElementById("div-section");
    const contentDivs = document.querySelectorAll(".content_div");
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
      
    document.getElementById("informazioni_personali").innerHTML = `
        <div><img src=".\\image\\profilo.jpg">
        </div>
        <div>
            <h2>${personalInfo.name}</h2>
            <h2>Abitazione: ${personalInfo.home}</h2>
            <h2>Email: ${personalInfo.email} ${personalInfo.email2}</h2>
            <h2>Telefono: ${personalInfo.phone}</h2>
        </div>
    `;
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
  