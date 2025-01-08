const input = document.querySelector("input")
const btn = document.querySelector("button")
const locationInput = document.querySelector(".location")
const currentTemp = document.querySelector(".currentTemp")
const currentTime = document.querySelector(".time")
// const weather = document.querySelector(".weather")
let city;
async function trackLocation(){
    try{
    const res = await fetch("https://geolocation-db.com/json/")
    const data = await res.json()
    navigator.geolocation.getCurrentPosition((posData)=>{
        data.latitude = posData.coords.latitude
        data.longitude = posData.coords.longitude
    },(err)=>{console.log(err)})
    data.city = "Bangalore"
    city = data.city;
  }catch(err){
    console.log(err)
  }
  async function data(){
    const res = await fetch(city1(city))
    const data = await res.json()
     console.log(data)
     setData(data)
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
//  weather.textContent = data.currentConditions.condition
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
 let str = `${hrs}:${min}:${sec}`
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
