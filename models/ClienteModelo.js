const {model,Schema}=require('mongoose')

const ClienteModelo=Schema({
    nombre_cliente:{
        type:String,
        require:true
    },
    apellido_cliente:{
        type:String,
        require:true
    },
    fecha_inicio_reserva:{
        type:String,
        require:true
    },
    fecha_final_reserva:{
        type:String,
        require:true
    },
    numero_personas:{
        type:Number,
        require:true
    },
    
})


module.exports = model('clientes',ClienteModelo)