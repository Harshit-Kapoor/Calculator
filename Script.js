function insert(num){
    document.getElementById("output-value").innerHTML = document.getElementById("output-value").innerHTML + num
}

function equal(){
    var exp = document.getElementById("output-value").innerHTML
    if(exp){
        document.getElementById("output-value").innerHTML = eval(exp)
    }
}

function clean(){
    document.getElementById("output-value").innerHTML = ""

}

function back(){
    var exp = document.getElementById("output-value").innerHTML
    document.getElementById("output-value").innerHTML = exp.substring(0,exp.length-1)
}










