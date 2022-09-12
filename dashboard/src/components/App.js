import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import GenresInDb from './GenresInDb'
import LastMovieInDb from './LastMovieInDb';
import ContentRowMovies from './ContentRowMovies';
import Error from './Error';
import {BrowserRouter, Route, Routes} from 'react-router-dom'




function App() {
  return (
      /* A route that is going to be rendered when the path is exactly these. */
    <BrowserRouter>
      	<div id="wrapper">
          <SideBar />
          <Routes>
            <Route path='/' exact element={<ContentWrapper />}/>
            <Route path='/genres' element={<GenresInDb />}/>
            <Route path='/lastMovie' element={<LastMovieInDb />}/>
            <Route path='/Movies' element={<ContentRowMovies />}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
