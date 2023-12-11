import { useEffect, useState } from "react"

import iconBag from '../assets/icons/bag.svg'
import iconPerson from '../assets/icons/person.svg'
import iconSearch from '../assets/icons/search.svg'
import iconX from '../assets/icons/x-lg.svg'
import img from '../assets/image/coll-09/04-Home_salt.png'

export default function useApi() {
    const [DATA, SETDATA] = useState([])
    const [MENU, SETMENU] = useState(false)
    const [BAG, SETBAG] = useState(false)
    const [backGround, setBackGround] = useState(false)
    const [modallInput , setModallInput] = useState(false)

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

    const handleBag = () => {
        SETMENU(true)
        SETBAG(true)
    }
    const exiteBag = () => {
        SETMENU(false)
        SETBAG(false)
    }
    const openModallinput = () => {
        setBackGround(!backGround)
        setModallInput(!modallInput)
    }   
    return {
        DATA,
        iconBag,
        iconPerson,
        iconSearch,
        iconX,
        img,
        handleBag,
        MENU,
        exiteBag,
        openModallinput,
        backGround,
        BAG,
        modallInput,
    }
}