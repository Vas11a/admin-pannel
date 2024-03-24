import React from 'react'
import './order.css'
import save from '../../assets/save.svg'
import ChangeOrderComponent from '../../components/ChangeOrderComponent'
import BlackButton from '../../ui/BlackButton'

export default function NewOrderModule() {
    return (
        <div>
            <ChangeOrderComponent/>
            <div className=' flex justify-center pt-5'>
                <BlackButton img={save} text='Save order'/>
            </div>
        </div>
    )
}
