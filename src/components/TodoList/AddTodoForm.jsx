import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export const AddTodoForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()
	const submit = data => {
		console.log(data)
		toast.success('you add item')
		reset()
	}
	return (
		<div>
			<form onSubmit={handleSubmit(submit)} className='flex gap-2 justify-center mb-2'>
				<div className='flex flex-col'>
					<input
						{...register('text', {
							required: 'This field is required!',
							minLength: {
								value: 3,
								message: 'This field must be more than 3 chars!',
							},
						})}
						className='border-2 border-black rounded-md p-1'
						placeholder='Enter the text...'
					/>
					{errors?.text && <span className='text-red-500 font-bold'>{errors.text.message}</span>}
				</div>
				<button className='border-2 border-black rounded-md p-1 hover:bg-black hover:text-white transition duration-200 cursor-pointer'>
					Add task
				</button>
			</form>
		</div>
	)
}
