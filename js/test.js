let moneyActualEl = document.getElementById('moneyActual')
let moneyActual = 500
moneyActualEl.textContent += moneyActual
let errorBudget = document.getElementById("error-budget")

let felicidadActualEl = document.getElementById('felicidadActual')
let felicidad = 300
felicidadActualEl.textContent += felicidad
let caraFeliz = document.getElementById('cara-feliz')
let caraMeh = document.getElementById('cara-meh')
let caraTriste = document.getElementById('cara-triste')

let modal = document.getElementById("myModal");
let btn = document.getElementById("herramientas-happiness");
let span = document.getElementsByClassName("close")[0];

function checkFelicidad(){
    if( felicidad >= 300){
        caraFeliz.style.display = "flex"
        caraTriste.style.display = "none"
        caraMeh.style.display = "none"

        document.getElementById("felicidad8").style.display ="flex"
        document.getElementById("felicidad7").style.display = "none"
        document.getElementById("felicidad6").style.display = "none"
        document.getElementById("felicidad5").style.display = "none"
        document.getElementById("felicidad4").style.display = "none"
        document.getElementById("felicidad3").style.display = "none"
        document.getElementById("felicidad2").style.display = "none"
        document.getElementById("felicidad1").style.display = "none"
        document.getElementById("felicidad0").style.display = "none"
        document.getElementById("felicidad00").style.display = "none"

    } else if (felicidad >= 270) {
        caraFeliz.style.display = "flex"
        caraMeh.style.display = "none"
        caraTriste.style.display = "none"
        document.getElementById("felicidad8").style.display ="none"
        document.getElementById("felicidad7").style.display = "flex"
        document.getElementById("felicidad6").style.display = "none"
        document.getElementById("felicidad5").style.display = "none"
        document.getElementById("felicidad4").style.display = "none"
        document.getElementById("felicidad3").style.display = "none"
        document.getElementById("felicidad2").style.display = "none"
        document.getElementById("felicidad1").style.display = "none"
        document.getElementById("felicidad0").style.display = "none"
        document.getElementById("felicidad00").style.display = "none"

    } else if(felicidad >= 240) {
      caraFeliz.style.display = "flex"
      caraMeh.style.display = "none"
      caraTriste.style.display = "none"
        document.getElementById("felicidad8").style.display ="none"
        document.getElementById("felicidad7").style.display = "none"
        document.getElementById("felicidad6").style.display = "flex"
        document.getElementById("felicidad5").style.display = "none"
        document.getElementById("felicidad4").style.display = "none"
        document.getElementById("felicidad3").style.display = "none"
        document.getElementById("felicidad2").style.display = "none"
        document.getElementById("felicidad1").style.display = "none"
        document.getElementById("felicidad0").style.display = "none"
        document.getElementById("felicidad00").style.display = "none"

    } else if(felicidad >= 210) {
      caraFeliz.style.display = "none"
      caraMeh.style.display = "flex"
      caraTriste.style.display = "none"
      document.getElementById("felicidad8").style.display ="none"
      document.getElementById("felicidad7").style.display = "none"
      document.getElementById("felicidad6").style.display = "none"
      document.getElementById("felicidad5").style.display = "flex"
      document.getElementById("felicidad4").style.display = "none"
      document.getElementById("felicidad3").style.display = "none"
      document.getElementById("felicidad2").style.display = "none"
      document.getElementById("felicidad1").style.display = "none"
      document.getElementById("felicidad0").style.display = "none"
      document.getElementById("felicidad00").style.display = "none"

  } else if(felicidad >= 180) {
    caraFeliz.style.display = "none"
    caraMeh.style.display = "flex"
    caraTriste.style.display = "none"
    document.getElementById("felicidad8").style.display ="none"
    document.getElementById("felicidad7").style.display = "none"
    document.getElementById("felicidad6").style.display = "none"
    document.getElementById("felicidad5").style.display = "none"
    document.getElementById("felicidad4").style.display = "flex"
    document.getElementById("felicidad3").style.display = "none"
    document.getElementById("felicidad2").style.display = "none"
    document.getElementById("felicidad1").style.display = "none"
    document.getElementById("felicidad0").style.display = "none"
    document.getElementById("felicidad00").style.display = "none"

} else if(felicidad >= 150) {
    caraFeliz.style.display = "none"
    caraMeh.style.display = "flex"
    caraTriste.style.display = "none"
    document.getElementById("felicidad8").style.display ="none"
    document.getElementById("felicidad7").style.display = "none"
    document.getElementById("felicidad6").style.display = "none"
    document.getElementById("felicidad5").style.display = "none"
    document.getElementById("felicidad4").style.display = "none"
    document.getElementById("felicidad3").style.display = "flex"
    document.getElementById("felicidad2").style.display = "none"
    document.getElementById("felicidad1").style.display = "none"
    document.getElementById("felicidad0").style.display = "none"
    document.getElementById("felicidad00").style.display = "none"
    
} else if(felicidad >= 120) {
  caraFeliz.style.display = "none"
  caraMeh.style.display = "none"
  caraTriste.style.display = "flex"
  document.getElementById("felicidad8").style.display ="none"
  document.getElementById("felicidad7").style.display = "none"
  document.getElementById("felicidad6").style.display = "none"
  document.getElementById("felicidad5").style.display = "none"
  document.getElementById("felicidad4").style.display = "none"
  document.getElementById("felicidad3").style.display = "none"
  document.getElementById("felicidad2").style.display = "flex"
  document.getElementById("felicidad1").style.display = "none"
  document.getElementById("felicidad0").style.display = "none"
  document.getElementById("felicidad00").style.display = "none"
  
} else if(felicidad >= 90) {
  caraFeliz.style.display = "none"
  caraMeh.style.display = "none"
  caraTriste.style.display = "flex"
  document.getElementById("felicidad8").style.display ="none"
  document.getElementById("felicidad7").style.display = "none"
  document.getElementById("felicidad6").style.display = "none"
  document.getElementById("felicidad5").style.display = "none"
  document.getElementById("felicidad4").style.display = "none"
  document.getElementById("felicidad3").style.display = "none"
  document.getElementById("felicidad2").style.display = "none"
  document.getElementById("felicidad1").style.display = "flex"
  document.getElementById("felicidad0").style.display = "none"
  document.getElementById("felicidad00").style.display = "none"
  
} else if(felicidad >= 60) {
  caraFeliz.style.display = "none"
  caraMeh.style.display = "none"
  caraTriste.style.display = "flex"
  document.getElementById("felicidad8").style.display ="none"
  document.getElementById("felicidad7").style.display = "none"
  document.getElementById("felicidad6").style.display = "none"
  document.getElementById("felicidad5").style.display = "none"
  document.getElementById("felicidad4").style.display = "none"
  document.getElementById("felicidad3").style.display = "none"
  document.getElementById("felicidad2").style.display = "none"
  document.getElementById("felicidad1").style.display = "none"
  document.getElementById("felicidad0").style.display = "flex"
  document.getElementById("felicidad00").style.display = "none"
  
} else {
  caraFeliz.style.display = "none"
  caraMeh.style.display = "none"
  caraTriste.style.display = "flex"
  document.getElementById("felicidad8").style.display ="none"
  document.getElementById("felicidad7").style.display = "none"
  document.getElementById("felicidad6").style.display = "none"
  document.getElementById("felicidad5").style.display = "none"
  document.getElementById("felicidad4").style.display = "none"
  document.getElementById("felicidad3").style.display = "none"
  document.getElementById("felicidad2").style.display = "none"
  document.getElementById("felicidad1").style.display = "none"
  document.getElementById("felicidad0").style.display = "none"
  document.getElementById("felicidad00").style.display = "flex"
  
}


    btn.classList.add("jello-horizontal")

    setTimeout(function(){
        btn.classList.remove('jello-horizontal')
 
     }, 200)
     console.log(felicidad)
    
}
checkFelicidad()

