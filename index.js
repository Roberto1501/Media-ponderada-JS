let nota1 = parseInt(prompt('Digite a nota 1: ')) 
let nota2 = parseInt(prompt('Digite a nota 2: '))
let nota3 = parseInt(prompt('Digite a nota 3: '))

let media = (nota1*2 +nota2*3 +nota3*5)/10
if (media>=7) {
    document.write('Voce foi a provado com media: '+ media)
    
} else {
    document.write('Voce foi reprovado com media ' + media)
    
}