// JavaScript Document
window.onload = function () {
    console.log('loaded');
    Init();
}



function Init() {
}

function showDiv(select) {
    if (select.value == blue) {
        document.getElementById('jersey1').style.display = "block";
    }
    if (select.value == green) {
        document.getElementById('jersey2').style.display = "block";
    }
    if (select.value == red) {
        document.getElementById('jersey3').style.display = "block";
    }
    if (select.value == turquoise) {
        document.getElementById('jersey4').style.display = "block";
    }
}