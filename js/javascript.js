// JavaScript Document



window.onload = function () {
    console.log('loaded');
    Init();
}



function Init() {
    console.log('loaded2');
}












function showDiv(select) {
    if (select.value == "blue") {
        document.getElementById('jersey1').style.display = "block";
        console.log('blue show')
    }
    if (select.value == "green") {
        document.getElementById('jersey2').style.display = "block";
        console.log('green show')
    }
    if (select.value == "red") {
        document.getElementById('jersey3').style.display = "block";
        console.log('red show')
    }
    if (select.value == "turquoise") {
        document.getElementById('jersey4').style.display = "block";
        console.log('turqouise show')
    }
}














$(document).ready(function () {
    $("select").change(function () {
        $(this).find("option:selected").each(function () {
            var optionValue = $(this).attr("value");
            if (optionValue) {
                $(".box").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else {
                $(".box").hide();
            }
        });
    }).change();
});