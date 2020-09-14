import React, { useState, useEffect } from 'react';
import './poster.css';
import API from './API';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const baseUrl = 'https://image.tmdb.org/t/p/original';

function Poster({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    async function getMovies() {
      const response = await API.get(fetchUrl);
      setMovies(response.data.results);
    }
    getMovies();
  }, [fetchUrl]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    console.log(movie);
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  return (
    <div className='poster'>
      <h2>{title}</h2>
      <div className='poster__postbody'>
        {movies.map((item) => {
          return (
            <img
              key={item.id}
              onClick={() => handleClick(item)}
              src={`${baseUrl}${
                isLargeRow ? item.poster_path : item.backdrop_path
              }`}
              alt={item.name}
              className={`poster_image ${isLargeRow && 'poster_largerimage'}`}
            />
          );
        })}
      </div>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Poster;
