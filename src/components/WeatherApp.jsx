import { useState } from 'react';
import WeatherForm from './WeatherForm';

export default function WeatherApp() {
    const [weather, setWeather] = useState(null);
    async function loadInfo(city = "london") {
        try {
            const request = await fetch(
                `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
            );
            const json = await request.json();
            setWeather(json);
            console.log(json);
        } catch (error) {

        }
    }//realizando petición para cargar la ciudad
    const handleChangeCity = (city) => {
        setWeather(null);
        loadInfo(city);
    }//manejando el cambio de ciudad

    return <div>
        <WeatherForm onChangeCity={handleChangeCity} />
        <div>{weather?.current.temp_c}</div>{/*obteniendo la temperatura opcionalmente*/}
    </div>;
}