//author: Francisco Jose Salmeron Puig
//author: Pedro Javier Marquez Lizana
export const createFooter = (data) => {
    const footer = document.createElement("footer");
    footer.className = "footer";

    const footerContent = document.createElement("div");
    footerContent.className = "footer-content";

    // Sección de Desarrolladores
    const developersSection = document.createElement("div");
    developersSection.className = "footer-section";
    
    const developersTitle = document.createElement("h3");
    developersTitle.textContent = "Desarrolladores";
    
    const developerLinks = document.createElement("div");
    developerLinks.className = "footer-links";

    Object.entries(data).forEach(([name, github]) => {
        const link = document.createElement("a");
        link.className = "footer-link";
        link.href = `https://github.com/${github}`;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        
        // Formatear nombre
        const formattedName = name.replace(/_/g, ' ');
        link.textContent = formattedName;
        developerLinks.appendChild(link);
    });

    developersSection.appendChild(developersTitle);
    developersSection.appendChild(developerLinks);

    // Sección de Información
    const infoSection = document.createElement("div");
    infoSection.className = "footer-section";
    
    const infoTitle = document.createElement("h3");
    infoTitle.textContent = "Información";
    
    const infoText = document.createElement("p");
    infoText.textContent = "© 2024 Precio de la Luz App";

    const githubLink = document.createElement("a");
    githubLink.href = "https://github.com/";
    githubLink.target = "_blank";
    githubLink.rel = "noopener noreferrer";
    githubLink.className = "footer-link";
    githubLink.textContent = "Visítanos en GitHub";

    infoSection.appendChild(infoTitle);
    infoSection.appendChild(infoText);
    infoSection.appendChild(githubLink);

    // Añadir secciones al contenido del footer
    footerContent.appendChild(developersSection);
    footerContent.appendChild(infoSection);
    
    footer.appendChild(footerContent);

    return footer;
};