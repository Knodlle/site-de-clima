import axios from "axios";
import express from "express";

const URL = "https://api.open-meteo.com/v1/forecast?latitude=-22.9064&longitude=-43.1822&current=temperature_2m,precipitation,weather_code,is_day&timezone=America%2FSao_Paulo"

const app = express()
const port = 3000

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req,res) =>{
    const result = await axios.get(URL)
    console.log(result.data)
    
    const data = result.data.current.time
    const date=  new Date(data)
    const time = date.toLocaleString("pt-BR")
    
    const temperature_2m = result.data.current.temperature_2m
    
    const codigo_clima = result.data.current.weather_code
    const weatherCodes = {
        0: "Céu limpo",
        1: "Parcialmente nublado",
        2: "Nublado",
        3: "Muito nublado",
        61: "Chuva",
        95: "Tempestade"
    };
    const isDay = result.data.current.is_day
    res.render("index.ejs",{time:time, temperature_2m:temperature_2m, clima: weatherCodes[codigo_clima],climaCodigo: codigo_clima,isDay:isDay})
})

app.listen(port,()=>{
    console.log("Server running on port " + port)
})