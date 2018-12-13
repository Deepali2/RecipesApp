import React, { Component } from 'react';
import './RecipeApp.css';
import Navbar from './Navbar';
import RecipeList from './RecipeList';
import RecipeInput from './RecipeInput';

class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          id: 0,
          img: 'https://i.imgur.com/WsKNvgq.jpg',
          title: 'Gulab Jamun',
          ingredients: 
          [
           '1 cup Bisquick (regular not low fat)- not heaped a little towards the less side', 
           '3 cups Milkpowder- not heaped a little towards the less side- Nestle brand is preferable',
           'A pinch of Baking Soda',
           'Whole Milk or 2% milk (around 1 cup)',
           'Sugar (1 ¾ cup sugar)',
           'Water (2 cups)',
           'Heavy Whipping Cream (around 1 cup)'
           ],
          method:`Balls: Take 3 parts milkpowder to 1 part Bisquick in a big bowl. Add a pinch of baking soda. Mix well. Take heavy whipping cream and 2% milk in 1:1 ratio. If using whole milk then decrease the quantity of heavy whipping cream slightly. Warm 30 seconds in microwave. Add the cream and milk solution to the dry ingredients slowly, mixing the dry ingredients to make a loose dough. Let the dough sit for half hour covered. Now knead the dough loosely again. If needed add some more of the cream milk solution. Make small smooth balls pressing using palm of hand. Fry the balls in medium to low heat. Put in sugar syrup. 
          
          Sugar Syrup: Take sugar in a bowl. Add water. Heat till the sugar dissolves and slightly more. Do not boil the sugar solution.`,
          
        },
        {
          id: 1,
          img: 'ghevar.jpg',
          title: 'Ghevar',
          ingredients: ['1 cup maida', '1 cup ice cold water', '1/4 cup ghee', '1/4 cup cold milk', 'Few drops of yellow food color (optional)- I made it using kesar', '1 cup sugar ', '1/2 cup water', '2 tsp silvered almonds-white cut longitudinally', '2 tsps silvered pistachio-meaning without shell and cut', '1 tsp cardamom', '1 pinch saffron'],
          method: `Balls: Take 3 parts milkpowder to 1 part Bisquick in a big bowl. Add a pinch of baking soda. Mix well. Take heavy whipping cream and 2% milk in 1:1 ratio. If using whole milk then decrease the quantity of heavy whipping cream slightly. Warm 30 seconds in microwave. Add the cream and milk solution to the dry ingredients slowly, mixing the dry ingredients to make a loose dough. Let the dough sit for half hour covered. Now knead the dough loosely again. If needed add some more of the cream milk solution. Make small smooth balls pressing using palm of hand. Fry the balls in medium to low heat. Put in sugar syrup. 
          
          Sugar Syrup: Take sugar in a bowl. Add water. Heat till the sugar dissolves and slightly more. Do not boil the sugar solution. `,
          
        },
        {
          id: 2,
          img: 'imgs/photo.jpg',
          title: 'Rasgulla',
          ingredients: ['pasta', 'water', 'tomatoes'],
          method: `Balls: Take 3 parts milkpowder to 1 part Bisquick in a big bowl. Add a pinch of baking soda. Mix well. Take heavy whipping cream and 2% milk in 1:1 ratio. If using whole milk then decrease the quantity of heavy whipping cream slightly. Warm 30 seconds in microwave. Add the cream and milk solution to the dry ingredients slowly, mixing the dry ingredients to make a loose dough. Let the dough sit for half hour covered. Now knead the dough loosely again. If needed add some more of the cream milk solution. Make small smooth balls pressing using palm of hand. Fry the balls in medium to low heat. Put in sugar syrup. 
          
          Sugar Syrup: Take sugar in a bowl. Add water. Heat till the sugar dissolves and slightly more. Do not boil the sugar solution.`,
          
        }
      ],
      nextRecipeId: 3,
      showForm: false
    };

    this.handleSave= this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId};
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe],
        showForm: false
      }
    });
  }

  onDelete(id) {
     const recipes = this.state.recipes.filter(r => r.id !==id);
     this.setState({recipes});
  }

  render() {
    const {showForm} = this.state;
    return (
      <div className="App">
      <Navbar onNewRecipe={()=> this.setState({showForm: true})}/>        
      {showForm ? 
        <RecipeInput 
          onSave={this.handleSave}
          onClose={()=> this.setState({showForm: false})}
          /> : null}
      <RecipeList recipes={this.state.recipes} onDelete={this.onDelete}/>
      </div>
    );
  }
}

export default RecipeApp;
