var TODO = React.createClass({
  render: function(){
    return(
      <div className="panel panel-default">
        <div className="panel-body">
          <InputForm />
        </div>
      </div>
    );
  }
});


var InputForm = React.createClass({
  handleSubmit: function(){},
  render: function(){
    return(
      <form className="form-inline" role="form">
      <input type="text"
            name="item"
            className="form-control"
            />
      <button className="btn btn-primary">Add </button>
      </form>
    );
  }
});

React.render(<TODO />, document.getElementById('content'));
