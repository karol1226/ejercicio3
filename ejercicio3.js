//Crea un archivo JS que contenga las siguientes líneas
//- Una variable que contenga tu altura en centímetros (entero)
let altura='160cm'
console.log(parseInt(altura))
//- Una variable que contenga tu altura en metros (número de coma flotante)
let  altura1='1.69cm'
console.log(parseFloat(altura1))
//- Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso="71.34kg"
console.log(parseFloat(peso))
//- Una variable que contenga tu altura en metros redondeada hacia arriba
let altura2= 1.80
console.log(parseFloat(Math.ceil(altura2)))
//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let peso1=71.34

console.log(parseFloat(Math.floor(peso1)))
//- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let max_valor_js =Number.MAX_VALUE;
let max =1.7976931348623157e+1


function verificarValorMaximo(num){

    if (max <= Number.MAX_VALUE) {
      console.log("El número no es infinito");
    } else {
      console.log("El número es infinito");
    }
  
  }

