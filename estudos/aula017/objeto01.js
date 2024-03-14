let amigo = {nome: 'jese', 
sexo:'m',
peso: 85.5,
engordar(p=0){
    console.log(this.engordou)
    this.peso += p
}
}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)
//
/*  */
