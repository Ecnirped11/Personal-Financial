//import { formatter } from '../../util.js';
import './Pots.css'
export default function PotsSavingsList({
  potsList,
  onFormatted,deafault
}) {
  return (
    <div className=" mb-[10rem]">
      <p className="capitalize text-2xl font-medium mb-8">
        recent saved
      </p>
      <div className="grid grid-cols-3 gap-3 overflow-y-auto md:grid-cols-4 lg:grid-cols-6">
        {potsList.map((element , index) => (
          <div key={index} className="">
            <div key = {index} className="pot-item">
              <p className="text-base mb-5 text-gray-100 text-nowrap md:text-[1.2rem]">
                {element.names}
              </p>
              <p className="text-base font-openSans font-medium text-amber-200 md:text-[1.2rem]">
                {(onFormatted.format(Number(element.prices)))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
