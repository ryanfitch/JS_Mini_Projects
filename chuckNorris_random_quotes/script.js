$(document).ready(function(){
  
  $.icndb.getRandomJoke(function(res) {
      
      $('#jokes').text(res.joke);
      
    }); //Initial random quote
  
  $('button').click(function(){
    
    $.icndb.getRandomJoke(function(res) {
      
      $('#jokes').text(res.joke);
      
    }); //Generates new random quote when button is clicked.
   });
 });
