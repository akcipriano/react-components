/*
Inside app.js, create a GroceryList component that contains an unordered list of 2 grocery items. Render this component to the div tag in index.html with an id of app
*/// TODO

var GroceryList = () => (
  <ul>
    <li>apple</li>
    <li>oranges</li>
  </ul>
);

ReactDOM.render(<GroceryList />, document.getElementById('app'))
