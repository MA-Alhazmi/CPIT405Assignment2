function getResult() {
    let input = document.getElementById("input").value;
    let result = calculateFactorial(input)
    document.getElementById("result").innerText = result;
}
function calculateFactorial(x) {
    for (var i = x - 1; i >= 1; i--) {
        x = x * i;
    }
    return x
}

