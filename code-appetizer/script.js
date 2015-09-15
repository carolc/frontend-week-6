
var button = $("#myButton");
var myColors = ["red", "blue", "green"];
function moveToFoo(){
    var myInput =$("#myInput").val();
    var myDiv=$("#foo");
    myDiv.append(myInput);
    myDiv.css("background",myColors[0]);
}

button.click (moveToFoo());