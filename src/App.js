import './App.css';
import { useState } from 'react'

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

        <input type="text" name="name" />

        <div className="ingredientList">
            {Object.keys(ingredAndSetters).map(ingred => {
              const isSelected = ingredAndSetters[ingred][0]
              const ingredSetter = ingredAndSetters[ingred][1];
              return (
                <div key={ingred}>
                  <label>
                    <input
                      type="checkbox"
                      name={ingred}
                      value={ingred}
                      onChange={() => ingredSetter(!isSelected)}
                    />
                    {ingred}
                  </label>
                </div>
              )
            })}
          <input type="submit" />
        </div>
      </form>

      <div className="orderReceipt">
        <h2>Your Order</h2>

        <div className="orderDetails">
          <p>George</p>

          <p>{pepperoni && "pepperoni"}</p>
          <p>{sausage && "sausage"}</p>
          <p>{peppers && "peppers"}</p>
          <p>{onions && "onions"}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
