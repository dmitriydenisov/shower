function modalEmailOpen() {
	document.querySelector("#email-form").classList.add("form--active");
	document.body.style.overflow = "hidden";
}

document
	.querySelectorAll("[data-email]")
	.forEach((x) => x.addEventListener("click", () => modalEmailOpen()));

function modalEmailClose() {
	document.querySelector("#email-form").classList.remove("form--active");
	document.body.style.overflow = "auto";
}

document
	.getElementById("email-form")
	.addEventListener("click", function (event) {
		if (event.target === this) {
			modalEmailClose();
		}
	});


