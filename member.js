function skillsMember() {
    var x = document.getElementById("skillsMember");
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("member").style.display = "none";
    } else {
        x.style.display = "none";
    }
}