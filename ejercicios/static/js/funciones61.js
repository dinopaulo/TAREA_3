// Algoritmo para escribir el cubo de los números del 1 al 20
const cubosLista = document.getElementById('cubos-lista');
for (let i = 1; i <= 20; i++) {
  let cubo = i ** 3;
  let listItem = document.createElement('li');
  listItem.innerHTML = `El cubo de ${i} es <span>${cubo}</span>`;
  cubosLista.appendChild(listItem);
}
