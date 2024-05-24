import React from 'react'

const ProfilePage = async () => {
  
  return (
    <div className="container">
      <div className="bg-gray-200 p-4 rounded-lg">
      <div className="bg-gray-300 size-24 rounded-full p-4">avatar</div>
      <div>cover image</div>
      </div>
      <div>
        <input type="text" placeholder="username"/>
      </div>
      <div>
        <input type="text" placeholder="display name"/>
      </div>
      <div>
        <textarea name="" id="" placeholder="bio" ></textarea>
      </div>
      <button>Save Profile</button>
      <div>
        donations list...
      </div>
    </div>
  )
}

export default ProfilePage