
export const createFooter = (data) => {
    const footer = document.createElement("footer");
    footer.id = "footer";
        Object.entries(data).forEach(([clave, valor]) => {
            const p = document.createElement("p");
            p.textContent = `${clave}: ${valor}`;
            footer.appendChild(p);
        });

    return footer;
};