class Telefono{
    color= "color del teléfono";
    tipoDeRed = "tipo de red telefónica";
    esInnalambrico = "boolean";
    usoPublico = "boolean";
    /**
     * 
     * @param {String} color 
     * @param {String} tipoDeRed 
     * @param {Boolean} esInnalambrico 
     * @param {Boolean} usoPublico 
     */
    constructor(color,tipoDeRed,esInnalambrico,usoPublico){
        this.color = color;
        this.tipoDeRed = tipoDeRed;
        this.esInnalambrico = esInnalambrico
        this.usoPublico = usoPublico;
    }

    llamar(){
        console.log("realizar una llamada");
    }

    contestarLlamada(){
        console.log("contesta una llamada")
    }

}

module.exports= Telefono;