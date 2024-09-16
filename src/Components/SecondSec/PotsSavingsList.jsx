import { savingsList } from '../../util.js';

export default function PotsSavingsList({objectProp}) {
  
  return (
    <div>
      {savingsList.map((element , index) => (
        <div key={index}>
          <p>{element.names}</p>
          <p>{element.prices}</p>
        </div>
      ))}
    </div>
  )
}