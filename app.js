
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const coordenadas = {
    direccion: '',
    lat: '',
    lng: ''
};

const argv = require('yargs').options({ // Usamos .options si no definimos ningun comando con .commands
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//lugar.getLugarLatLng( argv.direccion )
//    .then ( resp => { 
//        console.log(resp);
//        coordenadas.direccion = resp.direccion;
//        coordenadas.lat = resp.lat;
//        coordenadas.lng = resp.lng;
//    })
//    .catch (err =>{
//        console.log('Error en getLugarLatng', err);
//    });


 //clima.getClima( coordenadas.lat, coordenadas.lng)
 //.then( console.log )
 //.catch (console.log );




const getInfo = async (direccion) => {

try {
        const coords = await lugar.getLugarLatLng ( direccion );
        const temp = await clima.getClima ( coords.lat, coords.lng );
        return `El clima de ${coords.direccion} es de ${ temp }.`;

    } catch (e) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }
}

getInfo ( argv.direccion)
    .then (console.log)
    .catch ( console.log );




