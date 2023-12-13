import { useEffect } from 'react'
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
        openModallinput,
        backGround,
        modallInput,
        openCard,
        cardViwe,
        infoCardViwe,
        clossedCard,
        adicionarProduto,
        cart,
    } = useApi()

    let valoress = [];

    const valores = cart.map((cart) => {
        const valor = cart.valor.slice(1, 9999);
        const valorFormat = parseFloat(valor);
        valoress.push(valorFormat);
    });
    
    const total = valoress.reduce((acc, currentValue) => acc + currentValue, 0);

    

    return (
        <div className="ecommerce-container">
            <div className="ecommerce-content">

                <div className={`header-container ${backGround ? 'active-background' : ''}`}>
                    <div className='header-content'>

                        <div className="logo">
                            <a href="#">e-commerce</a>
                        </div>

                        <button id='menu-button'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                        <ul className="nav-lista">
                            <li>
                                <span><img src={iconPerson} alt="" /></span>
                            </li>
                            <li onClick={openModallinput}>
                                <span><img src={iconSearch} alt="" /></span>
                            </li>
                            <li onClick={handleBag}>
                                <span><img src={iconBag} alt="" /></span>
                            </li>
                        </ul>

                        <div className={`menu ${MENU ? 'active-menu' : ''}`}>

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

                                <div className='container-lista-produtos'>
                                    <div className='content-lista-produtos'>
                                        <p>Seus produtos</p>
                                        <ul>
                                            {cart && cart.map((produto, index) => (
                                                <li className='produto' key={index}>
                                                    <div className='produto-img'>
                                                        <img src={produto.url} alt="" />
                                                    </div>

                                                    <div className='produto-info'>
                                                        <p>{produto.nome}</p>
                                                        <p>{produto.valor}</p>
                                                        {/* <button>remover</button> */}
                                                    </div>
                                                </li>

                                            ))}
                                            <span>Total a pagar: ${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>

                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className={`modall-input ${modallInput ? 'active-container-input' : ''}`}>
                            <div className={`content-input ${modallInput ? 'active-content-input' : ''}`}>
                                <div className='div-input'>
                                    <img src={iconSearch} alt="" />
                                    <input type="text" placeholder='Busca' />
                                    <img src={iconX} alt="" onClick={openModallinput} className='exiteModalinput' />
                                </div>
                            </div>
                        </div>

                        {cardViwe && (
                            <div className='modal-viwe-card'>
                                <div className='modal-viwe'>
                                    <div className='card-viwe'>

                                        <div className='card-viwe-img'>
                                            <img src={infoCardViwe.url} alt="Imagem produto" />
                                        </div>

                                        <div className='card-info'>
                                            <div>
                                                <p id='produto-nome'>{infoCardViwe.nome}</p>
                                                <p id='produto-valor'>{infoCardViwe.valor}</p>
                                            </div>
                                            <div className='card-btns' onClick={() => adicionarProduto(infoCardViwe)}>
                                                <button id='adicionar'>Adicionar</button>
                                            </div>
                                        </div>

                                        <button className='exiteCardViwe' onClick={clossedCard}>
                                            <img src={iconX} alt="" />
                                        </button>

                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>

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

                {DATA && DATA.map((data, index) => (
                    <div className='modal-container' key={index}>
                        <section className='modal'>
                            {data.produto.map((produto, subIndex) => (
                                <div className='card-modal' key={subIndex} onClick={() => openCard(index, subIndex)}>
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
                <div className='footer'>
                    <div className="about">
                        <h2>Institucional</h2>
                        <ul>
                            <li>Sobre nós </li>
                            <li>Privacidade e Segurança</li>
                            <li>Trabalhe conosco</li>
                            <li>Sustentabilidade</li>
                        </ul>
                    </div>
                    <div className="partners">
                        <h2>Conta</h2>
                        <ul>
                            <li>Conta</li>
                            <li>Meus pedidos</li>
                        </ul>
                    </div>
                    <div className="help">
                        <h2> Precisa de Ajuda </h2>
                        <ul>
                            <li> Acompanhe seu pedido </li>
                            <li> Troca e Devolução </li>
                            <li> Perguntas frequentes </li>
                        </ul>
                    </div>
                    <div className="social-media">

                    </div>
                </div>
            </footer>
        </div >

    )
}