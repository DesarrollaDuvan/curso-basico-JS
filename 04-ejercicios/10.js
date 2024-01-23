let longitud = 7;

function crearArray(n) {
  let array = [];
  if (n < 0) {
    return [];
  }
  for (let index = 0; index < n; index++) {
    array[index] = index + 1;
  }
  return array;
}

let resultado = crearArray(longitud);

console.log(resultado);
