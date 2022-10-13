const Telefono = require("./telefono");

class TelefonoInteligente extends Telefono{
    cantidadCamaras = "cantidad de camaras";
    resolucionPantalla = "calidad de la imagen";
    megaPixelsCamaraPrincipal = "cantidad de Mp de la camara principal ";

    constructor(color,tipoDeRed,esInnalambrico,usoPublico,cantidadCamaras,resolucionPantalla,megaPixelsCamaraPrincipal){
        super(color,tipoDeRed,esInnalambrico,usoPublico);
        this.cantidadCamaras = cantidadCamaras;
        this.resolucionPantalla = resolucionPantalla;
        this.megaPixelsCamaraPrincipal = megaPixelsCamaraPrincipal;
    }
     
    tomarFotos(){
        console.log("toma una foto")
    }
    
    buscarEnInternet(){
        console.log("busca en internet")
    }

    descargarAplicacion(){
        console.log("descarga una aplicación")
    }
}

module.exports = TelefonoInteligente;