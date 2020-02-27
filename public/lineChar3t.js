var ctx = document.getElementById('lineChart').getContext('2d');

var lineChart;
//load the arrays with data
getData();

function getData() {
  let obj = {};
  d3.text('data/riket.csv', text => {
    let data = d3.csvParseRows(text);
    for (let i = 0; i < data[0].length; i++) {
      obj[data[0][i]] = [];
      for (let j = 1; j < data.length; j++) {
        obj[data[0][i]].push(data[j][i]);
      }
    }

    lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: obj.year,
        datasets: [
          {
            label: 'Girls',
            data: obj.girls,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1.0)',
            pointHitRadius: 10,
            pointBorderWidth: 5,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(255, 99, 132, 1.0)'
          },
          {
            label: 'Boys',
            data: obj.boys,
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
        scales: {
          yAxes: [
            {
              ticks: {},
              gridLines: {
                tickMarkLength: 10
              }
            }
          ]
        }
      }
    });
  });
}
