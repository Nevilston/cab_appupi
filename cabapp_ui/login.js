function validate() {


    var name = document.getElementById("username").value;
    var pass = document.getElementById("pass").value;
    if (name == "nevil" && pass == "1234") {
        alert("Sucessfully logined");
        window.location = 'CabTypes.html';
    } else {
        alert("Invalid User Data");
        window.location = 'index.html';
    }
    return false;
}