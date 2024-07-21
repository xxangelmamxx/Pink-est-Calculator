//Pink-est Calculator

var display = document.getElementById("disply");
var display2 = document.getElementById("stodis");
var display3 = document.getElementById("opScreen");


var a = 0;
var b = 0;
var mode = "display";


function appendToDisplay(input){
    
    //issue with inputing operator after = sign, display2 is outputing "answer=answer" upon pressing operator
    
    str = display.value;
    opp = display3.value;

    if (opp == "=" && (input == "+" || input == "-" || input == "*" ||input == "/")){
        display2.value = str;
        display3.value = input;        
    }

    if (input == "+"){
        display3.value = "+";
        display2.value += opp;
        display2.value += str;
        display.value = "";
    }
    else if (input == "-"){
        display3.value = "-";
        display2.value += opp;
        display2.value += str;
        display.value = "";
    }
    else if(input == "*"){
        display3.value = "*";
        display2.value += opp;
        display2.value += str;
        display.value = "";
    }
    else if(input == "/"){
        display3.value = "/";
        display2.value += opp;
        display2.value += str;
        display.value = "";
    }
    else{
        display.value += input;
    }

    if (str.length >= 9){
        display.value = str.substring(0,9)
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

        display3.value = "="

        str = display.value;

        if (str.length >= 10){
            display.value = str.substring(0,9)
        }
    } catch (error) {
        display.value = "Error"     
    }
    
    
}

function aFunc(){  
    if (mode === "display")  {
        display.value += a;
    }
    if (mode === "assign")  {
         a=display.value ;
         mode ="display";
         display.value = "";
    }
    
}

function bFunc(){    
    if (mode === "display")  {
        display.value += b;
        
    }
    if (mode === "assign")  {
         b=display.value ;
         mode ="display";
         display.value = "";
    }
}

function store(){
    mode="assign";
}

