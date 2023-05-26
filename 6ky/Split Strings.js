function solution(str){
    return (str.length % 2 == 1 ? str + '_': str + '').split('').map((char, index, arr) => (index+1) % 2 == 1 ? char + arr[index+1]: '').filter(el => el)//?
 }
 solution('abcdefg')//?