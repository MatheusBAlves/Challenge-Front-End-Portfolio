export function valida(input) {
    const tipoDeInput = input.dataset.type;

    // if (validadores[tipoDeInput]) {
    //     validadores[tipoDeInput](input);
    // }

    if (input.validity.valid) {
        if (tipoDeInput == "message") {
            input.parentElement.classList.remove('textarea-container--invalido');
        } else {
            input.parentElement.classList.remove('input-container--invalido');
        }

    } else {
        if (tipoDeInput == "message") {
            input.parentElement.classList.add('textarea-container--invalido');
            input.parentElement.querySelector('.textarea__message__error').innerHTML = showErrorMessage(tipoDeInput, input);
        } else {
            input.parentElement.classList.add('input-container--invalido');
            input.parentElement.querySelector('.input__message__error').innerHTML = showErrorMessage(tipoDeInput, input);
        }
    }
}

const tiposDeErro = [
    'valueMissing',
    'tooLong',
    'typeMismatch'
]

const errorMessages = {
    name: {
        valueMissing: 'O campo de nome não pode estar vazio.',
        tooLong: 'O máximo de caracteres permitido é 50.'
    },
    email: {
        valueMissing: 'O campo de email não pode estar vazio.',
        typeMismatch: 'O email digitado não é válido.'
    },
    topic: {
        valueMissing: 'O campo de assunto não pode estar vazio.',
        tooLong: 'O máximo de caracteres permitido é 50.'
    },
    message: {
        valueMissing: 'O campo de mensagem não pode estar vazio.',
        tooLong: 'O máximo de caracteres permitido é 300.'
    }
}

function showErrorMessage(tipoDeInput, input) {
    let mensagem = '';
    tiposDeErro.forEach(erro => {
        if (input.validity[erro]) {
            mensagem = errorMessages[tipoDeInput][erro];
        }
    })

    return mensagem;
}