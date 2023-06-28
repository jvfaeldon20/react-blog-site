import React, { useState } from 'react'
import '../assets/css/form.css'
import { v4 as uuidv4 } from 'uuid';

function Form(props) {
const [showAddBlog, setShowAddBlog] = useState(false)
const [inputValues, setInputValues] = useState({
    title: "",
    author: "",
    date_posted: "",
    content: "",
    id: 0,
})

const handleInputChange = (e) => {
    setInputValues({...inputValues, [e.target.name]:e.target.value, id: uuidv4()})
}

const handleNewBlog = (e) => {
    e.preventDefault()
    props.onAddBlog(inputValues)
    resetInputFields()
    setShowAddBlog(false)
}

const handleFilterItems = (e) => {
    props.onFilter(e.target.value)
}

const resetInputFields = () => {
    setInputValues({
        title: "",
        author: "",
        date_posted: "",
        content: "",
        id: "",
    })
}

const toggleAddBlog = () => {
    setShowAddBlog(!showAddBlog)
}

  return (
    <>
        <div className='action-container'>
            <button className='btn btn-accent-1' onClick={toggleAddBlog}>New Blog</button>
            <div>
                <span>Filter by: </span>
                <select className='item-filter' id="date-filter" onChange={handleFilterItems}>
                    <option value="ALL">ALL</option>
                        {
                            props.dateFilterItems.map((date, i) => {
                                return <option value={date} key={i}>{date}</option>
                            })
                        }
                </select>
            </div>
        </div>
        { showAddBlog &&
            <section className='form-container'>
                <form className='form' onSubmit={handleNewBlog}>
                    <p> 
                        <label htmlFor="title">Title <span className="form-require-input">*</span></label>
                        <input type="text" id='title' name='title' className='form-input' onChange={handleInputChange} required />
                        <label htmlFor="author">Author <span className="form-require-input">*</span></label>
                        <input type="text" id='author' name='author' className='form-input' onChange={handleInputChange} required/>
                        <label htmlFor="date">Date <span className="form-require-input">*</span></label>
                        <input type="date" id='date' name='date_posted' className='form-input' onChange={handleInputChange} required/>
                    </p>
                    <p>
                        <label htmlFor="content">Content <span className="form-require-input">*</span></label><br/>
                        <textarea name="content" id="content" rows="7" className='form-textarea' onChange={handleInputChange} required></textarea>
                        <button type='submit' className='btn btn-success'>Save</button>
                    </p>
                </form>
            </section> 
        }
    </>
  )
}

export default Form 