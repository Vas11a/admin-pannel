import React from 'react'
import Tips from '../modules/tips/Tips'
import Refresh from '../modules/refresh/Refresh'
import FindOrder from '../modules/findOrder/FindOrder'
import Table from '../modules/table/Table'

export default function DashboardPage() {
    return (
        <>
            <Refresh/>
            <Tips/>
            <FindOrder/>
            <Table/>
        </>
    )
}
