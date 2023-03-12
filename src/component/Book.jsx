import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Book = () => {

  const [books, setBooks] = useState([])

  useEffect(() => {

    const fetchBooks = async () => {
      try{
        const res = await axios.get('http://localhost:8800/books')
        setBooks(res.data)
      }
      catch(err){
        console.log(err)
      }
      
    }
    fetchBooks()
  },[])
  return (
    <>
    
    <div className='books'>
    <h1>Book Shop</h1>
    <div className='book_container'>
      {
        
        books.map(book => {
          return <div className='book' key={book.id}>
            <div className='cover'></div>
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            </div>
        })
      }
      </div>
      <button className='add'><Link className='link' to={'/add'}>Add Book</Link></button>
    </div>
    
    </>
  )
}

export default Book
