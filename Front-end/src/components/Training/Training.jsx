import React from 'react';
import './training.css';
import BarNav from '../navbar/Navbar';
 
function Training() {
    
    return (
       <div>
        {/* <BarNav/> */}
        <div className="training-container">
             
            <h1>Training Videos</h1>
            <p>Enhance your knowledge with these training sessions:</p>
 
            <div className="video-grid">
                <div className="video-item">
                    <iframe
                        src="https://www.youtube.com/embed/r0yKVMgq3tk"
                        title="Training Video 1"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                    <p>Video 1: Introduction to Training</p>
                </div>
 
                <div className="video-item">
                    <iframe
                        src="https://www.youtube.com/embed/ZsEyrOWH6Mk"
                        title="Training Video 2"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                    <p>Video 2: Advanced Techniques</p>
                </div>
 
                <div className="video-item">
                    <iframe
                        src="https://www.youtube.com/embed/LddzREc6Rzc"
                        title="Training Video 3"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                    <p>Video 3: Step-by-Step Process</p>
                </div>
 
                <div className="video-item">
                    <iframe
                        src="https://www.youtube.com/embed/IaSpas9hWNQ"
                        title="Training Video 4"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                    <p>Video 4: Common Pitfalls</p>
                </div>
 
                <div className="video-item">
                    <iframe
                        src="https://www.youtube.com/embed/y75GWVsXOuM"
                        title="Training Video 5"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                    <p>Video 5: Expert Tips</p>
                </div>
 
                <div className="video-item">
                    <iframe
                        src="https://www.youtube.com/embed/PDN3f_UGgV8"
                        title="Training Video 6"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                    <p>Video 6: Final Thoughts</p>
                </div>
            </div>
        </div>
        </div>
    );
}
 
export default Training;