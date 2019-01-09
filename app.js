/*
Inside app.js, create a GroceryList component that contains an unordered list of 2 grocery items. Render this component to the div tag in index.html with an id of app
*/// TODO

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    }
  }
  onGroceryItemHover() {
    console.log('triggered')
    this.setState({
      done: true
    })
  }
  onGroceryItemUnHover() {
    console.log('Unhover')
    this.setState({
      done: false
    })
  }
  render() {
    //console.log(this.props)
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    }
    return (
      <li style={style} onMouseEnter={this.onGroceryItemHover.bind(this)} onMouseLeave={this.onGroceryItemUnHover.bind(this)}>{this.props.groceryItem}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(groceryItem =>
      <GroceryListItem key={groceryItem} groceryItem={groceryItem} />
      )}
  </ul>
);

ReactDOM.render(<GroceryList groceryItems={['banana', 'cherry', 'apple']}/>, document.getElementById('app'))
