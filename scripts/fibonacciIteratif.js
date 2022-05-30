let count =0;

function fibonacci(n) {
    // debugger;

    if(n < 2) {
        return n;
    }

    let x = 0;
    let y = 1;
    let z;

    for(let i = 1; i < n; i++) {
        count++;
        z = x + y;
        x = y;
        y = z;
    }
    return z;
}

console.log("Fibonacci itératif : ")
console.log(fibonacci(100));
console.log("count = " + count);