var testData;

function syncGraph(id) {
  if (id == 20) {
    boysData.splice(0, boysData.length);
    girlsData.splice(0, girlsData.length);

    boysData.push(3, 2, 1);
    girlsData.push(1, 2, 3);

    lineChart.update();
  } else if (id == 13) {
    boysData.splice(0, boysData.length);
    girlsData.splice(0, girlsData.length);

    boysData.push(8, 8, 6);
    girlsData.push(6, 6, 8);

    lineChart.update();
  }
}

function getYears() {
  yearsData = [1991, 1992, 1993];

  return yearsData;
}

function getBoys() {
  boysData = [1, 2, 3];

  return boysData;
}

function getGirls() {
  girlsData = [3, 2, 1];

  return girlsData;
}

// maybe use to get the data from csv file

const getDataFromCSV = async () => {
  testData = await d3.csv('data/riket.csv');
  console.log(testData);
};

getDataFromCSV();

// d3.csv(
//   'data/riket.csv',
//   data => {
//     boysData.push(data.boys);
//     girlsData.push(data.girls);
//     yearsData.push(data.year);
//   },
//   () => {}
// );
