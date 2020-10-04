let n1 = Number(prompt('Digite um numero: '))
let n2 = Number(prompt('Digite outro numero: '))
let n3 = Number(prompt('Digite outro numero: '))

if (n1 > n2 || n1 > n3)  {
    console.log(`Maior: ${n1}`)
} else if (n2 > n1 || n2 > n3) {
    console.log(`Maior ${n2}`)
} else {
    console.log(`Maior: ${n3}`)
}