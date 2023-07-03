// To append the article

const article = document.querySelector("#newsleft__article");

const loadSection = page => {
	fetch(`./${page}`) // Fetching our local page (check pub.html)
		.then(res => res.ok && res.text())
		.then(section => (article.innerHTML = section));
};

// Responsive layout (Burger menu & Searchbox)

// const searchIcon = document.querySelector(".header__search-icon");
// const closeIcon = document.querySelector(".header__search-close");
// const searchBox = document.querySelector(".header__searchbox");
const burgerBtn = document.querySelector(".header__burger");
const navigation = document.querySelector(".navbar");
const mainNav = document.querySelector(".mainnav");
const body = document.querySelector("body");

// searchIcon.addEventListener("click", () => {
// 	searchBox.classList.add("active");
// 	searchIcon.classList.add("active");
// 	closeIcon.classList.add("active");
// 	burgerBtn.classList.add("hide");
// });

// closeIcon.addEventListener("click", () => {
// 	searchBox.classList.remove("active");
// 	searchIcon.classList.remove("active");
// 	closeIcon.classList.remove("active");
// 	burgerBtn.classList.remove("hide");
// });

burgerBtn.addEventListener("click", () => {
	mainNav.classList.toggle("open");
	body.classList.toggle("lightgray");
});

// Routing

const app = document.querySelector("#app");

const locationResolver = location => {
	const template = document.createElement("div");

	template.innerHTML = `
	<h1>${location}</h1>

	<p>Главная страница</p>
`;

	switch (location) {
		case "#/publications/":
			app.innerHTML = `
                <h1>${location}</h1>

                <p>Страница publications</p>
            `;
			break;
		case "#/dossier/":
			app.innerHTML = `
                <h1>${location}</h1>

                <p>Страница dossier</p>
            `;
			break;
		case "#/contacts/":
			app.innerHTML = `
                <h1>${location}</h1>

                <p>Страница contacts</p>
            `;
			break;
	}
};

window.addEventListener("load", () => {
	const location = window.location.hash;

	if (location) {
		locationResolver(location);
	}
});
