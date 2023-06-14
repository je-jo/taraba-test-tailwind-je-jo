const nav = document.querySelector('#mainnav')
const list = document.querySelector('#mainnav-list')

// Add menu burger button to the page
const burgerClone = document.querySelector('#template-burger').content.cloneNode(true);
const buttonBurger = burgerClone.querySelector('button');
nav.insertBefore(buttonBurger, list);
const burgerIcon = buttonBurger.querySelector("use");

// Toggle aria-expanded attribute
buttonBurger.addEventListener('click', () => {
    // aria-expanded="true" signals that the menu is currently open
    const isClosed = buttonBurger.getAttribute('aria-expanded') === "false" //return boolean
    buttonBurger.setAttribute('aria-expanded', isClosed);
    if (isClosed) {
        burgerIcon.setAttribute("href", "/public/img/home/sidebar-close.svg#close")
    } else {
        burgerIcon.setAttribute("href", "/public/img/home/menu-icon.svg#menu")
    }
});

// Hide list on keydown Escape
nav.addEventListener('keyup', e => {
    if (e.code === 'Escape') {
        buttonBurger.setAttribute('aria-expanded', false);
        burgerIcon.setAttribute("href", "/public/img/home/menu-icon.svg#menu");
    }
});


// Add theme button to the page
const themeSwitchClone = document.querySelector('#template-theme').content.cloneNode(true);
const buttonTheme = themeSwitchClone.querySelector('label');
const checkboxTheme = buttonTheme.querySelector("input");
nav.appendChild(buttonTheme);

buttonTheme.addEventListener("change", changeTheme);


// change theme and save to local storage
function changeTheme() {
    if (checkboxTheme.checked) {
        document.documentElement.className = "dark"
    }
    else {
        document.documentElement.className = "light"
    }
    localStorage.setItem('theme', document.documentElement.className);
}


// center special card on load
// window.addEventListener("load", function () {
//     let container = document.querySelector(".wrapper-horizontal");
//     let middle = container.children[2];
//     container.scrollLeft = middle.offsetLeft +
//         middle.offsetWidth / 2 - container.offsetWidth / 2;
// });




