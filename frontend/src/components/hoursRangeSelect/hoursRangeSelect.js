// selector de horas que esta en .env
const ranges = import.meta.env.VITE_HOUR_RANGES;

export const createdHoursRanges = () => {
    const divRanges = document.createElement("div");
    divRanges.id = "divRanges";
    const labelRanges = document.createElement("label");
    labelRanges.id = "labelRanges";
    labelRanges.textContent = "Elige un rango horario:";
    const selectRanges = document.createElement("select");
    selectRanges.id = "opciones";
    selectRanges.name = "opciones";
    const rangesArray = [];
    rangesArray.push(...ranges.split(","));

    rangesArray.forEach(range => {
        const option = document.createElement("option");
        option.value = range;
        option.textContent = range;
        selectRanges.appendChild(option);
    });
    divRanges.append(labelRanges,selectRanges);
    return divRanges;
};