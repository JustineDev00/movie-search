import React from 'react';

const OffCanvas = ({movieList, movieListDisplay}) => {    //attention aux {} lors du passage de paramètres!!!
    
    
    return (
        <>
              <div class="offcanvas offcanvas-start" data-bs-backdrop="false" tabindex="-1" id="listeFavoris" aria-labelledby="staticBackdropLabel">
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="">Mes favoris</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                  <div class='container'>
                    <div class='row'>
                        {movieList.length <= 0 ? `You have not added any favorite movies yet.` : movieListDisplay}
                    </div>
                  </div>
                </div>
              </div>
        </>
    );
};

export default OffCanvas;