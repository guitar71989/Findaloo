import { connect } from 'react-redux';
import { updateStarFilter } from './../actions/filter_actions.js';
import StarFilter from './star_filter.jsx';

const mapDispatchToProps = dispatch => ({
  updateStarFilter: (filterValue) => {
    dispatch(updateStarFilter(filterValue));}
});

const StarFilterContainer = connect(
  null,
  mapDispatchToProps
)(StarFilter);

export default StarFilterContainer;
