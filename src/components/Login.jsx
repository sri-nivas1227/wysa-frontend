import { useState } from 'react'
import arrow from '../assets/arrow-down.svg'

import QOne from './QOne'

const Login =  () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
    }
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [showNew, setshowNew] = useState(false)
    const [showCurrent, setShowCurrent] = useState(true)
    const handleSubmit = async ()=>{
        console.log(userName)
        console.log(password)

        const response = await fetch("https://srinivasmekala.me/api/v1/user/login", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: userName,
                password: password,
            })

        })
        console.log(response.status)
        if(response.status == 200 || response.status == 201){
            const data = await response.json()
            const token = data.token
            localStorage.setItem('token', token);
            setShowCurrent(false)
            setshowNew(true)
        }
        else if(response.status == 401){
            alert('Invalid Credentials')
        }
        
      }

  return (
    <div className="bg-[#00001d] w-full h-full flex justify-center items-center  rounded-lg text-center p-4">
       {showCurrent && <div>  
        <div className="flex h-1/2 flex-col items-center justify-center">
                <div className="">
                    <input type="text"  className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 outline-none" placeholder="Username" onChange={(e)=>setUserName(e.target.value)}  />
                </div>
                <div className="mx-auto">
                        <input type={isPasswordVisible ? "text" : "password"}  className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 outline-none" placeholder="password" onChange={(e)=>setPassword(e.target.value)}  />
                        <label className=" flex items-center ">
                            <input
                            type="checkbox"
                            className="mr-2 w-4 h-4"
                            checked={isPasswordVisible}
                            onChange={togglePasswordVisibility}
                            />
                            <span className="text-sm text-gray-600">Show password</span>
                        </label>
                </div>
            
        </div>
        <div id="submit" onClick={handleSubmit} className="cursor-pointer m-4 text-center bg-yellow-400 inline-block rounded-full"><img src={arrow} className='cursor-pointer pointer-events-none w-10' alt="" /></div>
        </div> }
        {showNew && <QOne/>}
    </div>
  )
}

export default Login
