var a = localStorage.getItem("btime");
var b = localStorage.getItem("fdate");
var c = localStorage.getItem("cab");
var d = localStorage.getItem("final");
fdate1.innerHTML = b;
ftime.innerHTML = a;
Option.innerHTML = c;
total.innerHTML = d;

var close = document.getElementById("close");
close.addEventListener('click', closes);

function closes() {
    window.location.replace('index.html');
}