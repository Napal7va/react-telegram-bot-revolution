import './App.css';
import Card from './Components/Card/Card';
import Cart from './Components/Cart/Cart';
import { useState } from 'react';
const {getData} = require('./db/db');
const wear = getData();

function App() {
  const[cartItems, setCartItems] = useState([]);

  const onAdd = (wear) => {
    const exist = cartItems.find((x) => x.id === wear.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === wear.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...wear, quantity: 1 }]);
    }
  };

  const onRemove = (wear)=>{
    const exist = cartItems.find((x) => x.id === wear.id);
    if(exist.quantity === 1){
      setCartItems(cartItems.filter(x=>x.id !== wear.id))
    }else{
      setCartItems(cartItems.map(x=>
        x.id === wear.id ? {...exist, quantity: exist.quantity -1}: x
        ))
    }
  }

  return (
    <>
      <h1 className='heading'>MMT Shop</h1>
      <Cart cartItems={cartItems} />
      <div className='cards__container'>
        {wear.map(wear=>{
          return <Card wear={wear} key={wear.id} onAdd={onAdd} onRemove={onRemove}/>
        })}
      </div>
    </>

  );
}

export default App;
