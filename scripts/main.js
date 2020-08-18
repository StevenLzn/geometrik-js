let option;
let valueA;
let valueB;
let result;
let canvas = document.querySelector('.board');
let context = canvas.getContext('2d');
let line = canvas.getContext('2d')
const selectOption = document.querySelector('select');
const firstValueContainer = document.querySelector('.first-value-container');
const secondValueContainer = document.querySelector('.second-value-container');
const firstValueLabel = document.querySelector('.first-value-label');
const secondValueLabel = document.querySelector('.second-value-label');
const firstValueInput = document.querySelector('.first-value-input');
const secondValueInput = document.querySelector('.second-value-input');
const button = document.querySelector('button');

selectOption.addEventListener('change', changeOption);
button.addEventListener('click', clickResult);

function drawGrid() {
    //Dibujo líneas verticales
    context.beginPath();
    for (var x = 0.5; x < 1001; x += 20) {
        context.moveTo(x, 0);
        context.lineTo(x, 501);
    }

    //Dibujo líneas horizontal
    for (var y = 0.5; y < 501; y += 20) {
        context.moveTo(0, y);
        context.lineTo(1000, y);
    }
    context.strokeStyle = "#ddd";
    context.stroke();
    context.closePath()
}

drawGrid();

function changeOption() {
    option = selectOption.value;
    firstValueInput.disabled = false;
    secondValueInput.disabled = false;
    button.disabled = false;

    switch (option) {
        case '1':
            firstValueLabel.innerHTML = 'Radio';
            secondValueContainer.style.display = 'none';
            firstValueInput.value = '';
            break;
        case '2':
        case '4':
            firstValueLabel.innerHTML = 'Base';
            secondValueLabel.innerHTML = 'Altura';
            secondValueContainer.style.display = 'inline-block';
            firstValueInput.value = '';
            secondValueInput.value = '';
            break;
        case '3':
            firstValueLabel.innerHTML = 'Lado';
            secondValueContainer.style.display = 'none';
            firstValueInput.value = '';
            break;
        default:
            break;
    }
}

function clickResult() {
    valueA = firstValueInput.value;
    valueB = secondValueInput.value;
    let centerA;
    let centerB;
    let oddA;
    let oddB;

    context.clearRect(0, 0, 1001, 501);
    drawGrid();
    context.beginPath();

    switch (option) {
        case '1':
            result = Math.PI * Math.pow(valueA, 2);
            break;
        case '2':
            result = (valueA * valueB) / 2;
            break;
        case '3':
            result = Math.pow(valueA, 2);
            valueA = (valueA * 20);
            centerA = valueA / 2;
            oddA = centerA % 20;
            if (oddA !== 0) {
                centerA += 10;
            }
            //Linea izquierda
            line.moveTo(500 - centerA, 240 - centerA);
            line.lineTo(500 - centerA, valueA + 240 - centerA);
            //linea arriba
            line.moveTo(500 - centerA, 240 - centerA);
            line.lineTo(valueA - centerA + 500, 240 - centerA);
            //linea derecha
            line.moveTo(valueA + 500 - centerA, 240 - centerA);
            line.lineTo(valueA + 500 - centerA, valueA + 240 - centerA);
            //linea abajo
            line.moveTo(valueA + 500 - centerA, valueA + 240 - centerA);
            line.lineTo(500 - centerA, valueA + 240 - centerA);
            line.font = "18px Arial";
            line.fillText('Area: '+ result + 'cm', 500 - centerA, 235 - centerA);

            line.strokeStyle = "black";
            line.stroke();
            break;
        case '4':
            result = valueA * valueB;
            valueA = (valueA * 20);
            valueB = (valueB * 20);
            centerA = valueA / 2;
            centerB = valueB / 2;
            oddA = centerA % 20;
            oddB = centerB % 20;
            if (oddA !== 0) {
                centerA += 10;
            }
            if (oddB !== 0) {
                centerB += 10;
            }
            //Linea izquierda
            line.moveTo(500 - centerA, 240 - centerB);
            line.lineTo(500 - centerA, valueB + 240 - centerB);
            //linea arriba
            line.moveTo(500 - centerA, 240 - centerB);
            line.lineTo(valueA - centerA + 500, 240 - centerB);
            //linea derecha
            line.moveTo(valueA + 500 - centerA, 240 - centerB);
            line.lineTo(valueA + 500 - centerA, valueB + 240 - centerB);
            //linea abajo
            line.moveTo(valueA + 500 - centerA, valueB + 240 - centerB);
            line.lineTo(500 - centerA, valueB + 240 - centerB);
            //Texto
            line.font = "18px Arial";
            line.fillText('Area: '+ result + 'cm', 500 - centerA, 235 - centerB);

            line.strokeStyle = "black";
            line.stroke();
            break;
        default:
            break;
    }
    context.closePath()
}