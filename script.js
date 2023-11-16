/** 
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?zip=503001&city=NIzamabad&state=Telangana&country=India';**/
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dcdf233b89mshc5189e1948ac75bp1c317djsn44e84b4b50de',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) =>{
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
.then(response => response.json())
.then((response) => {

		console.log(response)

		//cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset

		

})
.catch(err => console.log(err));

}

submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("delhi");


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
.then(response => response.json())
		.then((response) => {

		temp3.innerHTML = response.temp
		humidity3.innerHTML = response.humidity
		min_temp3.innerHTML = response.min_temp
		max_temp3.innerHTML = response.max_temp
		





			console.log(response)
		})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dubai', options)
.then(response => response.json())
		.then((response) => {

			temp4.innerHTML = response.temp
			humidity4.innerHTML = response.humidity
			min_temp4.innerHTML = response.min_temp
			max_temp4.innerHTML = response.max_temp
			console.log(response)
		})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New york', options)
.then(response => response.json())
		.then((response) => {

			temp5.innerHTML = response.temp
			humidity5.innerHTML = response.humidity
			min_temp5.innerHTML = response.min_temp
			max_temp5.innerHTML = response.max_temp
			console.log(response)
		})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo', options)
		.then(response => response.json())
		.then((response) => {

			temp6.innerHTML = response.temp
			humidity6.innerHTML = response.humidity
			min_temp6.innerHTML = response.min_temp
			max_temp6.innerHTML = response.max_temp
			console.log(response)
		})







		
		
		
		

	
