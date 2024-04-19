// var bulb = document.getElementById('bulb')
var bulbImage = document.getElementById('bulb-image')
var btn = document.getElementById('btn')
var shape = "yellow";
btn.addEventListener('click', function(){
    if (shape == "yellow") {
        bulbImage.style.backgroundColor= "yellow";
        shape = "Aqua";
    }
    else{
        bulbImage.style.backgroundColor= "aqua"; 
        shape = "yellow";
    }

})