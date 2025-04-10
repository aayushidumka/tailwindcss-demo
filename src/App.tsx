import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // State to store profile data
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  // Reference for the file input
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Get the first file if available
    if (file) {
      setImageUrl(URL.createObjectURL(file)); // Create a URL for the image and store it in state
    }
  };

  // Trigger file input when profile image is clicked
  const handleProfileImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger file input click
    }
  };

  return (
    <>
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="profile-card bg-red-900 p-8 rounded-lg w-70 h-auto shadow-lg">
        {/* Profile image input */}
        <div className=" bg-blue-900 w-54 h-30 rounded-sm profile-image mb-8 flex justify-center hover:bg-black">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            ref={fileInputRef}
          />
        
          <div 
            onClick={handleProfileImageClick}
            className="profile-info m-4"
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <div className="flex justify-center items-center w-full h-full text-gray-400">
                <span className="text-2xl">+</span>
              </div>
            )}
          </div>
        </div>
          {/* Name input */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className= "w-full sm:w-45 md:w-54 p-4 border-3 border-blue-900 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* Bio textarea */}
          <div className="mb-6">
            <textarea
              rows={3}
              placeholder="Write a short bio about yourself..."
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full sm:w-45 md:w-54 p-4 border-3 border-blue-900 rounded-lg focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
        </div>

        {/* Save Changes Button */}
        <div className="w-full mt-4 p-6">
          <button className=" bg-blue-900 text-amber-200 border-4 rounded-lg hover:bg-black" >
            Save Changes
          </button>
        </div>
      </div>
    
    </>
  )
}

export default App
