import "./header.css"
import { FaBagShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
export default function Header() {
    return (
        <div className="header-container">
            <div className='header-content'>

                <div className="logo">
                    {/* <a href="#">e-commerce</a> */}
                </div>

                <button className='menu-button'>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className="nav-lista">
                    <li>
                        <span><IoMdContact size={25} color="#000" /></span>
                    </li>
                    <li>
                        <span><FaSearch size={25} color="#000" /></span>
                    </li>
                    <li>
                        <span><FaBagShopping size={25} color="#000" /></span>
                    </li>
                </ul>
            </div>
        </div>
    )
}