var ctx = document.getElementById('lineChart').getContext('2d');

var boysData = [];
var girlsData = [];
var yearsData = [];

var lineChart;
var path = 'data/riket.csv';
//load the arrays with data
loadData(() => {
  drawLineChart();
}, path);

function drawLineChart() {
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: getYears(),
      datasets: [
        {
          label: 'Girls',
          data: getGirls(),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderColor: 'rgba(255, 99, 132, 1.0)',
          pointHitRadius: 10,
          pointBorderWidth: 5,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(255, 99, 132, 1.0)'
        },
        {
          label: 'Boys',
          data: getBoys(),
          backgroundColor: 'rgba(1, 99, 132, 0.5)',
          borderColor: 'rgba(1, 99, 132, 1.0)',
          pointHitRadius: 10,
          pointBorderWidth: 5,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(1, 99, 132, 1.0)'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              tickMarkLength: 10
            }
          }
        ]
      }
    }
  });
}
