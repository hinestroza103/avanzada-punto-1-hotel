//Se trae la funcion Router para 
//separra las rutas de mi api
const { Router }=require('express')

//Importo los controladores
const { registrarCliente }=require('../controllers/controlador.js')
const { buscarCliente }=require('../controllers/controlador.js')
const { buscarClientes }=require('../controllers/controlador.js')
const { editarCliente }=require('../controllers/controlador.js')
const { eliminarCliente }=require('../controllers/controlador.js')

//una avribale que personaliza mis rutas
const rutas=Router()

//rutas del api
    rutas.get('/avanzada/v1/clientes/:id',buscarCliente)
    rutas.get('/avanzada/v1/clientes',buscarClientes)
    rutas.post('/avanzada/v1/clientes',registrarCliente)
    rutas.put('/avanzada/v1/clientes/:id',editarCliente)
    rutas.delete('/avanzada/v1/clientes/:id',eliminarCliente)

    module.exports=rutas
