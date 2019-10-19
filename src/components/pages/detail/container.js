import {connect} from 'react-redux';
import {detailActions} from '../../../redux/detail';
import View from './view';

const mapStateToProps = state => {
  return {
  //  isFetching: state.detail.isFetching,
   /* charactersList: state.characters.list,
    total: state.characters.total,
    offset: state.characters.offset, */
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    initCharactersList: () => dispatch(detailActions.initCharactersList()),
    updateCharactersListOffset: () =>
      dispatch(detailActions.updateCharactersListOffset()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);