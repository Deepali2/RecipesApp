import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';
import './RecipeList.css';

class RecipeList extends Component {
  static defaultProps = {
    recipes: [
      {
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

        method: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      },
      {
        img: 'ghevar.jpg',
        title: 'Ghevar',
        ingredients: ['pasta', 'water', 'tomatoes'],
        method: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      },
      {
        img: 'imgs/photo.jpg',
        title: 'Rasgulla',
        ingredients: ['pasta', 'water', 'tomatoes'],
        method: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
        
      }
    ]
  }

  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired 
  }
  render() {
  //  const recipes = this.props.recipes.map((recipe, index) => (
  //    <Recipe key={index} {...recipe}/>
  //  ));

   return (
     <div className='recipes-list'>
       {
         this.props.recipes.map((recipe, index) => (
          <Recipe key={index} {...recipe}/>
        ))
       }
     </div>
   );
  }
}

export default RecipeList;