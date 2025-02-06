import React, { useState } from "react";
import "./profile.css";
import BarNav from "../navbar/Navbar";
import { Container } from "react-bootstrap";



const Profile = () => {
   
{/* <BarNav/> */}
    const [profile, setProfile] = useState({
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "123-456-7890",
        address: "123 Main St, City, State",
        bio: "I am a mental health professional.",
        // profilePicture: "https://via.placeholder.com/150"
    });

    const handleChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            {/* <BarNav/> */}
        <div className="profile-container">
        <Container>  
            
            <h2>Profile</h2>
            <div className="profile-pic">
                <img src={profile.profilePicture} alt="Picture" />
            </div>
            <form>
                <label>Username:</label>
                <input type="text" name="name" value={profile.name} onChange={handleChange} />

                <label>Email:</label>
                <input type="email" name="email" value={profile.email} onChange={handleChange} />

                <label>Phone:</label>
                <input type="text" name="phone" value={profile.phone} onChange={handleChange} />

                {/* <label>Address:</label>
                <input type="text" name="address" value={profile.address} onChange={handleChange} /> */}

                <label>Bio:</label>
                <textarea name="bio" value={profile.bio} onChange={handleChange}></textarea>

                <button type="submit">Save Changes</button>
          
            </form>
            </Container>  
        </div>
        </div>
    );
};

export default Profile;