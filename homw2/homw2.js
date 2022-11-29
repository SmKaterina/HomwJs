function numb() {
    let num;
    do {
        num = prompt('Enter your number', num);
    } while(!Number.isInteger(+num));

    return +num;
}

function fib(F0, F1, n) {
    
    if(n === 0) {
        return F0;
    }
    if(n === 1) {
        return F1;
    }

    return (n > 1) ? fib(F1, F0 + F1, n - 1) : fib(F1, F0 - F1, n + 1);
}

console.log(fib(0,1,numb()));
