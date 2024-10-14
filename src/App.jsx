
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'
import Header from './Components/Headers/Header'
import { useState } from 'react'


function App() {

  const [bookmarks, setBookmarks] = useState([])

  const handleAddToBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }
  return (
    <>

      <Header></Header>
      <div className='md:flex gap-2 max-w-7xl mx-auto'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
        <BookMarks bookmarks={bookmarks}></BookMarks>
       
      </div>
    </>
  )
}

export default App
