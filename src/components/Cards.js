import React from 'react'
import Single from "../assets/ce08a542-d6ff-4bc8-b49a-e01d463d5abd.svg";
import Double from "../assets/teamwork-and-two-friend-together-black-outline-18779.svg";
import Triple from "../assets/people-12349.svg";
const Cards = () => {
  return (
    <div name='resources' className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single}></img>
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center font-bold text-4xl'>$149</p>
                    <div>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Start trial</button>
                </div>
                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double}></img>
                    <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
                    <p className='text-center font-bold text-4xl'>$199</p>
                    <div>
                        <p className='py-2 border-b mx-8 mt-8'>1000 GB Storage</p>
                        <p className='py-2 border-b mx-8'>2 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 5 GB</p>
                    </div>
                    <button className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 bg-black'>Start trial</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single}></img>
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center font-bold text-4xl'>$249</p>
                    <div>
                        <p className='py-2 border-b mx-8 mt-8'>2500 GB Storage</p>
                        <p className='py-2 border-b mx-8'>4 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 5 GB</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Start trial</button>
                </div>
        </div>
    </div>
  )
}

export default Cards