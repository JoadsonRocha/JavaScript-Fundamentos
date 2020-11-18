
function contar(){
    var ini = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('dinter')
    var res = window.document.getElementById('res')
   if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
       window.alert('Falta dados!')
   } else {
       res.innerHTML = 'Contado...<br> '
       var i = Number(ini.value)
       var f = Number(fim.value)
       var p = Number(passo.value)
       if (p <= 0){
           alert('Passo invalido considerando 1!')
           p = 1
       }
       if(i < f){ //contagem crescente
        for(var c = i;c <= f; c += p){
            res.innerHTML += `${c} \u{1F449} `
            }
        } else { 
           // contagem descrecente
           for(var c = i; c >= f; c -= p){
               res.innerHTML += `${c} \u{1f449}`
           }              
       }
       res.innerHTML += `\u{1F3C1}`
   }
      
}