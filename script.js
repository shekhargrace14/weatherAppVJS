// c182d4eda330bc791453f992d1788091


const button = document.getElementById("search-button");
const input = document.getElementById("city-input")





// fetch("https://api.openweathermap.org/data/2.5/weather?q={input}&appid=c182d4eda330bc791453f992d1788091")
// .then((result)=>{ return result.json()})
// .then((data)=>{
//     console.log(data)
    
// })


async function weatherApi(result="delhi"){
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${result}&appid=c182d4eda330bc791453f992d1788091`);

    var data = await response.json();

    // return data
    console.log(data);

                const state = document.querySelector(".state");
                const time = document.querySelector(".time");
                const temp = document.querySelector(".temp");

                state.innerHTML = data.name;
                time.innerHTML = data.timezone;
                temp.innerHTML = data.main.temp;        
} 


weatherApi()
button.addEventListener("click", function(){
    result = input.value
    console.log(result)
    weatherApi(result)

})






        // button.addEventListener("click", () => {
        //     const input = document.getElementById("city-input").value;
        //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=c182d4eda330bc791453f992d1788091`)
        //     .then((res)=> res.json())
        //     .then((data) => {
        //         console.log(data);
        //         console.log(data.base)

        //         const state = document.querySelector(".state");
        //         const time = document.querySelector(".time");
        //         const temp = document.querySelector(".temp");

        //         state.innerHTML = data.name;
        //         time.innerHTML = data.timezone;
        //         temp.innerHTML = data.main.temp;
                
        //     })


        //     console.log("hello", input)
        // })