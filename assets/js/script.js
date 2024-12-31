
const searchIcon = document.getElementById('searchIcon');
const searchContainer = document.getElementById('searchContainer');
const cartIcon = document.getElementById('cartBoxIcon');
const cartBox = document.getElementById('cart__box');
const overlay = document.getElementById('overlay');
const lightOverlay = document.getElementById('lightOverlay');
var body = document.body;
const themeIcon = document.querySelectorAll('#themeIcon');
const userProfile = document.getElementById('user__profile');
const profileContainer = document.getElementById('profile__container');
const langBtn = document.getElementById('lang__btn');
const langContainer = document.getElementById('lang__container');




// Show the search container
searchIcon.addEventListener('click', () => {
  searchContainer.classList.toggle('show');
  overlay.classList.toggle('show');
  cartBox.classList.remove('show');
  lightOverlay.classList.remove('show');
  profileContainer.classList.remove('show');
  langBtn.classList.remove('show');
  body.style.overflow = 'hidden';
});

// Close the search container using overlay
overlay.addEventListener('click', () => {
  searchContainer.classList.remove('show');
  cartBox.classList.remove('show');
  overlay.classList.remove('show');
  body.style.overflow = 'auto';
});


// Show the cart box
cartIcon.addEventListener('click', () => {
  cartBox.classList.toggle('show');
  searchContainer.classList.remove('show');
  overlay.classList.toggle('show');
  lightOverlay.classList.remove('show');
  profileContainer.classList.remove('show');
  langBtn.classList.remove('show');
  body.style.overflow = 'hidden';
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

// Close the language container using overlay
lightOverlay.addEventListener('click', () => { 
  lightOverlay.classList.remove('show');
  langContainer.classList.remove('show');
  profileContainer.classList.remove('show');
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
    mybutton.style.visibility = "visible";
    mybutton.style.opacity = 1;
    mybutton.style.transform = "translateY(0)";
  } else {
    mybutton.style.visibility = "hidden";
    mybutton.style.opacity = 0;
    mybutton.style.transform = "translateY(20px)";
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
  langContainer.classList.remove('show');
  lightOverlay.classList.toggle('show');
  overlay.classList.remove('show');
  cartBox.classList.remove('show');
  searchContainer.classList.remove('show');
});








