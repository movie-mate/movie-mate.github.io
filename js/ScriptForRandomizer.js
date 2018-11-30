// JavaScript source code

//var movies = document.getElementsByClassName("film");
//var field = document.getElementById('randmovie');

function Random()
{
    var xhttp = new XMLHttpRequest();
    

    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
        }
    };
    xhttp.open("GET", "MovieTable.xml", true);
    xhttp.send();
    
    function myFunction(xml) {
        var xmlDoc = xml.responseXML;
        var field = document.getElementById('randmovie');
        var href = document.getElementById('link');
        var moviesName = xmlDoc.getElementsByTagName("FILM");
        
        out({
            window: field,
            movies: moviesName,
            link: href
        });    
    }
    function out(options) {
        var window = options.window;
        var movies = options.movies;
        var link = options.link;
        
        var chosenGenre = document.forms["rand-params"]["genre"].value;
        
        
        if(chosenGenre == "any")
        {
            var rand = Math.round(Math.random() * (movies.length));
            window.innerHTML = movies[rand].children[0].innerHTML;
            link.href = movies[rand].children[4].innerHTML;
        }
        else 
        {
            //alert(movies[0].children[3].innerHTML);
            //alert('fuck');
            var matchingMovies = [];
            var j = 0;
            for(i=0;i<movies.length;i++)
            {
                if (movies[i].children[3].innerHTML == chosenGenre)
                    {                        
                        matchingMovies.push(movies[i]);                       
                    }                        
            }
            var random = Math.round(Math.random() * (matchingMovies.length - 1));
            window.innerHTML = matchingMovies[random].children[0].innerHTML;
            link.href = matchingMovies[random].children[4].innerHTML;
        }       
    }
}

