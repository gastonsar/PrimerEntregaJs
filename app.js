let acceso = prompt('quiere comprar una hamburguesa? si o no')
let total = 0
let pedido;
let resumen = ''
while(acceso == 'si') { 
let tamaño = prompt('ingrese el tamaño de su hamburguesa\n simple $1400\n  doble $1600\n triple $1800\n cuadruple $2000') 
let ingredientes = prompt('selecciones que le quiere poner a a su hamburguesa, lechuga, tomate , ketchup, mayonesa, bacon') 
 pedido = tamaño + ' con ' + ingredientes 
switch (tamaño) { 
    case 'simple':
        alert('usted pidio una ' + pedido)
        total = total + 1400
        break;
case 'doble': 
alert ('usted pidio una ' + pedido)
total = total + 1600
break;
case 'triple':
    alert ('usted pidio una ' + pedido)
    total = total + 1800
    break;
case 'cuadruple': 
alert ('usted pidio una: ' + pedido)
total = total + 2000
break;
default: 
alert('ingrese tamaño correcto')
}
resumen += pedido + '\n'
alert('su pedido por ahora es '+ '\n' + resumen)
alert ('su total es ' + total) 
acceso = prompt('desea seguir comprando? si o no')
if (acceso == 'no') { 
    alert ('chau! muchas gracias por su compra.')
}
}





