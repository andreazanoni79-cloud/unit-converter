/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const lengthConv = document.getElementById("length-conv");
const volumeConv = document.getElementById("volume-conv");
const massConv = document.getElementById("mass-conv");

let inputValue = 0;
// he utilizado parserFloat para convertir el valor de entrada a un número decimal y poder realizar las conversiones correctamente. Además, he agregado validaciones para asegurarme de que el usuario ingrese un número válido y positivo antes de realizar las conversiones.
// la alternativa hubiera sido utilizar Number() para convertir el valor de entrada a un número, pero parseFloat() es más adecuado en este caso ya que permite manejar números decimales y evitar errores de conversión.
inputEl.addEventListener("input", function () {
    inputValue = parseFloat(inputEl.value);
});

convertBtn.addEventListener("click", function () {
    // isNaN verifica que el valor ingresado no sea un número, y si lo es, se muestra un mensaje de error en los elementos de salida. Si el valor ingresado es negativo o cero, también se muestran mensajes de error correspondientes. Si el valor ingresado es válido y positivo, se realizan las conversiones y se muestran los resultados en los elementos de salida.
    if (isNaN(inputValue)) {
        lengthConv.textContent = "Please enter a valid number";
        volumeConv.textContent = "Please enter a valid number";
        massConv.textContent = "Please enter a valid number";
        return;
    } else if (inputValue < 0) {
        lengthConv.textContent = "Please enter a positive number";
        volumeConv.textContent = "Please enter a positive number";
        massConv.textContent = "Please enter a positive number";
        return;
    } else if (inputValue === 0) {
        lengthConv.textContent = "Please enter a number greater than zero";
        volumeConv.textContent = "Please enter a number greater than zero";
        massConv.textContent = "Please enter a number greater than zero";
        return;
    }else {      
    const lengthInFeet = inputValue * 3.281;
    lengthConv.textContent = `${inputValue} meters = ${lengthInFeet.toFixed(2)} feet | ${inputValue} feet = ${(inputValue / 3.281).toFixed(2)} meters`;
    const volumeInGallons = inputValue * 0.264;
    volumeConv.textContent = `${inputValue} liters = ${volumeInGallons.toFixed(2)} gallons | ${inputValue} gallons = ${(inputValue / 0.264).toFixed(2)} liters`;
    const massInPounds = inputValue * 2.204;
    massConv.textContent = `${inputValue} kilograms = ${massInPounds.toFixed(2)} pounds | ${inputValue} pounds = ${(inputValue / 2.204).toFixed(2)} kilograms`;
    }
});