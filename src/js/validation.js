// form validation

const form = document.querySelector("#form-signup")
const termsCheck = document.querySelector("#terms");

form.addEventListener("submit", (e) => {
    
    if (termsCheck.validity.valueMissing) {
        termsCheck.parentElement.style.color = "#FF1934";
        termsCheck.style.borderColor = "#FF1934";
        e.preventDefault();

    }
})