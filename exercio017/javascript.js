function chamar(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if(num.value.length == 0){
        alert('[ERRO] Por favor digite um número:')
    } else {
        var r = Number(num.value)
        var c = 1
        tab.innerHTML = '' //limpa select
        while(c <= 10){
            var item = document.createElement('option')
            item.text = `${r} X ${c} = ${r*c}`
            tab.appendChild(item)
            item.value = `tab${c}`
            c++
        }
    }
}