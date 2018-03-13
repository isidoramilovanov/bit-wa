import {getMovie} from './data.js';

let realMovie = (myMovie)=>{
    console.log(`name ${myMovie.name} and its id is ${myMovie.id}`);
}


getMovie('http://api.tvmaze.com/shows', realMovie);
 console.log('other work');