function reduceFelicidad(){
    checkFelicidad() /// si todo se rompe, se saca esto
    let eggyFeatures = document.getElementById("eggy-features")
    let eggyHats = document.getElementById("eggy-hats")
    let eggyEyes =  document.getElementById("eggy-eyes")

    eggyFeatures.classList.add("wobble-hor-bottom")
    eggyHats.classList.add("wobble-hor-bottom")
    eggyEyes.classList.add("wobble-hor-bottom")

    setTimeout(function(){
        eggyFeatures.classList.remove('wobble-hor-bottom')
        eggyHats.classList.remove('wobble-hor-bottom')
        eggyEyes.classList.remove('wobble-hor-bottom')
 
     }, 1000)
}

let popUp = document.getElementById("comprar-popup")

document.getElementById("herramientas-ropa").onclick = function(){
    document.getElementById("herramientas").style.display = "none";
    document.getElementById("inside-ropa").style.display = "flex";
    document.getElementById("inside-ropa").classList.add("slide-in-bottom")
    document.getElementById("back-ropa").style.display = "flex";
}

document.getElementById("back-ropa").onclick = function(){
    document.getElementById("herramientas").style.display = "flex";
    document.getElementById("inside-ropa").style.display = "none";
    document.getElementById("back-ropa").style.display = "none";

}

 document.getElementById("ribbon-button").onclick = function(){
    document.getElementById("inside-ropa").style.display = "none";
    document.getElementById("back-ropa").style.display = "none";
    document.getElementById("inside-ribbon").style.display = "flex";
    document.getElementById("back-ribbon").style.display = "flex";
}

