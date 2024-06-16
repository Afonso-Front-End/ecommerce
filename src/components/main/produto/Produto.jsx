import { useEffect, useState } from "react"
import axios from "axios"
import "./produto.css"
export default function Produto() {
    const [produto, setproduto] = useState([])
    async function fecth() {
        try {
            const response = await axios.get("https://ecommerce-api-snowy.vercel.app/")
            if (response.status === 200) {
                setproduto(response.data)
                console.log(response.data)
            } else {
                console.log(response)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fecth()
    }, [])

    return (
        <div className='container-produto'>
            <section className='content-produto' >
                {produto && produto.map((data, index) => (
                    <div className="card-produto" key={index}>
                        {data.produto.map((item, subindex) => (
                            <div className="sub-index" key={subindex} >
                                <div className="sub-index-img">
                                    <img src={item.url} alt="" />
                                </div>
                                <div className="sub-index-info">
                                    <p>{item.nome}</p>
                                    <p>{item.valor}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </section>
        </div>
    )
}