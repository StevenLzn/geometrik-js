const selectOption = document.querySelector('select');
const firstValueContainer = document.querySelector('.first-value-container');
const secondValueContainer = document.querySelector('.second-value-container');
const firstValueLabel = document.querySelector('.first-value-label');
const secondValueLabel = document.querySelector('.second-value-label');

selectOption.addEventListener('change', changeOption);

function changeOption() {
    switch (selectOption.value) {
        case '1':
            firstValueLabel.innerHTML = 'Radio';
            secondValueContainer.style.display = 'none'
            break;
        case '2':
        case '4':
            firstValueLabel.innerHTML = 'Base';
            secondValueLabel.innerHTML = 'Altura';
            secondValueContainer.style.display = 'block'
            break;
        case '3':
            firstValueLabel.innerHTML = 'Lado';
            secondValueContainer.style.display = 'none'
            break;
        default:
            break;
    }
}