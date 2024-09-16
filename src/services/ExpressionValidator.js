function isValidExpression(expr) {
    expr = expr.replaceAll(',', '.');

    let errorObjectReturned = {
        value: null,
        error: 'Expressão inválida! Corrija a expressão númerica.',
    }

    // Verifica se há parênteses balanceados
    function checkParenthesesBalance(expression) {
        let stack = [];
        for (let char of expression) {
            if (char === '(') {
                stack.push(char);
            } else if (char === ')') {
                if (stack.length === 0) {
                    return false; // Parêntese fechando sem um correspondente
                }
                stack.pop();
            }
        }
        return stack.length === 0; // Todos os parênteses foram fechados
    }

    // Verifica se a expressão contém apenas números, operadores e parênteses válidos
    const validChars = /^[\d+\-*/().\s]+$/;
    if (!validChars.test(expr)) {
        // Caracteres inválidos encontrados
        return errorObjectReturned;
    }

    // Verifica se os parênteses estão balanceados
    if (!checkParenthesesBalance(expr)) {
        errorObjectReturned.error = 'Os parenteses não foram fechados corretamente.';
        return errorObjectReturned;
    }

    // Usa try...catch para tentar avaliar a expressão e verificar se é válida
    try {
        // eslint-disable-next-line
        const result = eval(expr); // Se a expressão for inválida, isso vai lançar um erro
        return {
            value: result,
            error: null,
        };
    } catch (e) {
        return errorObjectReturned; // Expressão inválida
    }
}

export default isValidExpression;