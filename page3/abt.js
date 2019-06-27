var button = $('.submit');
localStorage.getItem('email', email);

button.on("click", storeEmail);

function storeEmail(event){
  event.preventDefault();
  var email = $('.email').val();
  localStorage.setItem('email', email);
  console.log(localStorage)
}
