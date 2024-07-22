//Pink-est Calculator

var display = document.getElementById("disply");
var display2 = document.getElementById("stodis");
var display3 = document.getElementById("opScreen");


var a = 0;
var b = 0;
var mode = "display";


function appendToDisplay(input){

    // got to check for a more efficient way to do this (the if conditions)
    
    str = display.value;
    opp = display3.value;

    if (opp === "=" && (input === "+" || input === "-" || input === "*" ||input === "/")){
        display2.value = str;
        display3.value = input;  
        display.value = "";      
    }
    else if(opp === "=" && (input === "0"|| input === "1"|| input === "2"|| input === "3"|| input === "4"|| input === "5"|| input === "6"|| input === "7"|| input === "8"|| input === "9"|| input === ".")){
        clearDisplay();
        appendToDisplay(input);
    }
    else if (input === "+" || input === "-" || input === "*" || input === "/"){
        display3.value = input;
        display2.value += opp;
        display2.value += str;
        display.value = "";
    }
    else{
        display.value += input;
    }
    if (length(display.value) >= 9){
        display.value = str.substring(0,9);
    }
}

function clearDisplay(){
    display.value = "";
    display2.value = "";
    display3.value = "";
}

function calculate(){
    display2.value += display3.value;
    display2.value += display.value;

    try {
        display.value = eval(display2.value);

        display3.value = "=";

        str = display.value;

        if (str.length >= 9){
            display.value = str.substring(0,9);
        }
    } catch (error) {
        clearDisplay();
        display.value = "Error";     
    }
    
    
}

function aFunc(){  
    if (mode === "display")  {
        display.value += a;
    }
    if (mode === "assign")  {
         a=display.value ;
         mode ="display";
         display2.value = "a";
         display3.value = "=";
    }
    
}

function bFunc(){    
    if (mode === "display")  {
        display.value += b;
        
    }
    if (mode === "assign")  {
         b=display.value ;
         mode ="display";
         display2.value = "b";
         display3.value = "=";
    }
}

function store(){
    mode="assign";
}

