// Esempio di dati
const personalInfo = {
    name: "Mario Rossi",
    email: "mario@email.com",
    phone: "123-456-7890",
  };
  
  const experiences = [
    {
      title: "Tecnico di supporto software hardware",
      company: "Goldbet srl",
      year: " dal 2015 - 2018",
      description: "Lavoro presso un'azienda succorsale di Goldbet srl.\n\
                    Alcune delle mie mansioni erano:\n\
                        \u00b7\tGestione attrezzatura per l'aperture nuovi negozi;\n\
                        \u00b7\tAssistenza all'acquisto di attrezzatura;\n\
                        \u00b7\tManutenzione computer;\n\
                        \u00b7\tGestione software;\n\
                        \u00b7\tGestione stampanti.\n",
      
      title: "Tecnico di supporto software hardware",
      company: "Tech Company",
      year: "2020 - Present",
      description: "Developed user interfaces for web applications...",
      
      title: "Tecnico di supporto software hardware",
      company: "Tech Company",
      year: "2020 - Present",
      description: "Developed user interfaces for web applications...",
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
  
  const skills = ["JavaScript", "HTML", "CSS", "React", "Problem Solving", "Communication"];
  
  // Popola le sezioni con i dati
  document.getElementById("personal-info").innerHTML = `
    <h2>${personalInfo.name}</h2>
    <p>Email: ${personalInfo.email}</p>
    <p>Phone: ${personalInfo.phone}</p>
  `;
  
  // Popola le sezioni di esperienza lavorativa
  const experienceSection = document.getElementById("experience");
  experiences.forEach(experience => {
    const experienceItem = document.createElement("div");
    experienceItem.innerHTML = `
      <h3>${experience.title}</h3>
      <p>${experience.company} | ${experience.year}</p>
      <p>${experience.description}</p>
    `;
    experienceSection.appendChild(experienceItem);
  });
  
  // Popola la sezione di istruzione
  // Simile al metodo usato per popolare l'esperienza lavorativa
  
  // Popola la sezione di competenze
  const skillsSection = document.getElementById("skills");
  const skillsList = document.createElement("ul");
  skills.forEach(skill => {
    const skillItem = document.createElement("li");
    skillItem.textContent = skill;
    skillsList.appendChild(skillItem);
  });
  skillsSection.appendChild(skillsList);
  