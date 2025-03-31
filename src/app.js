/* eslint-disable */
import "bootstrap";
import "./style.css";

function RandomArray(array) {
  return Math.floor(Math.random() * array.length);
}

window.onload = function() {
  let arraywho = ["El perro", "Mi abuela", "El cartero", "Mi pájaro"];
  let arrayaction = ["se comió", "pisó", "aplastó", "rompió"];
  let arraywhat = ["mi tarea", "mi teléfono", "el auto"];
  let arraywhen = [
    "antes de la clase",
    "cuando dormía",
    "mientras hacía ejercicio",
    "durante mi almuerzo",
    "mientras oraba"
  ];
  let who = RandomArray(arraywho);
  let action = RandomArray(arrayaction);
  let what = RandomArray(arraywhat);
  let when = RandomArray(arraywhen);
  let excuse = document.getElementById("excuse");
  excuse.innerText =
    arraywho[who] +
    " " +
    arrayaction[action] +
    " " +
    arraywhat[what] +
    " " +
    arraywhen[when];
};
