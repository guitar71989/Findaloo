import { connect } from 'react-redux';
import Search from './search.jsx';
import { updateBounds } from './../actions/filter_actions.js';

const mapStateToProps = state => {
  return({
  loos: state.loos
});};


const mapDispatchToProps = dispatch => ({
  requestLoos: () => dispatch(requestLoos()),
  updateBounds: (bounds) => {
    dispatch(updateBounds(bounds));}
});

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchContainer;
