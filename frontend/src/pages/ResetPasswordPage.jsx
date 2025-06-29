import React from 'react'
import { useForm } from 'react-hook-form'
import { ArrowRight, Loader2, Eye, EyeClosed } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { string, z } from 'zod'
import authStore from '../store/auth.store'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function ResetPasswordPage() {
    const resetPasswordSchema = z.object({
        verificationCode: string(),
        newPassword: string().min(8, "Password should be of min 8 characters."),
        confirmPassword: string().min(8, "Password should be of min 8 characters."),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(resetPasswordSchema) });

    const { isSending, resetPassword } = authStore();

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = async (data) => {
        try {
            const email = sessionStorage.getItem("emailForPasswordChange")
            data.email = email;
            console.log(data);
            await resetPassword(data);
            navigate("/login");
        } catch (error) {
            console.log("Error while changing password", error);
        }
    }







    return (
        <div className='flex flex-col justify-center items-center gap-y-15 text-white'>
            <div className='flex flex-col justify-center items-center'>
                <div className='text-3xl font-bold'>Set New Password</div>
                <div className='text-sm text-neutral-300 text-justify w-[304px]'>We have sent an email with verification code. If you don’t see it, please check your spam folder.</div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='bg-[#191919] text-white flex flex-col space-y-8 border w-[400px] rounded-xl border-neutral-600 px-5 py-10 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
                <div>
                    <label className="block">verifcation code </label>
                    <input type='text' className="text-sm font-medium px-2 py-1 w-[90%] mt-1 block border-2 border-gray-200 rounded-lg  focus:outline-none focus:border-blue-200 focus:shadow-sm focus:bg-blue-100 focus:text-black" name="verification code" placeholder='6x3abc' {...register("verificationCode")} required />
                </div>
                <div>
                    <label className="block">Password</label>

                    <div className='flex gap-2'>
                        <input type={showPassword ? `password` : `text`} className="text-sm font-medium px-2 py-1 w-[90%] mt-1 block border-2 border-gray-200 rounded-lg  focus:outline-none focus:border-blue-200 focus:shadow-sm focus:bg-blue-100 focus:text-black" name="newPassword" placeholder='At least 8 characters.' {...register("newPassword")} required />

                        <button onClick={(e) => {
                            e.preventDefault();
                            setShowPassword(!showPassword)
                        }} className='cursor-pointer'> {showPassword ? <EyeClosed color="#1e86ff" /> : <Eye color="#1e86ff" />} </button>
                    </div>
                </div>
                <div>
                    <label className="block">Password</label>

                    <div className='flex gap-2'>
                        <input type={showPassword ? `password` : `text`} className="text-sm font-medium px-2 py-1 w-[90%] mt-1 block border-2 border-gray-200 rounded-lg  focus:outline-none focus:border-blue-200 focus:shadow-sm focus:bg-blue-100 focus:text-black" name="confirmPassword" placeholder='At least 8 characters.' {...register("confirmPassword")} required />

                        <button onClick={(e) => {
                            e.preventDefault();
                            setShowPassword(!showPassword)
                        }} className='cursor-pointer'> {showPassword ? <EyeClosed color="#1e86ff" /> : <Eye color="#1e86ff" />} </button>
                    </div>
                </div>
                <button type='submit' className=' w-full flex justify-center items-center gap-3 cursor-pointer bg-orange-500 text-white px-10 py-2 mb-4 rounded-lg hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]' disabled={isSending}>Change Password {isSending ? (<Loader2 className='animate-spin' />) : <ArrowRight />}</button>
            </form>
        </div>
    )
}

export default ResetPasswordPage