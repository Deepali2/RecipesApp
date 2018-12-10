import React, {Component} from 'react';
import './Recipe.css';

class Recipe extends Component {
  render() {
    const {title, ingredients} = this.props;
    
    return (
      <div>
        <div>Recipe {title}</div>
        <ul>Ingredients:
           {ingredients.map((ingredient, index) => {
             return <li key={index}>{ingredient}</li>
           })}
        </ul>
      </div>
    );
  }
}

export default Recipe;






