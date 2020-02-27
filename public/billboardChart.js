import 'billboard.js/dist/theme/insight.css';
import bb from 'billboard.js/dist/billboard.pkgd';

console.log('in chart.js');
bb.generate({
  data: {
    columns: [
      ['data1', 500, 350, 300, 0, 0, 0],
      ['data2', 230, 100, 140, 200, 150, 50]
    ]
  }
});
