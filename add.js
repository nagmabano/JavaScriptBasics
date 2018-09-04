function add(){
    var a,b,c;
    var a = Number(document.getElementById("first-add").value);
    var b = Number(document.getElementById("second-add").value);
    var c = a + b;
    document.getElementById("answer").innerText = c;
}

