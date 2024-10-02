const button = document.getElementById("button")

function test() {
    if (button.style.backgroundColor == "red")
    button.style.backgroundColor = "ghostwhite";
    else {
        button.style.backgroundColor = "red";
    }
}
