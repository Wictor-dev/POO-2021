function contar(n, d){
    if (d> 0 && d<=9){
        let count = 0
        var novoN = String(n)
        for (let i = 0; i<novoN.length; i++){
            if (d == novoN[i]){
                count ++
            }
        }
        return count
    }

    return 'Num indisponível'


}

console.log(contar(7677, 7)) // 3
console.log(contar(7677, 3)) // 0
console.log(contar(123333, 33)) // indisponível