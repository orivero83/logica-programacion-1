function calcular() {

    let numero1 = parseFloat(document.getElementById("numero1").value);
    
    let numero2 = parseFloat(document.getElementById("numero2").value);

    let numero3 = parseFloat(document.getElementById("numero3").value);



    if (numero1 > numero2 && numero2 > numero3) {
        
         x1 = "Mayor";
         x2 = "Medio";
         x3 = "Menor";


        const resultadoElemento1 = document.getElementById("resultado1");

        resultadoElemento1.textContent = "Orden Mayor - Medio - Menor: " + numero1 + " / " + numero2 + " / " + numero3;

        const resultadoElemento2 = document.getElementById("resultado2");

        resultadoElemento2.textContent = "Orden Menor - Medio - Mayor: " + numero3 + " / " + numero2 + " / " + numero1;


    } else if (numero1 > numero3 && numero3 > numero2) {

        x1 = "Mayor";
        x3 = "Medio";
        x2 = "Menor";

        const resultadoElemento1 = document.getElementById("resultado1");

        resultadoElemento1.textContent = "Orden Mayor - Medio - Menor: " + numero1 + " / " + numero3 + " / " + numero2;

        const resultadoElemento2 = document.getElementById("resultado2");

        resultadoElemento2.textContent = "Orden Menor - Medio - Mayor: " + numero2 + " / " + numero3 + " / " + numero1;


    } else if (numero2 > numero1 && numero1 > numero3) {

        x2 = "Mayor";
        x1 = "Medio";
        x3 = "Menor";

        const resultadoElemento1 = document.getElementById("resultado1");

        resultadoElemento1.textContent = "Orden Mayor - Medio - Menor: " + numero2 + " / " + numero1 + " / " + numero3;

        const resultadoElemento2 = document.getElementById("resultado2");

        resultadoElemento2.textContent = "Orden Menor - Medio - Mayor: " + numero3 + " / " + numero1 + " / " + numero2;


    } else if (numero2 > numero3 && numero3 > numero1 ) {

        x2 = "Mayor";
        x3 = "Medio";
        x1 = "Menor";

        const resultadoElemento1 = document.getElementById("resultado1");

        resultadoElemento1.textContent = "Orden Mayor - Medio - Menor: " + numero2 + " / " + numero3 + " / " + numero1;

        const resultadoElemento2 = document.getElementById("resultado2");

        resultadoElemento2.textContent = "Orden Menor - Medio - Mayor: " + numero1 + " / " + numero3 + " / " + numero2;

    } else if (numero3 > numero1 && numero1 > numero2) {

        x3 = "Mayor";
        x1 = "Medio";
        x2 = "Menor";

        const resultadoElemento1 = document.getElementById("resultado1");

        resultadoElemento1.textContent = "Orden Mayor - Medio - Menor: " + numero3 + " / " + numero1 + " / " + numero2;

        const resultadoElemento2 = document.getElementById("resultado2");

        resultadoElemento2.textContent = "Orden Menor - Medio - Mayor: " + numero2 + " / " + numero1 + " / " + numero3;

    } else if (numero3 > numero2 && numero2 > numero1) {

        x3 = "Mayor";
        x2 = "Medio";
        x1 = "Menor";

        const resultadoElemento1 = document.getElementById("resultado1");

        resultadoElemento1.textContent = "Orden Mayor - Medio - Menor: " + numero3 + " / " + numero2 + " / " + numero1;

        const resultadoElemento2 = document.getElementById("resultado2");

        resultadoElemento2.textContent = "Orden Menor - Medio - Mayor: " + numero1 + " / " + numero2 + " / " + numero3;

    } else if (numero1 == numero2 && numero2 == numero3){

        x3 = "igual";
        x2 = "igual";
        x1 = "igual";

       
        const resultadoElemento1 = document.getElementById("resultado1");

        resultadoElemento1.textContent = "Los numeros son iguales "
        const resultadoElemento2 = document.getElementById("resultado2");

        resultadoElemento2.textContent = "Las 3 casillas tienen el numero " + numero1;

    } else if (numero1 == numero2 && numero2 > numero3){

        x1 = "igual";
        x2 = "igual";
        x3 = "Mayor";

        const resultadoElemento1 = document.getElementById("resultado1");

        resultadoElemento1.textContent = " igual igual Menor " + numero1 + " / " + numero2 + " / " + numero3;

        const resultadoElemento2 = document.getElementById("resultado2");

        resultadoElemento2.textContent = "Menor igual igual " + numero3 + " / " + numero2 + " / " + numero1;
        

    
} else if (numero1 == numero2 && numero2 < numero3){

    x1 = "igual";
    x2 = "igual";
    x3 = "Menor";



    const resultadoElemento1 = document.getElementById("resultado1");

        resultadoElemento1.textContent = "Mayor igual igual " + numero3 + " / " + numero2 + " / " + numero1;

        const resultadoElemento2 = document.getElementById("resultado2");

        resultadoElemento2.textContent = "igual igual Mayor " + numero1 + " / " + numero2 + " / " + numero3;

}  else if (numero1 < numero2 && numero2 == numero3){

    x1 = "Menor";
    x2 = "igual";
    x3 = "igual";


const resultadoElemento1 = document.getElementById("resultado1");

resultadoElemento1.textContent = " igual igual Menor " + numero3 + " / " + numero2 + " / " + numero1;

const resultadoElemento2 = document.getElementById("resultado2");

resultadoElemento2.textContent = "Menor igual igual " + numero1 + " / " + numero2 + " / " + numero3;
    


} else if (numero1 > numero2 && numero2 == numero3){

x1 = "Mayor";
x2 = "igual";
x3 = "igual";



const resultadoElemento1 = document.getElementById("resultado1");

    resultadoElemento1.textContent = "Mayor igual igual " + numero1 + " / " + numero2 + " / " + numero3;

    const resultadoElemento2 = document.getElementById("resultado2");

    resultadoElemento2.textContent = " igual igual Mayor " + numero3 + " / " + numero2 + " / " + numero1;

} else if (numero1 == numero3 && numero2 > numero3){

    x1 = "igual";
    x2 = "Mayor";
    x3 = "igual";


const resultadoElemento1 = document.getElementById("resultado1");

resultadoElemento1.textContent = " Mayor igual igual " + numero2 + " / " + numero3 + " / " + numero1;

const resultadoElemento2 = document.getElementById("resultado2");

resultadoElemento2.textContent = " igual igual Mayor " + numero1 + " / " + numero3 + " / " + numero2;
    


} else if (numero1 == numero3 && numero2 < numero3){

x1 = "igual";
x2 = "Menor";
x3 = "igual";



const resultadoElemento1 = document.getElementById("resultado1");

    resultadoElemento1.textContent = " igual igual Menor " + numero1 + " / " + numero3 + " / " + numero2;

    const resultadoElemento2 = document.getElementById("resultado2");

    resultadoElemento2.textContent = " Menor igual igual " + numero2 + " / " + numero3 + " / " + numero1;

}

}