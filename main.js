var button = $('.sub');
var currentUser = localStorage.getItem('name') || "";
var welcome= $('.welcomename');

//add class to welcome variable
welcome.on('click', moveLeft);

function moveLeft(){
  welcome.toggleClass('welcomename');
}

if (currentUser === ""){
  welcome.text(`Welcome`)
}
else{
  welcome.text(`Welcome back ${currentUser}`);
}


button.on("click", storeEmail);

function storeEmail(){
  event.preventDefault();

var name = $('.name').val();

  welcome.text(`Hi ${name}`)
  localStorage.setItem('name', name);
  console.log(localStorage)
}

$(document).ready(function() {
  var city, map;
  map = $('.ct-map');
  city = map.find('.ct-city');
  city.each(function() {
    var button, that;
    that = $(this);
    button = that.find('.ct-city__button');
    return button.on('click', function() {
      city.not(that).removeClass('active');
      if (that.hasClass('active')) {
        that.removeClass('active');
        return map.removeClass('popup-open');
      } else {
        that.addClass('active');
        return map.addClass('popup-open');
      }
    });
  });
});
