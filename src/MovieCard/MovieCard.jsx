import React from 'react';

const MovieCard = ({title, image}) => {
    return (
        <div className='col-12 col-lg-3'>
            <div className="card m-3">
                <img className="card-img-top" src={image} alt={title}/>
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    
                    <p className="card-text">Movie description</p>
                    <div className='d-flex justify-content-end'>
                    <button type="button" className="btn btn-primary me-2"><i className="bi bi-star me-2"></i>Add to Favorites</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;