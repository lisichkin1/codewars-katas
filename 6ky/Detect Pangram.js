function isPangram(string){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const resultString = string.split('').
                        map(e => e.toLowerCase()).
                        filter((char, index, arr) => arr.indexOf(char) == index).
                        sort().join('').replace(/[\s.,%0-9]/g, '')//?
                        return alphabet == resultString
}
console.log(isPangram("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ"))//?
