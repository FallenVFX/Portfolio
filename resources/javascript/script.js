let menuArrow = document.getElementById("menuArrow");
let span = [document.getElementById("home"), document.getElementById("projects"), document.getElementById("contact2")];

function showMenu() {
    for (let i = 0; i < span.length; i++) {
        if (span[i].style.display === "block") {
            span[i].style.display = "none";
            menuArrow.style.transform = "rotate(0deg)";
            menuArrow.style.margin = "15px 50px 15px 10px";
        } else {
            span[i].style.display = "block";
            menuArrow.style.transform = "rotate(180deg)";
            menuArrow.style.margin = "15px 10px 15px 98px";
        }
    }
}

menuArrow.onclick = showMenu;