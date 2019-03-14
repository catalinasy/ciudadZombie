/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  moverse: function(x, y, tecla){
   Jugador.x+=x;
   Jugador.y+=y;

  if (tecla == 'arriba') {
    Jugador.sprite= 'imagenes/auto_rojo_arriba.png'
    Jugador.ancho = 15;
    Jugador.alto = 30;
  }

  if (tecla == 'der') {
    Jugador.sprite= 'imagenes/auto_rojo_derecha.png'
    Jugador.ancho = 30;
    Jugador.alto = 15;
  }
  if (tecla == 'abajo') {
    Jugador.sprite= 'imagenes/auto_rojo_abajo.png'
    Jugador.ancho = 15;
    Jugador.alto = 30;
    
   }

   if(tecla=='izq'){
     Jugador.sprite = 'imagenes/auto_rojo_izquierda.png'
     Jugador.ancho = 30;
     Jugador.alto = 15;
   }

  },
perderVidas: function(cantidadVidas){
  Jugador.vidas -= cantidadVidas;
  console.log("perdiendo vidas")
}
}


