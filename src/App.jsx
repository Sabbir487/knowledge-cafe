import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddByBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <>

      <Header></Header>
      <div className='md:flex gap-6 md:max-w-7xl mx-auto'>
        <Blogs handleMarkAsRead={handleMarkAsRead} handleAddByBookmarks={handleAddByBookmarks}></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>

    </>
  )
}

export default App
