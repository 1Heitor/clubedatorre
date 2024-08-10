/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')

 let currentSlide = [0, 0, 0];

 function showSlide(index, carouselIndex) {
     const carousels = document.querySelectorAll('.carousel-inner');
     const totalSlides = carousels[carouselIndex].children.length;

     if (index >= totalSlides) {
         currentSlide[carouselIndex] = 0;
     } else if (index < 0) {
         currentSlide[carouselIndex] = totalSlides - 1;
     } else {
         currentSlide[carouselIndex] = index;
     }

     carousels[carouselIndex].style.transform = `translateX(-${currentSlide[carouselIndex] * 100}%)`;
 }

 function nextSlide(carouselIndex) {
     showSlide(currentSlide[carouselIndex] + 1, carouselIndex);
 }

 function prevSlide(carouselIndex) {
     showSlide(currentSlide[carouselIndex] - 1, carouselIndex);
 }

 // Initialize the carousels
 document.querySelectorAll('.carousel').forEach((carousel, index) => {
     showSlide(0, index);
 });