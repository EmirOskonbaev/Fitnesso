$(document).ready(function(){
    $(".carousel").owlCarousel({
      items: 3,
      loop: true,
      autoplay:true,
      autoplayTimeout: 3000,
      margin:100,
      autoplayHoverPause: true
    });
  });

  let popupBg = document.querySelector( '.popup_bg');
  let popup = document.querySelector( '.popup');
  let openPopupButtons = document.querySelectorAll(  '.open-popup');
  let closePopupButton = document.querySelector( '.close-popup');
  openPopupButtons.forEach((button  ) => {
      button.addEventListener('click',  (e  ) => {
          e.preventDefault();
          popupBg.classList.add('active');
          popup.classList.add('active');
      })
  });
  closePopupButton.addEventListener( 'click', () => {
      popupBg.classList.remove( 'active');
      popup.classList.remove( 'active');
  });
  document.addEventListener( 'click',  ( e ) => {
      console.log(e.target);
      if(e.target === popupBg) {
          popupBg.classList.remove(  'active');
          popup.classList.remove(  'active');
      }
  });
  
  var btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
  


  
