import spellbookBgUrl from "./spellbookBG.jpg";
import "./style.css";

// Set the background image
document.body.style.backgroundImage = `url(${spellbookBgUrl})`;
document.body.style.backgroundSize = "contain";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.margin = "0";
document.body.style.minHeight = "100vh";

// Create a container for the button and counter
const container = document.createElement("div");
container.style.position = "absolute";
container.style.left = "50%";
container.style.top = "50%";
container.style.transform = "translate(-50%, -50%)";
container.style.textAlign = "center";

// Initialize counter
let count = 0;

// Create and style the button
const button = document.createElement("button");
button.textContent = "Cast Spell";
button.className = "spell-button";

// Create counter display
const counterDisplay = document.createElement("div");
counterDisplay.textContent = `Spells Cast: ${count}`;
counterDisplay.style.marginTop = "1rem";
counterDisplay.style.fontSize = "1.2rem";
counterDisplay.style.color = "white";

// Add click handler
button.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = `Spells Cast: ${count}`;
});

// Add elements to the page
container.appendChild(button);
container.appendChild(counterDisplay);
document.body.appendChild(container);
