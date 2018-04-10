var openNav, closeNav;
$(document).ready(function () {
    openNav = function() {
        document.getElementById("toggleNav").style.width = "100%";
    }
    closeNav = function() {
        document.getElementById("toggleNav").style.width = "0";
    }
});
