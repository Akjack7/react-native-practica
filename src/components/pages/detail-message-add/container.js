import {connect} from 'react-redux';
import {detailActions} from '../../../redux/detail';
import {PokeForm} from '../../organisms';

const mapStateToProps = state => {
  return {
    pokemon: state.pokemons.item,
    isFetching: state.pokemons.isFetching,
    pokemonDetail: state.detail,
    message: state.message

  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    submitMessage: data => dispatch(detailActions.updateMessage(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PokeForm);
