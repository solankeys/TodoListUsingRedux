import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import { addToDo, removeItems, clearItems } from '../../actions'
import './HomePage.css'

const HomePage = () => {
  const [inputData, setInputData] = useState('')
  const list = useSelector((state) => state.todoReducers.list)

  const dispatch = useDispatch()

  return (
    <div className='homepage'>
      <h1>Add your list here</h1>
      <div className='add-items'>
        <input
          type='text'
          placeholder=' Add items...'
          value={inputData}
          onChange={(event) => setInputData(event.target.value)}
        />
        <button onClick={() => dispatch(addToDo(inputData), setInputData(''))}>
          <AiOutlinePlus />
        </button>
      </div>
      <div className='todo-list'>
        {list.map((elem) => {
          return (
            <div key={elem.id} className='items-list'>
              <h3>{elem.data}</h3>
              <button onClick={() => dispatch(removeItems(inputData))}>
                <BsTrash />{' '}
              </button>
            </div>
          )
        })}
      </div>
      <div className='check-list'>
        <button onClick={() => dispatch(clearItems())}>Check list</button>
      </div>
    </div>
  )
}

export default HomePage
