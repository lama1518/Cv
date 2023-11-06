const experiences = [
    {
      title: "Tecnico di supporto software hardware",
      company: "Goldbet srl",
      year: " dal 2015 - 2018",
      description: "Lavoro presso un'azienda succursale di Goldbet srl.<br>\
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
      description: "Sono assunto da Elmec per lavorare come specialista del supporto tecnico per Deloitte Italy spa. <br>\
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
  ];
let currentIndex = 0;
let intervalId;
const experienceContainer = document.getElementById("experience-carousel");
const positionIndicator = document.getElementById("position-indicator");

showExperience(currentIndex);
function showExperience(index) {
  const experience = experiences[index];
  const experienceItem = document.createElement("div");
  experienceItem.classList.add("experience");
  const tasksList = experience.tasks.map(task => `<li>${task}</li>`).join("");
  experienceItem.innerHTML = `
    <h3>${experience.title}</h3>
    <p>${experience.company} | ${experience.year}</p>
    <p>${experience.description}</p>
    <ul>${tasksList}</ul>
  `;
  const allExperiences = document.querySelectorAll(".experience");
  allExperiences.forEach(item => item.style.display = "none");
  experienceItem.style.display = "block";
  experienceContainer.appendChild(experienceItem);
  updatePositionIndicator(index);
}
function showNextExperience() {
  currentIndex = (currentIndex + 1) % experiences.length;
  showExperience(currentIndex);
}
function showPrevExperience() {
  currentIndex = (currentIndex - 1 + experiences.length) % experiences.length;
  showExperience(currentIndex);
}
function startAutoplay() {
  intervalId = setInterval(showNextExperience, 5000); 
}
function stopAutoplay() {
  clearInterval(intervalId);
}
function updatePositionIndicator(index) {
  while (positionIndicator.firstChild) {
    positionIndicator.removeChild(positionIndicator.firstChild);
  }
  for (let i = 0; i < experiences.length; i++) {
    const dot = document.createElement("span");
    dot.classList.add("position-dot");
    if (i === index) {
      dot.classList.add("active");
    }
    dot.addEventListener("click", () => {
      stopAutoplay();
      showExperience(i);
    });
    positionIndicator.appendChild(dot);
  }
}
startAutoplay();