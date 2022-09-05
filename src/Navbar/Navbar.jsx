import React from 'react';
import Searchbar from '../Searchbar/Searchbar';

const Navbar = ({onClickFunction, handleChange}) => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">MyMovieList.com</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <div className='d-flex flex-row ms-auto'>
                           
                           
                            <button type="button" className="btn btn-dark me-2" data-bs-toggle="offcanvas" data-bs-target='#listeFavoris'> <i className="bi bi-star"></i> My Favorites</button>
                           
                           
                            <form className="d-flex my-2 my-lg-0">
                                <Searchbar onClickFunction={onClickFunction} handleChange={handleChange}/>
                           
                           
                            </form>
                        </div>

                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;