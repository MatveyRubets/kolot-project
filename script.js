const article = document.getElementById("newsleft__article");

const loadSection = page => {
	fetch(`./${page}`) // Fetching our local page (check pub.html)
		.then(res => res.ok && res.text())
		.then(section => (article.innerHTML = section));
};
