import React from 'react'
import "./Home.css"

import ProductList from './ProductList'
import Hero from './Hero'
export default function Home() {
    return (
        <div>
            <Hero />
            {/* ==================products===================== */}
            <ProductList />

        </div>
    )
}
