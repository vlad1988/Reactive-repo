var Carousel = React.createClass({
  getInitialState: function(){
    return {
      pathTo: ['/assets/falcons/0.jpg',
      '/assets/falcons/1.jpg',
      '/assets/falcons/2.jpg',
      '/assets/falcons/3.jpg',
      '/assets/falcons/4.jpg'],
      counter: 1,
      cursor: '/assets/falcons/0.jpg'
    };
  },
  handleNext: function(e){
    this.setState({counter: this.state.counter+1});
    if(this.state.counter >= 4){
      this.setState({counter: 0});
    }
    this.setState({cursor: this.state.pathTo[this.state.counter]});
    console.log(this.state.counter);
  },
  handlePrev: function(e){
    this.setState({counter: this.state.counter-1});
    if(this.state.counter <= 0){
      this.setState({counter: 4});
    }
    this.setState({cursor: this.state.pathTo[this.state.counter]});
    console.log(this.state.counter);
  },
  currentState: function(){

  },
  render: function(){
    return(
      <div>
      <img className="img-thumbnail img-responsive" src={this.state.cursor} />
      <hr/>
      <button onClick={this.handlePrev} className="btn btn-success">Prev</button>
      <span className="divider"></span>
      <button onClick={this.handleNext} className="btn btn-success">Next</button>
      </div>
    );
  }
});


React.render(<Carousel />, document.getElementById('carousel'));
