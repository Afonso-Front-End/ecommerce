import data from '../js/data'
import useApi from '../js/api'
export default function App() {
    const {
        iconBag,
        iconPerson,
        iconSearch,
        img,
    } = data()

    const { DATA } = useApi()

    return (
        <div className="container">
            <div className="content">

                <div className='container-topo'>
                    <div className='content-topo'>

                        <div className="logo">
                            <a href="#">ecommerce</a>
                        </div>

                        <button id='buttom-menu'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                        <ul className="lista-nav">
                            <li>
                                <a href="#">
                                    <img src={iconPerson} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#"><img src={iconSearch} alt="" /></a>
                            </li>
                            <li>
                                <a href="#"><img src={iconBag} alt="" /></a>
                            </li>
                        </ul>

                    </div>
                </div>

                <div className='wrapper'>
                    <div className='wrapper-content'>
                        <div className='wrapper-img'>
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div className='produto'>
                        <p>Garrafa termica</p>
                        <p>$99.99</p>
                    </div>
                </div>

                {DATA && DATA.map((data, index) => (
                    <div className='container-modall' key={index}>
                        <section className={`modall`}>
                            {data.produto.map((produto, subIndex) => (
                                <div className='card-modall' key={subIndex}>
                                    <img src={produto.url} alt="" />
                                    <p>{produto.nome}</p>
                                    <p>{produto.valor}</p>
                                </div>
                            ))}
                        </section>
                    </div>
                ))}
            </div>

            <footer>

            </footer>
        </div >

    )
}