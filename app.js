const Telefono = require("./telefono");
const TelefonoInteligente = require("./telefonoInteligente");
const TelefonoResidencial = require("./telefonoResidencial");



const unTelefono = new Telefono("rojo","cableada",false, false)
const unTelefonoInteligente = new TelefonoInteligente("gris","4g",true,false,3,"1080 HD", "32 mp")
const unTelefonoResidencial = new TelefonoResidencial("blanco","linea cableada",false,false,"corrientes 746")


unTelefono.contestarLlamada()
unTelefonoInteligente.contestarLlamada()
unTelefonoInteligente.buscarEnInternet()
unTelefonoInteligente.tomarFotos()
unTelefonoResidencial.llamar()


console.log(unTelefono instanceof TelefonoInteligente);
console.log(unTelefonoInteligente instanceof Telefono);
console.log(unTelefonoResidencial instanceof Telefono);
