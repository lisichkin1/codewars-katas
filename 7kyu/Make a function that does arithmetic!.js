function arithmetic(a, b, operator){
    switch (operator) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            return a / b;
        default:
            return 'Error: Unsupported operator';
}
}
arithmetic(8, 2, "subtract")