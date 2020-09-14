import React from 'react';
import Poster from './Poster';
import requests from './request';

function Posters() {
  return (
    <div
      style={{
        padding: '1rem 1rem',
        backgroundColor: '#111',
      }}
    >
      <Poster
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOrginals}
        isLargeRow
      />
      <Poster title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Poster title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Poster title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Poster title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Poster title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Poster title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Poster title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default Posters;
