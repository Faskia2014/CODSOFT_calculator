const input = document.getElementById("nums");



function calculateVals(){
    input.value = eval(input.value);
}

function clearInput(){

    input.value = "";
    
}

function conInput(num){
    input.value += num;
}

function deleteInput() {
    input.value = input.value.slice(0, -1);
}
