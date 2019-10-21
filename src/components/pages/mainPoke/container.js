import {connect} from 'react-redux';
import {pokeActions} from '../../../redux/pokemons';
import View from './view';

const mapStateToProps = state => {
  return {
    pokemonList: state.pokemons.list,
    isFetching: state.pokemons.isFetching,
    total: state.pokemons.total,
    offset: state.pokemons.offset
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
   
    initPokeList: () => dispatch(pokeActions.initPokeList()),
    updatePokeListOffset: () =>
      dispatch(pokeActions.updatePokeListOffset()),
    updateItem: pokemon =>
      dispatch(pokeActions.updateItem(pokemon))
   
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);
