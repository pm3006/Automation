//Variables js

console.log ('Holaaa')
//comentario
 const variablepermanente = 'nocambio'
 console.log (variablepermanente)

 let variablecambiable = '1'
console.log (variablecambiable)

variablecambiable = '12'
console.log (variablecambiable)

const objeto = {
    pablo: 'Pablo',
    juan: 'juan',
    total: 2
}

console.log (objeto)
console.log (objeto.total)

const array = ['pablo','juan']
console.log(array)

//condicionales
if (2+2===4) {
    console.log('si')
} else{
    console.log('ne')
}

const fruta = 's'; //valor
switch (fruta) { //valor inyectado
    case 'Sandia':
        console.log('Sandia')
        break;
    case 'Banano':
        console.log('Banano')
        break;
    default:
                 console.log('Mono')
        
        break;
}

function printhello(){
    console.log('holaaaaaa')
}

printhello()