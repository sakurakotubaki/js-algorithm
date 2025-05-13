function format(x, field, precision) {
    return x.toFixed(precision).toString().padStart(field, ' ');
}

function combi(n, r) {
    let p = 1;
    for(let i = 1; i <= r; i++) {
        p = p * (n - i + 1) / i;
    }
    return p;
}

const N = 12;
for (let n = 0; n <= N; n++) {
    let result = ''.padStart((N - n) * 2, ' ');
    for (let r = 0; r <= n; r++) {
        result += format(combi(n, r), 4, 0);
    }
    console.log(result);
}