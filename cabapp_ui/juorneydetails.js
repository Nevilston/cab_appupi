var check = document.getElementById("check");
check.addEventListener('click', peak);

function peak() {
    event.preventDefault();
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var sex1 = document.getElementById("sex");
    let peakhour;
    let cost = localStorage.getItem("charge");
    var hour = time.substr(0, 2);
    var year = date.substr(6, 4);

    if ((hour >= 17 && hour <= 19)) {
        alert("The Time entered is Peak Hour ");
        console.log(cost);
        // document.getElementById("charge").innerHTML = localStorage.getItem("cost");
        tax = cost * 0.025;
        console.log(tax);
        peakhour = parseInt(cost) + (tax);
        console.log(peakhour);
        charge.innerHTML = peakhour;

    } else {
        alert("The time entered is not peak hour");
        peakhour = cost;
        charge.innerHTML = peakhour;
    }

    localStorage.setItem("total", peakhour);
    localStorage.setItem("btime", time);
    localStorage.setItem("fdate", date);
}