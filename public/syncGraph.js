var year = [],
  boys = [],
  girls = [];

function loadData(callback, path) {
  console.log('loading data into graph');

  d3.csv(path, function(csv) {
    csv.map(function(d) {
      year.push(d.year);
      boys.push(d.boys);
      girls.push(d.girls);
    });
    callback();
  });

  console.log('datasets: ', year, boys, girls);
}

// Emprt arrays to make room for new data
function emptyArray() {
  boys = [];
  girls = [];
  year = [];

  resetCanvas();
}

// Have to remove and add a new canvas not to get multiple canvas generated
// on top of eachother
function resetCanvas() {
  $('#lineChart').remove();
  $('.line-chart-container').append('<canvas id="lineChart"><canvas>');
  canvas = document.querySelector('#lineChart');
  ctx = canvas.getContext('2d');
}

function syncGraph(id) {
  console.log('Updating graph with data from ', id);
  if (id == 0) {
    path = 'data/riket.csv';

    emptyArray();

    loadData(() => {
      drawLineChart();
    }, path);

    console.log('data loaded: ', year, boys, girls);
  } else if (id == 20) {
    path = 'data/VG.csv';

    emptyArray();

    loadData(() => {
      drawLineChart();
    }, path);
  }
}

function getYears() {
  return year;
}

function getBoys() {
  return boys;
}

function getGirls() {
  return girls;
}
