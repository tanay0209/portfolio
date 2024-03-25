'use client'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ShimmerButton } from '.'

interface FormDetails {
    email: string,
    subject: string,
    description?: string
}

function ContactForm() {
    const { reset, register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormDetails>()
    const onSubmit: SubmitHandler<FormDetails> = (data) => { reset() }
    return (
        <div className='flex flex-col justify-center items-center w-full mt-4'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 text-black w-1/2'>
                <input {...register("email", {
                    required: "Email address cannot be empty",
                })}
                    type="email"
                    placeholder='Enter your email'
                    className='rounded-sm bg-gray-200 focus:outline-0 p-2'
                />
                {errors.email && <span>Email cannot be empty</span>}

                <input {...register("subject", {
                    required: "Subject cannot be empty",
                })}
                    type="text"
                    className='rounded-sm bg-gray-200 focus:outline-0 p-2'
                    placeholder='Mail subject'
                />
                {errors.subject && <span>Subject cannot be empty</span>}

                <textarea {...register("description", {
                    required: "Body cannot be empty",
                })}
                    rows={10}
                    placeholder='Mail body'
                    className='rounded-sm bg-gray-200 focus:outline-0 p-2'
                />
                {errors.description && <span>Mail body cannot be empty</span>}
                <ShimmerButton text='Send mail' classname='text-white' />
            </form>
        </div>
    )
}

export default ContactForm
