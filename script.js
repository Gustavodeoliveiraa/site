const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById("nav");
    nav.classList.toggle('active');

}

function closeMenu() {
    const nav = document.getElementById("nav");
    nav.classList.remove('active');
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)

const menuLinks = document.querySelectorAll("#nav .menu a");
menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
})

document.addEventListener('click', function(event) {
    const target = event.target;
    const isMenuClicked = nav.contains(target) || btnMobile.contains(target);
    
    if (!isMenuClicked) {
      closeMenu();
}})

document.addEventListener('touchstart', function(event) {
    startY = event.touches[0].clientY;
})

document.addEventListener('touchmove', function(event) {
    const currentY = event.touches[0].clientY;
    const scrollThreshold = 5; // ajuste o valor conforme necessário
  
    if (Math.abs(currentY - startY) > scrollThreshold) {
      const isMenuVisible = nav.classList.contains('active');
      const isMenuArea = nav.contains(event.target) || btnMobile.contains(event.target);
  
      if (isMenuVisible && !isMenuArea) {
        closeMenu();
      }
    }
})

//  
