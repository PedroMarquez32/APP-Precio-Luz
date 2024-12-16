// selector de horas que esta en .env
const ranges = import.meta.env.VITE_HOUR_RANGES;

export const createdHoursRanges = () => {
    const rangeContainer = document.createElement("div");
    rangeContainer.className = "range-container";

    const labelRanges = document.createElement("label");
    labelRanges.id = "labelRanges";
    labelRanges.textContent = "Rango Horario";

    const selectWrapper = document.createElement("div");
    selectWrapper.className = "select-wrapper";

    const selectRanges = document.createElement("select");
    selectRanges.id = "opciones";
    selectRanges.name = "opciones";

    const rangesArray = import.meta.env.VITE_HOUR_RANGES.split(",");

    rangesArray.forEach(range => {
        const option = document.createElement("option");
        option.value = range;
        option.textContent = range;
        selectRanges.appendChild(option);
    });

    selectWrapper.appendChild(selectRanges);
    rangeContainer.appendChild(labelRanges);
    rangeContainer.appendChild(selectWrapper);

    return rangeContainer;
};