import React,{useState} from 'react'
import '../assets/css/blogs.css'
import { v4 as uuidv4 } from 'uuid';

function Blogs(props) {
const [showEditBlog, setShowEditBlog] = useState(false)
const [inputValues, setInputValues] = useState({
  title: "",
  author: "",
  date_posted: "",
  content: "",
  id: 0,
})

const handleDeleteBlog = (id) => {
  props.onDeleteBlog(id)
}

const handleEditBlog = (id) => {
  let getBlogData = props.blogs.find((blog) => blog.id === id)
  setInputValues({
    title: getBlogData.title,
    author: getBlogData.author,
    date_posted: getBlogData.date_posted,
    content: getBlogData.content,
    id: getBlogData.id,
  })
  setShowEditBlog(true)
}

const handleUpdateBlog = (e) => {
  e.preventDefault()
  props.onUpdateBlog(inputValues)  
}

const handleInputChange = (e) => {
  setInputValues({...inputValues, [e.target.name]:e.target.value, id: uuidv4()})
}

const toggleEditBlog = () => {
  setShowEditBlog(!showEditBlog)
}


  return (
    props.blogs.length > 0 ? (
      <>
      { showEditBlog &&
      <section className='form-container-edit'>
          <form className='form' onSubmit={handleUpdateBlog}>
              <p> 
                  <label htmlFor="title">Title <span className="form-require-input">*</span></label>
                  <input type="text" id='title' name='title' className='form-input' value={inputValues.title} onChange={handleInputChange} required/>
                  <label htmlFor="author">Author <span className="form-require-input">*</span></label>
                  <input type="text" id='author' name='author' className='form-input' value={inputValues.author} onChange={handleInputChange} required/>
                  <label htmlFor="date">Date <span className="form-require-input">*</span></label>
                  <input type="date" id='date' name='date_posted' className='form-input' value={inputValues.date_posted} onChange={handleInputChange} required/>
              </p>
              <p>
                  <label htmlFor="content">Content <span className="form-require-input">*</span></label><br/>
                  <textarea name="content" id="content" rows="7" className='form-textarea' value={inputValues.content} onChange={handleInputChange} required></textarea>
                  <button type='submit' className='btn btn-accent-1'>Update</button>
                  <button className='btn btn-danger' onClick={toggleEditBlog}>Cancel</button>
              </p>
          </form>
      </section> }  
      <section className="card-container">
            {
              props.blogs.map((blog)=> {
                let content   = blog.content;
                let substring = content.length > 220 ? `${content.substring(0,220)}...` : content

                return(
                  <div className='card-item' key={blog.id}>
                      <div className="card-main">
                          <h2 className='blog-title'>{blog.title}</h2>
                          <p className='blog-author'>by <span className='author-name'>{blog.author}</span> on <span className='author-name'>{blog.date_posted}</span> </p>
                          <p className='blog-content'>{substring}</p>
                      </div>               
                      <div className="card-footer">
                          <button className='btn btn-success' onClick={() => handleEditBlog(blog.id)}>Edit</button>
                          <button className='btn btn-danger' onClick={() => handleDeleteBlog(blog.id)}>Delete</button>
                      </div>        
                  </div>
                )
              })
            }
        </section>
      </>
    ) : (
     <section className='card-no-data'>No Blog Content</section>
    )  
  )
}

export default Blogs