

var menuButton=document.querySelector(".header-nav-btn");
var buttonClose=document.querySelector(".header-nav-hidden__icon");
var headerNavHidden=document.querySelector(".header-nav-hidden");

function openingMenu() { 
	menuButton.style.opacity="0";
	headerNavHidden.style.right="0";
}

function closingMenu() {
	headerNavHidden.style.right="-100%";
	headerNavHidden.style.transition="right 2s";
	menuButton.style.opacity="0.8";
}

menuButton.addEventListener("click",openingMenu);
buttonClose.addEventListener("click",closingMenu);