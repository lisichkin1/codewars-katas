function high(x){
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));//?
    const startWords = x.split(' ')//?
    const countWords = startWords.map((word) => {
    const wordChars = word.split('');
    const transformedChars = wordChars.map((el) => alphabet.indexOf(el.toUpperCase()) + 1);
        return transformedChars.reduce((a, b) => a + b, 0);
    });
    return startWords[countWords.indexOf(Math.max.apply(null, countWords))];
}
high('what time are we climbing up the volcano')