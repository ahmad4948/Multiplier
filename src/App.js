import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
export function App(props) {
  return (
    <div className="App">
      <Yo/>
    </div>
      
      
  );
}


function Yo(){
    
    const[input,setinput]=useState("");
    const [x, setX] = useState(null);
    
    const handleInputChange=(e)=>{
                
        setinput(e.target.value);
    }
      useEffect(()=>{
         var numbers=input.split('*');
        if(numbers.length==2){
            setX(parseFloat(numbers[0])*parseFloat(numbers[1]));
        }
       },[input]);
      
    return(
        <div>
        
        <input type="text" value={input} onChange={handleInputChange}/>
        <h2>{input}</h2>
        <h3>{x}</h3>
        
        </div>
    );
}
export default App;