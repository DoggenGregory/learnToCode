var body = document.body;
var backgroundColor = document.getElementById("backgroundColorValue");


function go(){
    
    colorX = backgroundColor.value;

    body.style.backgroundColor = colorX;
    console.log(colorX);
}