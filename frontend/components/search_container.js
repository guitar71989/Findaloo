import { connect } from 'react-redux';
import Search from './search.jsx';

const mapStateToProps = state => ({
  loos: state.loos
});


const mapDispatchToProps = dispatch => ({
  requestLoos: () => dispatch(requestLoos())
});

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchContainer;
