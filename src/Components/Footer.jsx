import { Link } from 'react-router-dom';
import Home from '../assets/HomeIcon.svg'
import Pots from '../assets/Pots.svg'
export default function Footer() {
  return (
    <div className="flex items-center justify-center">
      <div className="fixed bottom-5  w-[90%]">
        <div className="bg-zinc-900 flex justify-between p-4 rounded-[10px] border-t-[2px] border-b-[2px] border-zinc-800">
          <Link to="/">
            <img src={Home} alt="hom"/>
          </Link>
          <Link to="/pots">
            <img src={Pots} alt="pots"/>
          </Link>
        </div>
      </div>
    </div>
  )
}