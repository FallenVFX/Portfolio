let menuArrow = document.getElementById("menuArrow");
let nav = document.getElementById("nav");
let span = [document.getElementById("home"), document.getElementById("projects"), document.getElementById("contact2")];

function showMenu() {
    for (let i = 0; i < span.length; i++) {
        if (span[i].style.display === "inline-block") {
            span[i].style.display = "none";
            menuArrow.style.transform = "rotate(0deg)";
            menuArrow.style.margin = "10px 45px 10px 5px";
            nav.style.width = "75px";
        } else {
            span[i].style.display = "inline-block";
            menuArrow.style.transform = "rotate(180deg)";
            menuArrow.style.margin = "10px 5px 10px 73px";
            nav.style.width = "110px";
        }
    }
}

menuArrow.onclick = showMenu;