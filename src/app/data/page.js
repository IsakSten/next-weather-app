import WeatherComponent from "../components/GetWeatherData"
import styles from '../page.module.css'

export default function page() {
  return (
    <div className={styles.main}>
      <WeatherComponent />
    </div>
  )
}
