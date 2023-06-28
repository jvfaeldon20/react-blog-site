import React,{useState, useEffect} from 'react'
import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Blogs from './component/Blogs';
import Form from './component/Form';
import BlogItems from './data/blog-post.json'

function App() {
const [blogs, setBlogs] = useState(BlogItems)
const [dateFilter, setDateFilter] = useState([])

const handleNewBlog = (newBlog) => {
  setBlogs((prevBlogs) => [...prevBlogs, newBlog])
}

const handleEditBlog = ({ id, title, author, date_posted, content }) => {
  setBlogs((prevBlogs) =>
    prevBlogs.map((blog) =>
      blog.id === id
        ? {
            ...blog,
            title: title,
            author: author,
            date_posted: date_posted,
            content: content,
          }
        : blog
    )
  );
};


const handleDeleteBlog = (id) => {
  setBlogs(blogs.filter((blog) => blog.id !== id))
}

const handleFilterItems = (option) => {
  console.log(option)
  if(option !== "ALL"){
    setBlogs(blogs.filter((blog) => blog.date_posted === option))
  }
} 

useEffect(()=>{
  let dateKeyItems = blogs.map(item => item.date_posted)
  setDateFilter([...new Set(dateKeyItems)])
}, [blogs])

  return (
    <div className="App">
      <Navbar/>
      <Form 
        dateFilterItems={dateFilter}
        onAddBlog={handleNewBlog}
        onFilter={handleFilterItems} 
      />
      <Blogs 
        blogs={blogs}
        onDeleteBlog={handleDeleteBlog} 
        onUpdateBlog={handleEditBlog}
      />
      <Footer/>
    </div>
  );
}

export default App;
