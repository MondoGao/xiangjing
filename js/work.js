var $commentForm = $(".comment-form");
$(document).ready(function() {
  $(".to-reprod").click(function(event) {
    $(this).parents('section').removeClass('active').next().addClass('active');
  });
  $(".to-work").click(function(event) {
    $(this).parents('section').removeClass('active').prev().addClass('active');
  });

  $(".bottom-nav .nav-item-comment").click(commentFormToggle);
  
  $commentForm.find('.btn-close').click(commentFormToggle);
  $commentForm.find('.btn-submit').click(commentFormToggle);

});

function commentFormToggle() {
  if ($commentForm.css('opacity') == '0') {
    $commentForm.removeClass('hide').animate({
      opacity: '1'
    }, '500');
  } else {
    $commentForm.animate({
      opacity: '0'
    }, '500', function() {
      $(this).addClass('hide');
    });
  }
}
