import React from 'react';

const Searchbar = ({onClickFunction, handleChange}) => {
    return (
        <>
            {/* <input className="form-control me-sm-2" type="text" placeholder="Search" onChange={handleChange} />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={onClickFunction}>Search</button> */}

            <div class="input-group">
             <input type="text" class="form-control" placeholder="Search a movie name..." aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={handleChange}/>
             <button class="btn btn-dark" type="button" id="button-addon2" onClick={onClickFunction}><i class="bi bi-search"></i></button>
            </div>

        </>
    );
};

export default Searchbar;