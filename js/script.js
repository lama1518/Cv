const personalInfo = {
    home: "Via degli Iris 15/16c, Genova",
    name: "Alessandro Lamattina La Rocca",
    email: "lamattina_alessandro@hotmail.it",
    email2: "lamattinalessandro@gmail.com",
    phone: "+39 3485962997",
  };

  const education = [
    {
      degree: "Ex studente di Ingegneria Informatica presso Università degli studi di Genova",
      school: "Università degli studi di Genova",
      year: "2015 - 2019",
    },
  ];
  const skills = ["Conoscenza linguaggio Python,JavaScript,HTML,CSS,C++", 
                  "Problem Solving", "Comunicazione", "Lavoro in Team",
                  "Padronanza del Pacchetto Office", "Padronanza nell'uso di Windows" ];
const info_pers =document.getElementById("informazioni_personali");
info_pers.innerHTML = `<div><img src=".\\file\\profilo.jpg"></div><div>
      <h2>${personalInfo.name}</h2>
      <h2>Abitazione: ${personalInfo.home}</h2>
      <h2>Email: ${personalInfo.email}<br> Email: ${personalInfo.email2}</h2>
      <h2>Telefono: ${personalInfo.phone}</h2>
      </div>`;

const skillsSection = document.getElementById("competenze");
const skillsTitle= document.createElement("h1")
skillsTitle.textContent="Competenze";

const skillsList = document.createElement("ul");
skills.forEach(skill => {
  const skillItem = document.createElement("li");
  skillItem.textContent = skill;
  skillsList.appendChild(skillItem);
});
skillsSection.appendChild(skillsTitle);
skillsSection.appendChild(skillsList);

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
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const fontSize = 40 + scrollPosition * 8 + "px"; 
  if (parseFloat(fontSize) >= 10000) {
    home_big.style.fontSize = "1000px"; 
    home_big.style.marginTop = "100px";
  } else if (parseFloat(fontSize) < 10000){
    home_big.style.fontSize = fontSize;
    home_big.style.marginTop = scrollPosition / 10 + "px";
    home_big.style.whiteSpace = "nowrap";
  }
});