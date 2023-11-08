import './App.css';
import Button from './Components/Button/Button';
import Card from './Components/Card/Card';
const {getData} = require('./db/db');

const wear = getData();

function App() {
  return (
    <>
      <h1 className='heading'>MMT Shop</h1>
      <div className='cards__container'>
        {wear.map(wear=>{
          return <Card wear={wear} key={wear.id}/>
        })}
      </div>
    </>

  );
}

export default App;
