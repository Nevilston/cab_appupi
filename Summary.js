var a = localStorage.getItem("btime");
var b = localStorage.getItem("fdate");
var c = localStorage.getItem("cab");
var d = localStorage.getItem("final");
var e = parseFloat(d).toFixed(2);
var f = localStorage.getItem("personage");
var g = localStorage.getItem("pname1");
var h = localStorage.getItem("cabtpe");
fdate1.innerHTML = b;
ftime.innerHTML = a;
Option.innerHTML = c;
total.innerHTML = e;
page.innerHTML = f;
pName.innerHTML = g;
cabtype.innerHTML = h;


var close = document.getElementById("close");
close.addEventListener('click', closes);

function closes() {
    window.location.replace('index.html');
}