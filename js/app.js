import { valida } from "./validacao.js";

const inputs = document.querySelectorAll('input');
const textareas = document.querySelectorAll('textarea');
const button = document.querySelector('button');

inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        valida(evento.target);
    });
})

textareas.forEach(textarea => {
    textarea.addEventListener('blur', (evento) => {
        valida(evento.target);
    });
})

inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        if (evento.target.validity.valid == false || evento.target.value == null) {
            button.disabled = true;
        } else {
            button.disabled = false;
        }
    });
})

