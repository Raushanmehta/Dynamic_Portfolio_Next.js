import React from 'react'

const achivementList =[ 
    {
        metric: "Projects",
        value: "100+",
    },
    {
        metric: "User",
        value: "1M+",
    },
    {
        metric: "Award",
        value: "10+",
    },
    {
        metric: "Years",
        value: "5+",
    },
];

const Achivement = () => {
  return (
    <div className='bg-black/[0.96]'>
    <div className=' mx-4 md:py-20 '>
        <div className='border-[#33353f] border rounded-md  flex flex-row items-center justify-between ovrflow-auto md:mx-24'>
        {achivementList.map((Achivement,index)=>{
        return(
            <div key = {index} className='flex flex-col items-center justify-center mx-4 my-4'>
                <h2 className='text-white text-2xl md:text-4xl font-bold'>{Achivement.value}</h2>
                <p className='text-slate-300 md:text-semibold'>{Achivement.metric}</p>
            </div>
        );
    })}
    </div>
    </div>
    </div>
  )
}

export default Achivement;