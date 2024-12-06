
export const createLoadButton = () => {
    const loadButton = document.createElement("button");
    loadButton.id = "load-prices-btn";
    loadButton.className = "load-btn";
    loadButton.textContent = "Cargar Precios de la luz";
    return loadButton;
};

