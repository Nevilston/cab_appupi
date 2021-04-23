var check1 = document.getElementById("verify");
check1.addEventListener('click', verify);

function verify() {
    event.preventDefault();
    var date1 = document.getElementById("Birth").value;
    console.log(date1);
    var year = date1.substr(0, 4);
    var d = new Date();
    console.log(year);
    var n = d.getFullYear();
    console.log(n);
    var syear = n - year;
    syear = parseInt(syear);
    console.log(syear);
    let disprice;
    let pcost = localStorage.getItem("total");

    if (syear >= 70) {
        alert("Seniour Citizen Discount is Applicable");
        disprice = (pcost * 50) / 100;
        disc.innerHTML = disprice;
    } else {
        alert("Seniour Citizen Discount is Not Applicable");
        disprice = pcost;
        disc.innerHTML = disprice;
    }
    localStorage.setItem("final", disprice);
    localStorage.setItem("personage", syear);
}