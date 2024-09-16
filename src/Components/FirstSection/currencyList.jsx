import { useState } from 'react'
import { handleOptions } from '../../util.js'
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { mappingElement } from "./CurrenForm.js";
import './Overview.css';

export default function CurrencyList({showLists,onSelect,onShowLists,currentCurr}) {
  const [closeList , setCloseList] = useState(false)

  return (
    <div>
      <div className="flex flex-row items-center">
        <p onClick={onShowLists} className="font-medium text-gray-700">
            {currentCurr}
        </p> 
        {
          showLists === false ? (
            <FaCaretUp/>
          ): (<FaCaretDown />)
        }
      </div>
      {showLists && (
        <div className="list" >
          {mappingElement.map((element , index) => (
            <div key={index} className="curr-btn">
              <button onClick={()=>onSelect(element)}>
                {element.getCurrency}
                ({element.getAbbreviation})
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}