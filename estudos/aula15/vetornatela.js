let valores = [8,5,2,1,9,3,7]
valores.sort()
console.log(valores)

/* console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5]) 

for(let pos=0; por < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores) {
    console.log(`A posição $[pos] tem o valor ${valores[pos]}`)
}