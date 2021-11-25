let a : number[] = [1,2,3,4,5];
for (let i : number = 0; i <= a.length; i++) {
console.log(a[i]);
}

// O loop terá 6 voltas, pois na delimitação de votlas 'i<=a.lenght', quando o i for igual ao tamanho do array, ele já terá valor fora do escopo.