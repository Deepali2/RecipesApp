import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Recipe.css';


class Recipe extends Component {
  static propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    instructions: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired
  }
  render() {
    const {title, ingredients, img, method, id, onDelete} = this.props;
    
    return (
      <div className='recipe-card'>
        <div className='recipe-card-img'>
          <img src={img} alt={title} />
        </div>
        <div className='recipe-card-content'>
          <h3 className='recipe-title'>{title}</h3>
          <h4>Ingredients:</h4>
          <ul className='recipe-list'>
            {ingredients.map((ingredient, index) => {
              return <li key={index}>{ingredient}</li>
            })}
          </ul>
          <h4>Method:</h4>
          <p className='recipe-method'>{method}</p>
          <button type='button' className='delete-button' onClick={()=> onDelete(id)}>DELETE</button>
        </div>        
      </div>
    );
  }
}

export default Recipe;






