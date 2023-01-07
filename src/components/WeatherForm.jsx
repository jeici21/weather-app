import { useState } from "react";
import styles from './WeatherForm.module.css';

export default function WeatherForm({ onChangeCity }) {
    const [city, setCity] = useState("");
    const onChange = (e) => {
        const value = e.target.value;
        if (value !== '') {
            setCity(value);
        }//validando input vacío
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onChangeCity(city);
    }//guardando la ciudad

    return <form onSubmit={handleSubmit} className={styles.container}>
        <input type="text" onChange={onChange} className={styles.input} />
    </form>
}