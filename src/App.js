import React from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Card from "./Components/Card"
import './style.css'

import Data from "./data.js"


export default function App() {
    const DataComp = Data.map((item)=>{
        return <Card 
        key={item.id}
        {...item}
        />
    })
    return (
        <div >
            <Navbar />
            <Hero />
            <section className="cards-list">
                {DataComp}
            </section>
        
            
        </div>
    )
}