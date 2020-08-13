let option;
let valueA;
let valueB;
let result;
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

    switch (option) {
        case '1':
            result = Math.PI * Math.pow(valueA, 2);
            break;
        case '2':
            result = (valueA * valueB) / 2;
            break;
        case '3':
            result = Math.pow(valueA, 2);
            break;
        case '4':
            result = valueA * valueB;
            break;
        default:
            break;
    }
    console.log(result);
}