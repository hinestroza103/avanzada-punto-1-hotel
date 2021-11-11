const ClienteModelo = require('../models/ClienteModelo.js')


//Servicio para agregar un documento a la bd

async function insertarCliente(datosCliente){
    let clienteAInsertar=ClienteModelo(datosCliente)

    return await clienteAInsertar.save()

}
// servicio para buscar 1 jugador en la bd
async function leerCliente(id){
    let cliente= await ClienteModelo.findById(id)

    return cliente
}

//Servicio para buscar todos los jugadores
async function leerClientes(){

    let clientes=await ClienteModelo.find();

    return clientes


}

//Servicio para editar un documento

async function modificarClientes(id,datos){

    return await ClienteModelo.findByIdAndUpdate(id,datos)

}

//para eliminar un documento

async function borrarClientes(id,){

    return await ClienteModelo.findByIdAndDelete(id)

}




module.exports ={ 
    insertarCliente,
    leerCliente,
    leerClientes,
    modificarClientes,
    borrarClientes
}