import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Home extends React.Component {
  async componentDidMount() {
    const { history } = this.props;
    history.push('/musics')
  }

  render() {
    return (
      <div></div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default connect(null, null)(Home);
