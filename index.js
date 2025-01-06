const input = document.querySelector("input")
const btn = document.querySelector("button")

   btn.addEventListener("click", ()=>{
    const city = input.value
    async function data(){
        const res = await fetch(city1(city))
        const data = await res.json()
         console.log(data)
    }
    data()
    function city1(cityName){
        return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json`
    }
   })
 
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
