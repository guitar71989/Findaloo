import { connect } from 'react-redux';
import LooShow from './loo_show.jsx';
import { requestLoo } from './../actions/loo_actions.js';
import { selectLoo } from './../reducers/selectors.js';

const mapStateToProps = (state, ownProps) => {
  const looId = parseInt(ownProps.params.looId);
  const loo = selectLoo(state.loos, looId);
  return({
    looId,
    loo
});};


const mapDispatchToProps = dispatch => ({
    requestLoo: (id) => dispatch(requestLoo(id))
});

const LooShowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LooShow);

export default LooShowContainer;