document.getElementById("sunglasses-button").onclick = function(){
    document.getElementById("inside-ropa").style.display = "none";
    document.getElementById("back-ropa").style.display = "none";
    document.getElementById("inside-sunglasses").style.display = "flex";
    document.getElementById("back-sun").style.display = "flex";

}
//// MENU FELICIDAD


btn.onclick = function() {
    //modal.style.display = "block";
    feliciPrice = 1
    felicidad += feliciPrice
    felicidadActualEl.textContent = felicidad //"Happiness: " + felicidad
    reduceFelicidad()
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

//// MENU MONEDAS
let menuMonedas = document.getElementById("interior-monedas")
let btnMonedas = document.getElementById("herramientas-monedas")
let cerrarMonedas = document.getElementById("cerrar-monedas")
let notifEl = document.getElementById("money-notif")

btnMonedas.onclick = function() {
    menuMonedas.style.display = "block";
    document.getElementById("herramientas").style.display = "none";
    document.getElementById("borde-inicio").style.display = "none";
    document.getElementById("eggy").style.display = "none";
    document.getElementById("borde-monedas").style.display = "flex";
  }

  cerrarMonedas.onclick = function() {
    menuMonedas.style.display = "none";
    document.getElementById("herramientas").style.display = "flex";
    document.getElementById("borde-inicio").style.display = "flex";
    document.getElementById("eggy").style.display = "flex";
    document.getElementById("borde-monedas").style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == menuMonedas) {
        menuMonedas.style.display = "none";
    }
}


function cuantoGanaste(price) {
    let cuantasGanasteEl = document.getElementById("cuanto-gano")
    notifEl.style.display = 'flex'

    moneyActual +=  price
    moneyActualEl.textContent = moneyActual //"Money: " + moneyActual

    cuantasGanasteEl.textContent = "¡Ganaste " + price + " monedas!"

    /*setTimeout(function(){
        notifEl.classList.add('animate__fadeOut')
        
 
     }, 4000)*/
     setTimeout(function() {
      notifEl.classList.add('animate__fadeOut');
  
      // Esperar 2 segundos y ocultar la notificación
      setTimeout(function() {
        notifEl.style.display = 'none';
        notifEl.classList.remove('animate__fadeOut');
      }, 2000);
    }, 4000);
     
}


//// monedas-email
document.getElementById("aceptar-email").onclick = function(price, feliciPrice){
    menuMonedas.style.display = "none"
    price = 500
    cuantoGanaste(price)
    document.getElementById("email-card").style.display = "none"

    feliciPrice = 20
    felicidad += feliciPrice
    felicidadActualEl.textContent = felicidad //"Happiness: " + felicidad
    document.getElementById("happ-notif").style.display= "flex"
    checkFelicidad()
}


