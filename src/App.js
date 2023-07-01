import React,{useState} from 'react'
import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Blogs from './component/Blogs';
import BlogItems from './data/blog-post.json'

function App() {
const [blogs, setBlogs] = useState(BlogItems)

const deleteBlog = (id) => {
  setBlogs(blogs.filter((blog) => blog.id !== id))
}

const addBlog = (newBlog) => {
  setBlogs((prevBlogs) => [...prevBlogs, newBlog])
}

const updateBlog = (updateID, updateItem) => {
  setBlogs((prevBlogs) => 
    prevBlogs.map((blog) => blog.id === updateID ?  
      { ...blog, 
        title: updateItem.title,
        author: updateItem.author,
        date_posted: updateItem.date_posted,
        content: updateItem.content,
      } : blog
    )
  )
}

// useEffect(() => {
//   const fetchDatePosted = blogs.map(item => item.date_posted)
//   setDateFilter([...new Set(fetchDatePosted)])
// },[blogs])

return (
    <div className="App">
      <Navbar/>
      <Blogs
        blogs={blogs}
        onDeleteBlog={deleteBlog}
        onAddBlog={addBlog}
        onUpdateBlog={updateBlog} 
      />
      <Footer/>
    </div>
  );
}

export default App;
