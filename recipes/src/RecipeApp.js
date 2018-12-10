import React, { Component } from 'react';
// import logo from './logo.svg';
import './RecipeApp.css';
import Recipe from './Recipe';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
         <Recipe 
         title='Gulab Jamun' 
         ingredients={
           [
           '1 cup Bisquick (regular not low fat)- not heaped a little towards the less side', 
           '3 cups Milkpowder- not heaped a little towards the less side- Nestle brand is preferable',
           'A pinch of Baking Soda',
           'Whole Milk or 2% milk (around 1 cup)',
           'Sugar (1 ¾ cup sugar)',
           'Water (2 cups)',
           'Heavy Whipping Cream (around 1 cup)'
           ]
         }
         method="Balls: Take 3 parts milkpowder to I part Bisquick in a big bowl. Add a pinch of baking soda. Mix well. Take heavy whipping cream and 2% milk in 1:1 ratio. If using whole milk then decrease the quantity of heavy whipping cream slightly. Warm 30 seconds in microwave. Add the cream and milk solution to the dry ingredients slowly, mixing the dry ingredients to make a loose dough. Let the dough sit for half hour covered. Now knead the dough loosely again. If needed add some more of the cream milk solution. Make small smooth balls pressing using palm of hand. Fry the balls in medium to low heat. Put in sugar syrup.
         Sugar Syrup: Take sugar in a bowl. Add water. Heat till the sugar dissolves and slightly more. Do not boil the sugar solution.
         "
         img='https://i.imgur.com/WsKNvgq.jpg'
         />
      </div>
    );
  }
}

export default RecipeApp;
