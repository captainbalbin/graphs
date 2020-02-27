var year = [],
  boys = [],
  girls = [];

function loadData(callback, path) {
  d3.csv(path, function(csv) {
    csv.map(function(d) {
      year.push(d.year);
      boys.push(d.boys);
      girls.push(d.girls);
    });
    callback();
  });
}

function emptyArray() {
  boys = [];
  girls = [];
  year = [];
}

function syncGraph(id) {
  console.log('Updating graph with data from ', id);
  if (id == 0) {
    path = 'data/riket.csv';
    emptyArray();

    loadData(() => {
      drawLineChart();
    }, path);
  } else if (id == 20) {
    path = 'data/VG.csv';
    emptyArray();

    loadData(() => {
      drawLineChart();
    }, path);
  } else if (id == 13) {
    console.log('Updating graph with data from ', id);

    emptyArray();

    loadData(() => {
      drawLineChart();
    });
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
