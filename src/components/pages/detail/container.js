import {connect} from 'react-redux';
import {detailActions} from '../../../redux/detail';
import View from './view';

console.log("PokeactionsDetail",detailActions)

const mapStateToProps = state => {
  return {
    pokemon: state.pokemons.item,
    isFetching: state.pokemons.isFetching,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
      setPokemon: data => dispatch(detailActions.fetchPokeDetail(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);