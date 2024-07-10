function DisplayValue(val){
    document.getElementById("inputvalue").value = document.getElementById("inputvalue").value + val;
}

function cleardisplay(){
    document.getElementById("inputvalue").value = "";
}

function calculate(){
    let userInput = document.getElementById("inputvalue").value;
    let result = eval(userInput);
    document.getElementById("inputvalue").value = result;
}