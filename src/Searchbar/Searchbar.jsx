import React from 'react';

const Searchbar = ({onClickFunction, handleChange}) => {
    return (
        <>
            <input className="form-control me-sm-2" type="text" placeholder="Search" onChange={handleChange} />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={onClickFunction}>Search</button>
        </>
    );
};

export default Searchbar;