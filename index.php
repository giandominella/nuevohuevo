<?php
    include_once 'includes/dbh.inc.php';

    // Imagenes de la tabla "categoria", o sea el item de presentacion
    $sqlCategoria = "SELECT imagen FROM categoria";
    $resultCategoria = mysqli_query($conn, $sqlCategoria);
    $imagesCategoria = array();
    if (mysqli_num_rows($resultCategoria) > 0) {
        while ($row = mysqli_fetch_assoc($resultCategoria)) {
            $imagesCategoria[] = $row['imagen'];
        }
    }

    // Imagenes de la tabla "items", o sea las ropas reales y coloridas
    $sqlItems = "SELECT imagen FROM items";
    $resultItems = mysqli_query($conn, $sqlItems);
    $imagesItems = array();
    if (mysqli_num_rows($resultItems) > 0) {
        while ($row = mysqli_fetch_assoc($resultItems)) {
            $imagesItems[] = $row['imagen'];
        }
    }

    // Nombres de los objetos
    $sqlDescItem = "SELECT descripcion FROM items";
    $resultDescItems = mysqli_query($conn, $sqlDescItem);

    if (!$resultDescItems) {
        die("Error en la consulta: " . mysqli_error($conn));
    }

    $descripciones = array();

    while($row = mysqli_fetch_assoc($resultDescItems)){
        $descripciones[] = $row['descripcion'];
    }
?>


