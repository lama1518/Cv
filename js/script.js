// Esempio di dati
const personalInfo = {
    name: "Alessandro Lamattina La Rocca",
    email: "lamattina_alessandro@hotmail.it",
    email2: "lamattinalessandro@gmail.com",
    phone: "+39 3485962997",
  };
  
  const experiences = [
    {
        title: "Tecnico di supporto software hardware",
        company: "Goldbet srl",
        year: " dal 2015 - 2018",
        description: "Lavoro presso un'azienda succorsale di Goldbet srl.\n\
                    Alcune delle mie mansioni erano:\n",
        tasks:["manutenzione di computer;","gestione dei telefoni aziendali;","gestione software aziendali;",
                    "gestione ticket tramite servicenow;","creazione piccoli tools per aggevolare il lavoro;",
                    "riparazioni pc;","rapporto diretto con gli utenti;","Coordinamento di lavoro con team di altre funzioni."],},
    {
        title: "Tecnico di supporto software hardware",
        company: "Stanleybet Malta srl",
        year: "2018 - 2022",
        description: "Lavoro presso un'azienda succorsale di Goldbet srl.\n\
                    Alcune delle mie mansioni erano:",
        tasks:["manutenzione di computer;","gestione dei telefoni aziendali;","gestione software aziendali;",
                    "gestione ticket tramite servicenow;","creazione piccoli tools per aggevolare il lavoro;",
                    "riparazioni pc;","rapporto diretto con gli utenti;","Coordinamento di lavoro con team di altre funzioni."],},
    {   
        title: "Tecnico di supporto software hardware",
        company: "Elmec",
        year: "2022 - Attualmente in occupazione",
        description: "Sono assunto da Elmec per lavorare come specialista del supporto tecnico per Deloitte Italy spa. \n\
                    Tra le mie mansione ci sono: \n",
        tasks:["Manutenzione di computer;","Gestione dei telefoni aziendali;","Gestione software aziendali;",
                "Gestione ticket tramite servicenow;","Creazione piccoli tools per aggevolare il lavoro;",
                "Riparazioni pc;","Rapporto diretto con gli utenti;","Coordinamento di lavoro con team di altre funzioni."]
    },
    // Altre esperienze lavorative
  ];
  
  const education = [
    {
      degree: "Bachelor's in Computer Science",
      school: "University of XYZ",
      year: "2016 - 2020",
    },
    // Altra istruzione
  ];
  
  const skills = ["Python","JavaScript", "HTML", "CSS", "Problem Solving", "Communicazione"];
  
  // Popola le sezioni con i dati
  document.getElementById("informazioni_personali").innerHTML = `
    <h2>${personalInfo.name}</h2>
    <p>Email: ${personalInfo.email}</p>
    <p>Email: ${personalInfo.email2}</p>
    <p>Phone: ${personalInfo.phone}</p>
  `;
  
  // Popola le sezioni di esperienza lavorativa
  const experienceSection = document.getElementById("esperienze");
  experiences.forEach(experience => {
      const experienceItem = document.createElement("div");
      const tasksList = experience.tasks.map(task => `<li>${task}</li>`).join(""); // Creazione della lista delle mansioni
      experienceItem.innerHTML = `
          <h3>${experience.title}</h3>
          <p>${experience.company} | ${experience.year}</p>
          <p>${experience.description}</p>
          <ul>${tasksList}</ul>
      `;
      experienceSection.appendChild(experienceItem);
  });
  document.getElementById("scuola").innerHTML = `
  <h2>${education.degree}</h2>
  <p>School: ${education.school}</p>
  <p>year: ${education.year}</p>
`;

  const skillsSection = document.getElementById("skills");
  const skillsList = document.createElement("ul");
  skills.forEach(skill => {
    const skillItem = document.createElement("li");
    skillItem.textContent = skill;
    skillsList.appendChild(skillItem);
  });
  skillsSection.appendChild(skillsList);
  