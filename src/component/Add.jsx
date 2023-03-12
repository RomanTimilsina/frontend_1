import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Add = () => {

  const [books, setBooks] = useState({
    title:"",
    desc:"",
    cover:""
  })
  console.log(books)

  const navigate = useNavigate()

   function handleChange(e){
    setBooks(prev => ({...prev,[e.target.name]:e.target.value})
    )
  }

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:8800/books',books)
      navigate("/books")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='books'>
      <input type="text" placeholder='title' onChange={handleChange} className='input' name='title' />
      <input type="text" placeholder='desc' onChange={handleChange} className='input' name='desc' />
      <input type="text" placeholder='cover' onChange={handleChange} className='input' cover='cover' />
      <button className='add link' onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add
