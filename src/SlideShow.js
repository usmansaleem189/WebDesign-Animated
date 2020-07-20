import React from 'react';
import WebDesign from './gifs/WebDesign.png';
// import Flip from 'react-reveal/Flip';
import Tada from 'react-reveal/Tada';



export const SlideShow = () => {



    return (
        <div className="slideShowContainer">
            <div>
            <h2>A Complete Guide to WebDesign</h2>
            <p> It is a long established fact that a reader will be distracted
            by the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content
            here, content here', making it look like readable English. 
            </p>
        </div>
        <Tada>
        <img src={WebDesign} alt="Web Designing" height="30%"/>
        </Tada>
        </div>
    )
}
