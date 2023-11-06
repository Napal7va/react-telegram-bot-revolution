import './App.css';
import Button from './Components/Button/Button'
function App() {
  return (
    <>
      Hello nfff
      <Button title={'Add'} disable={false} type={'add'}/>
      <Button title={'Remove'} disable={false} type={'remove'}/>
      <Button title={'Checkout'} disable={false} type={'checkout'}/>
    </>

  );
}

export default App;
