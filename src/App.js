import './App.css';
import Button from './Components/Button/Button';
import Card from './Components/Card/Card';
const {getData} = require('./db/db');

const foods = getData();

function App() {
  return (
    <>
      Hello nfff
      <Button title={'Add'} disable={false} type={'add'}/>
      <Button title={'Remove'} disable={false} type={'remove'}/>
      <Button title={'Checkout'} disable={false} type={'checkout'}/>
      {wear.map(wear)=>{
        
      }}
    </>

  );
}

export default App;
