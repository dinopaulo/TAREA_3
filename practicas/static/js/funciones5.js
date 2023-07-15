function validar(){
    var numero = parseInt(document.getElementById('num').value);
    if(numero % 2 !== 0){
        var predecesor = numero + 2;
        var antecesor = numero - 2;
        alert("El numero base es: "+numero);
        alert("El numero antecesor es: "+antecesor);
        alert("El numero predecesor es: "+predecesor);
    }else{
        alert("El numero "+numero+" no es impar")
    }
    
    
}