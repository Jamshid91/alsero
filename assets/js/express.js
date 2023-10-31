if($(window).innerWidth() >= 575) {
        $(document).ready(function() {
        $('.switch-box').hide();
        $('.switch-box:first-child').show();
        $('.switch').click(function() {
          let pageInfo = $(this).attr('data-radio');
          $('.switch-box').hide();
          $('.' + pageInfo).show();
        })
      });
}