var bbLineChart;
var bbBarChart;
var bbCombinationChart;
sc;

function drawBillboardPlot() {
  var chart = bb.generate({
    size: {
      height: 700,
      width: 900
    },
    data: {
      x: 'year',
      columns: [
        ['year'].concat(loadedData.map(x => x['year'])),
        ['child_births'].concat(loadedData.map(x => x['child_births'])),
        ['population_growth'].concat(loadedData.map(x => x['pop_growth']))
        //Replace this with data from CSV file

        /*
        [
          "Child_Birth",
          2100000,
          2600000,
          3440000,
          4220000,
          5290000,
          6570000,
          7130000
        ],
        ["Population_growth", 1.98, 2.28, 2.86, 2.58, 2.67, 2.67, 2.64],
        ["year", 1960, 1970, 1980, 1990, 2000, 2010, 2015]
        */
        //Replace with corresponding column name
      ],
      colors: {
        child_births: '#aefe8c',
        population_growth: '#f297ff',
        data3: '#0000ff'
      },
      names: {
        child_births: 'Child births',
        population_growth: 'Annual population growth %'
      },
      axes: {
        child_Birth: 'y',

        population_growth: 'y2'
      },
      //Replace with corresponding column name
      types: {
        child_births: 'bar',
        population_growth: 'line'
      }
    },
    axis: {
      x: {
        type: 'category',
        padding: {
          left: 0.5,
          right: 0.5
        },
        tick: {
          multiline: false,
          tooltip: true
        },
        label: 'Year'
      },
      y: {
        label: 'Child births',
        max: 8000000,
        min: 2000000
      },
      y2: {
        label: 'Annual population Growth %',
        max: 3,
        min: 1.8,
        show: true
      }
    },
    bar: {
      // properties for bar chart
    },
    line: {
      classes: ['line-class-data1']
      // properties for line chart
    },
    bindto: '#data1_chart'
  });
}
