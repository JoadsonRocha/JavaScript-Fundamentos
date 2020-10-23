function carregar (){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getDate()
msg.innerHTML = `agora são ${hora} Horas.`

if (hora >= 0 && hora <= 12)
    //Bom dia
    img.src = 'manha.png'
} else if (hora >= 12 && hora <= 18){
    // Boa tarde
    img.src = 'tarde.png'
} else {
//bOA NOITE
    img.src = 'noite.png'
}
}