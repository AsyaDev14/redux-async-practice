import { Link } from 'react-router-dom'

export const Register = () => {
	return (
		<div className='grid place-content-center min-h-[80vh]'>
			<form className='bg-slate-600 flex flex-col gap-4 px-10 py-12 shadow-2xl rounded-md'>
				<input type='text' className='rounded-md px-4 py-1' placeholder='Enter the name...' />
				<input type='text' className='rounded-md px-4 py-1' placeholder='Enter the email...' />
				<input type='password' className='rounded-md px-4 py-1' placeholder='Enter the password...' />
				<button className='bg-white rounded-md hover:bg-blue-900 hover:text-white'>Register</button>
				<p className='text-white font-thin'>
					You already have account?{' '}
					<Link className='text-teal-500 font-bold underline' to='/login'>
						Login!
					</Link>
				</p>
			</form>
		</div>
	)
}
