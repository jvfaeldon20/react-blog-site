import React, { useState } from 'react'
import '../assets/css/form.css'

function Form() {
const [showAddBlog, setShowAddBlog] = useState(false);

const toggleAddBlog = () => {
    setShowAddBlog(!showAddBlog)
}

  return (
    <>
        <div className='action-container'>
            <button className='btn btn-success' onClick={toggleAddBlog}>New Blog</button>
            <select className='item-filter'>
                <option value="">data 1</option>
                <option value="">data 1</option>
                <option value="">data 1</option>
                <option value="">data 1</option>
            </select>
        </div>
        { showAddBlog &&
            <section className='form-container'>
                <form className='form'>
                    <p> 
                        <label htmlFor="title">Title</label>
                        <input type="text" id='title' name='title' placeholder='title' className='form-input'/>
                        <label htmlFor="author">Author</label>
                        <input type="text" id='author' name='author' placeholder='author' className='form-input'/>
                        <label htmlFor="date">Date</label>
                        <input type="date" id='date' name='date' placeholder='date' className='form-input'/>
                    </p>
                    <p>
                        <label htmlFor="content">Content</label><br/>
                        <textarea name="content" id="content" rows="7" className='form-textarea'></textarea>
                        <button className='btn btn-success'>Save</button>
                    </p>
                </form>
            </section> 
        }
    </>
  )
}

export default Form