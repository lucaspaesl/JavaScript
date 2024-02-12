function verificar() {
        var date = new Date()
        var ano = date.getFullYear()
        var fano = document.getElementById('txtano')
        var res = document.querySelector('div#res')
        if(fano.value.length == 0 || Number(fano.value) > ano){
            window.alert('[Erro]Verifique os dados novamente')
        } else{
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var gênero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
            if (fsex[0].checked) {
                gênero = 'Homem'
                if(idade >=0 && idade < 10){
                    // crianca
                } else if (idade < 25 ) {
                    // jovem
                    img.setAttribute('src', 'jovemH.webdp')
                }else if (idade < 50){
                    // aduldo
                    img.setAttribute('src', 'adultoH.webp')
                }else {
                    //idoso
                    img.setAttribute('src', 'idosoH.webp')
                }








            }else if (fsex[1].checked) {
                gênero = 'Mulher'
            }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${gênero} com ${idade} ano.`
            res.appendChild(img)
        }
}