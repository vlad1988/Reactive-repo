var TODO = React.createClass({
  getInitialState: function(){
    return {
			items: [
				{id:1, title: "Lorem ipsum dolor sit amet"},
				{id:2, title: "Lorem ipsum dolor sit amet...."},
				{id:3, title: "Lorem ipsum dolor sit amet...2"}
			],
		};
  },
  handleAdd: function(title){
    var newItem = {id: this.state.items.length+1, title: title};
		var newState = this.state.items.slice(0);
		newState.push(newItem);
		this.setState({items: newState});
  },
  render: function(){
    var rows = this.state.items.map(function(item, i){
        return  <List i={i} id={item.id} title={item.title} />;
    });
    return(
      <div>
      <div className="panel panel-default">
        <div className="panel-body">
        <InputForm addItem={this.handleAdd}/>
        </div>
      </div>
      <ul className="list-group">
        {rows}
      </ul>
      </div>
    );
  }
});

var List = React.createClass({
  getInitialState: function () {
    return{
      styleState: false
    };
  },
  handleComplete: function(i){
    this.setState({styleState: !this.state.styleState});
  },
  render: function(){
    var classString = "";
    if(this.state.styleState == true){
      classString = "del";
    } else {
      classString = "";
    }
    return(
        <li  className="list-group-item">
        <input type="checkbox" onChange={this.handleComplete}/>
        <span className={classString}>{this.props.title}</span>
        </li>
    );
  }
});


var InputForm = React.createClass({
  getInitialState: function(){
    return {title: ""};
  },
  handleSubmit: function(e){
    e.preventDefault();
    this.props.addItem(this.state.title);
    React.findDOMNode(this.refs.myTextInput).focus();
    this.state.title = "";
  },
  handleTitleChange: function(e){
    this.setState({title: e.target.value});
  },
  render: function(){
    return(
      <form className="form-inline" onSubmit={this.handleSubmit} role="form">
      <input type="text"
      name="title"
      className="form-control"
      ref="myTextInput"
      value={this.state.title}
      placeholder="Добавьте элемент"
      onChange={this.handleTitleChange}
      />
      <span> </span>
      <button className="btn btn-primary">Add</button>
      </form>
    );
  }
});

React.render(<TODO />, document.getElementById('content'));
