import React from 'react'
import refresh from '../assets/refresh.svg'
import add from '../assets/add.svg'
import scan from '../assets/scan.svg'
import CommonButton from '../ui/CommonButton'
import Scanner from '../components/Scanner'
import trash from '../assets/trash.svg'
import findW from '../assets/findW.svg'

export default function PartsPage() {
    const [isScannerEnable, setIsScannerEnable] = React.useState(false)
    const [scannedCode, setScannedCode] = React.useState('')
    return (
    <div>
        <div className=' flex justify-between'>
            <div className=' text-3.5xl'>Parts</div>
            <img className='w-9 h-auto cursor-pointer' src={refresh} alt="" />
        </div>
        {
            isScannerEnable && <Scanner setScannedCode={setScannedCode} />
        }
        <div className='pt-5 flex flex-wrap gap-3'>
            <input value={scannedCode} onChange={(e) => setScannedCode(e.target.value)} type="text" placeholder='Write number' className='input' />
            <CommonButton img={add} text='Add' />
            <CommonButton img={scan} fc={() => setIsScannerEnable(!isScannerEnable)} color={'bg-green-500'} text={isScannerEnable ? 'Disable scanner': 'Enable scanner'} />
        </div>
        <div>
            <div className=' text-3.5xl py-10'>Parts list</div>
            <div className='flex flex-wrap gap-3 pb-5'>
                <input type="text" placeholder='Search' className='input' />
                <CommonButton img={findW} color={'bg-green-500'} text='Fing' />
            </div>
            <div className='bg-white md:w-1/2 p-5 overflow-auto max-h-72'>
                <div className='flex gap-3 justify-between text-xl items-center border-b border-gray-400 pb-2 mb-4'>
                    <div>1)</div>
                    <div>Part for boing 1488</div>
                    <img className='w-7 h-auto cursor-pointer' src={trash} alt="" />
                </div>
                <div className='flex gap-3 justify-between text-xl items-center border-b border-gray-400 pb-2 mb-4'>
                    <div>1)</div>
                    <div>Part for boing 1488</div>
                    <img className='w-7 h-auto cursor-pointer' src={trash} alt="" />
                </div>
                <div className='flex gap-3 justify-between text-xl items-center border-b border-gray-400 pb-2 mb-4'>
                    <div>1)</div>
                    <div>Part for boing 1488</div>
                    <img className='w-7 h-auto cursor-pointer' src={trash} alt="" />
                </div>
                <div className='flex gap-3 justify-between text-xl items-center border-b border-gray-400 pb-2 mb-4'>
                    <div>1)</div>
                    <div>Part for boing 1488</div>
                    <img className='w-7 h-auto cursor-pointer' src={trash} alt="" />
                </div>
                <div className='flex gap-3 justify-between text-xl items-center border-b border-gray-400 pb-2 mb-4'>
                    <div>1)</div>
                    <div>Part for boing 1488</div>
                    <img className='w-7 h-auto cursor-pointer' src={trash} alt="" />
                </div>
                <div className='flex gap-3 justify-between text-xl items-center border-b border-gray-400 pb-2 mb-4'>
                    <div>1)</div>
                    <div>Part for boing 1488</div>
                    <img className='w-7 h-auto cursor-pointer' src={trash} alt="" />
                </div>
                <CommonButton img={findW} text='Load more' />
            </div>
        </div>
    </div>
  )
}
