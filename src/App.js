
import { useEffect } from 'react';
import { useState } from 'react';
import APITest from './API Test/APITest';
import './App.css';
import Footer from './Footer/Footer';
import MovieCard from './MovieCard/MovieCard';
import Navbar from './Navbar/Navbar';

function App() {
  const movieTestList = [
    {id: '1', title: 'Terreur sous les tropiques', image:'http://i.picsum.photos/id/174' },
    {id : '2', title:'Les conquérants', image:'https://picsum.photos/id/177'},
    {id : '3', title:'Massacre à la sulfateuse', image: 'https://picsum.photos/id/209'},
    {id : '4', title:`L'apprentie sorcière`, image:'https://i.picsum.photos/id/548'},
    {id : '5', title : `Un amour en automne`, image:'https://i.picsum.photos/id/553'},
    {id : '6', title: `Le Cascadeur`, image:'https://i.picsum.photos/id/685'},
    { id: '7', title: "Le farfadet géeant", image:'https://i.picsum.photos/id/770'},
    { id: '8', title: "La princesse et la pomme", image:'https://i.picsum.photos/id/777'},
    { id: '9', title: "l'homme ou l'avion ?", image:'https://i.picsum.photos/id/833'},
    { id: '10', title: "Y'a-t-il un maréchal-ferrand pour sauver la galinette cendrée ?", image:'https://i.picsum.photos/id/1012'},
    { id: '11', title: "Moi, beau et gentil", image:'https://i.picsum.photos/id/200'},
    { id: '12', title: "C'est la rentrée !", image:'https://i.picsum.photos/id/22'},
  ] 
  const [movieResults, setMovieResults] = useState(movieTestList);
  const [movieResultsDisplay, setMovieResultsDisplay] = useState(movieResults.map(movie => <MovieCard key={movie.id} title={movie.title} image={movie.image}/>));

  //functions, constants and states go here

  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  let filmList = [];
  async function SendRequestClick() {
    await fetch('https://imdb-api.com/en/API/SearchMovie/k_dpub31a6/inception 2010', requestOptions)

    .then(response => response.json())
  
    .then(result => {console.log(result); filmList = result.results})

    .catch(error => console.log('error', error));

    setMovieResults(filmList);
    
    }
  
    useEffect(() =>
    {console.log("new request successfully treated"); 
    setMovieResultsDisplay(movieResults.map(movie => <MovieCard key={movie.id} title={movie.title} image={movie.image}/>));
    },
    [movieResults])
  //rendering
  return (
    <>
    <Navbar/>
    <APITest sendRequest={SendRequestClick}/>
    <main className='container'>
      <div className='row'>
      {movieResultsDisplay}
      </div>
    </main>
    <Footer/>
    
    </>
  );
}

export default App;
