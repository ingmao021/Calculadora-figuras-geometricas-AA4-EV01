// Código de Cuadrados //
console.group("Cuadrados");
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();


// Código de Triángulos //
console.group("Triángulos");
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();


// Código de Círculos //
console.group("Círculos");
const PI = Math.PI;
function diametroCirculo(radio) {
    return radio * 2;
}


function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

// Código de Rombos //
console.group("Rombos");
function perimetroRombo(lado) {
    return lado * 4;
}
function areaRombo(diagonalMayor, diagonalMenor) {
    return (diagonalMayor * diagonalMenor) / 2;
}
console.groupEnd();

// Código de Hexágonos //
console.group("Hexágonos");
function perimetroHexagono(lado) {
    return lado * 6;
}

function areaHexagono(lado) {
    return (3 * Math.sqrt(3) * lado * lado) / 2;
}

console.groupEnd();

// Código de Pirámides //
console.group("Pirámides");
function areaPiramide(areaBase, perimetroBase, apotema) {

    const areaLateral = (perimetroBase * apotema) / 2;

    return areaBase + areaLateral;

}

function volumenPiramide(areaBase, altura) {

    return (areaBase * altura) / 3;

}

console.groupEnd();

// Código de Cilindros //
console.group("Cilindros");

function areaCilindro(radio, altura) {

    const areaBase = Math.PI * radio * radio;
    const areaLateral = 2 * Math.PI * radio * altura;
    return (2 * areaBase) + areaLateral;

}


function volumenCilindro(radio, altura) {

    return Math.PI * radio * radio * altura;

}
console.groupEnd();

// Código de Cubos //
console.group("Cubos");
function areaCubo(lado) {

    return 6 * lado * lado;

}


function volumenCubo(lado) {

    return lado * lado * lado;

}
console.groupEnd();

// Código de Conos //
console.group("Conos");

function areaCono(radio, generatriz) {

    const areaBase = Math.PI * radio * radio;
    const areaLateral = Math.PI * radio * generatriz;
    return areaBase + areaLateral;

}

function volumenCono(radio, altura) {

    return (Math.PI * radio * radio * altura) / 3;

}
console.groupEnd();

// Código de Esferas //
console.group("Esferas");
function areaEsfera(radio) {

    return 4 * Math.PI * radio * radio;

}
function volumenEsfera(radio) {

    return (4 * Math.PI * radio * radio * radio) / 3;

}
console.groupEnd();

// INTERACCIÓN CON HTML - FIGURAS PLANAS


// CUADRADO
function calcularPerimetroCuadrado() {

    const input = document.getElementById("InputCuadrado");
    const value = parseFloat(input.value);
    const perimetro = perimetroCuadrado(value);
    const resultSquare = document.getElementById("resultSquare");
    resultSquare.innerText = "El perímetro del cuadrado es: " + perimetro.toFixed(2) + " cm";

}


function calcularAreaCuadrado() {

    const input = document.getElementById("InputCuadrado");
    const value = parseFloat(input.value);
    const area = areaCuadrado(value);
    const resultSquare = document.getElementById("resultSquare");
    resultSquare.innerText = "El área del cuadrado es: " + area.toFixed(2) + " cm²";

}

// TRIÁNGULO
function calcularPerimetroTriangulo() {

    const input1 = document.getElementById("inputTrianguloLado1");
    const input2 = document.getElementById("inputTrianguloLado2");
    const input3 = document.getElementById("inputBaseTriangulo");
    const value1 = parseFloat(input1.value);
    const value2 = parseFloat(input2.value);
    const value3 = parseFloat(input3.value);
    const perimetro = perimetroTriangulo(value1, value2, value3);
    const resultTriangle = document.getElementById("resultTriangle");
    resultTriangle.innerText = "El perímetro del triángulo es: " + perimetro.toFixed(2) + " cm";

}


function calcularAreaTriangulo() {

    const input1 = document.getElementById("inputBaseTriangulo");
    const input2 = document.getElementById("inputAlturaTriangulo");
    const value1 = parseFloat(input1.value);
    const value2 = parseFloat(input2.value);
    const area = areaTriangulo(value1, value2);
    const resultTriangle = document.getElementById("resultTriangle");
    resultTriangle.innerText = "El área del triángulo es: " + area.toFixed(2) + " cm²";

}

// CÍRCULO
function calcularPerimetroCirculo() {

    const input = document.getElementById("inputCirculo");
    const value = parseFloat(input.value);
    const perimetro = perimetroCirculo(value);
    const resultCircle = document.getElementById("resultCircle");
    resultCircle.innerText = "El perímetro del círculo es: " + perimetro.toFixed(2) + " cm";

}
function calcularAreaCirculo() {

    const input = document.getElementById("inputCirculo");
    const value = parseFloat(input.value);
    const area = areaCirculo(value);
    const resultCircle = document.getElementById("resultCircle");
    resultCircle.innerText = "El área del círculo es: " + area.toFixed(2) + " cm²";

}

// ROMBO
function calcularPerimetroRombo() {

    const input = document.getElementById("inputRomboLado");
    const value = parseFloat(input.value);
    const perimetro = perimetroRombo(value);
    const resultRombo = document.getElementById("resultRombo");
    resultRombo.innerText = "El perímetro del rombo es: " + perimetro.toFixed(2) + " cm";

}
function calcularAreaRombo() {

    const input1 = document.getElementById("inputRomboDiagonalMayor");
    const input2 = document.getElementById("inputRomboDiagonalMenor");
    const value1 = parseFloat(input1.value);
    const value2 = parseFloat(input2.value);
    const area = areaRombo(value1, value2);
    const resultRombo = document.getElementById("resultRombo");
    resultRombo.innerText = "El área del rombo es: " + area.toFixed(2) + " cm²";

}

