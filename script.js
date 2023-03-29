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
const header = document.querySelector(".header");

searchIcon.addEventListener("click", () => {
	searchBox.classList.add("active");
	searchIcon.classList.add("active");
	closeIcon.classList.add("active");
});

closeIcon.addEventListener("click", () => {
	searchBox.classList.remove("active");
	searchIcon.classList.remove("active");
	closeIcon.classList.remove("active");
});

burgerBtn.addEventListener("click", () => {
	header.classList.add("open");
});
