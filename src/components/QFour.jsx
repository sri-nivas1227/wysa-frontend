import arrow from '../assets/arrow-down.svg'
import { useState } from 'react'
// import {TimePicker} from 'react-ios-time-picker'
import Score from './Score'

const QFour = (focus_hours) => {
  const estimated_sleep_hours = focus_hours.sleepHours
    const [selectedOption,setSelectedOption]  = useState(estimated_sleep_hours)
    const [score, setScore] = useState(0)
    const [showNew, setshowNew] = useState(false)
  const [showCurrent, setShowCurrent] = useState(true)
  const handleOptionChange = (event)=>{
    setSelectedOption(event.target.value)
  }
  const handleSubmit = async ()=>{
    console.log(selectedOption)
    const response = await fetch("https://srinivasmekala.me/api/v1/sleep/assessment/sleep-hours", {
      method: "POST",
      mode: "cors",
      headers : {
        "Content-Type" : "application/json",
        "Authorization" : "Bearer " + localStorage.getItem("token")
      },
      body : JSON.stringify({
        "sleep-hours" : selectedOption
      })
    })
    console.log(response.status)
    if(response.status === 200)
    {
      const data = await response.json()
      console.log(data)
      setScore(data.score)
      setShowCurrent(false)
      setshowNew(true)


    }
  }

  return (
    <div className="bg-[#00001d] h-screen rounded-lg text-center p-4">
        {showCurrent && <div className="">
          <h2 className="text-white my-4">{"Ok. How many hours sleep do you get in in a typical night?"}</h2>
          <div id="options" className="text-white border rounded-lg">
          {/* <label htmlFor="large" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Large select</label> */}
          <select id="" className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={selectedOption} onChange={handleOptionChange}>
            <option value="2">2 Hrs</option>
            <option value="3">3 Hrs</option>
            <option value="4">4 Hrs</option>
            <option value="5">5 Hrs</option>
            <option value='6'>6 Hrs</option>
            <option value="7">7 Hrs</option>
            <option value="8">8 Hrs</option>
            <option value="9">9 Hrs</option>
            <option value="10">10 Hrs</option>
            <option value="11">11 Hrs</option>
            <option value="12">12 Hrs</option>
          </select>
          </div>
          <div id="submit" onClick={handleSubmit} className="cursor-pointer m-4 text-center bg-yellow-400 inline-block rounded-full"><img src={arrow} className='cursor-pointer pointer-events-none w-10' alt="" /></div>
        </div>}
        {showNew && <Score score={score}/>}
    </div>
  )
}

export default QFour
