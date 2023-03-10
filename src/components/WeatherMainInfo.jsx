import styles from "./WeatherMainInfo.module.css";

export default function WeatherMainInfo({ weather }) {
    return (
        <div className={styles.mainInfo}>
            <div className={styles.city}>{weather?.location.name}</div>
            <div className={styles.country}>{weather?.location.country}</div>
            <div className={styles.row}>
                <div>
                    <img src={`http:${weather?.current.condition.icon}`}
                        alt={weather?.current.condition.text} width="128"
                    />
                </div>
                <div className={styles.weatherConditions}>
                    <div className={styles.condition}>{weather?.current.condition.text}</div>
                    <div className={styles.current}>{weather?.current.temp_c}°</div>
                </div>
            </div>
            <iframe src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d635995.0900984745!2d${weather?.location.lon}03!3d${weather?.location.lat}1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sec!4v1673076428264!5m2!1ses-419!2sec`}
                width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade" title="mapa"
            ></iframe>
        </div>
    );//exportando nombre y ciudad con imágenes
}