import { useState } from 'react';
import { savingsList } from '../../util.js';
//import PotsBalancePallet from './PotsBalancePallet.jsx'
import PotsSavingsList from './PotsSavingsList.jsx';

export default function Pots({onFormatted}) {
  const [savePots ,setSavePots] = useState(savingsList)
  //const [addSavings , setAddSaving] = useState(0)
  const [potsInput , setPotsInput] = useState({names:'', prices:''})
  
  function setInputField(name , value){
    setPotsInput((prevsValue) => ({
      ...prevsValue,
      [name] : value
    }))
  }
  function addValuesToArray(){
    setSavePots([...savePots , potsInput])
    console.log(savingsList)
  }
  return (
    <div>
      <div>
        <input 
          type="text"
          value={potsInput.names}
          onChange={
           (e) => setInputField("names" , e.target.value)
          }
        />
        <input 
          type="text"
          name="prices"
          value={potsInput.prices}
          onChange={
           (e) => setInputField("prices" , e.target.value)
          }
        />
      </div>
      <button onClick={addValuesToArray}>click</button>
      <PotsSavingsList objectProp={savePots}/>
    </div>
  )
}