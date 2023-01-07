import { useState, useEffect } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMainInfo from './WeatherMainInfo';

export default function WeatherApp() {
    const [weather, setWeather] = useState(null);
    useEffect(() => {
        loadInfo();
    }, []);//siempre se cargará junto al componente

    useEffect(() => {
        document.title = `Weather | ${weather?.location.name ?? ""}`;//si es nulo regresa un string vacío
    }, [weather]);//solo se cargará si cambia el valor de weather

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
        <WeatherMainInfo weather={weather} />
    </div>;
}