document.getElementById("ignorar-email").onclick = function(feliciPrice){
    menuMonedas.style.display = "none"
    feliciPrice = 50
    felicidad -= feliciPrice
    felicidadActualEl.textContent = felicidad //"Happiness: " + felicidad
    checkFelicidad()
    document.getElementById("email-card").style.display = "none"
    reduceFelicidad()
 
}
//// monedas-twitter
document.getElementById("aceptar-twitter").onclick = function(price, feliciPrice){
    menuMonedas.style.display = "none"
    price = 300
    cuantoGanaste(price)
    document.getElementById("twitter-card").style.display = "none"

    feliciPrice = 20
    felicidad += feliciPrice
    felicidadActualEl.textContent = felicidad //"Happiness: " + felicidad
    checkFelicidad()

}

document.getElementById("ignorar-twitter").onclick = function(feliciPrice){
    menuMonedas.style.display = "none"
    feliciPrice = 50
    felicidad -= feliciPrice
    felicidadActualEl.textContent = felicidad //"Happiness: " + felicidad
    checkFelicidad()
    document.getElementById("twitter-card").style.display = "none"
    reduceFelicidad()

}
//// monedas-credit
document.getElementById("aceptar-credit").onclick = function(price){
    menuMonedas.style.display = "none"
    document.getElementById("credit-card").style.display = "none"
    document.getElementById("credit-pay").style.display = "flex"
}

document.getElementById("ignorar-credit").onclick = function(feliciPrice){
    menuMonedas.style.display = "none"
    feliciPrice = 50
    felicidad -= feliciPrice
    felicidadActualEl.textContent = felicidad //"Happiness: " + felicidad
    checkFelicidad()
    reduceFelicidad()
    document.getElementById("credit-card").style.display = "none"

}
//ACEPTAR PAY
let btnAceptarPay = document.getElementById("aceptar-pay")
let inputTarjeta = document.getElementById("ccnum")
let inputCodigo = document.getElementById("cvv")
let tarjetaLabel = document.getElementById("tarjetaLabel")
let codigoLabel = document.getElementById("codigoLabel")
let cerrarCredit = document.getElementById("cerrar-credit")

inputTarjeta.addEventListener('input', function() {
    btnAceptarPay.disabled = inputTarjeta.value.trim() === ''
    tarjetaLabel.classList.add('required')

    /*if(btnAceptarPay.disabled = inputTarjeta.value.trim() != ''){
        tarjetaLabel.classList.remove('required')
        tarjetaLabel.classList.add('nombre-aceptado')
    }*/

  });

inputCodigo.addEventListener('input', function() {
    btnAceptarPay.disabled = inputCodigo.value.trim() === ''
    codigoLabel.classList.add('required')

   /* if(btnAceptarPay.disabled = inputCodigo.value.trim() != ''){
        codigoLabel.classList.remove('required')
        codigoLabel.classList.add('nombre-aceptado')
    }*/

  });

btnAceptarPay.addEventListener('click', function(price, feliciPrice){    
    menuMonedas.style.display = "none"
    price = 1100
    cuantoGanaste(price)

    feliciPrice = 50
    felicidad += feliciPrice
    felicidadActualEl.textContent = felicidad //"Happiness: " + felicidad
    checkFelicidad()

    document.getElementById("credit-pay").style.display = "none"
  });


document.getElementById("ignorar-pay").onclick = function(feliciPrice){
    menuMonedas.style.display = "none"
    feliciPrice = 100
    felicidad -= feliciPrice
    felicidadActualEl.textContent = felicidad //"Happiness: " + felicidad
    checkFelicidad()
    document.getElementById("credit-pay").style.display = "none"
    reduceFelicidad()
}

cerrarCredit.onclick = function() {
    menuMonedas.style.display = "flex"
    document.getElementById("credit-pay").style.display = "none"
    reduceFelicidad() ///NO ESTOY SEGURO SI ESTE DEBERIA IR ACA PERO YA FUE
  }

//// monedas-mic
let btnMic = document.getElementById("aceptar-mic")

