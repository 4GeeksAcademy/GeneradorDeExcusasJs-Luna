/* eslint-disable */
import "bootstrap";
import "./style.css";

function RandomArray(array) {
  return Math.floor(Math.random() * array.length);
}

window.onload = function() {
  let arrayWho = ["El perro", "Mi abuela", "El cartero", "Mi pájaro"];
  let arrayAction = ["se comió", "pisó", "aplastó", "rompió"];
  let arrayWhat = ["mi tarea", "mi teléfono", "el auto"];
  let arrayWhen = ["antes de la clase","cuando dormía","mientras hacía ejercicio","durante mi almuerzo","mientras oraba"];
 
  let who = RandomArray(arrayWho);
  let action = RandomArray(arrayAction);
  let what = RandomArray(arrayWhat);
  let when = RandomArray(arrayWhen);

  let excuse = document.getElementById("excuse");

  excuse.innerText = arrayWho[who] + " " + arrayAction[action] + " " + arrayWhat[what] + " " + arrayWhen[when];
};
