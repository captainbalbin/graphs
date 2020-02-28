var ctx = document.getElementById('donutChart').getContext('2d');

var donutChart;
var path = 'data/riket.csv';

loadData(() => {
  drawDonutChart();
}, path);

function drawDonutChart() {
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Boys', 'Girls'],
      datasets: [
        {
          label: 'Difference in Suicide amount',
          data: [1, 2],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)'
          ],
          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
          borderWidth: 1,
          hoverBackgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)'
          ]
        }
      ]
    },
    options: {}
  });
}
