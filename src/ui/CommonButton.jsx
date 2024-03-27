import React from 'react'

export default function CommonButton({img, text, color, fc}) {
    return (
        <div onClick={fc} className={` ${color ? color : 'bg-semiblack'} px-3 py-2 flex justify-center w-fit rounded-md cursor-pointer items-center gap-3`}>
            <img src={img} className=' w-5 h-auto' alt="" />
            <div className=' text-white text-xl'>{text}</div>
        </div>
    )
}
