function hello(){
    alert("Hello World!!!!");
  }

function add(){
    var a,b,c;
    var a = Number(document.getElementById("first-add").value);
    var b = Number(document.getElementById("second-add").value);
    var c = a + b;
    document.getElementById("answer").innerText = c;
}

function swap(){
  var a,b,c;
  var a = Number(document.getElementById("first-swap").value);
  var b = Number(document.getElementById("second-swap").value);
  c = b;
  b = a;
  a = c;
  document.getElementById("answer1").innerText = a;
  document.getElementById("answer2").innerText = b;
}