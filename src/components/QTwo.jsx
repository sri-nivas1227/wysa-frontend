import arrow from '../assets/arrow-down.svg'
import { useState } from 'react'
import {TimePicker} from 'react-ios-time-picker'
import QThree from './QThree'

const QTwo = () => {
  const [value,setValue]  = useState('10:00')
  const [showNew, setshowNew] = useState(false)
  const [showCurrent, setShowCurrent] = useState(true)
  const onChange = (timeValue)=>{
    setValue(timeValue)

  }
  const handleSubmit = ()=>{
    console.log(typeof value)
    console.log(value)
    setShowCurrent(false)
    setshowNew(true)
  }
  return (
    <div className="bg-[#00001d] h-screen rounded-lg text-center p-4">
        {showCurrent && <div className="">
          <h2 className="text-white my-4">{"What time do you go to bed for sleep?"}</h2>
          <div id="options" className="text-white border rounded-lg">
              <TimePicker  onChange={onChange} value={value}  />
          </div>
          <div id="submit" onClick={handleSubmit} className="cursor-pointer m-4 text-center bg-yellow-400 inline-block rounded-full"><img src={arrow} className='cursor-pointer pointer-events-none w-10' alt="" /></div>
        </div>}
      {showNew && <QThree/>}
    </div>
  )
}

export default QTwo
