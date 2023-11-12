const personalInfo = {
  home: "Via degli Iris 15/16c;Genova",
  name: "Alessandro Lamattina La Rocca",
  email: "lamattina_alessandro@hotmail.it",
  email2: "lamattinalessandro@gmail.com",
  phone: "+39 3485962997",
};

const experienceContainer = document.getElementById("experience-carousel");
const positionIndicator = document.getElementById("position-indicator");

const experiences = [
  {
    title: "Tecnico di supporto software hardware",
    company: "Goldbet srl",
    year: " dal 2015 - 2018",
    description: "Lavoro presso un'azienda succursale di Goldbet srl.\n\
                Alcune delle mie mansioni erano:\n",
    tasks: [
      "manutenzione di computer;",
      "gestione dei telefoni aziendali;",
      "gestione software aziendali;",
      "gestione ticket tramite ServiceNow;",
      "creazione di piccoli tools per agevolare il lavoro;",
      "riparazioni di PC;",
      "rapporto diretto con gli utenti;",
      "coordinamento di lavoro con team di altre funzioni.",
    ],
  },
  {
    title: "Tecnico di supporto software hardware",
    company: "Stanleybet Malta srl",
    year: "2018 - 2022",
    description: "Lavoro presso un'azienda succursale di Goldbet srl.\n\
                Alcune delle mie mansioni erano:",
    tasks: [
      "manutenzione di computer;",
      "gestione dei telefoni aziendali;",
      "gestione software aziendali;",
      "gestione ticket tramite ServiceNow;",
      "creazione di piccoli tools per agevolare il lavoro;",
      "riparazioni di PC;",
      "rapporto diretto con gli utenti;",
      "coordinamento di lavoro con team di altre funzioni.",
    ],
  },
  {
    title: "Tecnico di supporto software hardware",
    company: "Elmec",
    year: "2022 - Attualmente in occupazione",
    description: "Sono assunto da Elmec per lavorare come specialista del supporto tecnico per Deloitte Italy spa. \n\
                Tra le mie mansione ci sono: \n",
    tasks: [
      "Manutenzione di computer;",
      "Gestione dei telefoni aziendali;",
      "Gestione software aziendali;",
      "Gestione ticket tramite ServiceNow;",
      "Creazione di piccoli tools per agevolare il lavoro;",
      "Riparazioni di PC;",
      "Rapporto diretto con gli utenti;",
      "Coordinamento di lavoro con team di altre funzioni.",
    ],
  },
  // Altre esperienze lavorative
];
const education = [
  {
    degree: "Ex studente di Ingegneria Informatica presso Università degli studi di Genova",
    school: "Università degli studi di Genova",
    year: "2015 - 2019",
  },
];
const skills = ["Conoscenza linguaggio Python,JavaScript,HTML,CSS,C++", "Problem Solving", "Communicazione", "Lavoro in Team","Padronanza del Pacchetto Office", "Padronanza nell'uso di Windows" ];

document.getElementById("informazioni_personali").innerHTML = `
  <div><img src=".\\image\\profilo.jpg"></div>
  <div>
    <h2>${personalInfo.name}</h2>
    <h2>Abitazione: ${personalInfo.home}</h2>
    <h2>Email: ${personalInfo.email} ${personalInfo.email2}</h2>
    <h2>Telefono: ${personalInfo.phone}</h2>
  </div>
`;

let currentIndex = 0;
let intervalId;
showExperience(currentIndex);

function showExperience(index) {
  const experience = experiences[index];
  const experienceItem = document.createElement("div");
  experienceItem.classList.add("experience"); // Aggiungi la classe "experience"
  const tasksList = experience.tasks.map(task => `<li>${task}</li>`).join("");
  experienceItem.innerHTML = `
    <h3>${experience.title}</h3>
    <p>${experience.company} | ${experience.year}</p>
    <p>${experience.description}</p>
    <ul>${tasksList}</ul>
  `;
  // Nascondi tutte le esperienze attualmente visualizzate
  const allExperiences = document.querySelectorAll(".experience");
  allExperiences.forEach(item => item.style.display = "none");

  // Visualizza solo l'esperienza corrente
  experienceItem.style.display = "block";
  experienceContainer.appendChild(experienceItem);

  // Aggiorna l'indicatore di posizione
  updatePositionIndicator(index);
}

// Funzione per passare all'esperienza successiva
function showNextExperience() {
  currentIndex = (currentIndex + 1) % experiences.length;
  showExperience(currentIndex);
}

// Funzione per passare all'esperienza precedente
function showPrevExperience() {
  currentIndex = (currentIndex - 1 + experiences.length) % experiences.length;
  showExperience(currentIndex);
}

// Funzione per avviare l'autoplay
function startAutoplay() {
  intervalId = setInterval(showNextExperience, 5000); // Cambia il valore 5000 per regolare la durata
}

// Funzione per fermare l'autoplay
function stopAutoplay() {
  clearInterval(intervalId);
}

// Funzione per aggiornare l'indicatore di posizione
function updatePositionIndicator(index) {
  // Rimuovi tutte le indicazioni precedenti
  while (positionIndicator.firstChild) {
    positionIndicator.removeChild(positionIndicator.firstChild);
  }

  // Aggiungi i pallini per ogni esperienza
  for (let i = 0; i < experiences.length; i++) {
    const dot = document.createElement("span");
    dot.classList.add("position-dot");
    if (i === index) {
      dot.classList.add("active");
    }
    dot.addEventListener("click", () => {
      stopAutoplay(); // Fermiamo l'autoplay quando l'utente fa clic su un pallino
      showExperience(i);
    });
    positionIndicator.appendChild(dot);
  }
}

// Avvia l'autoplay all'avvio
startAutoplay();

const educationSection = document.getElementById("scuola");
education.forEach(educationItem => {
    const educationDiv = document.createElement("div");
    educationDiv.innerHTML = `
        <h2>${educationItem.degree}</h2>
        <p>School: ${educationItem.school}</p>
        <p>Year: ${educationItem.year}</p>
    `;
    educationSection.appendChild(educationDiv);
});

const skillsSection = document.getElementById("competenze");
const skillsList = document.createElement("ul");
skills.forEach(skill => {
  const skillItem = document.createElement("li");
  skillItem.textContent = skill;
  skillsList.appendChild(skillItem);
});
skillsSection.appendChild(skillsList);

const backToTopButton = document.getElementById("back-to-top-button");
backToTopButton.addEventListener("click", () => {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  });
  window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
          backToTopButton.style.display = "block";
      } else {
          backToTopButton.style.display = "none";
      }
  });

  document.getElementById("menuBtn").addEventListener("click", function() {
    const sidebar = document.getElementById("sidebar");
    const content = document.querySelector(".content");
    
    sidebar.classList.toggle("active");
    content.classList.toggle("active");
});
