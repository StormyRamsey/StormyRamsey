$(document).ready(function(){
  $('body').css('display', 'none');
  $('body').fadeIn(3000);
  $('.navbar').click(function(event){
    event.preventDefault();
    newLocation = this.href;
  $('body').fadeIn(3000, newpage);
  });

  function newpage(){
    window.location.href = newLocation;
  }

});