btnMic.addEventListener('click', function() {
  //alert('Se solicitará acceso al micrófono.');

  // Solicitar acceso al micrófono
  try {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(function(stream, price) {
        // Acceso al micrófono otorgado
        console.log('Acceso al micrófono otorgado.');
        price = 1500
        cuantoGanaste(price)
        menuMonedas.style.display = "none"
        document.getElementById("mic-card").style.display = "none"

        // Detener el acceso al micrófono después de un tiempo
        setTimeout(function() {
          stream.getTracks().forEach(function(track) {
            track.stop();
          });
          console.log('Acceso al micrófono detenido.');
        }, 5000);
      })
      .catch(function(error, feliciPrice) {
        console.error('Error al acceder al micrófono:', error);
        feliciPrice = 100
        felicidad -= feliciPrice
        felicidadActualEl.textContent = felicidad
        checkFelicidad()
        reduceFelicidad()
        menuMonedas.style.display = "none"

        if ('vibrate' in navigator) {
            // Hacer que el dispositivo vibre durante 1000 ms (1 segundo)
            navigator.vibrate(1000);
            console.log('vibración.');
          } else {
            console.log('El navegador no admite la vibración.');
          }


      });
  } catch (error) {
        feliciPrice = 150
        felicidad -= feliciPrice
        felicidadActualEl.textContent = felicidad
        checkFelicidad()
        reduceFelicidad()
        menuMonedas.style.display = "none"

        if ('vibrate' in navigator) {

            navigator.vibrate(1000);
            console.log('vibración.');
          } else {
            console.log('El navegador no admite la vibración.');
          }
  }
});

document.getElementById("ignorar-mic").onclick = function(feliciPrice){
    menuMonedas.style.display = "none"
    feliciPrice = 100
    felicidad -= feliciPrice
    felicidadActualEl.textContent = felicidad //"Happiness: " + felicidad
    checkFelicidad()
    reduceFelicidad()
    document.getElementById("mic-card").style.display = "none"

}
/*
document.getElementById("aceptar-mic").onclick = function(price){
    menuMonedas.style.display = "none"
    document.getElementById("mic-card").style.display = "none"
    document.getElementById("mic-popup").style.display = "flex"
}

document.getElementById("ignorar-mic").onclick = function(feliciPrice){
    menuMonedas.style.display = "none"
    feliciPrice = 100
    felicidad -= feliciPrice
    felicidadActualEl.textContent = felicidad //"Happiness: " + felicidad
    checkFelicidad()
    reduceFelicidad()
}

document.getElementById("btn-si-mic").onclick = function(price){
    price = 500
    cuantoGanaste(price)
    document.getElementById("mic-popup").style.display = 'none'
}

document.getElementById("btn-no-mic").onclick = function(feliciPrice){
    feliciPrice = 100
    felicidad -= feliciPrice
    felicidadActualEl.textContent = felicidad //"Happiness: " + felicidad
    checkFelicidad()
    document.getElementById("mic-popup").style.display = 'none'
    reduceFelicidad()
}*/


/////PANTALLA INICIAL
let nombreSuperior = document.getElementById("nombre-superior")

let inputNombre = document.getElementById('name')
let btnContinuar = document.getElementById('continuar-inicio')
let nombreMascotaSpan = document.getElementById('nombreMascota')


inputNombre.addEventListener('input', function() {
    btnContinuar.disabled = inputNombre.value.trim() === ''
  });


  btnContinuar.addEventListener('click', function() {
    let disponibilidadNombre = document.getElementById('disponibilidad-nombre')
    disponibilidadNombre.textContent = 'Este nombre está disponible'
    disponibilidadNombre.classList.add('nombre-aceptado')

    let nombreMascota = inputNombre.value.trim();
    nombreMascotaSpan.textContent = nombreMascota
    nombreSuperior.textContent = nombreMascota

    setTimeout(function(){
        document.getElementById('pantalla-fecha').style.display='flex'
        document.getElementById('pantalla-inicio').style.display='none'
    }, 1000)
  });

  let inputFechaNacimiento = document.getElementById('fecha-nacimiento');
  let btnFecha = document.getElementById('continuar-fecha');
  inputFechaNacimiento.addEventListener('input', function() {
    btnFecha.disabled = inputFechaNacimiento.value === '';
  });

  btnFecha.addEventListener('click', function() {
    
    let fechaNacimiento = inputFechaNacimiento.value;
    price = 500
    moneyActual =+ price
    console.log(moneyActual)
    moneyActualEl.textContent = moneyActual //"Money: " + moneyActual

    setTimeout(function(){
       document.getElementById('todo').style.display='flex'
       document.getElementById('gracias').style.display='flex'
       document.getElementById('pantalla-fecha').style.display='none'

    }, 500)

  /*   setTimeout(function(){
       
        document.getElementById('gracias').style.display='none'
        
 
     }, 15000) */
  })
