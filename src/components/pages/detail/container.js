import {connect} from 'react-redux';
import {detailActions} from '../../../redux/detail';
import View from './view';

console.log("PokeactionsDetail",detailActions)

const mapStateToProps = state => {
  return {
    pokemon: state.pokemons.item,
    isFetching: state.pokemons.isFetching,
    pokemonDetail: state.detail
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
      setPokemon: data => dispatch(detailActions.fetchPokeDetail(data)),

      updateItem: detail => {
        console.log("Desde UpdateItem", detail),
        dispatch(detailActions.updateItem(detail))
        
      },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);