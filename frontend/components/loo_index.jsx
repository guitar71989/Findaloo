import React from 'react';
import LooIndexItem from './loo_index_item.jsx';

class LooIndex extends React.Component {

    componentDidMount(){
      this.props.requestLoos();
    }

    render() {
      let loos, loos_n;

      if (this.props.loos.length > 0){
        loos = this.props.loos.map((loo) => <LooIndexItem className="loo-index-item" loo={loo} key={loo.id} />);
      }

      loos_n = (this.props.loos.length === 1) ? "Loo" : "Loos";

      return(
        <div className="loo-index">
          <h1 className="loo-index-title">{this.props.loos.length} {loos_n}</h1>
            {loos}
        </div>
      );

    }
}

export default LooIndex;
