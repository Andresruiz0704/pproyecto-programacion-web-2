jQuery('document').ready(function($){
   var menuBtn = $('.menu-icon');
   var menu = $('.navigation ul');
   var cedulas = new Array();
   var estudiantes = new Array();
   var edades = new Array();
   var matrices=new Array();
   var objestudiantes=new Array();
   
   var formulario=document.getElementById('formulario');
          formulario.addEventListener('submit',function(e){
           e.preventDefault();
        })
  

   
      menuBtn.click(function(){


        if (menu.hasClass('show')) {
          menu.removeClass('show');
        }else{
          menu.addClass('show');
      
        };
      });

    

      $("#botonbasica").click(function () {
         
          var n1 = Number(prompt('Ingresa el primer numero '));
          var n2 = Number(prompt('Ingresa el segundo numero '));

          var suma=n1+n2;
          var resta=n1-n2;
          var multiplicacion=n1*n2;
          var division=n1/n2;

          alert(n1+" + " + n2 +" = "+ suma);
          alert(n1+" - " + n2 +" = "+ resta);
          alert(n1+" x " + n2 +" = "+ multiplicacion);
          alert(n1+" / " + n2 +" = "+ division);

       });


      $("#botoncondicional").click(function () {

          var edad = parseInt(prompt('Ingresa la edad '));
          var nombre = prompt('Ingresa el nombre ');
          if (edad>=18){
            alert("su nombre es " + nombre +" y es mayor de edad porque tiene "+ edad);
          }else{
            alert("su nombre es " + nombre +" y es menor de edad porque tiene "+ edad);
          }    
      });



       $("#botonswitch").click(function () {
 
          var estrato = parseInt(prompt('Ingresa el estrato '));
          var nombre = prompt('Ingresa el nombre ');
          switch( estrato )
          {
               case 1:
                  alert(nombre+" por ser estrato "+ estrato + " Sale gratis");
                  break;
              case 2:
                  alert(nombre+" por estrato "+ estrato + " debe pagar 10 mil");
                 break;
             case 3:
                  alert(nombre+" por ser estrato "+ estrato + " debe pagar 30 mil");
                 break;
             case 4:
                 alert(nombre+" por ser estrato "+ estrato + " debe pagar 50 mil");
                 break;
             case 5:
                  alert(nombre+" por ser estrato "+ estrato + " debe pagar 60 mil");
                 break;
             case 6:
                  alert(nombre+" por ser estrato "+ estrato + " debe pagar 70 mil");
                break;
             
              default:
                alert(nombre+ " el estrato debe ser entre 1 y 6");
               }
         
        });

       $("#botonciclofor").click(function () {

            var cantidad =parseInt(prompt('Ingresa la cantidad de personas '));
            var mayor=0;
            var edades=0;
            var promedio=0;
            for (var i = 1; i <= cantidad; i++) {
                edades=Number(prompt("ingrese la edad de la persona "+i));
                promedio=promedio+edades;
                if(edades>mayor){
                    mayor=edades;
                }
            }
            alert("el mayor de las edades es "+ mayor);
            promedio=promedio/cantidad;
            alert("el promedio de las edades es "+ promedio);

        });


        //matrices
       $("#boton_triqui").click(function () {
         
         
function solicitarNumero(mensaje) {
  let numero;
  do {
      numero = prompt(mensaje);
      if (isNaN(numero) || numero.trim() === "") {
          alert("Por favor, ingrese un número válido.");
      }
  } while (isNaN(numero) || numero.trim() === "");
  return parseInt(numero);
}


function crearMatriz(n, m) {
  let matriz = [];
  for (let i = 0; i < n; i++) {
      matriz[i] = [];
      for (let j = 0; j < m; j++) {
          matriz[i][j] = solicitarNumero(`Ingrese el número en la posición ${i+1},${j+1}`);
      }
  }
  return matriz;
}


function sumarFila(matriz, fila) {
  let suma = 0;
  for (let i = 0; i < matriz[fila].length; i++) {
      suma += matriz[fila][i];
  }
  return suma;
}


function sumarColumna(matriz, columna) {
  let suma = 0;
  for (let i = 0; i < matriz.length; i++) {
      suma += matriz[i][columna];
  }
  return suma;
}


function sumarDiagonalPrincipal(matriz) {
  let suma = 0;
  let minSize = Math.min(matriz.length, matriz[0].length);
  for (let i = 0; i < minSize; i++) {
      suma += matriz[i][i];
  }
  return suma;
}


function sumarDiagonalSecundaria(matriz) {
  let suma = 0;
  let minSize = Math.min(matriz.length, matriz[0].length);
  for (let i = 0; i < minSize; i++) {
      suma += matriz[i][matriz[0].length - 1 - i];
  }
  return suma;
}


let n = solicitarNumero("Ingrese el número de filas:");
let m = solicitarNumero("Ingrese el número de columnas:");


let matriz = crearMatriz(n, m);


let sumaFila1 = sumarFila(matriz, 0);
let sumaFila2 = sumarFila(matriz, 1);
let sumaFila3 = sumarFila(matriz, 2);
let sumaColumna1 = sumarColumna(matriz, 0);
let sumaColumna2 = sumarColumna(matriz, 1);
let sumaColumna3 = sumarColumna(matriz, 2);
let sumaDiagonalPrincipal = sumarDiagonalPrincipal(matriz);
let sumaDiagonalSecundaria = sumarDiagonalSecundaria(matriz);

// Mostrar la matriz y las sumas calculadas
alert(`Matriz ingresada:
${matriz.map(row => row.join('\t')).join('\n')}
\nSuma de la fila 1: ${sumaFila1}
Suma de la fila 2: ${sumaFila2}
Suma de la fila 3: ${sumaFila3}
Suma de la columna 1: ${sumaColumna1}
Suma de la columna 2: ${sumaColumna2}
Suma de la columna 3: ${sumaColumna3}
Suma de la diagonal principal: ${sumaDiagonalPrincipal}
Suma de la diagonal secundaria: ${sumaDiagonalSecundaria}`);


});
      
$(document).ready(function() {
  $("#botontranspuesta").click(function () {
      var filas = parseInt(prompt('Ingresa la cantidad de filas'));
      var columnas = parseInt(prompt('Ingresa la cantidad de columnas'));

      
      if (filas < 1) {
          alert('Por favor, ingresa un número válido de filas y columnas.');
          return;
      }

      var matriz = [];
      for (var i = 0; i < filas; i++) {
          matriz[i] = [];
          for (var j = 0; j < columnas; j++) {
              var numero = parseInt(prompt('Ingrese el número para la posición [' + i + '][' + j + ']:'));
              if (isNaN(numero)) {
                  alert('Por favor, ingresa un número válido.');
                  return;
              }
              matriz[i][j] = numero;
          }
      }

      var transpuesta = [];
      for (var i = 0; i < columnas; i++) {
          transpuesta[i] = [];
          for (var j = 0; j < filas; j++) {
              transpuesta[i][j] = matriz[j][i];
          }
      }

      var matrizStr = "Matriz original:\n" + formatMatrix(matriz) + "\nMatriz transpuesta:\n" + formatMatrix(transpuesta);
      alert(matrizStr);
  });
});

function formatMatrix(matriz) {
    return matriz.map(row => row.join('\t')).join('\n');
}




$(document).ready(function() {
  $("#botonmultiplicar").click(function () {
      var filas1 = parseInt(prompt('Ingresa el numero de filas de la primera matriz'));
      var columnas1 = parseInt(prompt('Ingresa el numero de columnas de la primera matriz'));

      var filas2 = parseInt(prompt('Ingresa el numero de filas de la segunda matriz'));
      var columnas2 = parseInt(prompt('Ingresa el numero de columnas de la segunda matriz'));

      if (columnas1 !== filas2) {
          alert('El número de columnas de la primera matriz debe ser igual al número de filas de la segunda matriz.');
          return;
      }

      var matriz1 = [];
      for (var i = 0; i < filas1; i++) {
          matriz1[i] = [];
          for (var j = 0; j < columnas1; j++) {
              var numero = parseInt(prompt('Ingrese el número para la posición [' + i + '][' + j + '] de la primera matriz:'));
              if (isNaN(numero)) {
                  alert('Por favor, ingresa un número válido.');
                  return;
              }
              matriz1[i][j] = numero;
          }
      }

      var matriz2 = [];
      for (var i = 0; i < filas2; i++) {
          matriz2[i] = [];
          for (var j = 0; j < columnas2; j++) {
              var numero = parseInt(prompt('Ingrese el número para la posición [' + i + '][' + j + '] de la segunda matriz:'));
              if (isNaN(numero)) {
                  alert('Por favor, ingresa un número válido.');
                  return;
              }
              matriz2[i][j] = numero;
          }
      }

      var resultado = multiplicarMatrices(matriz1, matriz2);

      var matrizStr = "Matriz resultante:\n" + formatMatrix(resultado);
      alert(matrizStr);
  });
});

function multiplicarMatrices(matriz1, matriz2) {
    var result = [];
    for (var i = 0; i < matriz1.length; i++) {
        result[i] = [];
        for (var j = 0; j < matriz2[0].length; j++) {
            var sum = 0;
            for (var k = 0; k < matriz1[0].length; k++) {
                sum += matriz1[i][k] * matriz2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

function formatMatrix(matriz) {
    return matriz.map(row => row.join('\t')).join('\n');
}



$(document).ready(function() {
  $("#justicia_divina").click(function () {
      var filas = parseInt(prompt('Ingresa el numero de filas que tendrá tu matriz'));
      var columnas = parseInt(prompt('Ingresa el numero de columnas que tendrá tu matriz'));

      var matriz = [];
      for (var i = 0; i < filas; i++) {
          var fila = [];
          for (var j = 0; j < columnas; j++) {
              var numero = parseInt(prompt('Ingrese el número para la posición [' + i + '][' + j + ']:'));
           
              fila.push(numero);
          }
          matriz.push(fila);
      }

      var matrizInversa = [];
      for (var i = filas - 1; i >= 0; i--) {
          matrizInversa.push([]);
          for (var j = columnas - 1; j >= 0; j--) {
              matrizInversa[filas - i - 1][columnas - j - 1] = matriz[i][j];
          }
      }

      var matrizStr = "Matriz original:\n";
      for (var i = 0; i < filas; i++) {
          for (var j = 0; j < columnas; j++) {
              matrizStr += matriz[i][j] + "\t";
          }
          matrizStr += "\n";
      }

      var matrizInversaStr = "Matriz inversa:\n";
      for (var i = 0; i < filas; i++) {
          for (var j = 0; j < columnas; j++) {
              matrizInversaStr += matrizInversa[i][j] + "\t";
          }
          matrizInversaStr += "\n";
      }

      alert(matrizStr + "\n" + matrizInversaStr);
  });


            if (control==1){
              alert("los datos fueron eliminados satisfactoriamente y fueron "+eliminados);
              var nuevosdatos=matriznueva.length-eliminados;
              var matrizcopia=new Array(nuevosdatos);
              for (var i = 0; i < nuevosdatos; i++) {
                 matrizcopia[i] = new Array(3);
                 matrizcopia[i][0]=matriznueva[i][0];  
                 matrizcopia[i][1]=matriznueva[i][1]; 
                 matrizcopia[i][2]=matriznueva[i][2]; 
               }
               localStorage.setItem("docentes", JSON.stringify(matrizcopia));

            }else{
              alert("no fue encontrada la cedula");
              localStorage.setItem("docentes", JSON.stringify(matriznueva));
            }

                  
        });


       $("#boton_matriz_vaciar").click(function () {

  
          localStorage.removeitem(docentes);
          alert("lista vacia");

          
          
      });



});

$(document).ready(function() {
    $("#boton_gaus").click(function() {
        var filas = parseInt(prompt('Ingresa el numero de filas que tendrá tu matriz'));
        var columnas = parseInt(prompt('Ingresa el numero de columnas que tendrá tu matriz'));
    
        var matriz = [];
        var matrizStr = "Matriz original:\n";
        for (var i = 0; i < filas; i++) {
            var fila = [];
            for (var j = 0; j < columnas; j++) {
                var fraccion = prompt('Ingrese el número para la posición [' + i + '][' + j + '] (en forma de fracción, por ejemplo 3/4):');
                fila.push(fraccion);
                matrizStr += fraccion + "\t";
            }
            matriz.push(fila);
            matrizStr += "\n";
        }
    
        
        function fraccionToDecimal(fraccion) {
            if (fraccion.includes('/')) {
                var partes = fraccion.split('/');
                return parseFloat((partes[0] / partes[1]).toFixed(2));
            } else {
                return parseInt(fraccion);
            }
        }
    
       
        var matrizDecimalStr = "Matriz original convertida a decimales:\n";
        for (var i = 0; i < filas; i++) {
            for (var j = 0; j < columnas; j++) {
                var decimal = fraccionToDecimal(matriz[i][j]);
                matriz[i][j] = decimal;
                matrizDecimalStr += decimal + "\t";
            }
            matrizDecimalStr += "\n";
        } alert (matrizDecimalStr);
    
        
        var matrizIdentidad = [];
        for (var i = 0; i < filas; i++) {
            var fila = [];
            for (var j = 0; j < filas; j++) {
                fila.push(i === j ? 1 : 0);
            }
            matrizIdentidad.push(fila);
        }
    
       
        for (var i = 0; i < filas; i++) {
            matriz[i] = matriz[i].concat(matrizIdentidad[i].slice());
        }
    
        
        for (var i = 0; i < filas; i++) {
           
            var pivot = matriz[i][i];
          
            for (var j = 0; j < 2 * columnas; j++) {
                matriz[i][j] /= pivot;
            }

            
            var matrizActualStr = "Matriz actual (paso " + (i+1) + "):\n";
            for (var k = 0; k < filas; k++) {
                for (var l = 0; l < 2 * columnas; l++) {
                    if (l < columnas) {  
                        matrizActualStr += matriz[k][l].toFixed(2) + "\t";
                    }
                }
                matrizActualStr += "\n";
            }
            alert(matrizActualStr);

            
            for (var k = 0; k < filas; k++) {
                if (k !== i) {
                    var factor = matriz[k][i];
                    for (var j = 0; j < 2 * columnas; j++) {
                        matriz[k][j] -= factor * matriz[i][j];
                    }
                }
            }
        }
    
       
        var matrizGaussStr = "Matriz resultante del método de Gauss-Jordan:\n";
        for (var i = 0; i < filas; i++) {
            for (var j = 0; j < columnas; j++) {
                if (j < columnas) {  
                    matrizGaussStr += Math.round(matriz[i][j]) + "\t";
                }
            }
            matrizGaussStr += "\n";
        }
    
       
        alert(matrizStr + "\n" + matrizGaussStr + "\n");
    });
});














  


  











