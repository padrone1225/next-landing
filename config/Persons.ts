import { Person } from "../types/types"

import Marena from '../public/assets/persons/Marena.webp'
import Brook from '../public/assets/persons/Brook.webp'
import Hopson from '../public/assets/persons/Hopson.webp'
import Rooster from '../public/assets/persons/Rooster.webp'
import Stainer from '../public/assets/persons/Stainer.webp'
import Turner from '../public/assets/persons/Turner.webp'

const PERSONS: Person[] = [
    {
        name: 'Cloe Marena',
        img: Marena,
        job: 'Co-Founder, XYZ Inc.'
    },
    {
        name: 'John Rooster',
        img: Rooster,
        job: 'Co-Founder, XYZ Inc.'
    },
    {
        name: 'Will Turner',
        img: Turner,
        job: 'Co-Founder, XYZ Inc.'
    },
    {
        name: 'Nicolas Stainer',
        img: Stainer,
        job: 'Co-Founder, XYZ Inc.'
    },
    {
        name: 'George Brook',
        img: Brook,
        job: 'Co-Founder, XYZ Inc.'
    },
    {
        name: 'Emely Hopson',
        img: Hopson,
        job: 'Co-Founder, XYZ Inc.'
    },
]

export default PERSONS