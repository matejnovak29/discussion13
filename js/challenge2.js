let billing = document.querySelector("#billing");

/* Q1 */

window.addEventListener("load", function() {
	console.log(billing.value);
});

/* Q2 */

let toggle = document.getElementsByTagName("#useBilling");

addEventListener("click", function() {
    console.log(toggle.value);
});