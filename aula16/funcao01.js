function parimp (n) {
    if (n%2==0) {
        return 'par'
    } else {
        return 'impar'
    }
}

let res = parimp(12)
console.log(`A função 'parimp' é ${res}`)
console.log(`A funçãp 'parimp' recebeu ${parimp(7)}`)