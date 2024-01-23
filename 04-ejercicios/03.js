function getbyIdx(arr, idx){
    if(arr.length <= idx || idx < 0) {
        return 'Indice no es valido';
    }
    return arr[idx];
}

let resultado = getbyIdx([1,2],2);
console.log(resultado)