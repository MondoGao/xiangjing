$(document).ready(function() {
  var linenodeOuterWidth = $(".line-node").outerWidth(true);
  var linenodeNum = $(".line-node").length;
  var timelineWidth = linenodeOuterWidth * linenodeNum;
  var $timeline = $(".time-line");
  $(document).mousemove(function(e) {
    var docWidth = $(document).width(),
      docHeight = $(document).height(),
      mouseX = e.pageX,
      mouseY = e.pageY;
    var xPer = mouseX / docWidth,
      yPer = mouseY / docHeight;
    // var nodePer = 1 / 70;
    // xPer = Math.floor(xPer / nodePer) * nodePer;
    // $(document).attr('title', xPer);
    if (timelineWidth > docWidth) {
      $timeline.css('margin-left', -(timelineWidth - docWidth) * xPer *1.08);
    }
    else {
      $timeline.css('margin-left',0);
    }
  });
});
