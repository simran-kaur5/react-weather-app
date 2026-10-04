import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css"

export default function InfoBox({info}){
  const INIT_URL = "https://images.stockcake.com/public/2/7/4/274b9b01-a3d8-4acb-8ea8-4e3e857adb8c_large/city-through-haze-stockcake.jpg"
  const HOT_URL = "https://weather-aware.com/images/01sn%20%281%29_hu47c8d64d969a69dc02f0806b5eaab647_526714_900x0_resize_box_2.png"
  const COLD_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgLJvMgY5PH75EGIYgtBqvV_KSHb6SJfGi7kRGW4J9VSWlFw2cDtxkPsE&s=10"
  const RAIN_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGbeWrsaKFpOnDBYYeBcgaHIwOmxJLKsTjWIZuQBJPpw1Gd0maqrGhAgE&s=10"
    return (
        <div className='InfoBox'>
          <div className='cardContainer'>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={info.humidity>80?RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
        title={info.weather}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} 
          {info.humidity>80
          ?<ThunderstormIcon/>
          :info.temp>15
          ?<SunnyIcon/>
          :<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <div>Temperature = {info.temp}&deg;C</div>
          <div>Humidity = {info.humidity}</div>
          <div>Min Temp: = {info.tempMin}</div>
          <div>Max Temp: = {info.tempMax}</div>
          <div>Weather can be described as {info.weather} and feels Like {info.feelsLike}&deg;C</div>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}