import React from 'react';

const MovieCard = ({id, title, image, addToFavs, removeFromFavs, favMoviesList, synopsis}) => {
    

    return (
        <div className='col-12 col-lg-3'>
            <div className="card m-3">
                <img className="card-img-top" src={image} alt={title}/>
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    
                    <p className="card-text">{synopsis}</p>
                    <div className='d-flex justify-content-end'>
                    
                    {favMoviesList ? 

                    
                    favMoviesList.find(movie => movie.id == id) ?  
                    <button type="button" className="btn btn-danger me-2" onClick={removeFromFavs} id={id}><i class="bi bi-trash me-2"></i>Remove from Favorites</button>
                    :
                    <button type="button" className="btn btn-primary me-2" onClick={addToFavs} id={id}><i className="bi bi-star me-2"></i>Add to favorites
                    </button> 
                    
                    :
                    <button type="button" className="btn btn-primary me-2" onClick={addToFavs} id={id}><i className="bi bi-star me-2"></i>
                    Add to favorites</button> 
                
                }


                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;