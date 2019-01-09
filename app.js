/*
Inside app.js, create a GroceryList component that contains an unordered list of 2 grocery items. Render this component to the div tag in index.html with an id of app
*/// TODO

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props)
    return (
      <li>{this.props.Item}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(groceryItem =>
      <GroceryListItem key={groceryItem} Item={groceryItem} />
      )}
  </ul>
);

ReactDOM.render(<GroceryList groceryItems={['banana', 'cherry', 'apple']}/>, document.getElementById('app'))