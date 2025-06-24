import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function ProfilePage() {
    return (
        <div className='text-white min-h-screen py-12'>
            <div className='flex justify-center items-center gap-24'>
                <div><img className='rounded-[50%]' src="./user.png" alt="" /></div>
                <div className='flex flex-col gap-6'>
                    <div className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl'>Mayank Kumar</div>
                    <div className='text-xl text-neutral-200 font-semibold tracking-tighter'>abc@gmail.com</div>
                </div>
            </div>

            <div className='min-w-screen flex justify-center items-center mt-16'>
                <div className=' flex justify-center items-center p-16 rounded-2xl shadow-2xl'>
                    <div className='w-72 h-72 '>
                        <CircularProgressbar value={90} text={"60%"} styles={buildStyles({
                            pathColor: '#6b9df2', // Tailwind green-500
                            trailColor: '#e5e7eb', // Tailwind gray-200
                            textColor: '#fff', // Tailwind gray-800
                            textSize: '14px',
                            pathTransitionDuration: 0.5,
                        })} />
                    </div>
                </div>
            </div>
            <div className='min-w-screen flex justify-center items-center mt-16 gap-32'>
                <div className='bg-[#191919] flex justify-center items-center p-16 rounded-2xl shadow-2xl shadow-blue-500/20 border border-neutral-800'>
                    <div className='w-72 h-72 '>
                        <CircularProgressbar value={70} text={"60%"} styles={buildStyles({
                            pathColor: '#22c55e', // Tailwind green-500
                            trailColor: '#e5e7eb', // Tailwind gray-200
                            textColor: '#fff', // Tailwind gray-800
                            textSize: '14px',
                            pathTransitionDuration: 0.5,
                        })} />
                    </div>
                </div>


                <div className='bg-[#191919] flex justify-center items-center p-16 rounded-2xl shadow-2xl shadow-blue-500/20 border border-neutral-800'>
                    <div className='w-72 h-72 '>
                        <CircularProgressbar value={50} text={"50%"} styles={buildStyles({
                            pathColor: '#c4c522', // Tailwind green-500
                            trailColor: '#e5e7eb', // Tailwind gray-200
                            textColor: '#fff', // Tailwind gray-800
                            textSize: '14px',
                            pathTransitionDuration: 0.5,
                        })} />
                    </div>
                </div>



                <div className='bg-[#191919] flex justify-center items-center p-16 rounded-2xl shadow-2xl shadow-blue-500/20 border border-neutral-800'>
                    <div className='w-72 h-72 '>
                        <CircularProgressbar value={30} text={"30%"} styles={buildStyles({
                            pathColor: '#c53b22', // Tailwind green-500
                            trailColor: '#e5e7eb', // Tailwind gray-200
                            textColor: '#fff', // Tailwind gray-800
                            textSize: '14px',
                            pathTransitionDuration: 0.5,
                        })} />
                    </div>
                </div>



            </div>
        </div>
    )
}

export default ProfilePage