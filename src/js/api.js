import { useEffect, useState } from "react";
import iconBag from '../assets/icons/bag.svg';
import iconPerson from '../assets/icons/person.svg';
import iconSearch from '../assets/icons/search.svg';
import iconX from '../assets/icons/x-lg.svg';
import img from '../assets/image/coll-09/04-Home_salt.png';

const API_BASE = 'https://ecommerce-api-snowy.vercel.app/';

export default function useApi() {
    const [state, setState] = useState({
        DATA: [],
        MENU: false,
        BAG: false,
        backGround: false,
        modallInput: false,
        cardViwe: false,
        infoCardViwe: null,
        cart: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_BASE);
                const data = await response.json();
                setState((prevState) => ({ ...prevState, DATA: data }));
            } catch (error) {
                console.error('Error loading data:', error.message);
            }
        };

        fetchData();
    }, []);

    const handleBag = () => {
        setState((prevState) => ({ ...prevState, MENU: true, BAG: true }));
    };

    const exiteBag = () => {
        setState((prevState) => ({ ...prevState, MENU: false, BAG: false }));
    };

    const openModallinput = () => {
        setState((prevState) => ({
            ...prevState,
            backGround: !prevState.backGround,
            modallInput: !prevState.modallInput,
        }));
    };

    const openCard = (index, subIndex) => {
        setState((prevState) => ({
            ...prevState,
            cardViwe: true,
            infoCardViwe: prevState.DATA[index].produto[subIndex],
        }));
    };

    const clossedCard = () => {
        setState((prevState) => ({
            ...prevState,
            cardViwe: false,
            infoCardViwe: null,
        }));
    };

    const adicionarProduto = (novoProduto) => {
        setState((prevState) => ({
            ...prevState,
            cart: [...prevState.cart, novoProduto],
        }));
    };

   
    return {
        ...state,
        iconBag,
        iconPerson,
        iconSearch,
        iconX,
        img,
        handleBag,
        exiteBag,
        openModallinput,
        openCard,
        clossedCard,
        adicionarProduto,
    };
}