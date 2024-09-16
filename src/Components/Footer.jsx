import { Link } from 'react-router-dom';
import Home from '../assets/HomeIcon.svg'
import Pots from '../assets/Pots.svg'
export default function Footer() {
  return (
    <div className="fixed bottom-0 w-full bg-zinc-800 p-4 rounded-t-2xl md:rounded-2xl md:bottom-10 md:p-6">
      <div className="flex flex-row justify-around">
        <Link to="/">
          <img src={Home} alt="hom"/>
        </Link>
        <Link to="/pots">
          <img src={Pots} alt="pots"/>
        </Link>
      </div>
    </div>
  )
}