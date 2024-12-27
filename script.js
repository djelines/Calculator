// Sélectionner les éléments
const screen = document.getElementById("screen");
const buttons = Array.from(document.getElementsByClassName("button"));
const buttonCheck = Array.from(document.getElementsByClassName("button_check"));
// Fusionner les deux tableaux
const allButtons = buttons.concat(buttonCheck);
const message = document.querySelector(".message");

// Initialiser une variable pour stocker l'expression
let currentInput = "";

// Ajouter un événement de clic à chaque bouton
Array.from(allButtons).forEach((button) => {
  button.addEventListener("click", function () {
    const value = button.textContent;

    // Si c'est un "C", on réinitialise l'écran
    if (value === "C") {
      currentInput = "";
      screen.textContent = "0";
    } else if (value === "↩") {
      // Supprimer le dernier caractère
      currentInput = currentInput.slice(0, -1);
      screen.textContent = currentInput;
    } else if (value === "=") {
      try {
        // Évaluer l'expression
        currentInput = eval(currentInput).toString();

        // Limiter à 10 caractères
        if (currentInput.length > 10) {
          currentInput = currentInput.slice(0, 10);
        }

        screen.textContent = currentInput;
      } catch (e) {
        screen.textContent = "Error";
      }
    } else {
      // Ajouter une nouvelle valeur au calcul
      if (currentInput.length < 12) {
        currentInput += value;
        screen.textContent = currentInput;
      } else {
        message.textContent = "maximum number of characters reached";
      }
    }
  });
});
