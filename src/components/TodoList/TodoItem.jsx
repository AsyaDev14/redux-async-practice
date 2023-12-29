import React from 'react'

export const TodoItem = ({ text, id, completed }) => {
	return (
		<li className=' py-2 px-4 list-none border-2 border-black rounded-md flex justify-between items-center'>
			<div className='flex gap-2'>
				<input type='checkbox' />
				<h2>{text}</h2>
			</div>
			<div>
				<div className='flex gap-4'>
					<button className='border-2 border-black px-4 py-1 rounded-md hover:bg-green-500'>Edit</button>
					<button className='border-2 border-black px-4 py-1 rounded-md hover:bg-green-500'>Delete</button>
				</div>
			</div>
		</li>
	)
}
