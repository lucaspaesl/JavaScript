function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var date = new Date();
    var hora = date.getHours();
    msg.innerHTML = `Agora são ${hora} horas`;
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'manha.jpg'; 
        document.body.style.background = '#adad1a'

    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'tarde.jpg'; 
        document.body.style.background = '#446767'
    } else {
        //bom noite
        img.src = 'noite.jpg'; 
        document.body.style.background = '#2e2727'
    }
}