<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="shortcut icon" href="./images/favicon.png" type="image/x-icon">
        <link rel="stylesheet" href="./css/style.css?v=<?php echo time(); ?>">
        <link rel="stylesheet" href="./css/anim.css?v=<?php echo time(); ?>">
        <link rel="stylesheet" href="./css/colores.css?v=<?php echo time(); ?>">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;800&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
        <title>TUHUEVO</title>
    </head>
    <body>
        
        <img src="./images/UI/borde.png" id="borde">

        <!-- pantalla de inicio  -->
        <div id="pantalla-inicio" class="pantalla">
            <h1>¡Gracias por adoptar responsablemente!</h1>
            <img src="./images/bigeggy.png">
            <h2>¿Cómo deseas llamar a TUHUEVO?</h2>
            <p id="disponibilidad-nombre">El nombre debe ser unico</p>
            <input type="text" id="name" required>
            <button id="continuar-inicio" class="boton" disabled >Continuar</button>
        </div>

         <!-- ingresar fecha de nacimiento  -->
        <div id="pantalla-fecha" class="pantalla">
            <h1>Ingresa tu fecha de nacimiento</h1>          
            <h2>y recibirás 500 monedas de regalo</h2>
            <img src="./images/coin.png">
            <input type="date" id="fecha-nacimiento" required>
            <button id="continuar-fecha" class="boton" disabled >Continuar</button>
        </div>

         <!-- gracias por adoptar  -->
        <div id="gracias" class="pantalla">
            <h1>¡Gracias!</h1>
            <h3>Ahora podes usar <br>tus 500 monedas <img src="./images/coin.png"> <br>para mantener feliz a <span id="nombreMascota">NOMBRE</span></h3><br>
            <h3>Comprale cosas para que su felicidad suba</h3><br>
            <h3>Segui consiguiendo monedas para comprarle mas cosas</h3><br>
            <h3>Cada vez que rechazas algo, su felicidad desciende</h3><br>
            <button id="gracias-next" class="boton button-blue">Continuar</button>
        </div>

         <!-- notificacion del regalo  -->
        <div id="gift">
            <div id="gift-x">
                <span class="close">&times;</span>
            </div>
            <div id="gift-img">
                <img src="./images/giftt.png">
            </div>
        </div>

         <!-- tarjeta de regalo para ingresar direccion  -->
        <div id="gift-card" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>¡Gracias por jugar con TUHUEVO!</h2>
                    <p>Te ganaste un regalito que será enviado <b>directo a tu puerta</b></p>
                </div>

                <div id="input-img">
                    <img src="./images/ribbon.png">
                </div>

                <div class="inputs">
                    <label for="text" id="direc-label">Ingresa tu dirección</label><br>
                    <input type="text" id="direc" placeholder="Calle 12 727 entre 45 y 46">
                </div>
                    
                <div class="modal-card-button">
                    <button id="gift-enviar" class="button-blue" disabled>Enviar</button>
                    <button id="gift-cancelar">Cancelar</button>
                </div>
            </div>
        </div>

            
         <!-- pop up para comprar objeto y botones si / no  -->
        <div id="comprar-popup" class="popup">
            <div class="popup-content">
                <h2>¿Deseas comprar <span id="desc-item">el siguiente objeto</span>?</h2>
                <!-- <h2>¿Deseas comprar el siguiente objeto?</h2> -->
                <h3>Valor: <span id="valor-ribbon"></span> monedas</h3>
            </div>
            <div class="popup-btn">
                <button id="btn-si">Aceptar</button> 
                <button id="btn-no">Rechazar</button>
            </div>
        </div>


            <div id="error-budget" class="popup">
                <h2>No tenes tantas monedas para realizar esta compra</h2>
                <div class="popup-btn">
                    <button id="error-comprar">COMPRAR MÁS</button>
                    <button id="error-budget-btn">Odio a mi mascota</button>
                </div>
            </div>

            <div id="money-notif" class="animate__animated animate__fadeInUp">
                <div id="notif-left">
                    <img src="./images/coin.png">
                </div>
                <div id="notif-right">
                    <p id="cuanto-gano">¡Ganaste 0 monedas!</p>
                </div>
            </div>

            <div id="barra-superior">
                
                <!--                 
                    <div id="nombre-superior">
                    <h3>Huevito</h3>
                </div> 
                -->
                <div id="elementos-superior">
                    <div class="superior-happ" id="herramientas-happiness">
                        <img src="./images/cara1.png" id="cara-feliz-emoji">
                        <img src="./images/cara2.png" id="cara-meh-emoji">
                        <img src="./images/cara3.png" id="cara-triste-emoji">
                        <div id="felicidadActual"><h3></h3></div>
                    </div>
                    <div id="superior-money">
                        <div id="moneyActual"><h3></h3></div>
                        <img src="./images/UI/coin-stack.png" alt="">
                    </div>
                </div>

            </div>

            <div id="eggy">
                <div id="eggy-features" class="animate__animated">
                    <img src="./images/bigeggy1.png" >
                    <img src="./images/cara.png" id="cara-feliz">
                    <img src="./images/cara-intermedia.png" id="cara-meh">
                    <img src="./images/cara-triste.png" id="cara-triste">
                </div>

                <div id="eggy-hats" class="animate__animated">
                <img src="data:image/jpeg;base64,<?php echo base64_encode($imagesItems[0]); ?>" class="sinUsar-ribbon" id="sinUsar-ribbon-rojo">
                <img src="data:image/jpeg;base64,<?php echo base64_encode($imagesItems[1]); ?>" class="sinUsar-ribbon" id="sinUsar-ribbon-aqua">
                <img src="data:image/jpeg;base64,<?php echo base64_encode($imagesItems[2]); ?>" class="sinUsar-ribbon" id="sinUsar-ribbon-azul">
                <img src="data:image/jpeg;base64,<?php echo base64_encode($imagesItems[3]); ?>" class="sinUsar-ribbon" id="sinUsar-ribbon-naranja">
                <img src="data:image/jpeg;base64,<?php echo base64_encode($imagesItems[4]); ?>" class="sinUsar-ribbon" id="sinUsar-ribbon-violeta">
                <img src="data:image/jpeg;base64,<?php echo base64_encode($imagesItems[5]); ?>" class="sinUsar-ribbon" id="sinUsar-ribbon-gold">


                    <!-- <img src="./images/eggyribbon1.png" class="sinUsar-ribbon" id="sinUsar-ribbon-rojo"> -->
                    <!-- <img src="./images/eggyribbon_aqua.png" class="sinUsar-ribbon" id="sinUsar-ribbon-aqua">
                    <img src="./images/eggyribbon_azul.png" class="sinUsar-ribbon" id="sinUsar-ribbon-azul">
                    <img src="./images/eggyribbon_gold.png" class="sinUsar-ribbon" id="sinUsar-ribbon-gold">
                    <img src="./images/eggyribbon_naranja.png" class="sinUsar-ribbon" id="sinUsar-ribbon-naranja">
                    <img src="./images/eggyribbon_violeta.png" class="sinUsar-ribbon" id="sinUsar-ribbon-violeta"> -->
                </div>

                <div id="eggy-eyes" class="animate__animated">
                    <img src="./images/eggy-sunglasses.png" class="sinUsar-ribbon" id="sinUsar-sunglasses-black">
                    <img src="./images/eggysunglasses_aqua.png" class="sinUsar-ribbon" id="sinUsar-sunglasses-aqua">
                    <img src="./images/eggysunglasses_gold.png" class="sinUsar-ribbon" id="sinUsar-sunglasses-gold">
                    <img src="./images/eggysunglasses_red.png" class="sinUsar-ribbon" id="sinUsar-sunglasses-red">
                </div>
            </div>

            <div id="herramientas">
                <div id="herramientas-ropa">
                    <img src="./images/UI/boton-ropero.png">
                </div>
                <div id="herramientas-monedas">
                    <img src="./images/UI/boton-monedas.png" alt="">
                </div>
                <div id="herramientas-fotos">
                    <img src="./images/UI/boton-medios.png">
                </div>
            </div>

            <img src="./images/back.png" id="back-ropa" class="back-key-try">
            <div id="inside-ropa" class="menu">
                    
 
                    <div class="menu-elementos">
                    <img src="data:image/jpeg;base64,<?php echo base64_encode($imagesCategoria[0]); ?>" id="ribbon-button">
                    <img src="data:image/jpeg;base64,<?php echo base64_encode($imagesCategoria[1]); ?>" id="sunglasses-button">
                    <img src="data:image/jpeg;base64,<?php echo base64_encode($imagesCategoria[2]); ?>" id="ribbon-button">


                        <img src="./images/mustache.webp" class="not-available">
                        <img src="./images/crown.png" class="not-available">
                        <img src="./images/wig.png" class="not-available">
                        <img src="./images/pearl.png" class="not-available">
                        <img src="./images/chick.webp" class="not-available">
                        <img src="./images/tie.webp" class="not-available">
                        <img src="./images/tie.webp" class="not-available">
                        <img src="./images/tie.webp" class="not-available">
                        <img src="./images/tie.webp" class="not-available">
                        <img src="./images/tie.webp" class="not-available">
                    </div>
            </div>
            
            <img src="./images/back.png" id="back-ribbon" class="back-key-try">
            <div id="inside-ribbon" class="menu">
                
                <div class="menu-elementos">
                <img src="./images/none.png" id="none-ribbon">
                <div class="color-selector rojo" id= "ribbon"></div>
                <div class="color-selector verde" id= "ribbon-aqua"></div>
                <div class="color-selector azul" id= "ribbon-azul"></div>
                <div class="color-selector naranja" id= "ribbon-naranja"></div>
                <div class="color-selector violeta" id= "ribbon-violeta"></div>
                <div class="color-selector dorado" id= "ribbon-gold"></div>
                </div>
            </div>

            <img src="./images/back.png" id="back-sun" class="back-key-try">            
            <div id="inside-sunglasses" class="menu">

                <div class="menu-elementos">
                    <img src="./images/none.png" id="none-sun">
                    <img src="./images/sunglasses.png" id="sunglasses-black">
                    <img src="./images/sunglasses_aqua.png" id="sunglasses-aqua">
                    <img src="./images/sunglasses_red.png" id="sunglasses-red">
                    <img src="./images/sunglasses__gold.png" id="sunglasses-gold">
                </div>
            </div>



            <div id="myModal" class="modal">
                <div class="modal-content">
                    <div class="modal-header">
                    <p>Chequea las emociones de TUHUEVO</p>
                    <span class="close">&times;</span>
                    </div>
                    <div class="modal-allcards">
                        <div class="modal-card">
                            <div class="modal-card-content">
                                <p><b>Tu Huevo perdió 10 puntos de felicidad...</b></p><br>
                                <p>Motivo: No compartiste tu <b>ubicación</b> a cambio de 500 monedas</p>
                            </div>
                            <div class="modal-card-button">
                                <button><p>Continuar</p></button>
                                <button><p>Ignorar</p></button>
                            </div>
                        </div>

                        <div class="modal-card">
                            <div class="modal-card-content">
                                <p><b>Tu Huevo perdió 10 puntos de felicidad...</b></p><br>
                                <p>Motivo: No compartiste tu <b>ubicación</b> a cambio de 500 monedas</p>
                            </div>
                            <div class="modal-card-button">
                                <button><p>Continuar</p></button>
                                <button><p>Ignorar</p></button>
                            </div>
                        </div>

                        <div class="modal-card">
                            <div class="modal-card-content">
                                <p><b>Tu Huevo perdió 10 puntos de felicidad...</b></p><br>
                                <p>Motivo: No compartiste tu <b>ubicación</b> a cambio de 500 monedas</p>
                            </div>
                            <div class="modal-card-button">
                                <button><p>Continuar</p></button>
                                <button><p>Ignorar</p></button>
                            </div>
                        </div>

                        <div class="modal-card">
                            <div class="modal-card-content">
                                <p><b>Tu Huevo perdió 10 puntos de felicidad...</b></p><br>
                                <p>Motivo: No compartiste tu <b>ubicación</b> a cambio de 500 monedas</p>
                            </div>
                            <div class="modal-card-button">
                                <button><p>Continuar</p></button>
                                <button><p>Ignorar</p></button>
                            </div>
                        </div>

                        <div class="modal-card">
                            <div class="modal-card-content">
                                <p><b>Tu Huevo perdió 10 puntos de felicidad...</b></p><br>
                                <p>Motivo: No compartiste tu <b>ubicación</b> a cambio de 500 monedas</p>
                            </div>
                            <div class="modal-card-button">
                                <button><p>Continuar</p></button>
                                <button><p>Ignorar</p></button>
                            </div>
                        </div>

                        <div class="modal-card">
                            <div class="modal-card-content">
                                <p><b>Tu Huevo perdió 10 puntos de felicidad...</b></p><br>
                                <p>Motivo: No compartiste tu <b>ubicación</b> a cambio de 500 monedas</p>
                            </div>
                            <div class="modal-card-button">
                                <button><p>Continuar</p></button>
                                <button><p>Ignorar</p></button>
                            </div>
                        </div>

                        <div class="modal-card">
                            <div class="modal-card-content">
                                <p><b>Tu Huevo perdió 10 puntos de felicidad...</b></p><br>
                                <p>Motivo: No compartiste tu <b>ubicación</b> a cambio de 500 monedas</p>
                            </div>
                            <div class="modal-card-button">
                                <button><p>Continuar</p></button>
                                <button><p>Ignorar</p></button>
                            </div>
                        </div>

                        <div class="modal-card">
                            <div class="modal-card-content">
                                <p><b>Tu Huevo perdió 10 puntos de felicidad...</b></p><br>
                                <p>Motivo: No compartiste tu <b>ubicación</b> a cambio de 500 monedas</p>
                            </div>
                            <div class="modal-card-button">
                                <button><p>Continuar</p></button>
                                <button><p>Ignorar</p></button>
                            </div>
                        </div>
                        
                    </div>
                    
                    
                    
                </div>
            </div>

            <div id="interior-monedas" class="modal fade-in">
                <div class="modal-content">
                    <div class="modal-header">
                    <p>TIENDA DE MONEDAS</p>
                    <span class="close" id="cerrar-monedas">&times;</span>
                    </div>
                    <div class="modal-allcards">
                        <div class="modal-card" id="mic-card">
                            <div class="modal-card-content">
                                <p><b>OBTIENE 500 MONEDAS</b></p><br>
                                <p>Comparte tu <b>micrófono</b> con TUHUEVO y recibirás <b>1500 monedas</b></p>
                            </div>
                            <div class="modal-card-button">
                                <button id="aceptar-mic" class="button-blue">Compartir</button>
                                <button id="ignorar-mic">Ignorar</button>
                            </div>
                        </div>

                        <div class="modal-card" id="email-card">
                            <div class="modal-card-content">
                                <p><b>¡SUSCRÍBETE A NUESTRO NEWSLETTER!</b></p><br>
                                <p>Comparte con nosotros tu <b>correo electrónico</b> a cambio de <b>500 monedas</b></p>
                                <input type="email" id="email" required>
                            </div>
                            <div class="modal-card-button">
                                <button id="aceptar-email" class="button-blue">Suscribite</button>
                                <button id="ignorar-email">Ignorar</button>
                            </div>
                        </div>

                        <div class="modal-card" id="twitter-card">
                            <div class="modal-card-content">
                                <p><b>¡SIGUENOS EN TWITTER!</b></p><br>
                                <p>Dannos un <b>follow</b> en Twitter y te regalamos <b>300 monedas</b></p>
                            </div>
                            <div class="modal-card-button">
                                <button id="aceptar-twitter" class="button-blue"><a href="https://twitter.com/home" target="_blank">Seguir a Twitter</a></button>
                                <button id="ignorar-twitter">Ignorar</button>
                            </div>
                        </div>

                        <div class="modal-card" id="credit-card">
                            <div class="modal-card-content">
                                <p><b>OBTIENE 1000 MONEDAS</b></p><br>
                                <p>¿Necesitás <b>monedas</b>? Aprovecha esta oferta y compra <b>1100 monedas</b></p>
                            </div>
                            <div class="modal-card-button">
                                <button id="aceptar-credit" class="button-blue">$9.99</button>
                                <button id="ignorar-credit">Ignorar</button>
                            </div>
                        </div>

                    </div>  
                </div>
            </div>

            <div id="credit-pay" class="modal">
                <div class="modal-content">

                    <div class="modal-header">
                        <p>Confirmación de pago</p>
                        <span class="close" id="cerrar-credit">&times;</span>
                    </div>

                    <div class="inputs">
                        <label for="text" id="tarjetaLabel">Tarjeta:</label><br>
                        <input type="text" id="ccnum" placeholder="**** **** **** 1234">
                    </div>
                    <div class="inputs">
                        <label for="password" id="codigoLabel">Código de seguridad:</label><br>
                        <input type="password" id="cvv" placeholder="352">
                    </div>
                    <div id="input-img">
                        <img src="./images/credit.png">
                    </div>
                    <div class="modal-card-button">
                        <button id="aceptar-pay" class="button-blue" disabled>Confirmar</button>
                        <button id="ignorar-pay">Cancelar</button>
                    </div>
                </div>
            </div>

            <div id="mic-popup" class="popup">
                <h2>"TUHUEVO" quiere acceder al micrófono</h2><br><h3>Permite enviar videos y notas de audio <br>utilizando tu voz</h3>
                
                <!-- this aint working
                    <div class="popup-btn">
                    <button id="btn-si-mic">Permitir</button> 
                    <button id="btn-no-mic">No permitir</button>
                </div> -->
            </div>

            <div id="interior-fotos" class="modal fade-in">
                <div class="modal-content" >
                    <div class="modal-header">
                    <p>PERFIL PERSONAL</p>
                    <span class="close" id="cerrar-fotos">&times;</span>
                    </div>
                    <div class="modal-allcards box-content">

                        <div class="carta" id="perfil-huevo-card">
                            <div class="carta-cont">
                                <img src="./images/id.png">
                            </div>
                            <div class="carta-btn">
                                <button id="aceptar-dni" class="button-blue">DNI de tu Huevo</button>
                            </div>
                        </div>

                        <div class="carta not-available" id="take-pic-card">
                            <div class="carta-cont">
                                <img src="./images/cam.png">
                            </div>
                            <div class="carta-btn">
                                <button class="button-blue">¡Tomar una foto!</button>
                            </div>
                        </div>

                        <div class="carta not-available">
                            <div class="carta-cont">
                                <img src="./images/download.webp">
                            </div>
                            <div class="carta-btn">
                                <button class="button-blue">Descargar imagen</button>
                            </div>
                        </div>

                        <div class="carta not-available">
                            <div class="carta-cont">
                                <img src="./images/bigeggy.png">
                            </div>
                            <div class="carta-btn">
                                <button class="button-blue">Refrescar imagen</button>
                            </div>
                        </div>

                        <div class="carta not-available">
                            <div class="carta-cont">
                                <img src="./images/bigeggy.png">
                            </div>
                            <div class="carta-btn">
                                <button class="button-blue">Refrescar imagen</button>
                            </div>
                        </div>


                    </div>  
                </div>
            </div>
            
        

        <div id="dni">
            <div id="dni-caja">
                <img src="./images/DNI.png" id="img-dni">
            </div>
            <div id="dni-btn">
                <button id="back-dni" ><img src="./images/back.png"></button>
                <button id="shareDNI" class="button-blue">Compartir</button>
            </div>
        </div>

        
    


        <script src="js/test.js"></script>
        <!-- <script src="js/bd.js"></script> -->
        <script src="js/clothes.js"></script>
        <script src="js/share.js"></script>
        
        
        

    </body>
</html>