import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
const EditPost = () => {
 const[title,setTitle]= useState('')
 const[category,setCategory]= useState('Uncategorized')
 const[description,setDescription]=useState('')
 const[thumbnail,setThumbnail]=useState('')

const POST_CATEGORIES = ["Agriculture","Business","Education","Entertainment","Art","Investment","Uncategorized","Weather"]

  return (
    <section className="create-post">
      <div className="container">
        <h2>Edit post</h2>
        <p className="form_error-message">Error message</p>
      <form className="form create-post_form">
        <input type='text' placeholder='Title' value={title} onChange={e =>setTitle(e.target.value)} autoFocus />
        <select name='category' value={category}onChange={e=>setCategory(e.target.value)} >
          {
              POST_CATEGORIES.map(cat => <option key={cat}>{cat}</option> )
          }       </select>

          <ReactQuill/>
          <input type='file' onChange={e => setThumbnail(e.target.files[0])} accept='png, jpg, jpeg' />
           <button type="submit" className='btn primary'> Edit </button>
      </form>
      
      </div>
    </section>
  )
}

export default EditPost