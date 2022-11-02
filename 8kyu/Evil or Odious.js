function evil(n) {
    return n.toString(2).split('').map(Number).reduce((a,b)=>a+b)%2 != 0 ? "It's Odious!" : "It's Evil!"//?
}