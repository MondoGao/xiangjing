$(document).ready(function() {
  $sideNavBtns = $(".aside .side-nav").find('a');
  $imgFloatDivs = $(".img-float").children('div');
  $sideNavBtns.each(function(index, el) {
    if (index < 3) {
      $(this).click(function(event) {
        $sideNavBtns.each(function(index, el) {
          $(this).removeClass('active');
        });
        $(this).addClass('active');
        $imgFloatDivs.each(function(index, el) {
          $(this).fadeOut('500');
        });
        $($imgFloatDivs[index]).fadeIn('500');
        $imgFloatDivs.parent().addClass('show');
      });
    }
  });
});
