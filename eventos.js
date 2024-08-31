
function clickDiv() {
    alert("Hola! Soy el div");
}
document.addEventListener('DOMContentLoaded', function () {
    let divButton = document.getElementById("elementDiv");
        divButton.addEventListener("click", clickDiv);
});