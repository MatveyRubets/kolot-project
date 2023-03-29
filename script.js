const article = document.querySelector("#newsleft__article");

const loadSection = page => {
	fetch(`./${page}`) // Fetching our local page (check pub.html)
		.then(res => res.ok && res.text())
		.then(section => (article.innerHTML = section));
};

const searchIcon = document.querySelector(".header__search-icon");
const closeIcon = document.querySelector(".header__search-close");
const searchBox = document.querySelector(".header__searchbox");
const burgerBtn = document.querySelector(".header__burger");
const navigation = document.querySelector(".navbar");
const nav = document.querySelector("nav");
const body = document.querySelector("body");

searchIcon.addEventListener("click", () => {
	searchBox.classList.add("active");
	searchIcon.classList.add("active");
	closeIcon.classList.add("active");
	burgerBtn.classList.add("hide");
});

closeIcon.addEventListener("click", () => {
	searchBox.classList.remove("active");
	searchIcon.classList.remove("active");
	closeIcon.classList.remove("active");
	burgerBtn.classList.remove("hide");
});

burgerBtn.addEventListener("click", () => {
	console.log("hi");
	nav.classList.toggle("open");
	body.classList.toggle("lightgray");
});
