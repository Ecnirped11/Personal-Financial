import { useState , useEffect} from 'react';
import PotsInputs from './PotsInputs.jsx'
import Lottie  from 'lottie-react'
import Loading from '../../assets/loading.json'
import Notifications from "./Notification.jsx";
import PotsBalancePallet from './PotsBalancePallet.jsx'
import PotsSavingsList from './PotsSavingsList.jsx';
import './Pots.css';

export default function Pots({onFormatted,currenBalance,setInputField,potsInput,setSavePots,savePots,addCalculation,setDeafault , deafault}) {
  
  const [content , setContent] = useState(false)
  const [addPrice , setAddPrice ] = useState([])
  const [dispMessage , setDisplay] =useState(false)
  const [loading , setLoading] = useState(false)
  const [updatedBalance , setupdatedBalance] = useState([])
  
  useEffect(() => {
    const getLists = JSON.parse(localStorage.getItem("pots-list"))
    if (getLists){
      setSavePots(getLists)
    }
  }, [])
  function messageElement(){
    setDisplay((messContent) => !messContent)
  }
  
  function addCalculation(value) {
    const lastListIndex = savePots
    const number = Number(value[0].prices)
    setDeafault((prevsChild) => {
      if (number <= prevsChild){
        return prevsChild - number
      }else{
        return prevsChild
      }
    })
  }
  
  
  function addValuesToArray(){
    if (Number(potsInput.prices <= deafault)){
      setSavePots((prevSavePot) => {
        const updatedList = [potsInput ,...prevSavePot]
        localStorage.setItem("pots-list" , JSON.stringify(updatedList))
        setContent((prevContent) => true)
        addCalculation(updatedList)
        return updatedList
      })
    }else{
      setContent((prevContent) => false)
    }
    messageElement()
    setLoading(false)
  }
  
  async function loadingData(){
     try{
       setLoading(true)
       await new Promise((resolve , reject) => {
         setTimeout(() => {
           resolve(addValuesToArray())
         },3000)
         setTimeout(() => {
          if (dispMessage === false){
            reject(messageElement())
          }
         },7000)
       })
     }catch(error){
       console.log(error)
     }
  }
  
  let emptyInput;
  if (potsInput.names==="" || potsInput.prices ===""){
    emptyInput = true
  }
  //localStorage.removeItem("pots-list")
  //console.log(savePots)
  return (
    <div>
      <div className="loading ">
        {loading && (
          <div className="flex justify-center h-dvh">
            <Lottie animationData={Loading}/>
          </div>)
        }
      </div>
      <div>
        <Notifications potsList={savePots} dispMessage={dispMessage}messageElement={messageElement} onFormatted={onFormatted} deafault={deafault}content={content}
        />
      </div>
      <div className="md:grid grid-cols-2 w-full">
        <div>
          <PotsBalancePallet 
            potsList = {savePots}onFormatted={onFormatted} dispMessage={dispMessage}
            messageElement={messageElement} deafault={deafault}content={content}
          />
        </div>
        <div className="pots-input">
          <span className="text-[1em] capitalize font-medium text-amber-100 m-5">
            add items
          </span>
          {/*input props goes here*/}
          <div className="m-5">
            <PotsInputs
              setInputField={setInputField}
              potsInput={potsInput}
              loadingData={loadingData}
              emptyInput={emptyInput}
            />
          </div>
        </div>
      </div>
      <div className="m-5">
        <PotsSavingsList
          potsList = {savePots}onFormatted={onFormatted}defaultBalance={currenBalance} deafault={deafault}
        />
      </div>
    </div>
  )
}