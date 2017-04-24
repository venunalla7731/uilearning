function floor(diameter){
    var radius = diameter/2;
    var floorArea = Math.PI *(radius * radius);
    return floorArea;
}

function walls(diameter, height) {
    var radius = diameter/2;
    var circumference = 2 * Math.PI + radius;
    var wallArea = circumference * height;
    return wallArea;
}
function materialsNeeded(){
    var d = document.getElementById("across").value;
    var h = document.getElementById("height").value;

    var carpetNeeded = floor(d);
    var paintNeeded = walls(d, h);

    console.log(carpetNeeded);
    console.log(paintNeeded);

}



function showstuff(el){
    var elementId = document.getElementById(el);
    for(i=0; i<elementId.length; i++){
    console.log(elementId[i].text);
    console.log(elementId[i].value);
    console.log(elementId[1].selected);

}
}
function evaluatePage(){
showstuff("home");
showstuff("state");  
}