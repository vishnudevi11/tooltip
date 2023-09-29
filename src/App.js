import './App.css';
import Select from './components/selector';
import Hover from './components/hover';
import ButtonContext from './buttonContext';

function App() {
  return (
    <div className="App">
      
     <ButtonContext>
      <h4>Select the dropdown ,where the tooltip should place</h4>
     <Select/>
      <Hover/>
     </ButtonContext>
    </div>
  );
}

export default App;