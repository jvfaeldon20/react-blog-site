import React, { useState, useMemo } from 'react'
import '../assets/css/blogs.css'
import '../assets/css/form.css'
import { v4 as uuidv4 } from 'uuid'

function Blogs({blogs, onDeleteBlog, onAddBlog, onUpdateBlog}) {
const [showForm, setShowForm] = useState(false)
const [allowEdit, setAllowEdit] = useState(false)
const [id, setID] = useState("")
const [title, setTitle] = useState("")
const [author, setAuthor] = useState("")
const [datePosted, setDatePosted] = useState("")
const [content, setContent] = useState("")
const [selectedFilter, setSelectedFilter] = useState("ALL")

const handleDeleteBlog = (id) => {
  onDeleteBlog(id)
}

const handleEditBlog = (blog) => {  
  setAllowEdit(true)
  setID(blog.id)
  setTitle(blog.title)
  setAuthor(blog.author)
  setDatePosted(blog.date_posted)
  setContent(blog.content)
  setShowForm(true)
}

const showAddBlog = (blog) => {
  setAllowEdit(false)
  resetInputs()
  setShowForm(true)
}

const handleUpdate = (e) => {
  e.preventDefault()
  onUpdateBlog(id,
    {
      title: title,
      author: author,
      date_posted: datePosted,
      content: content
    })
  setShowForm(false)
}

const handleSave = (e) => {
  e.preventDefault()
  onAddBlog({
    id: uuidv4(),
    title: title,
    author: author,
    date_posted: datePosted,
    content: content
  })

  resetInputs()
  setShowForm(false)
}

const handleTitleChange = (e) => {
  setTitle(e.target.value)
} 

const handleAuthorChange = (e) => {
  setAuthor(e.target.value)
} 

const handleDatePostedChange = (e) => {
  setDatePosted(e.target.value)
} 

const handleContentChange = (e) => {
  setContent(e.target.value)
} 

const resetInputs = () => {
  setID("")
  setTitle("")
  setAuthor("")
  setDatePosted("")
  setContent("")
}

const filterData = useMemo(() => {
  return Array.from(new Set(blogs.map((data) => data.date_posted))).map((date, i) => (
    <option key={i} value={date}>{date}</option>
  ));
},[blogs])


const filteredBlogs = selectedFilter === "ALL" ? blogs : blogs.filter(blog => blog.date_posted === selectedFilter);

  return (
      <div>
        <div className='action-container'>
            <button className='btn btn-success' onClick={showAddBlog} >New Blog</button>
            <div>
                <span>Filter by: </span>
                <select
                  className='item-filter' 
                  id="date-filter"
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                >
                  <option value="ALL">ALL</option>
                  {filterData}
                </select>
            </div>
        </div>
        
        {
          showForm &&
            <section className={allowEdit ? "form-container update" : "form-container save"}>
              <form
                key={id}
                className='form'
                onSubmit={allowEdit ?  handleUpdate : handleSave}  
              > 
                  <p> 
                      {/*BLOG TITLE*/} 
                      <label htmlFor="title">Title <span className="form-require-input">*</span></label>
                      <input 
                          type="text" 
                          id='title' 
                          name='title' 
                          className='form-input'
                          value={title}
                          onChange={handleTitleChange}
                          required 
                      />
                      
                      {/*BLOG AUTHOR*/} 
                      <label htmlFor="author">Author <span className="form-require-input">*</span></label>
                      <input 
                          type="text" 
                          id='author' 
                          name='author' 
                          className='form-input'
                          value={author}
                          onChange={handleAuthorChange}
                          required
                      />
                      
                      {/*BLOG DATE*/} 
                      <label htmlFor="date">Date <span className="form-require-input">*</span></label>
                      <input 
                          type="date" 
                          id='date' 
                          name='date_posted' 
                          className='form-input'
                          value={datePosted}
                          onChange={handleDatePostedChange}
                          required
                      />
                  </p>
                  <p>
                      {/*BLOG CONTENT*/} 
                      <label htmlFor="content">Content <span className="form-require-input">*</span></label><br/>
                      <textarea 
                          name="content" 
                          id="content" 
                          rows="7" 
                          className='form-textarea'
                          value={content}
                          onChange={handleContentChange}
                          required
                      ></textarea>
                      <button type='submit' className={allowEdit ? "btn accent-1" : "btn update"}>{allowEdit ? "Update" : "Save"}</button>
                      <button type='submit' className="btn btn-danger ml-5" onClick={() => setShowForm(false)}>Cancel</button>
                  </p>
              </form>
            </section>
        }

      {
        blogs.length > 0 ? (
          <section className="card-container">
            {
              filteredBlogs.map((blog)=> {
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
                          <button className='btn btn-success' onClick={() => handleEditBlog(blog)}>Edit</button>
                          <button className='btn btn-danger' onClick={() => handleDeleteBlog(blog.id)}>Delete</button>
                      </div>        
                  </div>
                )
              })
            }
          </section>
        ) : (
          <section className='card-no-data'>No Blog Content</section>
        )
      }

    </div>  
  )
}

export default Blogs