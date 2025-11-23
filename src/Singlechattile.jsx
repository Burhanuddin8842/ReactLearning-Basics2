import React from 'react'

const Singlechattile = (props) => {
  return (
    <>
    <div className="grid grid-cols-10 w-full border p-3">
        <div className="col-span-2 flex justify-center items-center">
            <img src={props.personProfileImage} alt="" className="rounded-full h-[75%]" />
        </div>
        <div className="col-span-6 flex flex-col p-4 justify-center">
            <h3 className="text-lg font-bold font-sans capatalize mb-auto">{props.personName}</h3>
            <p className="text-sm font-light font-serif mt-auto w-full text-ellipsis">{props.personLastmessage}</p>
        </div>
        <div className="col-span-2 flex flex-col gap-4 justify-center">
            <p className="font-semibold text-gray-400 text-sm text-center">{props.lastMessageTime}</p>
            <span className="p-3 bg-green-500 w-[20px] h-[20px] rounded-full mx-auto flex justify-center items-center text-white font-bold text-sm">{props.unreadMessageCount}</span>
        </div>
    </div>
    </>
  )
}

export default Singlechattile