import {TiHome, TiUser,  TiFlash} from 'react-icons/ti'
import {RiServiceFill, RiShieldFill} from 'react-icons/ri'

export function Sidenav() {
    return (
            <ul className="py-2 px-4 flex flex-col h-screen mt-20">
                <li className="nav-item px-2 py-6 cursor-pointer text-4xl"><TiHome /></li>
                <li className="nav-item px-2 py-6 cursor-pointer text-4xl"><TiFlash /></li>
                <li className="nav-item px-2 py-6 cursor-pointer text-4xl"><RiServiceFill /></li>
                <li className="nav-item px-2 py-6 cursor-pointer text-4xl"><TiUser /></li>
                
            </ul>
    )
}