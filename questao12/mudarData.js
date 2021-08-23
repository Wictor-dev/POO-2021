function formatar(segundos){
    let horaFormatada = ''
    let min = Math.floor(segundos / 60);
    let hour = Math.floor(segundos / (3600))
    let newSeconds = segundos % 60

    if (min > 59) {
        (min = min - hour * 60)
    }

    horaFormatada = `${hour}:${min}:${newSeconds}`

    return horaFormatada

    
}

console.log(formatar(10601))
