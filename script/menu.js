var openMenu = document.querySelector("#hamburgerIcon");

function showMenu(){
  console.log('Show menu');
  var listMenu = document.querySelector("#mobileDisplay");
  if (listMenu.classList.contains('show')) {
    listMenu.classList.remove('show');
  } else {
    listMenu.classList.add('show');
  }
}

openMenu.addEventListener('click', showMenu);
