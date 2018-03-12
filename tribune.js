// Weather Update Widgets

let updateChicago = function(data) {
  console.log("Got weather data: ", data)
  // assign a variable to the data
  info = data

  console.log(info)

  let pic = info.weather[0].icon

  let temp = Math.round(info.main.temp)

  $("#test").attr("src", "http://openweathermap.org/img/w/" + pic + ".png")

  $("#chicagotemp").text(temp + " degrees")

  }

let updateLA = function(data) {
  // assign a variable to the data
  info = data

  // console.log(info)

  let pic2 = info.weather[0].icon

  let temp2 = Math.round(info.main.temp)

  $("#la").attr("src", "http://openweathermap.org/img/w/" + pic2 + ".png")

  $("#laTemp").text(temp2 + " degrees")

  }

let updateNewYork = function(data) {
  // assign a variable to the data
  info = data

  // console.log(info)

  let pic3 = info.weather[0].icon

  let temp3 = Math.round(info.main.temp)

  $("#new").attr("src", "http://openweathermap.org/img/w/" + pic3 + ".png")

  $("#newTemp").text(temp3 + " degrees")

  }


// Pull API Functions

let getChicago = function() {

  let apiKey = 'd76584545b02b767d8d3bf5d3f17f6ed';

  let chicago = "https://api.openweathermap.org/data/2.5/weather?q=Chicago";

  chicago +='&appid=' + apiKey + '&units=imperial'

  fetch(chicago).then(convertToJSON).then(updateChicago).catch(displayError);

}

let getLA = function() {

  let apiKey = 'd76584545b02b767d8d3bf5d3f17f6ed';

  let losAngeles = "https://api.openweathermap.org/data/2.5/weather?id=5368381"

  losAngeles += '&appid=' + apiKey + '&units=imperial'

  fetch(losAngeles).then(convertToJSON).then(updateLA).catch(displayError)

}

let getNewYork = function() {

  let apiKey = 'd76584545b02b767d8d3bf5d3f17f6ed';

  let newYork = "https://api.openweathermap.org/data/2.5/weather?id=5128638"

  newYork += '&appid=' + apiKey + '&units=imperial'

  fetch(newYork).then(convertToJSON).then(updateNewYork).catch(displayError)

}

// jQuery("#test").on("click", getChicago)

$(document).ready(getChicago)

$(document).ready(getLA)

$(document).ready(getNewYork)

let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }

// guardian API Key = 3d03885b-d556-4fda-801c-fcc3b64834b0

let guardianPolitics = function(data){
  console.log("got political data", data)

  info = data

  let Title = info.response.results[0].webTitle

  let Url = info.response.results[0].webUrl

  $("#guardianTitle").text(Title)

  //$("#guardLink").text(Url)

  $("#guardLink").attr("href", Url)

}

let getGuardian = function() {

  let apiKey = '3d03885b-d556-4fda-801c-fcc3b64834b0'

  let guardianURL = 'http://content.guardianapis.com/search?q=politics&api-key='

  guardianURL += apiKey

  fetch(guardianURL).then(convertToJSON).then(guardianPolitics).catch(displayError)

}

$("#guardian").on("click", getGuardian)

// New York Times Movie APIs