// HEXÁGONO
function calcularPerimetroHexagono() {

    const input = document.getElementById("inputHexagono");
    const value = parseFloat(input.value);
    const perimetro = perimetroHexagono(value);
    const resultHexagono = document.getElementById("resultHexagono");
    resultHexagono.innerText = "El perímetro del hexágono es: " + perimetro.toFixed(2) + " cm";

}
function calcularAreaHexagono() {

    const input = document.getElementById("inputHexagono");
    const value = parseFloat(input.value);
    const area = areaHexagono(value);
    const resultHexagono = document.getElementById("resultHexagono");
    resultHexagono.innerText = "El área del hexágono es: " + area.toFixed(2) + " cm²";

}

// INTERACCIÓN CON HTML - FIGURAS SÓLIDAS

// PIRÁMIDE
function calcularAreaPiramide() {

    const inputAreaBase = document.getElementById("inputPiramideAreaBase");
    const inputPerimetro = document.getElementById("inputPiramidePerimetro");
    const inputApotema = document.getElementById("inputPiramideApotema");
    const areaBase = parseFloat(inputAreaBase.value);
    const perimetro = parseFloat(inputPerimetro.value);
    const apotema = parseFloat(inputApotema.value);
    const area = areaPiramide(areaBase, perimetro, apotema);
    const resultPiramide = document.getElementById("resultPiramide");
    resultPiramide.innerText = "El área total de la pirámide es: " + area.toFixed(2) + " cm²";

}

function calcularVolumenPiramide() {

    const inputAreaBase = document.getElementById("inputPiramideAreaBase");
    const inputAltura = document.getElementById("inputPiramideAltura");
    const areaBase = parseFloat(inputAreaBase.value);
    const altura = parseFloat(inputAltura.value);
    const volumen = volumenPiramide(areaBase, altura);
    const resultPiramide = document.getElementById("resultPiramide");
    resultPiramide.innerText = "El volumen de la pirámide es: " + volumen.toFixed(2) + " cm³";

}

// CILINDRO
function calcularAreaCilindro() {

    const inputRadio = document.getElementById("inputCilindroRadio");
    const inputAltura = document.getElementById("inputCilindroAltura");
    const radio = parseFloat(inputRadio.value);
    const altura = parseFloat(inputAltura.value);
    const area = areaCilindro(radio, altura);
    const resultCilindro = document.getElementById("resultCilindro");
    resultCilindro.innerText = "El área total del cilindro es: " + area.toFixed(2) + " cm²";

}

function calcularVolumenCilindro() {

    const inputRadio = document.getElementById("inputCilindroRadio");
    const inputAltura = document.getElementById("inputCilindroAltura");
    const radio = parseFloat(inputRadio.value);
    const altura = parseFloat(inputAltura.value);
    const volumen = volumenCilindro(radio, altura);
    const resultCilindro = document.getElementById("resultCilindro");
    resultCilindro.innerText = "El volumen del cilindro es: " + volumen.toFixed(2) + " cm³";

}

// CUBO
function calcularAreaCubo() {

    const input = document.getElementById("inputCubo");
    const value = parseFloat(input.value);
    const area = areaCubo(value);
    const resultCubo = document.getElementById("resultCubo");
    resultCubo.innerText = "El área total del cubo es: " + area.toFixed(2) + " cm²";

}

function calcularVolumenCubo() {

    const input = document.getElementById("inputCubo");
    const value = parseFloat(input.value);
    const volumen = volumenCubo(value);
    const resultCubo = document.getElementById("resultCubo");
    resultCubo.innerText = "El volumen del cubo es: " + volumen.toFixed(2) + " cm³";

}

// CONO
function calcularAreaCono() {

    const inputRadio = document.getElementById("inputConoRadio");
    const inputGeneratriz = document.getElementById("inputConoGeneratriz");
    const radio = parseFloat(inputRadio.value);
    const generatriz = parseFloat(inputGeneratriz.value);
    const area = areaCono(radio, generatriz);
    const resultCono = document.getElementById("resultCono");
    resultCono.innerText = "El área total del cono es: " + area.toFixed(2) + " cm²";

}


function calcularVolumenCono() {

    const inputRadio = document.getElementById("inputConoRadio");
    const inputAltura = document.getElementById("inputConoAltura");
    const radio = parseFloat(inputRadio.value);
    const altura = parseFloat(inputAltura.value);
    const volumen = volumenCono(radio, altura);
    const resultCono = document.getElementById("resultCono");
    resultCono.innerText = "El volumen del cono es: " + volumen.toFixed(2) + " cm³";

}

// ESFERA
function calcularAreaEsfera() {

    const input = document.getElementById("inputEsfera");
    const value = parseFloat(input.value);
    const area = areaEsfera(value);
    const resultEsfera = document.getElementById("resultEsfera");
    resultEsfera.innerText = "El área de la esfera es: " + area.toFixed(2) + " cm²";

}


function calcularVolumenEsfera() {

    const input = document.getElementById("inputEsfera");
    const value = parseFloat(input.value);
    const volumen = volumenEsfera(value);
    const resultEsfera = document.getElementById("resultEsfera");
    resultEsfera.innerText = "El volumen de la esfera es: " + volumen.toFixed(2) + " cm³";
    
}