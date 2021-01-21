const axios = require('axios');



const getLugarLatLng = async (dir) => {

    const encodedUlr = encodeURI (dir ); // Usado para correguir los espacios añadiendo %20

    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodedUlr}`,
        //timeout: 1000,
        headers: {'x-rapidapi-key': '542a46b949msh34d8ba20ddcff10p1880f8jsna44b88018574'}
    });


  const resp = await instance.get();

  if ( resp.data.length === 0){ // Si la consulta no tiene datos
      throw new Error(`No hay resultados para ${ direccion }`);
  }

  const data = resp.data;

  const direccion = data.name;
  const lat = data.coord.lat;
  const lng = data.coord.lon;

 // instance.get()
 //       .then ( resp => {
 //           console.log(resp.data);
 //       })
 //       .catch( err => {
 //           console.log('ERROR !!!!!', err );
 //       });


        return {
            direccion,
            lat,
            lng
        }      

}        

module.exports = {
    getLugarLatLng

}