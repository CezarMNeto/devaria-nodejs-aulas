const readLine = require('readLine').createInterface({
    input: process.stdin,
    input: process.stdout
});

const validarOperador = (operador) => {
    switch (operador) {
        case '+':
        case '-':
        case '/':
        case '*':
        case '%':
            retun operador;
        default:
            console.log('Operador informado e invalido');
            return null;
    }
}

readLine.question('Favor informar um numero:', (numero1) => {
    const numeroValidado1 = validarNumeroInformado(numero1);

    if (numeroValidado1) {
        readLine('Favor informar outro numero:', (numero2) => {
            const numeroValidado2 = validarNumeroInformado(numero2);

            if (numeroValidado2) {
                readLine.question('Favor informar o operador:', (operador) => {
                    const operadorvalidado = validarOperador(operador);
                    if (operadorvalidado) {
                        switch (operadorvalidado) {
                            case '+': console.log(`operador selecionado adicao' ${numeroValidado1} + ${numeroValidado2} = ${numeroValidado1 + numeroValidado2}`);
                                break;
                            case '-': console.log(`operador selecionado subtracao' ${numeroValidado1} - ${numeroValidado2} = ${numeroValidado1 - numeroValidado2}`);
                                break;
                            case '/': console.log(`operador selecionado divisao' ${numeroValidado1} / ${numeroValidado2} = ${numeroValidado1 / numeroValidado2}`);
                                break;
                            case '*': console.log(`operador selecionado multiplicacao' ${numeroValidado1} * ${numeroValidado2} = ${numeroValidado1 * numeroValidado2}`);
                                break;
                            case '%': console.log(`operador selecionado modulo' ${numeroValidado1} % ${numeroValidado2} = ${numeroValidado1 % numeroValidado2}`);
                                break;
                            default break;
                        }
                    }
                })
            }
        })
    }
})