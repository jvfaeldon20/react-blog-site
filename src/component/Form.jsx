import React, { useState } from 'react'
import '../assets/css/form.css'
import { v4 as uuidv4 } from 'uuid';

function Form({blogItem, allowEdit}) {
// const [showForm, setshowForm] = useState(false)
const [isEditing, setIsEditing] = useState(allowEdit)

// // edit items
// const {title, author, date_posted, content} = blogItem
// const [newTitle, setNewTitle] = useState(title)
// const [newAuthor, setNewAuthor] = useState(author)
// const [newDatePosted, setNewDatePosted] = useState(date_posted)
// const [newContent, setNewContent] = useState(content)

// console.log(isEditing, "-", newTitle, showForm)

// input state
// const [inputValues, setInputValues] = useState({
//     title: "",
//     author: "",
//     date_posted: "",
//     content: "",
//     id: 0,
// })

// const handleInputChange = (e) => {
//     setInputValues({...inputValues, [e.target.name]:e.target.value, id: uuidv4()})
// }

// const handleForm = (e) => {
//     e.preventDefault()

//     // insert conditional statement here for edit data
//     onAddBlog(inputValues)
//     resetInputFields()
//     setshowForm(false)
// }

// const handleFilterItems = (e) => {
//     onFilter(e.target.value)
// }

// const resetInputFields = () => {
//     setNewTitle("")
//     setNewAuthor("")
//     setNewDatePosted("")
//     setNewContent("")
// }

// const toggleAddBlog = () => {
//     setIsEditing(!isEditing)
// }

  return (
    <>
        <div className='action-container'>
            <button className='btn btn-accent-1'>New Blog</button>
            <div>
                <span>Filter by: </span>
                <select className='item-filter' id="date-filter">
                    <option value="ALL">ALL</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
        </div>
        { 
            <section className='form-container'>
                <form className='form'> 
                    <p> 
                        {/*BLOG TITLE*/} 
                        <label htmlFor="title">Title <span className="form-require-input">*</span></label>
                        <input 
                            type="text" 
                            id='title' 
                            name='title' 
                            className='form-input'
                            value={newTitle}
                            required 
                        />
                        
                        {/*BLOG AUTHOR*/} 
                        <label htmlFor="author">Author <span className="form-require-input">*</span></label>
                        <input 
                            type="text" 
                            id='author' 
                            name='author' 
                            className='form-input' 
                            required
                        />
                        
                        {/*BLOG DATE*/} 
                        <label htmlFor="date">Date <span className="form-require-input">*</span></label>
                        <input 
                            type="date" 
                            id='date' 
                            name='date_posted' 
                            className='form-input' 
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
                            required
                        ></textarea>
                        <button type='submit' className='btn btn-success'>Button</button>
                    </p>
                </form>
            </section> 
        }
    </>
  )
}

export default Form 