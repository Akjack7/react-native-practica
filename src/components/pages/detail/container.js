import {connect} from 'react-redux';
import {pokeActions} from '../../../redux/detail';
import View from './view';

console.log("PokeactionsDetail",pokeActions)

const mapStateToProps = state => {
  return {
    pokemon: state.pokemons.item,
    isFetching: state.pokemons.isFetching,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchPokeDetail: () => {
      dispatch(pokeActions.fetchPokeDetail(this.state.pokemon.url));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);