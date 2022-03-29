function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

var inDarkMode = false;

function toggleIcon() {
    if (inDarkMode) {
        document.body.classList.remove('dark-mode');
        document.getElementById('icon-theme').innerHTML =
          '<i class="fa fa-sun-o" id="icon-theme" style="color:#d8c658;"></i>';
        inDarkMode = false;
    } else {
        document.body.classList.add('dark-mode');
        document.getElementById('icon-theme').innerHTML =
        '<i class="fa fa-moon-o" id="icon-theme" style="color:#737eac;"></i>';
        inDarkMode = true;
    }
}

function burgerMenu() {
    var menu = document.getElementById("myDropdown");
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

function toggleMenu(elementId) {
    var ID1 = "AboutMe";
    var ID2 = "ContactMe";
    var ID3 = "Projects_"
    var menu = document.getElementById("myDropdown");
    if (elementId === ID1) {
        menu.style.display = "none";
    } else if (elementId === ID2) {
        menu.style.display = "none";
    } else if (elementId === ID3) {
        menu.style.display = "none";
    }
}
