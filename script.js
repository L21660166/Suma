function sumar(){
    let churpia1 = document.getElementById('numero1').value;
    let churpia2 = document.getElementById('numero2').value;

    let caquita = parseInt(churpia1) + parseInt(churpia2);

    document.getElementById('resultado').innerHTML = `El resultado de la suma es: ${caquita}`;
}
