import React from 'react';

const FavMovieCard = ({image, title, id, removeFromFavs, synopsis}) => {
    return (
        <div className='col-12'>
            <div className="card m-3">
                <img className="card-img-top" src={image} alt={title}/>
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    
                    <p className="card-text">{synopsis}</p>
                    <div className='d-flex justify-content-end'>
                    <button type="button" className="btn btn-danger me-2" onClick={removeFromFavs} id={id}><i class="bi bi-trash me-2"></i>Remove from Favorites</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FavMovieCard;