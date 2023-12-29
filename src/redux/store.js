import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todos/slice'

export const store = configureStore({
	reducer: {
		todos: todoReducer,
	},
})
