var $commentForm = $(".comment-form");
var $existCommentForm = $(".exist-comment-form");
var $replist = $(".rep-list"),
  $repPicFloat = $(".rep-pic-float");
$(document).ready(function() {
  $(window).resize(function(event) {
    $(".float-commit").find('li').each(function(index, el) {
      switch (index) {
        case 0:
          $(this).css('right', $(".work-img img").offset().left);
          break;
        case 1:
          $(this).css('right', $(".work-img img").offset().left + 100);
          break;
        case 2:
          $(this).css('right', $(".work-img img").offset().left + 80);
          break;
        case 3:
          $(this).css('right', $(".work-img img").offset().left + 20);
          break;
        default:
          $(this).css('right', $(".work-img img").offset().left);
      }
    });
  });

  $(".float-commit").find('li').each(function(index, el) {
    $(this).css('right', '+=' + $(".work-img img").offset().left).click(function(event) {
      existCommentFormToggle();
    });
  });

  $(".to-reprod").click(function(event) {
    $(this).parents('section').removeClass('active').next().addClass('active');
  });
  $(".to-work").click(function(event) {
    $(this).parents('section').removeClass('active').prev().addClass('active');
  });

  $(".bottom-nav .nav-item-comment").click(commentFormToggle);
  $(".bottom-nav .nav-item-hide-comment").click(function(event) {
    $(".float-commit").fadeToggle('500');
  });
  $(".bottom-nav .nav-item-like").click(function(event) {
    $(this).children('i').fadeOut('300', function() {
      $(this).toggleClass('fa-heart-o').toggleClass('fa-heart').fadeIn('300');
    });
  });

  $existCommentForm.find('.btn-close').click(existCommentFormToggle);
  $existCommentForm.find('.btn-up').click(function(event) {
    $existCommentForm.find('.btn-down').fadeToggle('300');
    $(this).children('i').fadeOut('300', function() {
      $(this).toggleClass('fa-thumbs-o-up').toggleClass('fa-thumbs-up').fadeIn('300');
    });
  });
  $existCommentForm.find('.btn-down').click(function(event) {
    $existCommentForm.find('.btn-up').fadeToggle('300');
    $(this).children('i').fadeOut('300', function() {
      $(this).toggleClass('fa-thumbs-o-down').toggleClass('fa-thumbs-down').fadeIn('300');
    });
  });

  $commentForm.find('.btn-close').click(commentFormToggle);
  $commentForm.find('.btn-submit').click(commentFormToggle);

  $replist.children('li').click(function(event) {
    $repPicFloat.children('img').attr('src', $(this).data('img'));
    repPicFloatToggle();
  });
  $replist.find('div.float-message').click(function(event) {
    event.stopPropagation();
    $(this).children('i').fadeOut('300', function() {
      $(this).toggleClass('heart-like').fadeIn('300');
    });
  });
  $repPicFloat.click(function(event) {
    repPicFloatToggle();
  });
});

function commentFormToggle() {
  $commentForm.stop(true);
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

function existCommentFormToggle() {
  $existCommentForm.stop(true);
  if ($existCommentForm.css('opacity') == '0') {
    $existCommentForm.removeClass('hide').animate({
      opacity: '1'
    }, '500');
  } else {
    $existCommentForm.animate({
      opacity: '0'
    }, '500', function() {
      $(this).addClass('hide');
    });
  }
}

function repPicFloatToggle() {
  $repPicFloat.stop(true);
  if ($repPicFloat.css('opacity') == '0') {
    $repPicFloat.removeClass('hide').animate({
      opacity: '1'
    }, '500');
  } else {
    $repPicFloat.animate({
      opacity: '0'
    }, '500', function() {
      $(this).addClass('hide');
    });
  }
}
