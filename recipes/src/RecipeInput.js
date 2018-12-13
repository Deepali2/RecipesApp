import React, {Component} from 'react';
import './RecipeInput.css';

class RecipeInput extends Component {
  static defaultProps = {
    onClose() {},
    onSave() {}
  }
  constructor(props) {
  super(props);
  this.state={
    title: '',
    img: '',
    method: '',
    ingredients: ['']
  };
  this.handleChangeIng = this.handleChangeIng.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.handleNewIngredient = this.handleNewIngredient.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

  handleChangeIng(e) {
    const index = Number(e.target.name.split('-')[1]);
    const ingredients = this.state.ingredients.map((ing, i)=> (
      i === index? e.target.value : ing
    ));
    this.setState({ingredients});
  }

  handleChange(e) {
     this.setState({[e.target.name]: e.target.value});
  }

  handleNewIngredient(e) {
    const{ingredients} = this.state;
    this.setState({ingredients: [...ingredients, '']});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSave({...this.state});
    this.setState({
      title: '',
      method: '',
      ingredients: [''],
      img: ''
    })
  }

  render() {
    //destructure all the values from state
    const {title, img, method, ingredients} = this.state;
    const {onClose} = this.props;
    let inputs = ingredients.map((ing, index) => (
      <div className='recipe-form-line' key={`ingredient-${index}`}>
        <label>{index + 1}.
          <input 
            name={`ingredient-${index}`}
            placeholder='Ingredient'
            value={ing}
            type='text'
            autoComplete='off'
            onChange={this.handleChangeIng}
          />
        </label>
      </div>
    ));
  
    return (
      <div className='recipe-form-container'>
        <form className='recipe-form' onSubmit={this.handleSubmit}>
          <button
            type='button'
            className='close-button'
            onClick={onClose}
          >
          X
          </button> 
          <div className='recipe-form-line'>
          <label htmlFor='recipe-title-input'>Title</label>
          <input 
            id='recipe-title-input'
            key='title'
            name='title'
            type='text'
            value={title}
            size={42}
            autoComplete='off'
            onChange={this.handleChange}
          />
          </div> 
          <label htmlFor='recipe-method-input' style={{marginTop: '5px'}}>Method</label>
          <textarea
          id='recipe-method-input'
          key='method'
          name='method'
          type='text'
          value={method}
          rows='8'
          cols='50'
          autoComplete='off'
          onChange={this.handleChange}         
          />
          {inputs}
          <button
            type='button'
            onClick={this.handleNewIngredient}
            className='buttons'
          >
          +
          </button>
          <div className='recipe-form-line'>
            <label htmlFor='recipe-img-input'>Image Url</label>
            <input 
              id='recipe-img-input'
              type='text'
              placeholder=''
              name='img'
              value={img}
              size={36}
              autoComplete='off'
              onChange={this.handleChange}
            />
          </div>
          <button
            type='submit'
            className='buttons'
            style={{alignSelf: 'flex-end', marginRight: 0}}
          >
          SAVE
          </button>      
        </form>
      </div>
    );
  }
};

export default RecipeInput;
  

