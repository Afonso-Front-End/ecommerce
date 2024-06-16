import "./main.css"
import img from "../../assets/04-Home_salt.png"
import Produto from "./produto/Produto"
export default function Main() {
    return (
        <main>
            <div className='product-wrapper'>
                <div className='product-content'>
                    <div className='product-image'>
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className='product-info'>
                    <p>Garrafa termica</p>
                    <p>$99.99</p>
                </div>
            </div>
            <Produto />
        </main>

    )
}