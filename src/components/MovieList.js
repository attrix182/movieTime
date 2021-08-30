import React from 'react';
import MovieListHeading from './MovieListHeading';

const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie, index) => (
			
				<div className='image-container d-flex justify-content-center m-3 '>
					<img src={movie.Poster} alt='movie'></img>	

				</div>
	
			))}
		</>
	);
};

export default MovieList; 