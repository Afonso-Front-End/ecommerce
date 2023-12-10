import { useEffect, useState } from "react"

import iconBag from '../assets/icons/bag.svg'
import iconPerson from '../assets/icons/person.svg'
import iconSearch from '../assets/icons/search.svg'
import img from '../assets/image/coll-09/04-Home_salt.png'

export default function useApi() {
    const [DATA, SETDATA] = useState([])

    useEffect(() => {
        const DATA_BASE = 'https://ecommerce-api-snowy.vercel.app/'
        try {
            fetch(`${DATA_BASE}`)
                .then(response => response.json())
                .then((data) => {
                    SETDATA(data)
                })
        } catch {
            console.log('Erro ao carregar dados:')
        }
    }, [])

    return {
        DATA,
        iconBag,
        iconPerson,
        iconSearch,
        img,
    }
}