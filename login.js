function validate() {

    event.preventDefault();
    var name = document.getElementById("username").value;
    var namelen = name.length;
    var pass = document.getElementById("pass").value;
    if (namelen == 10 && pass == "1234") {
        alert("Sucessfully logined");
        window.location.href = "cablist.html";
    } else {
        alert("Invalid User Data");
        window.location.href = "index.html";
    }
    return false;
}