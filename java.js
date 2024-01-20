if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(muestraPosicion, errorPosicion);
}

function muestraPosicion(pos){
alert('Te encuentras en las siguientes coordenadas: (' + position.coords.latitude + ', ' + position.coords.longitude + ')' );
}

function errorPosicion(err) {
  switch(err.code) {
      case err.PERMISSION_DENIED:
          alert("Debe usted permitir el acceso a su posición para que la aplicación pueda funcionar");
          break;
      case err.POSITION_UNAVAILABLE:
          alert("La información sobre su posición actual no está disponible");
          break;
      case err.TIMEOUT:
          alert("No he podido obtener su posición en un tiempo razonable");
          break;
      default:
          alert("Se ha producido un error desconocido al intentar obtener la posición actual");
          break;
  }
}



<input type="button" value="texto dentro del boton" name="boton1" onclick="lo que quieras"/>