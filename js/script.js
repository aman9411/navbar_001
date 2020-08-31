function visible(){
  var toggle = document.querySelector('.hide');
  toggle.classList.toggle('active')
  var toggle = document.querySelector('.toggle');
  toggle.classList.toggle('active')
}
function visible2(){
  var find = document.querySelector('.find');
  find.classList.toggle('active')
}
function sayHello() {
  var name =
   document.getElementById('name').value;
   var message = "<h5> " + name + " </h5>";

  document
    .getElementById('Content')
    .innerHTML = message;
}
