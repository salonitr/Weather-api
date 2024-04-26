function hide(){
    document.querySelector("#cardd").style.display="flex"
    document.querySelector("#hide").style.display="none"
    document.querySelector("#loc").innerHTML=a.value
}
function show(){
    document.querySelector("#hide").style.display="inline"
    
    document.querySelector("#cardd").style.display="none"
}
var b=document.querySelector("#btnsearch")
var a=document.querySelector("#search")
b.addEventListener('click',()=>{
    console.log(a.value)
})
function change(){
    document.querySelector("#loc").innerHTML=a.value
   
}
// document.querySelector("#btnsearch").addEventListener('mouseover'
// ).style.color="red"

// let weather_body=document.querySelector('.weather-body');
// let searchBtn=document.querySelector('#searchBtn');
// let inputfield=document.querySelector('.inputField');
// let text=document.querySelector('#floatingInputGroup1');
// let cardTitle=document.querySelector('.card-title');
// let description=document.querySelector('.card-title2');
// let humidity=document.querySelector('.humidity');
// let cardTitle=document.querySelector('.card-title')
// let description=document.querySelector('.card-title2')
// let humidity=document.querySelector('.humidity')

// async function checkWeather(){

//     const key=" cfd956c0fe4c825f480b7423f65d078a";
//     const api=`https://api.openweathermap.org/data/2.5/weather?q=dehradun&appid=ac8c131b86b4ea31e09c52cb3d49c550`;
//      const data=await fetch(api).then(response=>response.json())
    // const data= await fetch(${api}).then(response=> response.json());

    // if(data.cod===401){
    //     console.log("error FOund");
    //     return;
    // }
    // if(data.cod===401){
    //     console.log("error found");
    //     return;
    // }

    // inputfield.style.display="none";
    // weather_body.style.display="flex";

    // cardTitle.innerHTML=place;
    // description.innerHTML=data.weather[0].description
    // humidity.innerHTML=data.main.humidity+'%'

    // cardTitle.innerHTML=city;
    // description.innerHTML=data.weather[0].description;
    // humidity.innerHTML=data.main.humidity+'%';

// }
// searchBtn.addEventListener('click',()=>{
// checkWeather(text.value)
// console.log(text.value)
// })


let cardTitle=document.querySelector(".card-title")
let description=document.querySelector(".card-title2")
let humidity=document.querySelector(".humidity")

async function weatherapi(city){
    const key="cfd956c0fe4c825f480b7423f65d078a"
    const api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cfd956c0fe4c825f480b7423f65d078a`
    const data=await fetch(api).then(response=>response.json())



    if(data.cod===401){
        console.log("error")
        return;
    }

    document.querySelector(".card-title").innerHTML=city 
    document.querySelector(".card-title2").innerHTML=data.weather[0].description
    document.querySelector(".humidity").innerHTML=data.main.humidity+'%'
}

    btnsearch.addEventListener('click',()=>{
        weatherapi(a.value)
    })

