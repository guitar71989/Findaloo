import { connect } from 'react-redux';
import LooIndex from './loo_index.jsx';

const mapStateToProps = state => ({
  loos: state.loos
});


const mapDispatchToProps = dispatch => ({
  requestLoos: () => dispatch(requestLoos())
});

const LooIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LooIndex);

export default LooIndexContainer;
