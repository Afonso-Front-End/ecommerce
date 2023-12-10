import { useEffect, useState } from "react"

export default function useApi() {
    const [DATA, SETDATA] = useState([])

    useEffect(() => {
        const DATA_BASE = 'http://localhost:3000/'
        try {
            fetch(`${DATA_BASE}`)
                .then(response => response.json())
                .then((data) => {
                    SETDATA(data)
                    console.log(data)
                })
        } catch {
            console.log('Erro ao carregar dados:')
        }
    }, [])

    return {
        DATA,
    }
}