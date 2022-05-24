function myFunctionFeatures() {
    document.querySelector(".dropdown-menu-features").classList.toggle("show");
    if (document.querySelector(".dropdown-menu-company").classList.contains('show')) {
        document.querySelector(".dropdown-menu-company").classList.remove('show');
    }
}
function myFunctionCompany() {
    document.querySelector(".dropdown-menu-company").classList.toggle("show");
    if (document.querySelector(".dropdown-menu-features").classList.contains('show')) {
        document.querySelector(".dropdown-menu-features").classList.remove('show');
    }
}
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle("show");
})

window.onclick = function (event) {
    if (!event.path[1].matches('div.dropdown-button')) {
        var dropdowns = document.getElementsByClassName("dropdown-menu");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

