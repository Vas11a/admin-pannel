import React from 'react'
import TableElem from './TableElem'
import './table.css'

export default function Table() {
    return (
        <div className='pt-10'>
            <div className='flex bg-semiblack p-3 px-5'>
                <div className='tableTitle'>ID</div>
                <div className='tableTitle'>name</div>
                <div className='tableTitle'>last update</div>
                <div className='tableTitle'>status</div>
            </div>
            <TableElem bg="bg-white" />
            <TableElem bg="bg-gray-200" />
            <TableElem bg="bg-white"/>
            <TableElem bg="bg-gray-200"/>
            <TableElem bg="bg-white"/>
            <TableElem bg="bg-gray-200"/>
        </div>
    )
}
