const fibonacci = n => {
    //result = [i-1] + [i-2]
    const arr = []
    if (n >= 0) {
        arr.push(0);
    }
    if (n >= 1) {
        arr.push(1);
    }
    if (n > 1) {
        for (let i = 2; i < n; i++) {
            arr.push(arr[i - 1] + arr[i - 2]);
        }
    }
    return arr[n - 1]
}

//0 1 1 2 3 5 8 13 21 34
console.log(fibonacci(10));