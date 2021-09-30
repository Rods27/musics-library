import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function Home({ history }) {
  useEffect(() => history.push('/musics'));

   return (
    <div>Home</div>
  );
}

Home.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default Home;
