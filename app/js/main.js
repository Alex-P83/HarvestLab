$(document).ready(function(){
    $('#showMoreFilter').popover({
          trigger: 'manual',
          html: true,
          boundary:'body',
          title: '<span>...</span><a class="closePopover" id="closeShowMoreFilter" href="#" style="float:right; font-size:20px;">&times;</a>',
          content: $('#showMoreFilterContent').html()
      }).on('click',function () {
          $(this).popover('show');
          $('#closeShowMoreFilter').click(function () {
              $('#showMoreFilter').popover('hide');
          });
      });         
  });