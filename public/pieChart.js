new Chart(document.getElementById('pieChart'), {
  type: 'pie',
  data: {
    labels: ['Boys', 'Girls'],
    datasets: [
      {
        label: 'Suicides (per 100 000)',
        backgroundColor: ['#7DAFC2', '#C087A2'],
        borderColor: '#eee',
        data: [12, 7.38]
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Suicides of youths ages 13-25 (per 100 000) in 2018'
    }
  }
});
