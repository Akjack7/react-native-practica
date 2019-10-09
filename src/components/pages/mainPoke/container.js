import {connect} from 'react-redux';
import {pokeActions} from '../../../redux/pokemons';
import View from './view';
const mapStateToProps = state => {
  console.log("En estado",state)
  return {
    pokemonList: state.pokemons.list,
    isFetching: state.pokemons.isFetching,
    hola: "hola"
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchPokeList: () => {
      dispatch(pokeActions.fetchPokeList());
    },
    updateItem: pokemon => {
      dispatch(pokeActions.updateItem(pokemon));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);
