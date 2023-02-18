import React from "react"
import Image1 from '../images/image 28.png'
import Image2 from '../images/image 30.png'
import Image3 from '../images/image 26.png'
import Image4 from '../images/image 27.png'
import Image5 from '../images/image 29.png'
import Image6 from '../images/image 22.png'
import Image7 from '../images/image 23.png'
import Image8 from '../images/image 25.png'
import Image9 from '../images/image 24.png'

export default function Hero() {
    return (
    <div>
    <div className="Hero">
        <img  src={Image1} className="Hero-img1"/>
        <div className="Row1">
            <img  src={Image2} className="Hero-img2"/>
            <img  src={Image3} className="Hero-img3"/>
        </div>
        <div className="Row2">
            <img  src={Image4} className="Hero-img4"/>
            <img  src={Image5} className="Hero-img5"/>
        </div>    
        <div className="Row3">
            <img  src={Image6} className="Hero-img6"/>
            <img  src={Image7} className="Hero-img7"/>
        </div>
        <div className="Row4">
            <img  src={Image8} className="Hero-img8"/>
            <img  src={Image9} className="Hero-img9"/>
        </div>
        
    </div>
            <h1 className="Hero-h1">Online Experiences</h1>
            <h3 className="Hero-h3">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </h3>
    </div>
    )
}