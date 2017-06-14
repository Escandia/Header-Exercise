var openMenu = document.querySelector("#hamburgerIcon");

function showMenu(){
  var listMenu = document.querySelector("#mobilelDisplay");
  if (listMenu.classList.contains('hidden')) {
    listMenu.classList.remove('hidden');
  } else {
    listMenu.classList.add('hidden');
  }
}

openMenu.addEventListener('onClick', showMenu);
