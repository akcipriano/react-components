/*
Inside app.js, create a GroceryList component that contains an unordered list of 2 grocery items. Render this component to the div tag in index.html with an id of app
*/// TODO


var Apple = () => (
  <li>apple</li>
);

var Oranges = () => (
  <li>oranges</li>
);

var GroceryList = () => (
  <ul>
    <Oranges />
    <Apple />
  </ul>
);


ReactDOM.render(<GroceryList />, document.getElementById('app'))

// var GroceryList = function GroceryList() {
//   return React.createElement(
//     'ul',
//     null,
//     React.createElement(
//       'li',
//       null,
//       'apple'
//     ),
//     React.createElement(
//       'li',
//       null,
//       'oranges'
//     )
//   );
// };