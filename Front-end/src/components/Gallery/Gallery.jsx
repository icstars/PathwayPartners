import React from 'react';
import './gallery.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import BarNav from "../navbar/Navbar";

// Import the first 10 images
import img1 from '../../assets/images/image1.jpg';
import img2 from '../../assets/images/image2.jpg';
import img3 from '../../assets/images/image3.jpg';
import img4 from '../../assets/images/image4.jpg';
import img5 from '../../assets/images/image5.jpg';
import img6 from '../../assets/images/image6.jpg';
import img7 from '../../assets/images/image7.jpg';
import img8 from '../../assets/images/image8.jpg';
import img9 from '../../assets/images/image9.jpg';
import img10 from '../../assets/images/image10.jpg';
 
// Import the next 11 images
import img11 from '../../assets/images/image11.jpg';
import img12 from '../../assets/images/image12.jpg';
import img13 from '../../assets/images/image13.jpg';
import img14 from '../../assets/images/image14.jpg';
import img15 from '../../assets/images/image15.jpg';
import img16 from '../../assets/images/image16.jpg';
import img17 from '../../assets/images/image17.jpg';
import img18 from '../../assets/images/image18.jpg';
import img19 from '../../assets/images/image19.jpg';
import img20 from '../../assets/images/image20.jpg';
import img21 from '../../assets/images/image21.jpg';

 
const Gallery = () => {

    return (
        <div>
             {/* <BarNav/> */}
        <div className="gallery-container">
           
            <h1>Gallery Page</h1>
            <p>Check out these photos:</p>
            <div className="gallery-grid">
                {/* First 10 images */}
                <img src={img1} alt="Photo 1" />
                <img src={img2} alt="Photo 2" />
                <img src={img3} alt="Photo 3" />
                <img src={img4} alt="Photo 4" />
                <img src={img5} alt="Photo 5" />
                <img src={img6} alt="Photo 6" />
                <img src={img7} alt="Photo 7" />
                <img src={img8} alt="Photo 8" />
                <img src={img9} alt="Photo 9" />
                <img src={img10} alt="Photo 10" />
 
                {/* Next 11 images */}
                <img src={img11} alt="Photo 11" />
                <img src={img12} alt="Photo 12" />
                <img src={img13} alt="Photo 13" />
                <img src={img14} alt="Photo 14" />
                <img src={img15} alt="Photo 15" />
                <img src={img16} alt="Photo 16" />
                <img src={img17} alt="Photo 17" />
                <img src={img18} alt="Photo 18" />
                <img src={img19} alt="Photo 19" />
                <img src={img20} alt="Photo 20" />
                <img src={img21} alt="Photo 21" />
            </div>
        </div>
        </div>
    );
}
 
export default Gallery;