let s = 'Oi meu nome é wictor'

let newS = ''

for (let i = 0; i<s.length; i++){
    if(s[i] != 'a' && s[i] != 'e' && s[i] != 'i' && s[i]!='o' && s[i]!='u'){
        if(s[i] != 'A' && s[i] != 'E' && s[i] != 'I' && s[i]!='O' && s[i]!='U'){

            newS += s[i] 
        }
    }
    
}

console.log(newS)