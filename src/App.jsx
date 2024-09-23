import { useState , useEffect} from 'react'
import {sectionTitle,balancePallete} from './util.js';
import Overview from './Components/FirstSection/Overview.jsx';
import { handleOptions } from './util.js';
import { BrowserRouter , Routes , Route,Link } from 'react-router-dom';
import Pots from './Components/SecondSec/Pots.jsx';
import Footer from './Components/Footer.jsx';

export default function App() {
  const [currList , setCurrList] = useState('USD')
  const [showList , setShowList] = useState(false)
  const [potsInput , setPotsInput] = useState({names:'', prices:''})
  const [deafault , setDeafault] = useState(70000)
  const [savePots ,setSavePots] = useState([])
  
  
  const displayBalance = balancePallete({savePots,deafault})
  //console.log(displayBalance)
  const consoleElement = handleOptions({currList})
  const { formatted } = consoleElement
  
  function selectListCurrency(value){
    setCurrList(value.getAbbreviation)
    setShowList((innerList) => false)
  }
  //console.log(consoleElement)
  function handleNavList(){
    setShowList((listElement) => !listElement)
  }
  function setInputField(name , value){
    setPotsInput((prevsValue) => ({
      ...prevsValue,
      [name] : value
    }))
  }
  return (
    <div className="text-white font-roboto">
      <BrowserRouter>
        <Footer/>
        <Routes>
          <Route
            path="/"
            element={<Overview {...displayBalance }
            {...sectionTitle} onSelectListCurrency ={selectListCurrency} currencyFomatted = {currList} onFormatted = {formatted} showList={showList}handleNavList={handleNavList} potsList = {savePots} deafault={deafault}/>}
          />
          <Route
            path="/pots" 
            element={<Pots  onFormatted={formatted} setInputField={setInputField} potsInput={potsInput} savePots={savePots} setSavePots={setSavePots} deafault={deafault} setDeafault={setDeafault}
            />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}