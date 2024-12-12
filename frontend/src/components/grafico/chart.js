//import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
import Chart from 'chart.js/auto';

//Chart.register(BarElement, CategoryScale, LinearScale);

export function createdGraph(starHour,endHour,data) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const dataFiltrada = (data.filter((array) => array.timestamp.split("T")[1].split(":")[0] >= starHour.split(":")[0] && array.timestamp.split("T")[1].split(":")[0] <= endHour.split(":")[0]));
  console.log(dataFiltrada);
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: dataFiltrada.map((array) => array.timestamp.split("T")[1].split("+")[0].split(".")[0]),
      datasets: [
        {
          label: 'Precio €/kWh',
          data: dataFiltrada.map((array) => array.price),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true, 
      aspectRatio: 4,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Precio €/kWh',
          },
        },
        x: {
         
          title: {
            display: true,
            text: 'Hora del día' 
          },
          ticks: {
            autoSkip: true,
            maxRotation: 45, 
            minRotation: 45
          },
        },
      },
    },
  });
  

  return canvas;
}
