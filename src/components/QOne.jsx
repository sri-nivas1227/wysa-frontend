import { useState } from 'react'
import arrow from '../assets/arrow-down.svg'
import tick from "../assets/check-circle-fill.svg"
import QTwo from './QTwo'


const QOne = () => {
  const [checked, setChecked] = useState('hidden')
  const [showNew, setshowNew] = useState(false)
  const [showCurrent, setShowCurrent] = useState(true)
  const handleClick = ()=>{
    if(checked === 'hidden')
    {
      setChecked('')
    }
    else setChecked('hidden')
  }
  const handleSubmit = ()=>{
    setShowCurrent(false)
    setshowNew(true)
  }
  return (
    <div className="bg-[#00001d] h-screen rounded-lg text-center p-4">
      {showCurrent && <div className="">

        <h2 className="text-white my-4">{"That's a great goal. How long have you been struggling with your sleep?"}</h2>
        <div id="options" className="flex flex-col justify-center items-center">
            <div onClick={handleClick}  className="cursor-pointer p-2 bg-[#0000ad] m-2 rounded-xl w-4/5 text-white flex justify-between">
              Less than 2 weeks <span><img src={tick} className={`w-4 ${checked}`} alt="" /></span>
            </div>
            <div onClick={handleClick}  className="cursor-pointer p-2 bg-[#00007d] m-2 rounded-xl w-4/5 text-white flex justify-between">
              2 to 8 weeks <span><img src={tick} className={`w-4 ${checked}`} alt="" /></span>
            </div>
            <div onClick={handleClick}  className="cursor-pointer p-2 bg-[#00003d] m-2 rounded-xl w-4/5 text-white flex justify-between">
              More than 8 weeks <span><img src={tick} className={`w-4 ${checked}`} alt="" /></span></div>
        </div>
        <div id="submit" onClick={handleSubmit} className="cursor-pointer m-4 text-center bg-yellow-400 inline-block rounded-full"><img src={arrow} className='cursor-pointer pointer-events-none w-10' alt="" /></div>
      </div>}
        {showNew && <QTwo/>}
      
    </div>
  )
}

export default QOne
