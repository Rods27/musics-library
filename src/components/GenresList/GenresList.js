import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getFromDeezer  from '../../services/getFromDeezer'
import { genresAction } from '../../redux/actions';
import { Title, Container, Card } from './styles'


class GenresLists extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { stateGenres } = this.props;
    return (
      <Container>
        { (stateGenres && stateGenres.length > 0) &&
          stateGenres.map( (elem, index) => 
          <Card key={ index } style={ { backgroundImage: `url(${elem.picture_big})` } }>
              <Title>{elem.name}</Title>
            </Card>
          )
        }
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  stateGenres: state.musicsReducer.genres,
});

GenresLists.propTypes = {
  stateMusics: PropTypes.shape(),
};

export default connect(mapStateToProps)(GenresLists);
