const input = document.querySelector(".input")
const btn = document.querySelector(".button")
const locationInput = document.querySelector(".location")
const currentTemp = document.querySelector(".currentTemp")
const currentTime = document.querySelector(".time")
const weather = document.querySelector(".weather")
const per = document.querySelector(".perc")
const img = document.querySelector(".img")
let city;
async function trackLocation(){
    try{
    const res = await fetch("https://geolocation-db.com/json/")
    const data = await res.json()
    data.city = "Bangalore"
    city = data.city;
    console.log(city)
  }catch(err){
    console.log(err)
  }
  async function data(){
    try{
    const res = await fetch(city1(city))
    const data = await res.json()
     console.log(data)
     setData(data)
    }catch(err){
      console.log(err)
    }
 }
  data()
  function city1(cityName){
      return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json`
  }
}
trackLocation()
function setData(data){
 locationInput.textContent = data.resolvedAddress;
 currentTemp.textContent = data.currentConditions.temp
 weather.textContent = data.currentConditions.conditions
 if(data.days[0].precip==0){
 per.textContent = "Perc - Null%"
 }else{
  per.textContent = "Perc - "+data.days[0].precip+"%"
 }
 let dataIcon = data.currentConditions.icon
 if(dataIcon=="partly-cloudy-day"){
  img.src = "https://i.ibb.co/PZQXH8V/27.png"
 }else if(dataIcon=="partly-cloudy-night"){
  img.src = "https://i.ibb.co/Kzkk59k/15.png"
 }else if(dataIcon=="rain"){
  img.src = "https://i.ibb.co/kBd2NTS/39.png"
 }
 else if(dataIcon=="clear-day"){
  img.src = "https://i.ibb.co/rb4rrJL/26.png"
 }else if(dataIcon=="clear-night"){
  img.src="https://i.ibb.co/1nxNGHL/10.png"
 }
 let date = new Date()
 let hrs = date.getHours();
 let sec = date.getSeconds()
 let min = date.getMinutes()
 setInterval(()=>{
    if(sec>59){
        sec = 0
        min++
    }
    if(min>59){
     min = 0
     hrs++
    }
    if(hrs>23){
        hrs=0
    }
    sec++
 },1000)
 let str = `${hrs.toString().padStart(2,"0")}:${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`
 str = str.slice(0,5)
 let obj = {
    0:"Sunday",
    1:"Monday",
    2:"Tuesday",
    3:"Wednesday",
    4:"Thursday",
    5:"Friday",
    6:"Saturday"
 }
 let day;
 for(let key in obj){
    if(date.getDay()==key){
    day = obj[key]
    }
 }
currentTime.textContent = `${day},${str}`

}
btn.addEventListener("click",()=>{
  const city = input.value;
  async function data(){
    try{
    const res = await fetch(city1(city))
    const data = await res.json()
     console.log(data)
     setData(data)
    }catch(err){
      console.log(err)
    }
 }
  data()
  function city1(cityName){
      return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json`
  }
})
















//    btn.addEventListener("click", ()=>{
//     const city = input.value
//     async function data(){
//         const res = await fetch(city1(city))
//         const data = await res.json()
//          console.log(data)
//     }
//     data()
//     function city1(cityName){
//         return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json`
//     }
//    })
 
// function city1(cityName){
//     return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json`
// }
//    async function data(){
//     const res = await fetch(city1(city))
//     const data = await res.json()
//      console.log(data)
// }
// data()
// function weatherData(arr){
//  arr.forEach((ele)=>{
  
//  })
// }
