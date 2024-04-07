// Função para abrir o popup
function openPopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.style.display = "block";

  // Adiciona event listener ao botão de fechar dentro do popup
  popup.querySelector(".close").addEventListener("click", function () {
    closePopup(popup);
  });
}

// Função para fechar o popup
function closePopup(popup) {
  popup.style.display = "none";
}

// Quando o usuário clica em qualquer lugar fora do popup, feche-o
window.addEventListener("click", function (event) {
  if (event.target.classList.contains("popup")) {
    closePopup(event.target);
  }
});

// Determinando os popups
var popup1 = document.getElementById("popup1");
var popup2 = document.getElementById("popup2");
var popup3 = document.getElementById("popup3");

// Determinando botões que abriram os popups
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");

// Abre os popups pelos IDs
btn1.onclick = function () {
  openPopup("popup1");
};

btn2.onclick = function () {
  openPopup("popup2");
};

btn3.onclick = function () {
  openPopup("popup3");
};
