import React from 'react'
import backArr from '../assets/backArr.svg'
import { Link } from 'react-router-dom'
import BlackButton from '../ui/BlackButton'
import update from '../assets/update.svg'

export default function Order() {
  return (
    <div className=''>
      <div className='flex items-center justify-between gap-5'>
        <div className='text-3xl'>Order N1212</div>
        <Link to='/' className=' bg-white w-fit flex py-2 px-3 items-center gap-3'>
          <img src={backArr} className='w-5 h-auto' alt="" />
          <div className='text-xl'>Back</div>
        </Link>
      </div>
      <div className='bg-white'>
        <div className='mt-10 w-full flex p-5'>
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
            <div className='text-2xl'>User info</div>
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
          <div className='text-2xl'>Details</div>
          <div className='pt-5'>
            <div className='flex p-3 px-5 bg-gray-200'>
              <div className='flex-1 text-black text-lg font-semibold'>some</div>
              <div className='flex-1 text-black text-lg font-semibold'>some</div>
              <div className='flex-1 text-black text-lg font-semibold'>some</div>
              <div className='flex-1 text-black text-lg font-semibold'>some</div>
            </div>
            <div className='flex p-3.5 px-5 bg-white border border-gray-200'>
              <div className='flex-1 text-lg'>val</div>
              <div className='flex-1 text-lg'>val</div>
              <div className='flex-1 text-lg'>val</div>
              <div className='flex-1 text-lg'>val</div>
            </div>
          </div>
        </div>
        <div className='p-5 flex justify-between'>

          <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 w-fit text-lg rounded-md  block p-1.5">
            <option selected>In progress</option>
            <option value="US">Done</option>
            <option value="CA">Dont started</option>
            <option value="DE">Finding details</option>
          </select>

          <BlackButton img={update} text='Update order' />
        </div>
      </div>

    </div>
  )
}
