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

    var carpetNeeded = Math.ceil(floor(d));
    var paintNeeded = Math.ceil(walls(d, h));
document.getElementById("outputForCarpetPaint").innerHTML = 'carpet Needed is '+carpetNeeded+' sqft' + '<br>' + 'paint Needed is '+paintNeeded+' sqft';
    console.log('carpet Needed is '+carpetNeeded+' sqft');
    console.log('paint Needed is '+paintNeeded+' sqft');

}



function showstuff(el){
    var elementId = document.getElementById(el);
    for(i=0; i<elementId.length; i++){
    // console.log(elementId[i].text);
    // console.log(elementId[i].value);
    // console.log(elementId[i].selected);
    if(elementId[i].selected=== true){
        var x = elementId[i].text;
    }
    

}
return x;
}
function lighting(){
    var elementId = document.getElementsByName("bulb");
    var mycheck = "";
    for(i=0;i<elementId.length;i++){
// console.log(elementId.length);
// console.log(elementId[i].checked)
    if(elementId[i].checked=== true){
        mycheck = mycheck + elementId[i].value + '<br>';
    }
    }
return mycheck;
    }

function evaluatePage(){
    var feedbackHome = showstuff("home");
    var feedbackState = showstuff("state");
    var feedbackLight = lighting();
    document.getElementById("output").innerHTML = feedbackHome + '<br>' + feedbackState + '<br>' + feedbackLight;  
}

function myfunction(){
    var dateClicked = document.getElementById("buttonClicked"); 
    var numbered = dateClicked.options[dateClicked.selectedIndex].text;
document.getElementById("button").innerHTML = numbered;
}
// Ajax and json for animals
var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
    } else {
      console.log("We connected to the server, but it returned an error.");
    }
    
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
  pageCounter++;
  if (pageCounter > 3) {
    btn.classList.add("hide-me");
  }
});

function renderHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
    
    for (ii = 0; ii < data[i].foods.likes.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].foods.likes[ii];
      } else {
        htmlString += " and " + data[i].foods.likes[ii];
      }
    }

    htmlString += ' and dislikes ';

    for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].foods.dislikes[ii];
      } else {
        htmlString += " and " + data[i].foods.dislikes[ii];
      }
    }

    htmlString += '.</p>';

  }

  animalContainer.insertAdjacentHTML('beforeend', htmlString);
}

// end of Ajax and json function in javascript
$(document).ready(function(){
    $("#hide").click(function(){
        $("section").hide();
    });
    $("#show").click(function(){
        $("section").show();
    });
});