var TODO = React.createClass({
  getInitialState: function(){
    return {
			items: [
				{id:1, title: "One"},
				{id:2, title: "Two"},
				{id:3, title: "Three"}
			]
		};
  },
  render: function(){
    return(
      <div>
      <div className="panel panel-default">
        <div className="panel-body">
        <InputForm />
        </div>
      </div>
      <ul className="list-group">
      {
        this.state.items.map(function(item){
          return  <List title={item.title} />;
        })
      }
      </ul>
      </div>
    );
  }
});

var List = React.createClass({
  render: function(){
    return(
        <li className="list-group-item">{this.props.title}</li>
    );
  }
});


var InputForm = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    console.log('Add todo');
  },
  render: function(){
    return(
      <form className="form-inline" onSubmit={this.handleSubmit} role="form">
      <input type="text"
      name="item"
      className="form-control"
      />
      <button className="btn btn-primary">Add</button>
      </form>
    );
  }
});

React.render(<TODO />, document.getElementById('content'));
