// Scale #html_text from size specified for 1000 viewport width to current width
function resizeHTMLText() {
  var w = d3.select('#sketch1').node().clientWidth;
  d3.selectAll('.html_overlay').style('transform', 'scale(' + w / 1000 + ')');
}

resizeHTMLText();
window.addEventListener('resize', resizeHTMLText);
