var testArray = [];

var year = [],
  boys = [],
  girls = [];

function loadData() {
  console.log('Loading graph with data');

  d3.csv('data/riket.csv', function(csv) {
    csv.map(function(d) {
      year.push(d.year);
      boys.push(d.boys);
      girls.push(d.girls);
    });
  });

  console.log(year);
  console.log(boys);
  console.log(girls);

  // d3.text('data/riket.csv', function(text) {
  //   testArray = d3.csvParseRows(text);
  //   console.log(testArray);
  // });
  // d3.csv(
  //   'data/riket.csv',
  //   data => {
  //     boysData.push(data.boys);
  //     girlsData.push(data.girls);
  //     yearsData.push(data.year);
  //   },
  //   () => {
  //     console.log('data: ', boysData, girlsData, yearsData);
  //   }
  // );
  }

function syncGraph(id) {
  console.log('Updating graph with data from ', id);

  if (id == 20) {
    boysData.splice(0, boysData.length);
    girlsData.splice(0, girlsData.length);

    boysData.push(3, 2, 1);
    girlsData.push(1, 2, 3);

    lineChart.update();
  } else if (id == 13) {
    console.log('Updating graph with data from ', id);

    boysData.splice(0, boysData.length);
    girlsData.splice(0, girlsData.length);
    yearsData.splice(0, yearsData.length);

    lineChart.update();
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

// maybe use to get the data from csv file

// const getDataFromCSV = async () => {
//   testData = await d3.csv('data/riket.csv');
//   console.log(testData);
// };

// getDataFromCSV();
