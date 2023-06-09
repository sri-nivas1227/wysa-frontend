// import React from 'react'

const Score = (scoreObj) => {
     const score = scoreObj.score
  return (
    <div className='bg-[#00001d] text-white h-full flex justify-center items-center rounded-lg text-center p-4'>

        <h1 className="text-lg">Your Sleep Score is :
        <span className="text-xl font-semibold">{"  "+score}</span></h1>
        
    </div>
  )
}

export default Score
