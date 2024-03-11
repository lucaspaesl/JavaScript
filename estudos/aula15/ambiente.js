let num = [7,8,7,9,5,4,2,3,4,5] //forma resumida para não colocar muita coisa  
num.sort() //sort me diz quantos vetores coloquei
num.push(1) //adiciona mais um sem colocar no let
console.log(num)
console.log (`O vetor tem ${num.length} posiçoes`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if(pos == -1){
    console.log('O valor não foi encontrado')
}else {
    console.log(`O valor está na posição ${pos}`)
}