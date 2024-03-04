function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')

    if (ini.ariaValueMax.length == 0 || fim.ariaValueMax.length == 0 || passo.ariaValueMax.length == 0) {
        window.alert('ERRO falta dados')
    } else {
         res.innerHTML = 'Contando:'
         let i = Number(ini.value)
         let f = Number('fim.value')
         let p = Number('passo.value')
         
         for(let c = i; c <= f; c += p ){
            res.innerHTML +=  `${c}`
         }
    }
    










}