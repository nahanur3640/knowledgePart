
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'
import Header from './Components/Headers/Header'

function App() {
  return (
    <>
      <Header></Header>
      <div className='md:flex gap-2 '>
        <Blogs></Blogs>
        <BookMarks></BookMarks>
      </div>
    </>
  )
}

export default App
