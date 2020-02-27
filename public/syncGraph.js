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

function emptyArray() {
  console.log('Arrays should not be empty here: ', year, boys, girls);

  boys.splice(0, boys.length);
  girls.splice(0, girls.length);
  year.splice(0, year.length);
  // boys = [];
  // girls = [];
  // year = [];

  console.log('the arrays should be empty here: ', year, boys, girls);
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
