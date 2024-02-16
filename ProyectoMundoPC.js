//Creo Clase Padre DispositivoEntrada

class DispositivoEntrada {
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        return this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        return this._marca = marca;
    }
}

//Creo Clases Hijas Raton y Teclado

class Raton extends DispositivoEntrada{

    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;        
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Ratón: [ID Del Ratón N°: ${this._idRaton}, Tipo de Entrada: ${this._tipoEntrada}, Marca del Ratón: ${this._marca}]`;
    }
}

let raton1 = new Raton("USB", "Logitech");
let raton2 = new Raton("USB", "Corsair");
let raton3 = new Raton("USB", "Genius");

class Teclado extends DispositivoEntrada{

    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;        
    }
    get idTeclado(){
        this._idTeclado;
    }
    toString(){
        return `Teclado: [ID Del Teclado N°: ${this._idTeclado}, Tipo de Entrada: ${this._tipoEntrada}, Marca del Teclado: ${this._marca}]`;
    }
}

let teclado1 = new Teclado("USB", "Corsair");
let teclado2 = new Teclado("USB", "Noga");
let teclado3 = new Teclado("USB", "Razer");

//Creo Clase Padre Monitor

class Monitor{

    static contadorMonitores = 0;

    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    toString(){
        return `Monitor: [ID del Monitor: ${this._idMonitor}, La Marca del Monitor es: ${this._marca}, El Tamaño del Monitor es de: ${this._tamaño}]`;
    }
}
//Creación objetos de Monitor

let monitor1 = new Monitor("Samsung", " 22 Pulgadas");
let monitor2 = new Monitor("LG", "25 Pulgadas");
let monitor3 = new Monitor("Odyssey", "32 Pulgadas");

//Creo Clase Placa de Video

class Placa{

    static contadorPlacas = 0;

    constructor(modelo){
        this._idPlaca = ++Placa.contadorPlacas;
        this._modelo = modelo;
    }
    get idPlaca(){
        return this._idPlaca;
    }
    toString(){
        return `Placa de Video: [ID de Placa: ${this._idPlaca}, Modelo: ${this._modelo}]`
    }
}

let placa1 = new Placa("GTX 960");
let placa2 = new Placa("GTX 2080");
let placa3 = new Placa("GTX 4090");
console.log(placa1.toString());

//Creo Clase Computadora

class Computadora{

    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton, modelo){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
        this._modelo = modelo;
    }
    toString(){
        return `Computadora: ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._teclado} \n ${this._raton} \n ${this._modelo}`;
    }
}

let computadora1 = new Computadora("HP", monitor1, raton1, teclado1, placa1);
let computadora2 = new Computadora("DELL", monitor2, raton2, teclado2, placa2);
let computadora3 = new Computadora("Lenovo", monitor3, raton3, teclado3, placa3);
console.log(computadora1.toString());
console.log(computadora2.toString());
console.log(computadora3.toString());

//Clase Orden

class Orden{
    
    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    get idOrden(){
        return this._idOrden;
    }

    agregarComputadora(computadora){
            this._computadoras.push(computadora);
    }
    mostrarOrden(){
        let computadorasOrden = "";
        for (let computadora of this._computadoras){
            computadorasOrden += `\n${computadora}`;
        }

        console.log(`Orden N°${this._idOrden}: Computadoras:\n${computadorasOrden}`);
    }
}

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputadora(computadora3);
orden2.agregarComputadora(computadora1);
orden2.mostrarOrden();