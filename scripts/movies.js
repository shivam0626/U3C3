// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
// https://www.omdbapi.com/?i=tt3896198&apikey=6f05b1d2&s
let id;

async function SearchMovies(data){
    try{
        const search = document.getElementById("search").value;
        const res = await fetch(`http://www.omdbapi.com/?t=${search}&apikey=6f05b1d2`);
        const data = await res.json();
        console.log(data);
        return data;
    }
    catch(err){
        console.log(err);
    }
}

function appendMovie(data){
    let Movie_data = SearchMovies();
    Movie_data.forEach(function(el){
        let box = document.createElement("div"); 

        let name = document.createElement("h4");
        name.innerText = el.Title;

        let image = document.createElement("img");
        image.src = el.Poster;

        let btn = document.createElement("button");
        btn.createElement("a");
        btn.innerText = "Book Now"
        btn.innerHTML = "checkout.html";
    
        box.append(image,name,btn);
        document.getElementById("movies").append(box);
    })
}
function debounce(func,delay){
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(function(){
        func();
    },delay);
}