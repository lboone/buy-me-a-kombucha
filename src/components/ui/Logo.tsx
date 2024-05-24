import Link from 'next/link'
import { TbActivityHeartbeat } from "react-icons/tb";

const Logo = () => {
  return (
    <Link className="flex" href="/">
       <div className="flex gap-1 items-center justify-start">
        <TbActivityHeartbeat 
        size={50}
        className="p-1 mr-1 rounded-full bg-transparent  border-4 border-yellow-900 "
        /> <span className="text-2xl font-semibold tracking-tighter"><span className="font-bold text-yellow-500">Buy Me A</span> Kombucha</span> 
       </div>
    </Link>
  )
}

export default Logo