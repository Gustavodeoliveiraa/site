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

<<<<<<< HEAD
// 

=======
//  
    // Função para rolagem suave ao clicar nos links do menu
function scrollToSection(event) {
    event.preventDefault();
    const target = event.target;
    const sectionId = target.getAttribute("href");
    const section = document.querySelector(sectionId);
    window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth"
    });
  }

  // Adicionar o evento de clique aos links do menu
const menuLinks_ = document.querySelectorAll(".menu a");
menuLinks_.forEach(link => {
    link.addEventListener("click", scrollToSection);
});
>>>>>>> teste
