document.addEventListener("DOMContentLoaded", function(){
    let divElement = document.querySelector("div");

    divElement.addEventListener("click", function(){
        alert("Hola soy un div");
    });
    let buttonElement = document.getElementById("botonsaludar");

    buttonElement.addEventListener("click", function (event) {
      event.stopPropagation(); // Detener la propagación del evento
      alert("Hola!");
    });
});

