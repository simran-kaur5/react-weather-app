import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({UpdateInfo}){

    let [city,setCity] = useState("")
    let [error,setError] = useState(false)

    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    let getWeatherInfo =  async()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let jsonRes = await response.json()

            let result = {
                city:city,
                temp: jsonRes.main.temp,
                tempMin: jsonRes.main.temp_min,
                tempMax: jsonRes.main.temp_max,
                humidity: jsonRes.main.humidity,
                feelsLike: jsonRes.main.feels_like,
                weather: jsonRes.weather[0].description
            }
            return result
        }catch(err){
            throw err;
        }
    }    

    let handleChange = (event) =>{
        setCity(event.target.value)
    }

    let handleSubmit = async (event) =>{

        setError(false);
        try{
            event.preventDefault()
            let newData = await getWeatherInfo()
            UpdateInfo(newData)
            setCity("")
        }catch(err){
            setError(true)
        }

    }
    return (
        <div className='SearchBox'>

            <form action="" onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br></br>
                <br/>
                <Button variant="contained" type='submit'>
                    Search
                </Button>
                {error && <p style={{color:"red"}}>No such place exits!</p>}
            </form>
        </div>
    )
}