function clickDiv(event) {
    
    if (event.target.tagName === 'BUTTON') {
        return; 
    }
    alert("Hola, soy un div");
}


function clickButton() {
    alert("Hola!");
}
document.addEventListener('DOMContentLoaded', function () {
    let divButton = document.getElementById("elementDiv");
    let button = document.querySelector("#elementDiv button");
        divButton.addEventListener("click", clickDiv);
        button.addEventListener("click", clickButton);

});