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
