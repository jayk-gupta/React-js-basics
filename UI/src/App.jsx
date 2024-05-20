import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'

function App() {
  return (
    <div className=" bg-bg bg-cover bg-center h-screen text-white">
      <NavBar />
        <h3 className="absolute bottom-0 p-16">
          Projection technology with AI is available for all models of cars
        </h3>
    </div>
  );
}

export default App