import { useState } from 'react'
import arrow from '../assets/arrow-down.svg'
import tick from "../assets/check-circle-fill.svg"
import QTwo from './QTwo'


const QOne = () => {
  // const [checked, setChecked] = useState('hidden')
  const [showNew, setshowNew] = useState(false)
  const [showCurrent, setShowCurrent] = useState(true)
  const handleClick = (event)=>{
    const target = event.target
    console.log(target)
    const img = target.querySelector('span>img')
    if(img.classList.contains("hidden"))
    {
      img.classList.remove('hidden')
    }
    else img.classList.add('hidden')
    
  }
  const handleSubmit = async ()=>{
    let resp
    const options = document.querySelectorAll('#options>div')
    for(let i=0;i<options.length;i++)
    {
      if(!options[i].querySelector('span>img').classList.contains('hidden'))
      {
        const value = options[i].querySelector("#value").innerHTML
        if(value === "Less than 2 weeks")
        {
          resp = "<2"
        }
        else if(value === "2 to 8 weeks")
        {
          resp = "2-8"
        }
        else if(value === "More than 8 weeks")
        {
          resp = ">8"
        
        }
      }
    }
    const response = await fetch('https://srinivasmekala.me/api/v1/sleep/assessment/struggle-period', {
      method : 'POST',
      mode : 'cors',
      headers : {
        'Content-Type' : 'application/json',
        "Authorization" : "Bearer "+localStorage.getItem('token')
      },
      body: JSON.stringify({
        "sleep_struggle_period" : resp,
      })
    })
    console.log(response)
    if(response.status === 200)
    {
      const data = await response.json()
      console.log(data)
      setShowCurrent(false)
      setshowNew(true)
    }
  }
  return (
    <div className="bg-[#00001d] h-screen rounded-lg text-center p-4">
      {showCurrent && <div className="">

        <h2 className="text-white my-4">{"That's a great goal. How long have you been struggling with your sleep?"}</h2>
        <div id="options" className="flex flex-col justify-center items-center">
            <div onClick={handleClick}  className="cursor-pointer p-2 bg-[#0000ad] m-2 rounded-xl w-4/5 text-white flex justify-between">
              <span className='pointer-events-none' id="value">Less than 2 weeks</span> <span><img id="tick" src={tick} className={`w-4 hidden pointer-events-none`} alt="" /></span>
            </div>
            <div onClick={handleClick}  className="cursor-pointer p-2 bg-[#00007d] m-2 rounded-xl w-4/5 text-white flex justify-between">
              <span className='pointer-events-none' id="value">2 to 8 weeks</span> <span><img id="tick" src={tick} className={`w-4 hidden pointer-events-none`} alt="" /></span>
            </div>
            <div onClick={handleClick}  className="cursor-pointer p-2 bg-[#00003d] m-2 rounded-xl w-4/5 text-white flex justify-between">
              <span className='pointer-events-none' id="value">More than 8 weeks</span> <span><img id="tick" src={tick} className={`w-4 hidden pointer-events-none`} alt="" /></span></div>
        </div>
        <div id="submit" onClick={handleSubmit} className="cursor-pointer m-4 text-center bg-yellow-400 inline-block rounded-full"><img src={arrow} className='cursor-pointer pointer-events-none w-10' alt="" /></div>
      </div>}
        {showNew && <QTwo/>}
      
    </div>
  )
}

export default QOne
