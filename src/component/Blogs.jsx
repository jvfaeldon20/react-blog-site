import React from 'react'
import '../assets/css/blogs.css'

function Blogs({blogs}) {
  return (
    <section className="card-container">
        {
          blogs.map((blog)=> {
            return(
              <div className='card-item' key={blog.id}>
                  <div className="card-main">
                      <h2 className='blog-title'>{blog.title}</h2>
                      <p className='blog-author'>by <span className='author-name'>{blog.author}</span> on {blog.date_posted}</p>
                      <p className='blog-content'>{blog.content}</p>
                  </div>               
                  <div className="card-footer">
                      <button className='btn btn-success'>Edit</button>
                      <button className='btn btn-danger'>Delete</button>
                  </div>        
              </div>
            )
          })
        }
    </section>
  )
}

export default Blogs