var linenodeOuterWidth = $(".line-node").outerWidth(true);
var linenodeNum = $(".line-node").length;
var timelineWidth = linenodeOuterWidth * linenodeNum;
var $timeline = $(".time-line");
$(document).ready(function() {
  $(document).mousemove(function(e) {
    var docWidth = $(document).width(),
      mouseX = e.pageX;
    var xPer = mouseX / docWidth;
    if (timelineWidth > docWidth) {
      $timeline.css('margin-left', -(timelineWidth - docWidth) * xPer * 1.08);
    } else {
      $timeline.css('margin-left', 0);
    }
    linenodeReset(e.pageY);
  });
});

function linenodeReset(mouseY) {
  var timelineDtHeight = $timeline.find('dt').outerHeight(true);
  var docHeight = $(document).height();
  var yPer = mouseY / docHeight;
  var $lineNodeHover = $(".line-node:hover");
  var tPer = 1 - ($timeline.innerHeight() - timelineDtHeight) / docHeight;
  if (yPer < tPer) {
    $lineNodeHover.find('a').each(function(index, el) {
      $(this).css('transform', 'translateY(0)');
    });
  }
  if ($lineNodeHover.outerHeight(true) > $timeline.innerHeight()) {
    if (yPer > tPer) {
      $lineNodeHover.find('a').each(function(index, el) {
        if (docHeight > 440) {
          $(this).css('transform', 'translateY(-' + 3 * (yPer - tPer) * ($lineNodeHover.outerHeight(true) - $timeline.innerHeight()) + 'px)');
        } else {
          $(this).css('transform', 'translateY(-' + 4 * (yPer - tPer) * ($lineNodeHover.outerHeight(true) - $timeline.innerHeight()) + 'px)');
        }
      });
    }
  } else {
    $lineNodeHover.find('a').each(function(index, el) {
      $(this).css('transform', 'translateY(0)');
    });
  }
}
