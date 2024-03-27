import React from 'react'

export default function OrderTableComponent() {
    return (
        <>
            <div className='mt-10 w-full flex flex-col sm:flex-row p-5'>
                <div className='flex-1'>
                    <div className='text-2xl'>Order info</div>
                    <hr className='mt-2' />
                    <div className='flex gap-5 pt-4'>
                        <div className='text-xl font-semibold'>Field1:</div>
                        <div className='text-xl'>value</div>
                    </div>
                    <div className='flex gap-5 pt-4'>
                        <div className='text-xl font-semibold'>Field1:</div>
                        <div className='text-xl'>value</div>
                    </div>
                    <div className='flex gap-5 pt-4'>
                        <div className='text-xl font-semibold'>Field1:</div>
                        <div className='text-xl'>value</div>
                    </div>
                </div>

                <div className='flex-1'>
                    <div className='text-2xl pt-5 sm:pt-0'>User info</div>
                    <hr className='mt-2' />
                    <div className='flex gap-5 pt-4'>
                        <div className='text-xl font-semibold'>Field1:</div>
                        <div className='text-xl'>value</div>
                    </div>
                    <div className='flex gap-5 pt-4'>
                        <div className='text-xl font-semibold'>Field1:</div>
                        <div className='text-xl'>value</div>
                    </div>
                    <div className='flex gap-5 pt-4'>
                        <div className='text-xl font-semibold'>Field1:</div>
                        <div className='text-xl'>value</div>
                    </div>
                </div>
            </div>
            <div className='p-5'>
                <div className='text-2xl pb-5'>Details</div>
                <div className='flex gap-5 text-xl pb-2'>
                    <div>1)</div>
                    <div>Datail for boing 1488</div>
                </div>
                <div className='flex gap-5 text-xl pb-2'>
                    <div>2)</div>
                    <div>Datail for boing 1488</div>
                </div>
            </div>
        </>
    )
}
