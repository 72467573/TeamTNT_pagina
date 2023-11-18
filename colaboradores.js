//Importar el cliente MongoDB
const mongo= require('mongodb').MongoClient;


// conexion
const conexion_atlas = "mongodb+srv://72467573:72467573@teamtnt0.jk8x40f.mongodb.net/?retryWrites=true&w=majority"

// Establezco una nueva conexión con mongo
const cliente=new mongo(conexion_atlas)

// Indico la Base de Datos
const dbname="Colaboradores"



const main= async() => {
    try{
        // Nos conectamos a MongoDB
        await cliente.connect();
        console.log(`He conseguido conectarme al sitio ${conexion_atlas} llamada: ${dbname}`)
    } catch(fallo){
        console.error(`He tenido un problema en la operación: ${fallo}`)
    } finally {
        await cliente.close()
    }
};

main();
