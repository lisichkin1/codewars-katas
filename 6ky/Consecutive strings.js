function longestConsec(strarr, k) {
    if (strarr.length === 0 || k > strarr.length || k <= 0) {
        return '';
    }

    let longest = '';

    for (let index = 0; index <= strarr.length - k; index++) {
        const currentString = strarr.slice(index, index + k).join('');
        if (currentString.length > longest.length) {
            longest = currentString;
        }
    }

    return longest;
}
longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3)//?

