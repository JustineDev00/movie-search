
import { useEffect } from 'react';
import { useState } from 'react';
import APITest from './API Test/APITest';
import './App.css';
import FavMovieCard from './FavMovieCard/FavMovieCard';
import Footer from './Footer/Footer';
import MovieCard from './MovieCard/MovieCard';
import Navbar from './Navbar/Navbar';
import OffCanvas from './OffCanvas/OffCanvas.jsx/OffCanvas';

function App() {

  //functions, constants and states go here
  
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  
  

  //get baseURL for pictures

  const [movieResults, setMovieResults] = useState([]);
  const [movieResultsDisplay, setMovieResultsDisplay] = useState([]);
  const [favMoviesList, setFavMoviesList] = useState([]);
  const [favMoviesListDisplay, setFavMoviesListDisplay] = useState([]);


  const addToFavorites = (evt) => {
    const copyOfFavMoviesList = favMoviesList.slice()
    const id = evt.target.id;
    const movieToAdd = movieResults.find(movie => movie.id == id);
    if(favMoviesList.find(movie => movie.id == movieToAdd.id)){
      return;
    }else{
      copyOfFavMoviesList.push(movieToAdd);
    }
    setFavMoviesList(copyOfFavMoviesList);
    console.log(favMoviesList);
  }

  const removeFromFavorites = (evt) => {
    const copyOfFavMoviesList = favMoviesList.slice()
    const id = evt.target.id;
    const movieToDeleteIndex = copyOfFavMoviesList.indexOf(copyOfFavMoviesList.find(movie => movie.id == id));
    copyOfFavMoviesList.splice(movieToDeleteIndex, 1);   
    setFavMoviesList(copyOfFavMoviesList);
  }
  

  async function SendRequestClick(evt) {
    evt.preventDefault();
    let filmList = [];
    await fetch('https://imdb-api.com/en/API/SearchMovie/k_dpub31a6/' + searchBarValue, requestOptions)

      .then(response => response.json())

      .then(result => { console.log(result); filmList = result.results })

      .catch(error => console.log('error', error));

    setMovieResults(filmList);

  }


  let searchBarValue = '';
  const readSearchBar = (evt) => {
    searchBarValue = evt.target.value;

  }
 //first useEffect to load default movies (most popular)

  useEffect(() => {
    let filmList = [];
    console.log("useEffect with [data]");

    const fetchData =  async () => { 

      // imdb API fetch
      // await fetch(`https://imdb-api.com/en/API/MostPopularMovies/k_dpub31a6`)
      // .then(resp => resp.json())
      // .then(result => {filmList = result.items})
    
      //themoviedb API fetch

     await fetch(`
     https://api.themoviedb.org/3/trending/movie/day?api_key=ed82f4c18f2964e75117c2dc65e2161d`)
      .then(resp => resp.json())
      .then((json) => { 
        console.log(json.results); 
        filmList = json.results;
      }
      )
      setMovieResults(filmList);
      setMovieResultsDisplay(movieResults.map(movie => <MovieCard key={movie.id} id={movie.id} title={movie.title} image={'http://image.tmdb.org/t/p/w500' + movie.poster_path} handleClick={addToFavorites}/>));
    };
      return fetchData;
    }, [])
 

  //initialize display after default movies have been received

  useEffect(() => {
    setMovieResultsDisplay(movieResults.map(movie => <MovieCard key={movie.id} id={movie.id} title={movie.title} image={'http://image.tmdb.org/t/p/w500' + movie.poster_path} handleClick={addToFavorites}/>));
    if(favMoviesList){
    setFavMoviesListDisplay(
        favMoviesList.map(movie => <FavMovieCard key={movie.id} id={movie.id} title={movie.title} image={'http://image.tmdb.org/t/p/w500' + movie.poster_path} handleClick={removeFromFavorites}/>));}
  },
    [movieResults, favMoviesList])

 



 
  // const movieTestList = [
  //   { id: '1', title: 'Terreur sous les tropiques', image: 'http://i.picsum.photos/id/174' },
  //   { id: '2', title: 'Les conquérants', image: 'https://picsum.photos/id/177' },
  //   { id: '3', title: 'Massacre à la sulfateuse', image: 'https://picsum.photos/id/209' },
  //   { id: '4', title: `L'apprentie sorcière`, image: 'https://i.picsum.photos/id/548' },
  //   { id: '5', title: `Un amour en automne`, image: 'https://i.picsum.photos/id/553' },
  //   { id: '6', title: `Le Cascadeur`, image: 'https://i.picsum.photos/id/685' },
  //   { id: '7', title: "Le farfadet géeant", image: 'https://i.picsum.photos/id/770' },
  //   { id: '8', title: "La princesse et la pomme", image: 'https://i.picsum.photos/id/777' },
  //   { id: '9', title: "l'homme ou l'avion ?", image: 'https://i.picsum.photos/id/833' },
  //   { id: '10', title: "Y'a-t-il un maréchal-ferrand pour sauver la galinette cendrée ?", image: 'https://i.picsum.photos/id/1012' },
  //   { id: '11', title: "Moi, beau et gentil", image: 'https://i.picsum.photos/id/200' },
  //   { id: '12', title: "C'est la rentrée !", image: 'https://i.picsum.photos/id/22' },
  // ]

  //rendering


  return (
    <>
      <Navbar onClickFunction={SendRequestClick} handleChange={readSearchBar}/>
      {/* <APITest sendRequest={SendRequestClick}/> */}
      <main className='container'>
        <div className='row'>
          {movieResultsDisplay}
        </div>
      </main>

      <OffCanvas movieList= {favMoviesList} movieListDisplay = {favMoviesListDisplay} />
      
      <Footer />

    </>
  );
}



export default App;
