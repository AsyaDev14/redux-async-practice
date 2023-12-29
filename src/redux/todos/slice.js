import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	items: [
		{ id: 1, text: 'Hello react', completed: false },
		{ id: 2, text: 'Hello redux', completed: false },
	],
	loading: false,
	error: null,
}

const slice = createSlice({
	name: 'todos',
	initialState,
})
export const todoReducer = slice.reducer
