function verificar() {
    var date = new Date();
    var ano = date.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[Erro] Verifique os dados novamente');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fsex[0].checked) {
            genero = 'Homem';
            if(idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src', 'bebe-menino.jpg');
            } else if (idade < 25 ) {
                // jovem
                img.setAttribute('src', 'jovemH.webp');
            } else if (idade < 50){
                // adulto
                img.setAttribute('src', 'adultoH.webp');
            } else {
                // idoso
                img.setAttribute('src', 'idosoH.webp');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src', 'bebe-menina-sofia.jpg');
            } else if (idade < 30){
                // jovem
                img.setAttribute('src', 'jovemM.jpg');
            } else if (idade < 50){
                // adulto
                img.setAttribute('src', 'adultoM.jpg');
            } else {
                // idoso
                img.setAttribute('src', 'idosaM.jpeg');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}
