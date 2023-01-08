function calculateYears(principal, interest, tax, desired) {
    let counter = 0;
    while(principal < desired){
        principal += principal * interest - principal * interest * tax;
        counter += 1;
    }
    return counter;
}
calculateYears(1000,0.01625,0.18,1200)//?