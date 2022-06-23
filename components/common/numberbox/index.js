import React from 'react'



export default function NumberBox  ({ num, unit, flip })  {
    return (
        <div className="flex flex-col items-center ">
            
            <div className=" relative bg-transparent flex flex-col items-center 
            justify-center rounded-lg w-14 h-14  ">
                <div className="rounded-t-lg rounded-b-lg ring-2 w-full h-full"></div>

                <div className="text-3xl absolute text-yellow-400 z-10 font-bold  font-mono ">
                    {num}
                </div>

                <div className=" rounded-b-lg rounded-t-lg ring-2 w-full h-full"></div>

                <div className={`absolute  w-full h-1/2 top-0  rounded-t-lg z-5 ${flip ? 'animate-flip bg-gray-600' : 'bg-transparent'}`}></div>
         

            </div>
            <p className="text-lg mt-3 font-semibold text-blue-200  md:text-xl ">
                {unit}
            </p>
        </div>
    )
}
