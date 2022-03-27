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
