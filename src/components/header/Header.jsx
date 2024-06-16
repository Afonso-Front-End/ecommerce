import "./header.css"
import { FaBagShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { CiBag1 } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
export default function Header() {
    return (
        <div className="header-container">
            <div className='header-content'>

                <button className='menu-button'>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className="nav-lista">
                    <li>
                        <span><IoMdContact size={30} color="#000" /></span>
                    </li>
                    <li>
                        <span><CiSearch size={30}/></span>
                    </li>
                    <li>
                        <span><CiBag1 size={30}/></span>
                    </li>
                </ul>
            </div>
        </div>
    )
}