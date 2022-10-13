const Telefono = require("./telefono");

class TelefonoResidencial extends Telefono{
    
    domicilio = "domicilio donde está ubicado";

    

    constructor(color,tipoDeRed,esInnalambrico,usoPublico,domicilio){
        super(color,tipoDeRed,esInnalambrico,usoPublico);
        this.domicilio = domicilio;
     
    }

}

module.exports = TelefonoResidencial;
