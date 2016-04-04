$(function(){

  var movies = ["UHF", "Revenge of the Nerds", "Wall-E"];
  for (var i=0; i<movies.length; i++){
    getMovie(movies[i]);
  }

  $("form").submit(function(event){
    event.preventDefault();
    var movieTest = $("#movieName").val();
    getMovie(movieTest);
  });

  function getMovie(title){
    var movieObject = {};
    title = addPlus(title.toLowerCase());
    var titleUrl = "http://www.omdbapi.com/?t=" + title + "&y=&plot=short&r=json";
    $.get(titleUrl).done(function(response){
      movieObject = response;
      if (movieObject.Response == "False") {
        alert("Movie not found. Spell better.");
      } else {
        displayMovie(movieObject);
      }
    });
  }

  function addPlus(movieTitle){
    return movieTitle.replace(/ /g, "+");
  }

  function displayMovie(movie){
    var movieString = "<div class=\"film\">";
    movieString += "<p class = \"year\">" + movie.Year + "</p>";
    movieString += "<h2>" + movie.Title + "</h2>";
    movieString += "<p class = \"starring\">Starring " + movie.Actors + "</p>";
    movieString += "<p class = \"plot\">" + movie.Plot + "</p></div>";
    $(movieString).fadeIn(1000).appendTo("body");
  }
});
