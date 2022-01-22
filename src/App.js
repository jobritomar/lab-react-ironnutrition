import React from 'react';
import logo from './logo.svg';
import './App.css';



const FoodBox = ({name,calories,image,quantity}) =>{
return(

  <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={image} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{name}</strong> <br />
          <small>{calories} cal</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="number" value={quantity} />
        </div>
        <div className="control">
          <button className="button is-info">
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
)
}


const FoodAddButton = () => {
  return(
    <div>
    <button>Add Food</button>
    <FoodForm></FoodForm>
    </div>
  )
}
//único prop que FoodForm deve receber é a função que faz adiciona uma comida no array de comidas

const FoodForm = (props) =>{
  const initialState = {
    calories: 0,
    name:"",
    quantity:0,
    image:""
  }
  const [newFood, updateFood] = React.useState(initialState)

  return(
  
    <form className="box">
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src={image} />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <input value={name} />
            <input value= {calories} />
          </p>
        </div>
      </div>
      <div className="media-right">
        <div className="field has-addons">
          <div className="control">
            <input className="input" type="number" value={quantity} />
          </div>
          <div className="control">
            <button className="button is-info">
              +
            </button>
          </div>
        </div>
      </div>
    </article>
  </form>
  )
  }

function App(props) {
  const stuff = props.foods.map((food)=>(
     <FoodBox 
    name={food.name} 
    quantity={food.quantity}
    calories={food.calories}
     image={food.image}>
  </FoodBox>
  ))
  
  return (
    <div className="App">
      {stuff}

      <FoodAddButton></FoodAddButton>    
    </div>
  );
}

export default App;
