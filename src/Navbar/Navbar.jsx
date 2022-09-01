import React from 'react';

const Navbar = () => {
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
                            <button type="button" className="btn btn-dark me-2"> <i className="bi bi-star"></i> My Favorites</button>
                            <form className="d-flex my-2 my-lg-0">
                                <input className="form-control me-sm-2" type="text" placeholder="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>

                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;