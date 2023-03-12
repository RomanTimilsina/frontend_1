import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Update = () => {

  const [book, setBooks] = useState({
    title:"",
    desc:"",
    cover:"",
  })

  const navigate = useNavigate()
  const location = useLocation()

  const bookId = location.pathname.split('/')[2]
  console.log(bookId)
  console.log(book)

   const handleChange = (e) => {
    setBooks(prev => ({...prev,[e.target.name]:e.target.value})
    )
  }

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      await axios.put('http://localhost:8800/books/'+bookId,book)
      navigate('/books',{replace:'true'})
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='books'>
      <input type="text" placeholder='title' onChange={handleChange} className='input' name='title' />
      <input type="text" placeholder='desc' onChange={handleChange} className='input' name='desc' />
      <input type="text" placeholder='cover' onChange={handleChange} className='input' cover='cover' />
      <button className='add link' onClick={handleClick}>Update</button>
    </div>
  )
}

export default Update
