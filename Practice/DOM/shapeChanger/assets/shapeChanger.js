// var bulb = document.getElementById('bulb')
// var btn = document.getElementById('btn')
var shape = 0;
btn.addEventListener('click', function(){
    if (shape == 0) {
        bulb.style.backgroundColor= "yellow";
        shape = 1;
    }
    else{
        bulb.style.backgroundColor= "aqua"; 
        shape = 0;
    }

})