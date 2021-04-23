var calculateBtn = document.getElementById("calculateBtn");


calculateBtn.addEventListener('click', price);



function price() {
    event.preventDefault();
    var option = document.getElementById("services").value;
    var kilometer = document.getElementById("km");
    let cost;
    var Price = document.getElementById("Price");
    console.log(option);
    switch (option) {
        case "mini":
            cost1 = 10 * kilometer.value;
            cost = (cost1 * 0.07) + cost1;
            break;
        case "macro":
            cost1 = 15 * kilometer.value;
            cost = (cost1 * 0.07) + cost1;
            break;
        case "prime":
            cost1 = 20 * kilometer.value;
            cost = (cost1 * 0.07) + cost1;
            break;
    }
    localStorage.setItem("charge", cost);
    localStorage.setItem("cabtpe", option);
    Price.innerHTML = cost;
    localStorage.setItem("cab", option);
    return false;
}