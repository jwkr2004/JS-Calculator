var result = "";

function _clear(){
    result = "";
    document.getElementById("Result").innerHTML = "Enter Numbers Here";
}

function _one(){
    result += 1;
    document.getElementById("Result").innerHTML = result;
}

function _two(){
    result += 2;
    document.getElementById("Result").innerHTML = result;
}

function _three(){
    result += 3;
    document.getElementById("Result").innerHTML = result;
}

function _four(){
    result += 4;
    document.getElementById("Result").innerHTML = result;
}

function _five(){
    result += 5;
    document.getElementById("Result").innerHTML = result;
}

function _six(){
    result += 6;
    document.getElementById("Result").innerHTML = result;
}

function _seven(){
    result += 7;
    document.getElementById("Result").innerHTML = result;
}

function _eight(){
    result += 8;
    document.getElementById("Result").innerHTML = result;
}

function _nine(){
    result += 9;
    document.getElementById("Result").innerHTML = result;
}

function _zero(){
    result += 0;
    document.getElementById("Result").innerHTML = result;
}

function _O_parenthesis(){
    result += "(";
    document.getElementById("Result").innerHTML = result;
}

function _C_parenthesis(){
    result += ")";
    document.getElementById("Result").innerHTML = result;
}

function _period(){
    result += ".";
    document.getElementById("Result").innerHTML = result;
}

function _plus(){
    result += "+";
    document.getElementById("Result").innerHTML = result;
}

function _subtract(){
    result += "-";
    document.getElementById("Result").innerHTML = result;
}

function _multiply(){
    result += "*";
    document.getElementById("Result").innerHTML = result;
}

function _divide(){
    result += "/";
    document.getElementById("Result").innerHTML = result;
}

function _equals(){
    try{
        document.getElementById("Result").innerHTML = eval(result);
        result="";
    }
    catch{
        document.getElementById("Result").innerHTML = "ERROR";
    }

}

function _backspace(){
    if(result.length > 1){
        result = result.substring(0, result.length - 1);
        document.getElementById("Result").innerHTML = result;
    }
    else{
        result = "";
        document.getElementById("Result").innerHTML = "Enter Numbers Here";
    }
}