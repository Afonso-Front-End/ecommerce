import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import iconBag from '../assets/icons/bag.svg'
import iconPerson from '../assets/icons/person.svg'
import iconSearch from '../assets/icons/search.svg'
import img from '../assets/image/coll-09/04-Home_salt.png'

export default function data() {

    // useLayoutEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);
    //     gsap.to("", {
    //         y: 0,
    //         opacity: 1,
    //         scrollTrigger: {
    //             trigger: '.modall',
    //             markers: true,
    //             start: 'top 850px',
    //             end: 'bottom 700px',
    //             scrub: 0.6
    //         }
    //     })
    //     return () =>{
    //         gsap.killTweensOf("")
    //     }
    // })

    return {
        iconBag,
        iconPerson,
        iconSearch,
        img,
    }
}