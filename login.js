var banner = $("#banner-message");
var button = $("button");
var login = $('#login');

button.on("click", function(){
  banner.toggleClass("alt");
  $('p').toggle();
  
  button.hide();
  
  // console.log(login.css('display'));
  login.css({"display": "inline"});

});


