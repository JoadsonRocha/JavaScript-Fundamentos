function carregar (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} Horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'manha.png'  //Bom dia
        document.body.style.background = '#FFF79E'
    } else if (hora >= 12 && hora <= 18){
        img.src = 'tarde.png' // Boa tarde
        document.body.style.background = '#FFB787'
    } else {
        img.src = 'noite.png' //boa NOITE
        document.body.style.background = '#525556'
    }
}