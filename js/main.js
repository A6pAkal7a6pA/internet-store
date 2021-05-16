let login = document.querySelector(".register__title-item.signin");
let register = document.querySelector(".register__title-item.signup");
let form_in = document.querySelector(".register__form.signin");
let form_up = document.querySelector(".register__form.signup");

login?.addEventListener("click", () => {
	if (!login.classList.contains("active")) {
		login.classList.add("active");
		register.classList.remove("active");
		form_up.classList.remove("active");
		form_in.classList.add("active");
	}
});

register?.addEventListener("click", () => {
	if (!register.classList.contains("active")) {
		register.classList.add("active");
		login.classList.remove("active");
		form_in.classList.remove("active");
		form_up.classList.add("active");
	}
});

document.querySelectorAll(".category .category-item__title").forEach((item) => {
	item.addEventListener("mouseenter", (event) =>{
		// console.log(item.parentElement.classList.add("active"));
	});
});
