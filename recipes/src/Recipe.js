import React, {Component} from 'react';
import './Recipe.css';

class Recipe extends Component {
  render() {
    const {title, ingredients, img, method} = this.props;
    
    return (
      <div className='recipe-card'>
        <div className='recipe-card-img'>
          <img src={img} alt={title} />
        </div>
        <div className='recipe-card-content'>
          <h3 className='recipe-title'>{title}</h3>
          <h4>Ingredients:</h4>
          <ul>
            {ingredients.map((ingredient, index) => {
              return <li key={index}>{ingredient}</li>
            })}
          </ul>
          <h4>Method</h4>
          <p> {method}</p>
        </div>        
      </div>
    );
  }
}

export default Recipe;






