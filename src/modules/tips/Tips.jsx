import React from 'react'
import wrench from '../../assets/wrench.svg'
import basket from '../../assets/basket.svg'
import folder from '../../assets/folder.svg'
import Tip from './Tip'

export default function Tips() {
    return (
        <div className=' flex justify-center md:justify-between flex-wrap gap-5 pt-10'>
            <Tip text="single day queue" amount="123" color="bg-green-400" img={wrench} />
            <Tip text="multi day queue" amount="21" color="bg-green-400" img={wrench} />
            <Tip text="detales" amount="123" color="bg-yellow-400" img={folder} />
            <Tip text="today" amount="123" color="bg-blue-400" img={basket} />
        </div>
    )
}
