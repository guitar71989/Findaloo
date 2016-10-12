import { connect } from 'react-redux';
import Autocomplete from './autocomplete.jsx';
import { updateLocation } from '../actions/filter_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    updateLocation: (coords, location) => dispatch(updateLocation(coords, location))
  };
};

const AutocompleteContainer = connect(
  null,
  mapDispatchToProps
)(Autocomplete);

export default AutocompleteContainer;
