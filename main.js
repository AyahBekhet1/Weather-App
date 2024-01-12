let container=document.querySelector('.weather-container')
let leftArrow = document.querySelector('.left-arrow')
let rightArrow=document.querySelector('.right-arrow')

let input=document.querySelector('input')

const successCallback =(position)=>{
  console.log(position);
}

const errorCallback =(error)=>{
  console.error(error);
}
navigator.geolocation.getCurrentPosition(successCallback,errorCallback,{
  enableHighAccuracy:true,
  timeout:5000
})


let weather;
const dayofWeeks=['Sunday','Monday','Tuesday','Wednesday','Thuresday','Friday' , 'Saturday']
const monthOfYear=['january', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


async function getWeather(location="egypt" , days="3"){

const responce= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=8f8984a56f4b4241aa7114917241001&q=${location}&days=${days}`)
weather= await responce.json()
displayWeather(weather)

}

getWeather('egypt',3)



function displayClear(forecast){
let cartona=``

cartona=`

<div class="card position-absolute top-50" style='z-index:${forecast.zIndex}'>
<div class="climate">
<div class="sun"></div>
<div class="birds">
<div class="bird-container bird-container--one">
  <div class="bird bird--one"></div>
</div>
<div class="bird-container bird-container--two">
  <div class="bird bird--two"></div>
</div>
<div class="bird-container bird-container--three">
  <div class="bird bird--three"></div>
</div>
<div class="bird-container bird-container--four">
  <div class="bird bird--four"></div>
</div>
</div>
</div>
<div
            class="weather-content d-flex flex-column justify-content-between"
          >
            <div class="weather-title position-relative px-2 d-flex align-items-center justify-content-between">
            <div class="weather-header d-flex flex-column  align-items-start">
            <div class=" d-flex  align-items-start">
            <h2 class="display-2 fw-normal m-0">${forecast.tTemp}</h2>
            <span class="pt-2">c</span>
            </div>
            <p class='p-0 m-0 fs-4'>${forecast.country}</p>
            </div>
              <div
                class="date-condition pt-4 d-flex flex-column align-items-end justify-content-center"
              >
                <p class="fw-light text-capitalize ">${forecast.dayName} ${forecast.dayNumber} ${forecast.monthName}</p>
                <p class="fs-5">${forecast.weatherCond}</p>
              </div>
            </div>
            <div
              class="weather-end d-flex align-items-center justify-content-evenly"
            >
              <div class="weather-condition">
                <i class="fa-solid fa-umbrella"></i>
                <span>${forecast.rain}%</span>
              </div>
              <div class="weather-condition">
                <i class="fa-solid fa-wind"></i>
                <span>${forecast.wind}km/hr</span>
              </div>
              <div class="weather-condition" alt="humidity" >
                <i class="fa-solid fa-droplet" ></i>
                <span>${forecast.humidity}%</span>
              </div>
            </div>
          </div>
        </div>
       
`

container.innerHTML=+cartona
}

function displayRain (forecast){
    let cartona=``

    cartona=`
    
        <div class="card position-absolute top-50"  style="background-color: #A5AAB2; color:white; z-index:${forecast.zIndex}">
        <div class="cloud cloud1" style="background: url(cccloud12.svg);"></div>
        <div class="cloud cloud2" style="background: url(cccloud11.svg);"></div>
        <div class="cloud cloud3" style="background: url(cccloud10.svg);"></div>
          <div class="climate">
          <div class="rain">
              <span style="--seconds: 11"></span><span style="--seconds: 12"></span><span style="--seconds: 10"></span>
              <span style="--seconds: 15"></span>
              <span style="--seconds: 15"></span>
              <span style="--seconds: 13"></span>
              <span style="--seconds: 12"></span>
              <span style="--seconds: 14"></span>
              <span style="--seconds: 16"></span>
              <span style="--seconds: 12"></span>
              <span style="--seconds: 17"></span>
              <span style="--seconds: 18"></span>
              <span style="--seconds: 12"></span>
              <span style="--seconds: 11"></span>
              <span style="--seconds: 10"></span>
              <span style="--seconds: 19"></span>
              <span style="--seconds: 15"></span>
              <span style="--seconds: 13"></span>
              <span style="--seconds: 12"></span>
              <span style="--seconds: 15"></span>
              <span style="--seconds: 12"></span>
              <span style="--seconds: 19"></span>
              
            </div>

            </div>
            <div
            class="weather-content d-flex flex-column justify-content-between"
          >
            <div class="weather-title position-relative px-2 d-flex align-items-center justify-content-between">
              <div class="weather-header d-flex flex-column  align-items-start">
              <div class=" d-flex  align-items-start">
              <h2 class="display-2 fw-normal m-0">${forecast.tTemp}</h2>
              <span class="pt-2">c</span>
              </div>
              <p class='p-0 m-0 fs-4'>${forecast.country}</p>
              </div>
              
              <div
                class="date-condition pt-4 d-flex flex-column align-items-end justify-content-center"
              >
                <p class="fw-light text-capitalize ">${forecast.dayName} ${forecast.dayNumber} ${forecast.monthName}</p>
                <p class="fs-5">${forecast.weatherCond}</p>
              </div>
            </div>
            <div
              class="weather-end d-flex align-items-center justify-content-evenly"
            >
              <div class="weather-condition">
                <i class="fa-solid fa-umbrella"></i>
                <span>${forecast.rain}%</span>
              </div>
              <div class="weather-condition">
                <i class="fa-solid fa-wind"></i>
                <span>${forecast.wind}km/hr</span>
              </div>
              <div class="weather-condition" alt="humidity" >
                <i class="fa-solid fa-droplet" ></i>
                <span>${forecast.humidity}%</span>
              </div>
            </div>
          </div>
        </div>
        
    `
    container.innerHTML+=cartona;
    // document.querySelector(".cloud1").style.backgroundImage='url(cccloud12.svg)' 
    // document.querySelector(".cloud2").style.backgroundImage='url(cccloud11.svg)' 
    // document.querySelector(".cloud3").style.backgroundImage='url(cccloud10.svg)' 

}

function displayCloudy (forecast){
  let cartona=``
   cartona=`
   <div class="card position-absolute top-50" style='z-index:${forecast.zIndex}'>
   <div class="climate">
   <div class="cloud cloud1" style="background-image: url(cccloud1.svg);" ></div>
   <div class="cloud cloud2" style="background-image: url(cccloud2.svg);"></div>
   <div class="cloud cloud3" style="background-image: url(cccloud3.svg);"></div>

<div class="birds">
<div class="bird-container bird-container--one">
  <div class="bird bird--one"></div>
</div>
<div class="bird-container bird-container--two">
  <div class="bird bird--two"></div>
</div>
<div class="bird-container bird-container--three">
  <div class="bird bird--three"></div>
</div>
<div class="bird-container bird-container--four">
  <div class="bird bird--four"></div>
</div>
</div>
</div>
   
   <div
            class="weather-content d-flex flex-column justify-content-between"
          >
            <div class="weather-title position-relative px-2 d-flex align-items-center justify-content-between">
            <div class="weather-header d-flex flex-column  align-items-start">
            <div class=" d-flex  align-items-start">
            <h2 class="display-2 fw-normal m-0">${forecast.tTemp}</h2>
            <span class="pt-2">c</span>
            </div>
            <p class='p-0 m-0 fs-4'>${forecast.country}</p>
            </div>
              <div
                class="date-condition pt-4 d-flex flex-column align-items-end justify-content-center"
              >
                <p class="fw-light text-capitalize ">${forecast.dayName} ${forecast.dayNumber} ${forecast.monthName}</p>
                <p class="fs-5">${forecast.weatherCond}</p>
              </div>
            </div>
            <div
              class="weather-end d-flex align-items-center justify-content-evenly"
            >
              <div class="weather-condition">
                <i class="fa-solid fa-umbrella"></i>
                <span>${forecast.rain}%</span>
              </div>
              <div class="weather-condition">
                <i class="fa-solid fa-wind"></i>
                <span>${forecast.wind}km/hr</span>
              </div>
              <div class="weather-condition" alt="humidity" >
                <i class="fa-solid fa-droplet" ></i>
                <span>${forecast.humidity}%</span>
              </div>
            </div>
          </div>
        </div>
   `

   container.innerHTML+=cartona
   document.querySelector(".cloud1").style.backgroundImage+='url(cccloud1.svg)' 
    document.querySelector(".cloud2").style.backgroundImage+='url(cccloud2.svg)' 
    document.querySelector(".cloud3").style.backgroundImage+='url(cccloud3.svg)' 
}

function displaySunny(forecast){
  let cartona=``

cartona=`

<div class="card position-absolute top-50" style='z-index:${forecast.zIndex}' >
<div class="climate">
<div class="sunny"></div>

<div
            class="weather-content d-flex flex-column justify-content-between"
          >
            <div class="weather-title position-relative px-2 d-flex align-items-center justify-content-between">
            <div class="weather-header d-flex flex-column  align-items-start">
            <div class=" d-flex  align-items-start">
            <h2 class="display-2 fw-normal m-0">${forecast.tTemp}</h2>
            <span class="pt-2">c</span>
            </div>
            <p class='p-0 m-0 fs-4'>${forecast.country}</p>
            </div>
              <div
                class="date-condition pt-4 d-flex flex-column align-items-end justify-content-center"
              >
                <p class="fw-light text-capitalize ">${forecast.dayName} ${forecast.dayNumber} ${forecast.monthName}</p>
                <p class="fs-5">${forecast.weatherCond}</p>
              </div>
            </div>
            <div
              class="weather-end d-flex align-items-center justify-content-evenly"
            >
              <div class="weather-condition">
                <i class="fa-solid fa-umbrella"></i>
                <span>${forecast.rain}%</span>
              </div>
              <div class="weather-condition">
                <i class="fa-solid fa-wind"></i>
                <span>${forecast.wind}km/hr</span>
              </div>
              <div class="weather-condition" alt="humidity" >
                <i class="fa-solid fa-droplet" ></i>
                <span>${forecast.humidity}%</span>
              </div>
            </div>
          </div>
        </div>
       
`

container.innerHTML+=cartona
}

function displayOvercast (forecast){
  let cartona=``

  cartona=`
  
      <div class="card position-absolute top-50" style='z-index:${forecast.zIndex} ; background-color: #A5AAB2; color:white;' ">
        <div class="cloud cloud1" style="background: url(cccloud12).svg);"></div>
        <div class="cloud cloud2" style="background: url(cccloud11).svg);"></div>
        <div class="cloud cloud3" style="background: url(cccloud10).svg);"></div>
        <div class="climate">
        

          </div>
          <div
          class="weather-content d-flex flex-column justify-content-between"
        >
          <div class="weather-title position-relative px-2 d-flex align-items-center justify-content-between">
          <div class="weather-header d-flex flex-column  align-items-start">
          <div class=" d-flex  align-items-start">
          <h2 class="display-2 fw-normal m-0">${forecast.tTemp}</h2>
          <span class="pt-2">c</span>
          </div>
          <p class='p-0 m-0 fs-4'>${forecast.country}</p>
          </div>
            <div
              class="date-condition pt-4 d-flex flex-column align-items-end justify-content-center"
            >
              <p class="fw-light text-capitalize ">${forecast.dayName} ${forecast.dayNumber} ${forecast.monthName}</p>
              <p class="fs-5">${forecast.weatherCond}</p>
            </div>
          </div>
          <div
            class="weather-end d-flex align-items-center justify-content-evenly"
          >
            <div class="weather-condition">
              <i class="fa-solid fa-umbrella"></i>
              <span>${forecast.rain}%</span>
            </div>
            <div class="weather-condition">
              <i class="fa-solid fa-wind"></i>
              <span>${forecast.wind}km/hr</span>
            </div>
            <div class="weather-condition" alt="humidity" >
              <i class="fa-solid fa-droplet" ></i>
              <span>${forecast.humidity}%</span>
            </div>
          </div>
        </div>
      </div>
      
  `
  container.innerHTML+=cartona;
  document.querySelector(".cloud1").style.backgroundImage='url(cccloud12.svg)' 
  document.querySelector(".cloud2").style.backgroundImage='url(cccloud11.svg)' 
  document.querySelector(".cloud3").style.backgroundImage='url(cccloud10.svg)' 
}

function displayMist (forecast){
  let cartona=``

  cartona=`
  
      <div class="card position-absolute top-50" style='z-index:${forecast.zIndex} ; background-color: #A5AAB2; color:white;' >
        <div class="cloud cloud1" style="background: url(cccloud12).svg);"></div>
        <div class="cloud cloud2" style="background: url(cccloud11).svg);"></div>
        <div class="cloud cloud3" style="background: url(cccloud10).svg);"></div>
        <div class="climate">
        <div class="mist">
        <span style="--i: 1"></span>
        <span style="--i: 3"></span>
        <span style="--i: 16"></span>
        <span style="--i: 5"></span>
        <span style="--i: 13"></span>
        <span style="--i: 6"></span>
        <span style="--i: 7"></span>
        <span style="--i: 10"></span>
        <span style="--i: 8"></span>
        <span style="--i: 7"></span>
        <span style="--i: 10"></span>
        <span style="--i: 8"></span>
        <span style="--i: 17"></span>
        <span style="--i: 11"></span>
        <span style="--i: 12"></span>
        <span style="--i: 14"></span>
        <span style="--i: 2"></span>
        <span style="-i: 9"></span>
        <span style="--i: 15"></span>
        <span style="--i: 4"></span>
      </div>

          </div>
          <div
          class="weather-content d-flex flex-column justify-content-between"
        >
          <div class="weather-title position-relative px-2 d-flex align-items-center justify-content-between">
          <div class="weather-header d-flex flex-column  align-items-start">
          <div class=" d-flex  align-items-start">
          <h2 class="display-2 fw-normal m-0">${forecast.tTemp}</h2>
          <span class="pt-2">c</span>
          </div>
          <p class='p-0 m-0 fs-4'>${forecast.country}</p>
          </div>
            <div
              class="date-condition pt-4 d-flex flex-column align-items-end justify-content-center"
            >
              <p class="fw-light text-capitalize ">${forecast.dayName} ${forecast.dayNumber} ${forecast.monthName}</p>
              <p class="fs-5">${forecast.weatherCond}</p>
            </div>
          </div>
          <div
            class="weather-end d-flex align-items-center justify-content-evenly"
          >
            <div class="weather-condition">
              <i class="fa-solid fa-umbrella"></i>
              <span>${forecast.rain}%</span>
            </div>
            <div class="weather-condition">
              <i class="fa-solid fa-wind"></i>
              <span>1${forecast.wind}8km/hr</span>
            </div>
            <div class="weather-condition" alt="humidity" >
              <i class="fa-solid fa-droplet" ></i>
              <span>${forecast.humidity}%</span>
            </div>
          </div>
        </div>
      </div>
      
  `
  container.innerHTML+=cartona;
  document.querySelector(".cloud1").style.backgroundImage='url(cccloud12.svg)' 
  document.querySelector(".cloud2").style.backgroundImage='url(cccloud11.svg)' 
  document.querySelector(".cloud3").style.backgroundImage='url(cccloud10.svg)' 
}

function displaySnow (forecast){
  let cartona=``
   cartona=`
   <div class="card position-absolute top-50" style='z-index:${forecast.zIndex}'>
   <div class="cloud cloud1" style="background-image: url(cccloud1.svg);" ></div>
   <div class="cloud cloud2" style="background-image: url(cccloud2.svg);"></div>
   <div class="cloud cloud3" style="background-image: url(cccloud3.svg);"></div>

   <div class="climate">
            <div class="snow">
              <span style="--seconds: 11"></span><span style="--seconds: 12"></span><span style="--seconds: 10"></span>
              <span style="--seconds: 15"></span>
              <span style="--seconds: 15"></span>
              <span style="--seconds: 13"></span>
              <span style="--seconds: 12"></span>
              <span style="--seconds: 14"></span>
              <span style="--seconds: 16"></span>
              <span style="--seconds: 12"></span>
              <span style="--seconds: 17"></span>
              <span style="--seconds: 18"></span>
              <span style="--seconds: 12"></span>
              <span style="--seconds: 11"></span>
              <span style="--seconds: 10"></span>
              <span style="--seconds: 19"></span>
              <span style="--seconds: 16"></span>
              <span style="--seconds: 13"></span>
              <span style="--seconds: 12"></span>
              <span style="--seconds: 15"></span>
              <span style="--seconds: 16"></span>
              <span style="--seconds: 13"></span>
              <span style="--seconds: 12"></span>
              <span style="--seconds: 14"></span>
              <span style="--seconds: 16"></span>
              <span style="--seconds: 19"></span>
              <span style="--seconds: 12"></span>
              <span style="--seconds: 15"></span>
            </div>
    </div>        
   <div
            class="weather-content d-flex flex-column justify-content-between"
          >
            <div class="weather-title position-relative px-2 d-flex align-items-center justify-content-between">
            <div class="weather-header d-flex flex-column  align-items-start">
            <div class=" d-flex  align-items-start">
            <h2 class="display-2 fw-normal m-0">${forecast.tTemp}</h2>
            <span class="pt-2">c</span>
            </div>
            <p class='p-0 m-0 fs-4'>${forecast.country}</p>
            </div>
              <div
                class="date-condition pt-4 d-flex flex-column align-items-end justify-content-center"
              >
                <p class="fw-light text-capitalize ">${forecast.dayName} ${forecast.dayNumber} ${forecast.monthName}</p>
                <p class="fs-5">${forecast.weatherCond}</p>
              </div>
            </div>
            <div
              class="weather-end d-flex align-items-center justify-content-evenly"
            >
              <div class="weather-condition">
                <i class="fa-solid fa-umbrella"></i>
                <span>${forecast.rain}%</span>
              </div>
              <div class="weather-condition">
                <i class="fa-solid fa-wind"></i>
                <span>${forecast.wind}km/hr</span>
              </div>
              <div class="weather-condition" alt="humidity" >
                <i class="fa-solid fa-droplet" ></i>
                <span>${forecast.humidity}%</span>
              </div>
            </div>
          </div>
        </div>
   `

   container.innerHTML+=cartona
   document.querySelector(".cloud1").style.backgroundImage='url(cccloud1.svg)' 
    document.querySelector(".cloud2").style.backgroundImage='url(cccloud2.svg)' 
    document.querySelector(".cloud3").style.backgroundImage='url(cccloud3.svg)' 
}


function displaySleet (forecast){
  let cartona=``

  cartona=`
  
      <div class="card position-absolute top-50" style='z-index:${forecast.zIndex} ; background-color: #A5AAB2; color:white;' >
        <div class="cloud cloud1" style="background: url(cccloud12).svg);"></div>
        <div class="cloud cloud2" style="background: url(cccloud11).svg);"></div>
        <div class="cloud cloud3" style="background: url(cccloud10).svg);"></div>
        <div class="climate">
        <div class="snow">
        <span style="--seconds: 11"></span><span style="--seconds: 12"></span><span style="--seconds: 10"></span>
        <span style="--seconds: 15"></span>
        <span style="--seconds: 15"></span>
        <span style="--seconds: 13"></span>
        <span style="--seconds: 12"></span>
        <span style="--seconds: 14"></span>
        <span style="--seconds: 16"></span>
        <span style="--seconds: 12"></span>
        <span style="--seconds: 17"></span>
        <span style="--seconds: 18"></span>
        <span style="--seconds: 12"></span>
        <span style="--seconds: 11"></span>
        <span style="--seconds: 10"></span>
        <span style="--seconds: 19"></span>
        <span style="--seconds: 15"></span>
        <span style="--seconds: 13"></span>
        <span style="--seconds: 12"></span>
        <span style="--seconds: 15"></span>
        <span style="--seconds: 13"></span>
        <span style="--seconds: 12"></span>
        <span style="--seconds: 15"></span>
        <span style="--seconds: 13"></span>
        <span style="--seconds: 12"></span>
        <span style="--seconds: 15"></span>
        <span style="--seconds: 13"></span>
        <span style="--seconds: 12"></span>
        <span style="--seconds: 15"></span>
      </div>
        <div class="rain">
            <span style="--seconds: 11"></span><span style="--seconds: 12"></span><span style="--seconds: 10"></span>
            <span style="--seconds: 15"></span>
            <span style="--seconds: 15"></span>
            <span style="--seconds: 13"></span>
            <span style="--seconds: 12"></span>
            <span style="--seconds: 14"></span>
            <span style="--seconds: 16"></span>
            <span style="--seconds: 12"></span>
            <span style="--seconds: 17"></span>
            <span style="--seconds: 18"></span>
            <span style="--seconds: 12"></span>
            <span style="--seconds: 11"></span>
            <span style="--seconds: 10"></span>
            <span style="--seconds: 19"></span>
            <span style="--seconds: 15"></span>
            <span style="--seconds: 13"></span>
            <span style="--seconds: 12"></span>
            <span style="--seconds: 15"></span>
            <span style="--seconds: 12"></span>
            <span style="--seconds: 19"></span>
            <span style="--seconds: 15"></span>
            <span style="--seconds: 12"></span>
            <span style="--seconds: 19"></span>
            <span style="--seconds: 15"></span>
            <span style="--seconds: 12"></span>
            <span style="--seconds: 19"></span>
            
          </div>

          </div>
          <div
          class="weather-content d-flex flex-column justify-content-between"
        >
          <div class="weather-title position-relative px-2 d-flex align-items-center justify-content-between">
            <div class="weather-header d-flex flex-column  align-items-start">
              <div class=" d-flex  align-items-start">
              <h2 class="display-2 fw-normal m-0">${forecast.tTemp}</h2>
              <span class="pt-2">c</span>
              </div>
              <p class='p-0 m-0 fs-4'>${forecast.country}</p>
              </div>
            <div
              class="date-condition pt-4 d-flex flex-column align-items-end justify-content-center"
            >
              <p class="fw-light text-capitalize ">${forecast.dayName} ${forecast.dayNumber} ${forecast.monthName}</p>
              <p class="fs-5">${forecast.weatherCond}</p>
            </div>
          </div>
          <div
            class="weather-end d-flex align-items-center justify-content-evenly"
          >
            <div class="weather-condition">
              <i class="fa-solid fa-umbrella"></i>
              <span>${forecast.rain}%</span>
            </div>
            <div class="weather-condition">
              <i class="fa-solid fa-wind"></i>
              <span>${forecast.wind}km/hr</span>
            </div>
            <div class="weather-condition" alt="humidity" >
              <i class="fa-solid fa-droplet" ></i>
              <span>${forecast.humidity}%</span>
            </div>
          </div>
        </div>
      </div>
      
  `
  container.innerHTML+=cartona;
  document.querySelector(".cloud1").style.backgroundImage='url(cccloud12.svg)' 
  document.querySelector(".cloud2").style.backgroundImage='url(cccloud11.svg)' 
  document.querySelector(".cloud3").style.backgroundImage='url(cccloud10.svg)' 

}

function displayBlizard (forecast){
  let cartona=``

  cartona=`
  
      <div class="card position-absolute top-50" style='z-index:${forecast.zIndex}; background-color: #A5AAB2; color:white;' style="">
        <div class="cloud cloud1" style="background: url(cccloud12.svg);"></div>
        <div class="cloud cloud2" style="background: url(cccloud11.svg);"></div>
        <div class="cloud cloud3" style="background: url(cccloud10.svg);"></div>
        <div class="climate">
        <div class="snow">
        <span style="--seconds: 11"></span><span style="--seconds: 12"></span><span style="--seconds: 10"></span>
        <span style="--seconds: 15"></span>
        <span style="--seconds: 15"></span>
        <span style="--seconds: 13"></span>
        <span style="--seconds: 12"></span>
        <span style="--seconds: 14"></span>
        <span style="--seconds: 16"></span>
        <span style="--seconds: 12"></span>
        <span style="--seconds: 17"></span>
        <span style="--seconds: 18"></span>
        <span style="--seconds: 12"></span>
        <span style="--seconds: 11"></span>
        <span style="--seconds: 10"></span>
        <span style="--seconds: 19"></span>
        <span style="--seconds: 15"></span>
        <span style="--seconds: 13"></span>
        <span style="--seconds: 12"></span>
        <span style="--seconds: 15"></span>
        <span style="--seconds: 13"></span>
        <span style="--seconds: 12"></span>
        <span style="--seconds: 15"></span>
        <span style="--seconds: 13"></span>
        <span style="--seconds: 12"></span>
        <span style="--seconds: 15"></span>
        <span style="--seconds: 13"></span>
        <span style="--seconds: 12"></span>
        <span style="--seconds: 15"></span>
      </div>
        

          </div>
          <div
          class="weather-content d-flex flex-column justify-content-between"
        >
          <div class="weather-title position-relative px-2 d-flex align-items-center justify-content-between">
            <div class="weather-header d-flex flex-column  align-items-start">
              <div class=" d-flex  align-items-start">
              <h2 class="display-2 fw-normal m-0">${forecast.tTemp}</h2>
              <span class="pt-2">c</span>
              </div>
              <p class='p-0 m-0 fs-4'>${forecast.country}</p>
              </div>
            <div
              class="date-condition pt-4 d-flex flex-column align-items-end justify-content-center"
            >
              <p class="fw-light text-capitalize ">${forecast.dayName} ${forecast.dayNumber} ${forecast.monthName}</p>
              <p class="fs-5">${forecast.weatherCond}</p>
            </div>
          </div>
          <div
            class="weather-end d-flex align-items-center justify-content-evenly"
          >
            <div class="weather-condition">
              <i class="fa-solid fa-umbrella"></i>
              <span>${forecast.rain}%</span>
            </div>
            <div class="weather-condition">
              <i class="fa-solid fa-wind"></i>
              <span>${forecast.wind}km/hr</span>
            </div>
            <div class="weather-condition" alt="humidity" >
              <i class="fa-solid fa-droplet" ></i>
              <span>${forecast.humidity}%</span>
            </div>
          </div>
        </div>
      </div>
      
  `
  container.innerHTML+=cartona;
  document.querySelector(".cloud1").style.backgroundImage='url(cccloud12.svg)' 
  document.querySelector(".cloud2").style.backgroundImage='url(cccloud11.svg)' 
  document.querySelector(".cloud3").style.backgroundImage='url(cccloud10.svg)' 

}

function displayDrizzle (forecast){
  let cartona=``

  cartona=`
  
      <div class="card position-absolute top-50" style='z-index:${forecast.zIndex}'>
        <div class="cloud cloud1" style="background: url(cccloud12).svg);"></div>
        <div class="cloud cloud2" style="background: url(cccloud11).svg);"></div>
        <div class="cloud cloud3" style="background: url(cccloud10).svg);"></div>
        <div class="climate">
        <div class="rain">
            <span style="--seconds: 11"></span><span style="--seconds: 12"></span><span style="--seconds: 10"></span>
            <span style="--seconds: 15"></span>
            <span style="--seconds: 15"></span>
            <span style="--seconds: 13"></span>
            <span style="--seconds: 12"></span>
            <span style="--seconds: 14"></span>
            <span style="--seconds: 16"></span>
            <span style="--seconds: 12"></span>
            <span style="--seconds: 17"></span>
            <span style="--seconds: 18"></span>
            <span style="--seconds: 12"></span>
            <span style="--seconds: 11"></span>
            <span style="--seconds: 10"></span>
            <span style="--seconds: 19"></span>
            <span style="--seconds: 15"></span>
       
            
          </div>
          
          </div>
          <div
          class="weather-content d-flex flex-column justify-content-between"
        >
          <div class="weather-title position-relative px-2 d-flex align-items-center justify-content-between">
            <div class="weather-header d-flex flex-column  align-items-start">
              <div class=" d-flex  align-items-start">
              <h2 class="display-2 fw-normal m-0">${forecast.tTemp}</h2>
              <span class="pt-2">c</span>
              </div>
              <p class='p-0 m-0 fs-4'>${forecast.country}</p>
              </div>
            <div
              class="date-condition pt-4 d-flex flex-column align-items-end justify-content-center"
            >
              <p class="fw-light text-capitalize ">${forecast.dayName} ${forecast.dayNumber} ${forecast.monthName}</p>
              <p class="fs-5">${forecast.weatherCond}</p>
            </div>
          </div>
          <div
            class="weather-end d-flex align-items-center justify-content-evenly"
          >
            <div class="weather-condition">
              <i class="fa-solid fa-umbrella"></i>
              <span>${forecast.rain}%</span>
            </div>
            <div class="weather-condition">
              <i class="fa-solid fa-wind"></i>
              <span>${forecast.wind}km/hr</span>
            </div>
            <div class="weather-condition" alt="humidity" >
              <i class="fa-solid fa-droplet" ></i>
              <span>${forecast.humidity}%</span>
            </div>
          </div>
        </div>
      </div>
      
  `
  container.innerHTML+=cartona;
  document.querySelector(".cloud1").style.backgroundImage='url(cccloud1.svg)' 
  document.querySelector(".cloud2").style.backgroundImage='url(cccloud2.svg)' 
  document.querySelector(".cloud3").style.backgroundImage='url(cccloud3.svg)' 

}



 function displayWeather (currentWeather){
  let zIndex=3;
  let forecastObj={};
  let weatherCond ,tTemp , date ,monthName,dayName,newDate,wind,rain,humidity,day,dayNumber,country
  for (let i = 0; i <3 ; i++) {
     weatherCond =currentWeather.forecast.forecastday[i].day.condition.text
     tTemp=currentWeather.forecast.forecastday[i].day.maxtemp_c;
     date=currentWeather.forecast.forecastday[i].date
     newDate=new Date(date)
    
     monthName=monthOfYear[newDate.getMonth()]
     dayName =dayofWeeks[newDate.getDay()]
   

     wind =currentWeather.forecast.forecastday[i].day.maxwind_kph
     rain=currentWeather.forecast.forecastday[i].day.daily_chance_of_rain
     humidity=currentWeather.forecast.forecastday[i].day.avghumidity

     day = currentWeather.forecast.forecastday[i].date
     dayNumber = Array.from(day).splice(-2,2).join('')
     country=currentWeather.location.name

     forecastObj={
      weatherCond:weatherCond,
      tTemp:tTemp,
      monthName:monthName,
      dayName:dayName,
      wind:wind,
      humidity:humidity,
      rain:rain,
      dayNumber:dayNumber,
      zIndex:zIndex,
      country:country
    }
    
    zIndex--
    displayCondition(forecastObj)
  }

}

function displayCondition (forecastObj){
 
if(forecastObj.weatherCond == 'Sunny'){
  displaySunny(forecastObj)
  
}else if(forecastObj.weatherCond == 'Partly cloudy' ||forecastObj.weatherCond == 'Cloudy' ){
  displayCloudy(forecastObj)
}
else if(forecastObj.weatherCond =='Overcast'){
  displayOvercast(forecastObj)
}
else if(forecastObj.weatherCond =='Mist'){
  displayMist(forecastObj)
}
else if(forecastObj.weatherCond == 'Patchy rain possible' || forecastObj.weatherCond == 'Patchy light rain' || forecastObj.weatherCond == 'Light rain' || forecastObj.weatherCond == 'Moderate rain at times' || forecastObj.weatherCond == 'Moderate rain' || forecastObj.weatherCond == 'Patchy light rain with thunder'||forecastObj.weatherCond == 'Moderate or heavy rain with thunder' ){
  displayRain(forecastObj)
}else if(forecastObj.weatherCond == 'Heavy rain at times' || forecastObj.weatherCond == 'Heavy rain' || forecastObj.weatherCond == 'Light freezing rain' || forecastObj.weatherCond == 'Moderate or heavy freezing rain'|| forecastObj.weatherCond == 'Light rain shower' || forecastObj.weatherCond == 'Moderate or heavy rain shower'|| forecastObj.weatherCond == 'Torrential rain shower'){
  displayRain(forecastObj)
}

else if(forecastObj.weatherCond == 'Patchy snow possible' || forecastObj.weatherCond == 'Blowing snow' || forecastObj.weatherCond == 'Patchy light snow' || forecastObj.weatherCond == 'Light snow'  || forecastObj.weatherCond == 'Heavy snow' || forecastObj.weatherCond == 'Patchy heavy snow'|| forecastObj.weatherCond == 'Moderate snow'|| forecastObj.weatherCond == 'Patchy moderate snow' || forecastObj.weatherCond == 'Ice pellets' || forecastObj.weatherCond == 'Moderate or heavy showers of ice pellets'|| forecastObj.weatherCond == 'Light showers of ice pellets'|| forecastObj.weatherCond == 'Moderate or heavy snow showers'|| forecastObj.weatherCond == 'Light snow showers' || forecastObj.weatherCond == 'Patchy light snow with thunder'|| forecastObj.weatherCond == 'Moderate or heavy snow with thunder'){
  displaySnow(forecastObj)
}

else if(forecastObj.weatherCond == 'Patchy sleet possible' || forecastObj.weatherCond == 'Light sleet' || forecastObj.weatherCond == 'Moderate or heavy sleet' || forecastObj.weatherCond == 'Light sleet showers' || forecastObj.weatherCond == 'Moderate or heavy sleet showers'){
  displaySleet(forecastObj)
}

else if(forecastObj.weatherCond == 'Patchy freezing drizzle possible' || forecastObj.weatherCond == 'Patchy light drizzle' || forecastObj.weatherCond == 'Light drizzle' || forecastObj.weatherCond == 'Freezing drizzle'  || forecastObj.weatherCond == 'Heavy freezing drizzle')   {
  displayDrizzle(forecastObj)
}

else if(forecastObj.weatherCond == 'Thundery outbreaks possible' ){
  displayDrizzle(forecastObj)
}

else if(forecastObj.weatherCond == 'Blizzard'){
  displayBlizard(forecastObj)
}





}






rightArrow.addEventListener('click',()=>{
  var cards =  document.querySelectorAll('.card');

  if(cards[0].style.zIndex==3){
    cards[0].style.zIndex=2
    cards[1].style.zIndex=3
   cards[2].style.zIndex=1
  }

  else if(cards[0].style.zIndex==2){
    cards[0].style.zIndex=1
    cards[1].style.zIndex=2
   cards[2].style.zIndex=3
  }


 
})


leftArrow.addEventListener('click' , ()=>{
  var cards =  document.querySelectorAll('.card');

  if(cards[2].style.zIndex==3){
    cards[0].style.zIndex=1
    cards[1].style.zIndex=3
   cards[2].style.zIndex=2
  }

  else if(cards[2].style.zIndex==2){
    cards[0].style.zIndex=3
    cards[1].style.zIndex=2
   cards[2].style.zIndex=1
  }else if(cards[0].style.zIndex==2){
    cards[0].style.zIndex=3
    cards[1].style.zIndex=2
   cards[2].style.zIndex=1
  }


})


input.addEventListener('keyup',()=>{

let search=input.value
container.innerHTML=''
getWeather(search,3)
if(input.value == ""){
  getWeather("egypt",3)
}
})

