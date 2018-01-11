// JavaScript Document

function showJersey(jersey) {
    if (jersey == 'blue') {
        console.log('blue show')
        document.getElementById('jersey1').style.display = 'block';
        document.getElementById('jersey2').style.display = 'none';
        document.getElementById('jersey3').style.display = 'none';
        document.getElementById('jersey4').style.display = 'none';
    }
    if (jersey == 'green') {
        document.getElementById('jersey1').style.display = 'none';
        document.getElementById('jersey2').style.display = 'block';
        document.getElementById('jersey3').style.display = 'none';
        document.getElementById('jersey4').style.display = 'none';
     
    }
    if (jersey == 'red') {
        document.getElementById('jersey1').style.display = 'none';
        document.getElementById('jersey2').style.display = 'none';
        document.getElementById('jersey3').style.display = 'block';
        document.getElementById('jersey4').style.display = 'none';
      
    }
    if (jersey == 'turqouise') {
        document.getElementById('jersey1').style.display = 'none';
        document.getElementById('jersey2').style.display = 'none';
        document.getElementById('jersey3').style.display = 'none';
        document.getElementById('jersey4').style.display = 'block';
        
    }
}

function showLogo(logo) {
    if (logo == 'stars') {
        document.getElementById('logo1').style.display = 'block';
        document.getElementById('logo2').style.display = 'none';
        document.getElementById('logo3').style.display = 'none';
        document.getElementById('logo4').style.display = 'none';
    }
    if (logo == 'penguins') {
        document.getElementById('logo1').style.display = 'none';
        document.getElementById('logo2').style.display = 'block';
        document.getElementById('logo3').style.display = 'none';
        document.getElementById('logo4').style.display = 'none';
    }
    if (logo == 'jets') {
        document.getElementById('logo1').style.display = 'none';
        document.getElementById('logo2').style.display = 'none';
        document.getElementById('logo3').style.display = 'block';
        document.getElementById('logo4').style.display = 'none';
    }
    if (logo == 'sharks') {
        document.getElementById('logo1').style.display = 'none';
        document.getElementById('logo2').style.display = 'none';
        document.getElementById('logo3').style.display = 'none';
        document.getElementById('logo4').style.display = 'block';
    }
}










window.addEventListener('DOMContentLoaded', function (event) {
    var colorSelect = document.getElementById('color_select');
    var logoSelect = document.getElementById('logo_select');


    colorSelect.addEventListener('change', function (event) {
        console.log(this.value);
        showJersey(this.value);
    })

    logoSelect.addEventListener('change', function (event) {
        console.log(this.value);
        showLogo(this.value);
    })





});










