import Chart from 'chart.js/auto';

export function createdGraph(starHour, endHour, data) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const dataFiltrada = data.filter((array) => {
    const hour = array.timestamp.split("T")[1].split(":")[0];
    return hour >= starHour.split(":")[0] && hour <= endHour.split(":")[0];
  });

  // Destruir gráfica existente si hay una
  if (window.myChart) {
    window.myChart.destroy();
  }

  // Nueva configuración simplificada
  window.myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dataFiltrada.map(item => item.timestamp.split('T')[1].split('+')[0]),
      datasets: [{
        label: 'Precio de la luz',
        data: dataFiltrada.map(item => item.price),
        borderColor: '#FFC107',
        backgroundColor: 'rgba(255, 193, 7, 0.2)',
        borderWidth: 4,
        pointRadius: 6,
        pointBackgroundColor: '#FFC107',
        pointBorderColor: '#FFC107',
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: '#FFFFFF'
          }
        }
      },
      scales: {
        x: {
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          },
          ticks: {
            color: '#FFFFFF'
          }
        },
        y: {
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          },
          ticks: {
            color: '#FFFFFF'
          }
        }
      }
    }
  });

  const container = document.createElement('div');
  container.className = 'chart-container';
  container.appendChild(canvas);
  return container;
}
