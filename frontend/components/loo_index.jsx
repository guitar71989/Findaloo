import React from 'react';

class LooIndex extends React.Component {

    componentDidMount() {
      this.props.requestLoos();
    }

    render() {

      let loos;

      if (this.props.loos.length > 0){
        loos = this.props.loos.map((loo) => <li key={loo.id}>{loo.name}</li>);
      }

      return(
        <div>
          {loos}
        </div>
      );

    }
}

export default LooIndex;
