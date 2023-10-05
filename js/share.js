//// COMPARTIR DNI

let shareButton = document.getElementById('shareDNI');

shareButton.addEventListener('click', function(price, feliciPrice) {
  price = 800
  cuantoGanaste(price)
  let imageElement = document.getElementById('img-dni');
  document.getElementById("dni").style.display = "none"
  document.getElementById('todo').style.display='flex'

  feliciPrice = 50
  felicidad += feliciPrice
  felicidadActualEl.textContent = felicidad //"Happiness: " + felicidad
  checkFelicidad()

  if (navigator.share) {
    fetch(imageElement.src)
    .then(function(response) {
        return response.blob();
    })
    .then(function(blob) {
        let file = new File([blob], 'image.jpg', {type: blob.type});

        navigator.share({

            title: 'Compartir imagen y enlace',
            text: 'Echa un vistazo a mi Huevo',
            url: window.location.href,
            files: [file]
          })
            .then(function() {
              console.log('Imagen y enlace compartidos con éxito.');
            })
            .catch(function(error) {
              console.error('Error al compartir la imagen y el enlace:', error);
            });
    })
    .catch(function(error) {
        console.error('Error al descargar la imagen:', error);
    });
  }
});


/*
if(navigator.share){
    let shareButton = document.getElementById("shareDNI");

        shareButton.addEventListener("click", function() {
        document.getElementById("dni").style.display = "none"
        document.getElementById('todo').style.display='flex'

        navigator.share({
            title: 'Titulo del enlace',
            url: window.location.href
        })
        .then(function() {
            console.log('Enlace compartido con exito');
        })
        .catch(function(error) {
            console.error('Erorr al compartir enlace:', error);
        });
    });
}


document.getElementById("shareDNI").onclick = function(){
    document.getElementById("dni").style.display = "none"
    document.getElementById('todo').style.display='flex'
}*/

