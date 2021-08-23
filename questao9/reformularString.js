let s = 'Oi meu Nome é wictor'
let a = 'o'
let b = 'e'
let newS = ''
for (let i = 0; i< s.length; i++){
    if (s[i] == b){
        newS += a
    } else{
        newS += s[i]
    }
}

console.log(newS)
