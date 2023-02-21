function testalert () {
    alert("This is a test");
}

function hidealert () {
    var x= document.getElementById("cookie");
    if (x.style.display=== "none") {
        x.style.display= "flex"
    }
    else{x.style.display="none"}
}