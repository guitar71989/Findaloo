import React from 'react';
import LooIndexItem from './loo_index_item.jsx';

class LooIndex extends React.Component {
    render() {
      let loos;

      if (this.props.loos.length > 0){
        loos = this.props.loos.map((loo) => <LooIndexItem className="loo-index-item" loo={loo} key={loo.id} />);
      }

      return(
        <div className="loo-index">
          <h1 className="loo-index-title">Loos</h1>
            {loos}
        </div>
      );

    }
}

export default LooIndex;
