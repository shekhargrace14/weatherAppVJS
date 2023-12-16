// d05c0f50238a42a6b2b95625231612 

const button = document.getElementById("search-button");
const input = document.getElementById("city-input")

async function  getData(cityName){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=d05c0f50238a42a6b2b95625231612&q=${cityName}&aqi=no`); 
    return await promise.json()
} 

console.log(getData())

// button.addEventListener("click", async function(){
//     const value = input.value
//     const result = await getData(value)
//     console.log( result) 


//     // input.innerHTML = ""

// })
console.log("hello")

