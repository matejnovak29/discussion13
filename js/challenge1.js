let h1 = document.querySelector("h1");

/* Q1 */

window.addEventListener("load", function() {
	h1.style.color = "purple";
    h1.style.textAlign = "center";
});

/* Q2 */

addEventListener("dblclick", function() {
    /*this.alert(Date().toLocaleString());*/
});

/* Q3 */

let toggle = document.querySelector("#toggle");

addEventListener("click", function() {
    if (toggle.checked == true) {
        document.querySelector(".hidden").style.display = "block";
    } else if (document.querySelector(".hidden").style.display === "block") {
        document.querySelector(".hidden").style.display = "none";
    }
});