// menu icon change

let menuIcon = document.querySelector(".menu-icon");
let xIcon = document.querySelector(".fa-xmark");

menuIcon.addEventListener("click", () => {

  let menuVertical = document.querySelector(".vertical-menu");
  
    menuVertical.style.right = "0";
    menuIcon.style.position = "fixed";
  
  
});

xIcon.addEventListener("click", () => {
  let menuVertical = document.querySelector(".vertical-menu");
  menuVertical.style.right = "-1000px";
  menuIcon.style.position = "absolute";
})


// t-shirts slideshow

var shirtIndex = 1;
showTshirt(shirtIndex);

function plusDivs(n) {
  showTshirt(shirtIndex += n);
}

function showTshirt(n) {
  var i;
  var shirts = document.getElementsByClassName("shirt");
  let shape = document.querySelectorAll(".shapes div");
  let price = document.querySelector("#price span");
  if (n > shirts.length) {
    shirtIndex = 1
  }
  if (n < 1) {
    shirtIndex = shirts.length;
  }

  for (i = 0; i < shirts.length; i++) {
    shirts[i].style.display = "none";
    shape[i].classList.remove("active");
  }
  shirts[shirtIndex-1].style.display = "block";
  shape[shirtIndex - 1].classList.add("active");
  price.innerHTML = `${shirts[shirtIndex - 1].dataset.price}`;
}

// pageUp button

let pageBtn = document.querySelector(".page-up");
pageBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
})

function pageBtnStat() {
if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
  pageBtn.style.display = "flex";
}
else {
  pageBtn.style.display = "none";
  
  }
}

// featured products section animation


function animateFeatSection() {
  let featSection = document.querySelector(".featured-products .heading");
  
  let featHeight = featSection.offsetHeight;
  let featTop = featSection.offsetTop;
  let windowHeight = this.innerHeight;
  let windowTop = this.pageYOffset;

  if (windowTop >= (featHeight + featTop) - windowHeight) {
    featSection.parentElement.classList.add("featuredFade");
  }

}

// on scrolling 
window.onscroll = () => {
  pageBtnStat();
  animateFeatSection();
}