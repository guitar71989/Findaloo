import React from 'react';


class ReviewForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      body: "",
      rating: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToSearch = this.navigateToSearch.bind(this);
  }


  navigatetoLooShow() {
    this.props.router.replace(`/${this.props.loo.id}`);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createReview(this.state);
    this.navigateTooLooShow();
  }

  render(){
    return(
    <div className="single-loo-show">
      <div className="single-loo-map">
        <main className="single-loo-show-main-container group">
          <LooMap className="single-loo-map"
            looId = {looId}
            requestLoo={requestLoo}
            singleLoo={true}
            loos={loos}
            />
          <span className="single-loo-title">{loo.name}</span>
          <span className="single-loo-address">{loo.address}</span>
          <img className="single-loo-picture" src={loo.image_url} />
        </main>
      </div>
    </div>
  );}
  }

  export default ReviewForm;