document.getElementById("gracias-next").onclick = function(){
  document.getElementById('gracias').style.display='none'
}


///// MENU FOTOS

let menuFotos = document.getElementById("interior-fotos")
let btnFotos = document.getElementById("herramientas-fotos")
let cerrarFotos = document.getElementById("cerrar-fotos")

btnFotos.onclick = function() {
    menuFotos.style.display = "block";
    document.getElementById("borde-inicio").style.display = "none";

  }

  cerrarFotos.onclick = function() {
    menuFotos.style.display = "none";
    document.getElementById("borde-inicio").style.display = "flex";
  }

  window.onclick = function(event) {
    if (event.target == menuFotos) {
        menuFotos.style.display = "none";
        
    }
}
///dni
document.getElementById("perfil-huevo-card").onclick = function(){
    document.getElementById("dni").style.display = "flex"
    document.getElementById('todo').style.display='none'
}

document.getElementById("back-dni").onclick = function(feliciPrice){
    document.getElementById("todo").style.display = "flex"
    document.getElementById('dni').style.display='none'
    menuFotos.style.display = "none"
    feliciPrice = 50
    felicidad -= feliciPrice
    felicidadActualEl.textContent = felicidad
    checkFelicidad()
    reduceFelicidad()
}


///// GIFT
let giftBox = document.getElementById("gift")
let giftBtn = document.getElementById("gift-img")
let giftClose = document.getElementById("gift-x")
let giftCard = document.getElementById("gift-card")


var direcInput = document.getElementById("direc")
var giftEnviar = document.getElementById("gift-enviar")
var giftCancelar = document.getElementById("gift-cancelar")
giftBox.style.display = "none"
// aca va animacion de gift card
setTimeout(function(){
  giftBox.style.display = "flex"
  giftBox.classList.add("slide-in-left")
  
}, 2000)
//

giftBtn.onclick = function(){
  giftCard.style.display = "flex"
}

giftClose.onclick = function(){
  giftBox.style.display = "none"
  giftCard.style.display = "none"

  setTimeout(function() {
    giftBox.style.display = "flex"

  }, 5000);


}


direcInput.addEventListener('input', function() {
  giftEnviar.disabled = direcInput.value.trim() === ''
  document.getElementById("direc-label").classList.add('required')


});

giftEnviar.addEventListener('click', function(price, feliciPrice){    
  menuMonedas.style.display = "none"
  price = 1000
  cuantoGanaste(price)

  feliciPrice = 50
  felicidad += feliciPrice
  felicidadActualEl.textContent = felicidad
  checkFelicidad()

  document.getElementById("direc-label").classList.remove('required')
  document.getElementById("direc-label").classList.add('nombre-aceptado')
  giftBox.style.display = "none"
  giftCard.style.display = "none"

  if ('geolocation' in navigator) {
    // Solicitar la ubicación actual del usuario
    navigator.geolocation.getCurrentPosition(function(position) {
      // Acceso a la ubicación actual
      var latitud = position.coords.latitude;
      var longitud = position.coords.longitude;
      console.log('Ubicación actual:', latitud, longitud);

      // Aquí puedes utilizar la latitud y longitud para realizar acciones adicionales
    }, function(error) {
      // Error al obtener la ubicación
      console.error('Error al obtener la ubicación:', error);
    });
  } else {
    // El navegador no admite la geolocalización
    console.log('El navegador no admite la geolocalización.');
  }

  //document.getElementById("credit-pay").style.display = "none"
});

giftCancelar.addEventListener('click', function(feliciPrice){
  giftCard.style.display = "none"
  feliciPrice = 50
  felicidad -= feliciPrice
  felicidadActualEl.textContent = felicidad
  checkFelicidad()

})

