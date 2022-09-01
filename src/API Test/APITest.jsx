import React from 'react';

const APITest = ({sendRequest}) => {
    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={sendRequest}>Test de l'API</button>
        </div>
    );
};

export default APITest;