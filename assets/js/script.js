
const searchIcon = document.getElementById('searchIcon');
const searchContainer = document.getElementById('searchContainer');
const cartIcon = document.getElementById('cartBoxIcon');
const cartBox = document.getElementById('cart__box');
const overlay = document.getElementById('overlay');
const lightOverlay = document.getElementById('lightOverlay');
const body = document.body;
const themeIcon = document.querySelectorAll('#themeIcon');
const userProfile = document.getElementById('user__profile');
const smuserProfile = document.getElementById('smuser__profile');
const profileContainer = document.getElementById('profile__container');
const smprofileContainer = document.getElementById('smprofile__container');
const langBtn = document.getElementById('lang__btn');
const smlangBtn = document.getElementById('smlang__btn');
const langContainer = document.getElementById('lang__container');
const smlangContainer = document.getElementById('smlang__container');





// Show the search container
searchIcon.addEventListener('click', () => {
  searchContainer.classList.toggle('show');
  overlay.classList.toggle('show');
  body.classList.toggle('overflow');
  cartBox.classList.remove('show');
  lightOverlay.classList.remove('show');
  profileContainer.classList.remove('show');
  langBtn.classList.remove('show');
});

// Close the search container using overlay
overlay.addEventListener('click', () => {
  searchContainer.classList.remove('show');
  cartBox.classList.remove('show');
  overlay.classList.remove('show');
  body.classList.remove('overflow');
});


// Show the cart box
cartIcon.addEventListener('click', () => {
  cartBox.classList.toggle('show');
  overlay.classList.toggle('show');
  body.classList.toggle('overflow');
  searchContainer.classList.remove('show');
  lightOverlay.classList.remove('show');
  profileContainer.classList.remove('show');
  langBtn.classList.remove('show');
});


// Show the language container
langBtn.addEventListener( 'click' , () => {
  langContainer.classList.toggle('show');
  lightOverlay.classList.toggle('show');
  profileContainer.classList.remove('show');
  overlay.classList.remove('show');
  cartBox.classList.remove('show');
  searchContainer.classList.remove('show');
});
// Show the language container
smlangBtn.addEventListener( 'click' , () => {
  smlangContainer.classList.toggle('show');
  lightOverlay.classList.toggle('show');
  smprofileContainer.classList.remove('show');
  overlay.classList.remove('show');
  cartBox.classList.remove('show');
  searchContainer.classList.remove('show');
});

// Close the language container using overlay
lightOverlay.addEventListener('click', () => { 
  lightOverlay.classList.remove('show');
  langContainer.classList.remove('show');
  profileContainer.classList.remove('show');
  smlangContainer.classList.remove('show');
  smprofileContainer.classList.remove('show');
});




// change theme when sun icon is clicked
themeIcon.forEach(icon => {
  icon.addEventListener('click', () => {
    body.classList.toggle('light_theme');
    icon.classList.toggle('fa-solid');
    icon.classList.toggle('fa-regular');
  });
});

// Back-to-top Button
let mybutton = document.getElementById("backToTop");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.classList.add('show');
  } else {
    mybutton.classList.remove('show');
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Add a click event listener to each heart icon



const heartIcons = document.querySelectorAll('.heart-icon');

// Add a click event listener to each heart icon
heartIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    // Toggle classes to switch between light and solid heart
    icon.classList.toggle('fa-regular');
    icon.classList.toggle('fa-solid');
  });
});

const playIcons = document.querySelectorAll('.play-icon');

// Add a click event listener to each heart icon
playIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    // Toggle classes to switch between light and solid heart
    icon.classList.toggle('fa-circle-play');
    icon.classList.toggle('fa-circle-pause');
  });
});


// Show the user profile
userProfile.addEventListener('click', () => {
  profileContainer.classList.toggle('show');
  lightOverlay.classList.toggle('show');
  langContainer.classList.remove('show');
  overlay.classList.remove('show');
  cartBox.classList.remove('show');
  searchContainer.classList.remove('show');
});
// Show the user profile
smuserProfile.addEventListener('click', () => {
  smprofileContainer.classList.toggle('show');
  lightOverlay.classList.toggle('show');
  smlangContainer.classList.remove('show');
  overlay.classList.remove('show');
  cartBox.classList.remove('show');
  searchContainer.classList.remove('show');
});


$('.slider-main').slick({
  slidesToShow: 1,
  arrows: false,
  asNavFor: '.slider-nav',
  vertical: true,
  // autoplay: true,
  verticalSwiping: true,
  centerMode: true
});

$('.slider-nav').slick({
  slidesToShow: 4,
  asNavFor: '.slider-main',
  vertical: true,
  focusOnSelect: true,
  // autoplay: false,
  centerMode: true
});

$(window).on('resize orientationchange', function() {
  if ($(window).width() > 1200) {
    $('.slider-nav').slick('unslick');
    $('.slider-nav').slick({
      slidesToShow: 4,
      asNavFor: '.slider-main',
      vertical: true,
      focusOnSelect: true,
      autoplay: true,
      centerMode: true
    });
  }
});








