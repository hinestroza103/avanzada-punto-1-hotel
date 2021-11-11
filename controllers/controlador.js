//EL controlador se encaragar de administrar
//las peticione y repuestas

const {request,response}=require('express')

//importar el servicio

const {insertarCliente}=require('../services/servicio.js')
const {leerCliente}=require('../services/servicio.js')
const {leerClientes}=require('../services/servicio.js')
const {modificarClientes}=require('../services/servicio.js')
const {borrarClientes}=require('../services/servicio.js')
//cuales son las operaciones
//que debe realizar mi SERVIDOR

async function registrarCliente(peticion=request,respuesta=response){

    //caputuro los datos que llegan el cuerpo de la peticion
    let datosCliente=peticion.body;
    //intentar grabar datos en bd usando el servicio
    try{

        await insertarCliente(datosCliente)
        respuesta.status(200).json({
            estado:true,
            mensaje:"exito registrando al cliente"
            
        })

    }catch(error){

        respuesta.status(400).json({
            estado:false,
            mensaje:"upssss..."+error
            
        })

    }

  
    
}

async function buscarCliente(peticion=request,respuesta=response){

    //capturar el id del cliente a buscar

    let id=peticion.params.id;

    try{

        let cliente= await leerCliente(id)
        respuesta.status(200).json({
            estado:true,
            datos: cliente
            
        })

    }catch(error){

        respuesta.status(400).json({
            estado:false,
            mensaje:"upssss..."+error
            
        })

    }
    
}

   async function buscarClientes(peticion=request,respuesta=response){

   

    try{

        let clientes= await leerClientes()
        respuesta.status(200).json({
            estado:true,
            datos: clientes
            
        })

    }catch(error){

        respuesta.status(400).json({
            estado:false,
            mensaje:"upssss..."+error
            
        })

    }

}

async function editarCliente(peticion=request,respuesta=response){
//recibir los datos del body y id de los parametros

    let datos = peticion.body
    let id=peticion.params.id
    try{

        await modificarClientes(id,datos)
        respuesta.status(200).json({
            estado:true,
            mensaje:"exito editando"
            
        })

    }catch(error){

        respuesta.status(400).json({
            estado:false,
            mensaje:"upssss..."+error
            
        })

    }

}

async function eliminarCliente(peticion=request,respuesta=response){

    let id=peticion.params.id
    try{

        await borrarClientes(id)
        respuesta.status(200).json({
            estado:true,
            mensaje:"exito expulsando al cliente del hotel"
            
        })

    }catch(error){

        respuesta.status(400).json({
            estado:false,
            mensaje:"upssss..."+error
            
        })

}
}


module.exports={

    registrarCliente,
    buscarCliente,
    buscarClientes,
    editarCliente,
    eliminarCliente
}