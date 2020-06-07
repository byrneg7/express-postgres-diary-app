import React, {useEffect, useState} from 'react';
import {apiClient} from "../../services/axiosConfig";

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
            apiClient.get('/movies')
                .then(res => setMovies(res.data))
                .catch(err => console.log(err))
        }, []
    );

    const renderMovies = () => movies.map(movie =>
        <div>
            Movies
            <div className='my-5'>
                {movie.title}
            </div>
            <div>
                {movie.plot}
            </div>
        </div>
    );

    return (
        <div className='col-12 col-md-6'>
            {movies ? renderMovies() : null}
        </div>
    )
};

export default Movies;