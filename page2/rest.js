var button = $('.sub');
var currentUser = localStorage.getItem('name') || "";
var welcome= $('.welcomename');

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
