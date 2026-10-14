import React, { useState } from 'react'

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80',
  ]

  const showPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', padding: '30px' }}>
      <h1 style={{ backgroundColor: 'black', color: 'white', padding: '12px 0', marginBottom: '20px' }}>
        Image Slider
      </h1>

      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={{
          width: '420px',
          height: '260px',
          objectFit: 'cover',
          borderRadius: '12px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
          marginBottom: '16px',
        }}
      />

      <div>
        <button
          onClick={showPrevious}
          style={{ marginRight: '12px', padding: '10px 18px', cursor: 'pointer' }}
        >
          Left
        </button>
        <button onClick={showNext} style={{ padding: '10px 18px', cursor: 'pointer' }}>
          Right
        </button>
      </div>
    </div>
  )
}

export default App