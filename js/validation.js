let regInputs = document.querySelectorAll(".signup .register__form-input");
function onlyLetters(str) {
	return str.replace(/[^A-zА-яЁё]+/g, "");
}

function onlyNumbers(str) {
	return str.replace(/\D+/g, "");
}

function setValidOrInvalid(condition, input) {
	if (condition) {
		input.classList.remove("invalid");
		input.classList.add("valid");
	} else {
		input.classList.remove("valid");
		input.classList.add("invalid");
	}
}

function firstNameValidation(input, event) {
	if (input.childNodes[1].classList.contains("register__name")) {
		value = event.target.value;
		input.querySelector("input").value = onlyLetters(value);
		length = event.target.value.length;
		setValidOrInvalid(length >= 2 && length <= 30, input);
	}
}

function lastNameValidation(input, event) {
	if (input.childNodes[1].classList.contains("register__surname")) {
		value = event.target.value;
		input.querySelector("input").value = onlyLetters(value);
		length = event.target.value.length;
		setValidOrInvalid(length >= 2 && length <= 50, input);
	}
}

function phoneValidation(input, event) {
	if (input.childNodes[1].classList.contains("register__phone")) {
		mask(input.querySelector("input"), event);
		length = event.target.value.length;
		setValidOrInvalid(length == 18, input);
	}
}

function setCursorPosition(pos, elem) {
	elem.focus();
	if (elem.setSelectionRange) {
		elem.setSelectionRange(pos, pos);
	} else if (elem.createTextRange) {
		range = elem.createTextRange();
		range.collapse(true);
		range.moveEnd("character", pos);
		range.moveStart("character", pos);
		range.select();
	}
}

function mask(input, event) {
	let matrix = "+380 (__) ___ ____",
		i = 0,
		def = matrix.replace(/\D/g, ""),
		val = input.value.replace(/\D/g, "");
	if (def.length >= val.length) {
		val = def;
	}
	input.value = matrix.replace(/./g, function (a) {
		return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
	});
	if (event.type == "blur") {
		if (input.value.length == 2) {
			input.value = "";
		}
	} else {
		setCursorPosition(input.value.length, input);
	}
};

function passwordValidation(input, event) {
	if (input.childNodes[1].classList.contains("register__password")) {
		length = event.target.value.length;
		setValidOrInvalid(length >= 4 && length <= 16, input);
	}
}

function rePasswordValidation(input, event) {
	if (input.childNodes[1].classList.contains("register__re-password")) {
		password = document.querySelector(".register__password").value;
		value = event.target.value;
		setValidOrInvalid(value === password, input);
	}
}

document.querySelector(".register__re-password")?.addEventListener("blur", (e) => {
	password = document.querySelector(".register__password").value;
	setValidOrInvalid(document.querySelector(".register__re-password").value === password, e.target.parentElement);
});

document.querySelector(".register__re-password")?.addEventListener("focus", (e) => {
	password = document.querySelector(".register__password").value;
	setValidOrInvalid(document.querySelector(".register__re-password").value === password, e.target.parentElement);
});

function isValidEmail(email) {
	const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+.+.[A-Za-z]{2,4}$/;
	return regexEmail.test(email);
}

function emailValidation(input, event) {
	if (input.childNodes[1].classList.contains("register__email")) {
		value = event.target.value;
		setValidOrInvalid(isValidEmail(value), input);
	}
}
regInputs.forEach((input) => {
	input.addEventListener("input", (e) => {
		firstNameValidation(input, e);
		lastNameValidation(input, e);
		phoneValidation(input, e);
		passwordValidation(input, e);
		rePasswordValidation(input, e);
		emailValidation(input, e);
	});
});

document.querySelector(".signin .register__phone")?.addEventListener("input", (e) => {
	mask(e.target, e);
});

document.querySelector(".signup .register__submit")?.addEventListener("click", (e) => {
	e.preventDefault;
});

var signInPhone = $('.signin .register__phone');

$(document).ready(function () {
	$('.signin .register__submit').click(function (event) {
		event.preventDefault();
		phoneLength = $('.signin .register__phone').val().length;
		phoneCondition = phoneLength === 18;
		passwordLength = $('.signin .register__password').val().length;
		passwordCondition = passwordLength >= 4 && passwordLength <= 16;

		if (phoneCondition && passwordCondition) {
			alert("Okey");
		} else {
			alert("not okey")
		}
	});

	$('.signup .register__submit').click(function (event) {
		event.preventDefault();
		firstNameLength = $('.signup .register__name').val().length;
		firstNameCondition = firstNameLength >= 2 && firstNameLength <= 30;
		lastNameLength = $('.signup .register__surname').val().length;
		lastNameCondition = lastNameLength >= 2 && lastNameLength <= 50;
		phoneLength = $('.signup .register__phone').val().length;
		phoneCondition = phoneLength === 18;
		passwordLength = $('.signup .register__password').val().length;
		passwordCondition = passwordLength >= 4 && passwordLength <= 16;
		rePasswordValue = $('.signup .register__re-password').val();
		rePasswordCondition = passwordLength >= 4 && passwordLength <= 16 && rePasswordValue === $(".signup .register__password").val();
		emailValue = $('.signup .register__email').val();
		emailCondition = isValidEmail(emailValue);

		if (firstNameCondition && lastNameCondition && phoneCondition && passwordCondition && rePasswordCondition && emailCondition) {
			alert("okey");
		} else {
			alert('not okey');
		}
	});
});