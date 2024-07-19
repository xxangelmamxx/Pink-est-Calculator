//BARBIE CALCULATOR

var display = document.getElementById("disply");
var display2 = document.getElementById("stodis");
var screen2_dis =""

var a = 0;
var b = 0;
var mode = "display";


function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
    display2.value = "";
}

function calculate(){
    screen2_dis = display.value;
    screen2_dis += "="
    display2.value = screen2_dis;

    try {
        display.value = eval(disply.value);
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

