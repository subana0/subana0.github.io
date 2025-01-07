
const input = document.getElementById("num");

function display(data){
    input.value += data;
}

function cls(){
    input.value = "";
}

function calculate(){
    try{
        input.value = eval(input.value)
    }catch(e){
        input.value = "Error"
    }
}