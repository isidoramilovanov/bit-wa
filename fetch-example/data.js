
export const getMovie = (url, callback)=>{
    
    fetch(url)
    .then(function(httpResponse){
        return httpResponse.json()
    })
    .then(function(rowMovieObject){
        var movie = {
            name: rowMovieObject[8].name,
            id: rowMovieObject[8].id
        }
       callback(movie);
    })
    
}







