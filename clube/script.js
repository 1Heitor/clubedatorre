$('.icon').click(function(){
    $('span').toggleClass("cancel");
  });

 let currentIndex = 0;
 const images = [
 'imgs/1.png',
 'imgs/2.png',
 'imgs/3.png',
 'imgs/5.png',
 'imgs/6.png',
 'imgs/7.png',
 ];

 function openLightbox(index) {
     currentIndex = index;
     showLightbox();
 }

 function showLightbox() {
     const lightbox = document.getElementById('lightbox');
     const lightboxImage = document.getElementById('lightboxImage');
     lightboxImage.src = images[currentIndex];
     lightbox.style.display = 'flex';
 }

 function closeLightbox() {
     document.getElementById('lightbox').style.display = 'none';
 }

 function changeImage(direction) {
     currentIndex += direction;
     if (currentIndex >= images.length) {
         currentIndex = 0;
     }
     if (currentIndex < 0) {
         currentIndex = images.length - 1;
     }
     showLightbox();
 }