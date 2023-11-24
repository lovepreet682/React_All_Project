import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/myReducers/TodoSlice'

function AddTodo() {
    const [input, setInput] = useState()

    //use the useDispatch
    const dispatch = useDispatch()
    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }
    return (
        <>
            <div className="container">
                <form action="" onSubmit={addTodoHandler}>
                    <input value={input} onChange={(e) => { setInput(e.target.value) }} type="text" className='form-control' placeholder='enter your text' />
                    <button className='btn btn-primary'> Add Todo</button>
                </form>
            </div>
        </>
    )
}

export default AddTodo