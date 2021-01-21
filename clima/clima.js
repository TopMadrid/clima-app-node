const axios = require('axios');

const getClima = async(lat, lng) => {

    //const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=29ce48b8868c360732849e61d418922e`);
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=29ce48b8868c360732849e61d418922e&units=metric`);
 
    return resp.data.main.temp;

}


module.exports = {

    getClima
}


