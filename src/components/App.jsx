import useApi from '../js/api'

export default function App() {

    const {
        DATA,
        iconBag,
        iconPerson,
        iconSearch,
        iconX,
        img,
        handleBag,
        MENU,
        exiteBag, 
        BAG,
        handleInput,
        backGround
    } = useApi()



    return (
        <div className="container">
            <div className="content">


                <div className={`container-topo `}>
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
                                <span><img src={iconPerson} alt="" /></span>
                            </li>
                            <li onClick={handleInput}>
                                <span><img src={iconSearch} alt="" /></span>
                            </li>
                            <li onClick={handleBag}>
                                <span><img src={iconBag} alt="" /></span>
                            </li>
                        </ul>
                        <menu className={`${MENU ? 'active-menu' : ''}`}>
                            <div className={`shope ${BAG ? 'active-shope' : ''}`}>
                                <div className='shope-topo'>
                                    <div className='icon-topo'>
                                        <button>
                                            <img src={iconBag} alt="" />
                                        </button>
                                    </div>
                                    <button onClick={exiteBag} id='exiteBag'>
                                        <img src={iconX} alt="" />
                                    </button>
                                </div>
                            </div>
                        </menu>
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
                    <div className={`container-modall`} key={index}>
                        <section className={`modall modall-${index}`}>
                            {data.produto.map((produto, subIndex) => (
                                <div className='card-modall' key={subIndex} >
                                    <img src={produto.url} alt="Imagem produto" />
                                    <p id='produto-nome'>{produto.nome}</p>
                                    <p id='produto-valor'>{produto.valor}</p>
                                </div>
                            ))}
                        </section>
                    </div>
                ))}
            </div>

            <footer>
                <div>
                    <div className='sobre'>

                    </div>
                    <div className='parceiros'>

                    </div>
                    <div className='redes-sociais'>

                    </div>
                </div>
            </footer>
        </div >

    )
}