let Display = "";
let DisplayOp = "";
let DisplayInput2 = "";


function addtodiSplay(button) {
    Display+=button;
    document.getElementById("display").value = Display;
}
function Calculate(Cal){
    Display=eval(Display).toString();
    document.getElementById("display").value = Display;
}
function Clear(){
        Display="";
        document.getElementById("display").value = Display;




}
function DeleteTheDarnThing(){
    Display=Display.slice(0,-1);
    document.getElementById("display").value = Display;
}
function Square(){
    Display=Math.pow(eval(Display),2).toString();
    document.getElementById("display").value = Display;
}