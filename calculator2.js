let startbtn = document.querySelectorAll("button");//list of all buttons in html

for(var button of startbtn){
button.addEventListener("click",displayNumber);
}

function displayNumber(event){
var ids = event.target.id;
if (ids == 'equal'){
var currentDisplay = document.getElementById('display').innerHTML;

var result = eval(currentDisplay);

document.getElementById('display').innerHTML = ""+result;

}
else if (ids == 'clear'){
    document.getElementById('display').innerHTML = "";
}else{

var btID= event.target.innerHTML;
var currentDisplay = document.getElementById('display').innerHTML;

document.getElementById('display').innerHTML = currentDisplay + btID;

}
}
