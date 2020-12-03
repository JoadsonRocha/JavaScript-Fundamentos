//Array vetor
let vaga = [5, 8, 4]
vaga[4] = 7
vaga.sort() //ordenar vetores
vaga.push(10)
vaga.indexOf(5)
//vaga.length 

/*for(let pos=0;pos < vaga.length;pos++){
    console.log(`A posição ${pos} tem o valor ${vaga[pos]}`)
}*/
for(let pos in vaga) {
    console.log(`A posição ${pos} tem o valor ${vaga[pos]}`)
} 
console.log(vaga.indexOf(6)) //procura index