import { useState } from 'react'
import { deafaulAmount,sectionTitle} from './util.js';
import Overview from './Components/FirstSection/Overview.jsx';
import { handleOptions } from './util.js';
import { BrowserRouter , Routes , Route,Link } from 'react-router-dom';
import Pots from './Components/SecondSec/Pots.jsx';
import Footer from './Components/Footer.jsx';

export default function App() {
  const [currList , setCurrList] = useState('USD')
  const [showList , setShowList] = useState(false)
  
  const consoleElement = handleOptions({currList})
  const { formatted } = consoleElement
  
  function selectListCurrency(value){
    setCurrList(value.getAbbreviation)
    setShowList((innerList) => false)
  }
  
  //console.log(consoleElement)
  function handleNavList(){
    setShowList((listElement) => !listElement)
    console.log(showList)
  }
  return (
    <div >
      <BrowserRouter>
        <Footer/>
        <Routes>
          <Route
            path="/"
            element={<Overview { ...deafaulAmount }
            {...sectionTitle} onSelectListCurrency ={selectListCurrency} currencyFomatted = {currList} onFormatted = {formatted} showList={showList}handleNavList={handleNavList}/>}
          />
          <Route
            path="/pots" 
            element={<Pots onFormatted={formatted}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}