import './App.css';
import { useState } from 'react'
import IngredientList from './IngredientList'

function App() {
  const [name, setName]           = useState('');
  const [pepperoni, setPepperoni] = useState(false);
  const [sausage, setSausage]     = useState(false);
  const [peppers, setPeppers]     = useState(false);
  const [onions, setOnions]       = useState(false);

  const ingredAndSetters = {
    'Pepperoni': [pepperoni, setPepperoni],
    'Sausage': [sausage, setSausage],
    'Peppers': [peppers, setPeppers],
    'Onions': [onions, setOnions]
  };

  return (
    <div className="App">
      <form className="pizzaForm">
        <h2>Pizza Order</h2>
        <input
          type="text"
          name="name"
          onChange={e => setName(e.target.value)}/>

        <IngredientList ingredAndSetters={ingredAndSetters} />

        <input type="submit" />
      </form>

      <div className="orderReceipt">
        <h2>Your Order</h2>

        <div className="orderDetails">
          <h3>{name}</h3>

          {Object.keys(ingredAndSetters).filter(ingred => ingredAndSetters[ingred][0])
            .map(ingred => {
              return <p key={ingred}>{ingred}</p>
            })
          }

        </div>
      </div>
    </div>
  );
}

export default App;
