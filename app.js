/*
Inside app.js, create a GroceryList component that contains an unordered list of 2 grocery items. Render this component to the div tag in index.html with an id of app
*/// TODO


var GroceryListItem = (props) => (
  <ul>
    <li>{props.groceryItems[0]}</li>
    <li>{props.groceryItems[1]}</li>
  </ul>
);

var GroceryList = () => (
    <GroceryListItem groceryItems={['apple', 'oranges']}/>
);

ReactDOM.render(<GroceryList />, document.getElementById('app'))
