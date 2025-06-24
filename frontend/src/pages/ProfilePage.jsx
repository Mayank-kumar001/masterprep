import React, { useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useEffect } from 'react';
import { axiosInstance } from '../lib/axios';
import toast from 'react-hot-toast';
import { Loader2 } from 'lucide-react';

function ProfilePage() {
    const [userReport, setUserReport] = useState(null);
    useEffect(() => {
        try {
            axiosInstance.get("/problem/get-report/").then((res) => setUserReport(res.data.data))
        } catch (error) {
            console.log("error while fetching user report")
            toast.error("Error while fetching the report")
        }
    },[])

    return (
        <div className='text-white min-h-screen py-12'>
            {userReport ? (<><div className='flex justify-center items-center gap-20 w-screen overflow-y-hidden'>
                {console.log(userReport)}
                <div><img className='rounded-[50%]' src="./user.png" alt="" /></div>
                <div className='flex flex-col gap-6'>
                    <div className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl'>Mayank Kumar</div>
                    <div className='text-xl text-neutral-200 font-semibold tracking-tighter'>abc@gmail.com</div>
                </div>
            </div>

            <div className='min-w-screen flex justify-center items-center'>
                <div className=' flex justify-center items-center p-16 rounded-2xl shadow-2xl'>
                    <div className='w-52 h-52 '>
                        <CircularProgressbar value={(userReport.totalSolvedProblems
 / userReport.totalProblems) * 100 } text={`${userReport.totalSolvedProblems}
 / ${userReport.totalProblems}`} styles={buildStyles({
                            pathColor: '#6b9df2', // Tailwind green-500
                            trailColor: '#e5e7eb', // Tailwind gray-200
                            textColor: '#fff', // Tailwind gray-800
                            textSize: '14px',
                            pathTransitionDuration: 0.5,
                        })} />
                    </div>
                </div>
            </div>
            <div className='min-w-screen flex justify-center items-center mt-4 gap-32'>
                <div className='bg-[#191919] flex justify-center items-center p-16 rounded-2xl shadow-2xl shadow-blue-500/20 border border-neutral-800'>
                    <div className='w-52 h-52 '>
                        <CircularProgressbar value={(userReport.totalSolvedEasyProblems
 / userReport.totalEasyProblems
) * 100 } text={`${userReport.totalSolvedEasyProblems}
 / ${userReport.totalEasyProblems}`} styles={buildStyles({
                            pathColor: '#22c55e', // Tailwind green-500
                            trailColor: '#e5e7eb', // Tailwind gray-200
                            textColor: '#fff', // Tailwind gray-800
                            textSize: '14px',
                            pathTransitionDuration: 0.5,
                        })} />
                    </div>
                </div>


                <div className='bg-[#191919] flex justify-center items-center p-16 rounded-2xl shadow-2xl shadow-blue-500/20 border border-neutral-800'>
                    <div className='w-52 h-52 '>
                        <CircularProgressbar value={(userReport.totalSolvedMediumProblems
 / userReport.totalMediumProblems) * 100 } text={`${userReport.totalSolvedMediumProblems}
 / ${userReport.totalMediumProblems}`} styles={buildStyles({
                            pathColor: '#c4c522', // Tailwind green-500
                            trailColor: '#e5e7eb', // Tailwind gray-200
                            textColor: '#fff', // Tailwind gray-800
                            textSize: '14px',
                            pathTransitionDuration: 0.5,
                        })} />
                    </div>
                </div>



                <div className='bg-[#191919] flex justify-center items-center p-16 rounded-2xl shadow-2xl shadow-blue-500/20 border border-neutral-800'>
                    <div className='w-52 h-52 '>
                        <CircularProgressbar value={(userReport.totalSolvedHardProblems
 / userReport.totalHardProblems) * 100 } text={`${userReport.totalSolvedHardProblems}
 / ${userReport.totalHardProblems}`} styles={buildStyles({
                            pathColor: '#c53b22', // Tailwind green-500
                            trailColor: '#e5e7eb', // Tailwind gray-200
                            textColor: '#fff', // Tailwind gray-800
                            textSize: '14px',
                            pathTransitionDuration: 0.5,
                        })} />
                    </div>
                </div>



            </div></>) : (
                <div className='flex justify-center items-center h-screen'><Loader2 className='animate-spin'></Loader2></div>
            )}
        </div>
    )
}

export default ProfilePage