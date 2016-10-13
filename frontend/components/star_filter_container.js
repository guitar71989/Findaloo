import { connect } from 'react-redux';
import Search from './search.jsx';
import { updateStarFilter } from './../actions/filter_actions.js';

const mapDispatchToProps = dispatch => ({
  updateStarFilter: (filterValue) => {
    dispatch(updateStarFilter(filterValue));}
});

const StarFilterContainer = connect(
  null,
  mapDispatchToProps
)(StarFilter);

export default StarFilterContainer;
