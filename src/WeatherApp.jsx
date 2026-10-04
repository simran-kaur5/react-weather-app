import { use, useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){

    let [info, setInfo] = useState({
        city:"Delhi",
        feelsLike:24,
        temp:25.05,
        tempMin:25.05,
        tempMax:234,
        humidity:47,
        weather:"haze"
    })

    let UpdateInfo = (newInfo)=>{
        setInfo(newInfo)
        console.log(newInfo)
    }
    return (
        <div style={{textAlign:"center"}}>
            <h2>
                Weather APP
                </h2>
                <SearchBox UpdateInfo={UpdateInfo}/>
                <InfoBox info={info} />
        </div>
    )
}