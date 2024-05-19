import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/avatar13.jpg'
import {FaEdit} from 'react-icons/fa'
import {FaCheck} from 'react-icons/fa'

const UserProfile = () => {
  const [avatar,setAvatar]=useState(Avatar)
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[currentPassword,setCurrentPassword]=useState('')
  const[newPassword,setNewPassword]=useState('')
  const[confirmnewPassword,setConfirmnewPassword]=useState('')
  return (
    <section className="profile">
      <div className="container profile_container">
        <Link to={`/dashboard`} className='btn'> My posts</Link>
     <div className="profile_details">
      <div className="avatar_wrapper">
        <div className="profile_avatar">
          <img src={avatar} alt=""/>
        </div>
{/* Form to update avatar */}
    <form className="avatar_form">
      <input type='file'name="avatar" id="avatar" onChange={e=> setAvatar(e.target.files[0])} accept='png, jpg, jpeg'/>
      <label htmlFor='avatar'><FaEdit/></label>
    </form>
    <button className="profile_avatar-btn"> <FaCheck/> </button>
      </div>
      <h1> YASmine</h1>
    {/* Form to update userdetails */}
    <form className="form profile_form">
      <p className="form_error-message">Error message</p>
      <input type='text' placeholder='Full name' value={name} onChange={e => setName(e.target.value)} />
      <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
      <input type='password' placeholder='Current password' value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />
      <input type='password' placeholder='New password' value={newPassword} onChange={e => setNewPassword(e.target.value)} />
      <input type='password' placeholder='Confirm new password' value={confirmnewPassword} onChange={e => setConfirmnewPassword(e.target.value)} />
    <button type="submit" className='btn primary'>Update details</button>
    </form>
    
     </div> 
    </div>
    </section>
    )
}

export default UserProfile