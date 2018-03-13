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

  let x = 0

  let length = info.response.results.length

  while (x < length) {

    let Title = info.response.results[x].webTitle

    let Url = info.response.results[x].webUrl

    let html = "<h4>" + Title + "</h4>"

    html = html + "<a href = " + Url + "> Full Article</a>"

    $("#guardianLists").append(html)

    x = x + 1

  }

  // create javascript code that will create new elements in HTML

}

let getGuardian = function() {

  let apiKey = '3d03885b-d556-4fda-801c-fcc3b64834b0'

  let guardianURL = 'http://content.guardianapis.com/search?q=politics&api-key='

  guardianURL += apiKey

  fetch(guardianURL).then(convertToJSON).then(guardianPolitics).catch(displayError)

}

$(document).ready(getGuardian)
// $("#guardian").on("click", getGuardian)

// New York Times Movie APIs

// NYT API: b235cd09a5124783975ba3221c211edd

let timesStories = function(data) {

  console.log("got stories data", data)

  info = data

  let x = 0

  let length = info.results.length

  while (x < length) {

    let title = info.results[x].title

    let thumb = info.results[x].multimedia[1].url

    let link = info.results[x].url

    let html = "<h4>" + title + "</h4>"

    html = html + '<img src= ' + thumb + '>'

    html = html + "<p></p>"

    html = html + "<a href = " + link + "> full story</a>"

    html = html + "<p></p>"

    $("#storiesList").append(html)

    x = x + 1

  }

}

let getTimesStories = function () {

  let apiKey = 'b235cd09a5124783975ba3221c211edd'

  let storiesURL = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key='

  storiesURL = storiesURL + apiKey

  fetch(storiesURL).then(convertToJSON).then(timesStories).catch(displayError)

}

$(document).ready(getTimesStories)
// $("#times").on("click", getTimesStories)

let timesMovies = function(data) {

  console.log("got movies data", data)

  info = data

  let x = 0

  let length = info.results.length

  while (x < length) {

    let Title0 =  info.results[x].display_title

    let summary0 = info.results[x].summary_short

    let image0 = info.results[x].multimedia.src

    let link0 = info.results[x].link.url

    let html = '<h4>' + Title0 + '</h4>'

    html = html + "<a href = " + link0 + "> full review</a>"

    html = html + '<p>' + summary0 + '</p>'

    html = html + '<img src= ' + image0 + '>'

    html = html + "<p></p><p></p>"

    $("#inject").append(html)

    x = x + 1

  }

}

let getTimesMovies = function() {

  let apiKey = 'b235cd09a5124783975ba3221c211edd'

  let timesURL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key='

  timesURL += apiKey

  fetch(timesURL).then(convertToJSON).then(timesMovies).catch(displayError)

}
$(document).ready(getTimesMovies)
