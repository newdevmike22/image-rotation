import { useEffect, useRef, useState } from "react";

const images = ["https://picsum.photos/id/110/300/200", "https://picsum.photos/id/249/300/200", "https://picsum.photos/id/276/300/200", "https://picsum.photos/id/202/300/200", "https://picsum.photos/id/299/300/200", "https://picsum.photos/id/206/300/200", "https://picsum.photos/id/404/300/200", "https://picsum.photos/id/316/300/200"];

const Gallery = () => {
  const [x, setX] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // New state for pause
  const timerRef = useRef(null);

  // Function to clear existing timer and start a new one
  const resetTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    // Only start a new timer if NOT paused
    if (!isPaused) {
      timerRef.current = setTimeout(() => {
        setX((prevX) => prevX - 45);
      }, 3000);
    }
  };

  useEffect(() => {
    resetTimer();
    // Cleanup timer on component unmount
    return () => clearTimeout(timerRef.current);
  }, [x, isPaused]); // Added isPaused as a dependency

  const handlePrev = () => {
    setX((prevX) => prevX + 45);
  };

  const handleNext = () => {
    setX((prevX) => prevX - 45);
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <div className="gallery-body">
      <div>
        <h1>Image Gallery</h1>
      </div>
      <div
        className="image-container"
        style={{
          transform: `perspective(1000px) rotateY(${x}deg)`,
        }}
      >
        {images.map((src, index) => (
          <span key={index} style={{ "--i": index + 1 }}>
            <img src={src} alt={`Gallery item ${index + 1}`} />
          </span>
        ))}
      </div>

      <div className="btn-container">
        <button className="btn" id="prev" onClick={handlePrev}>
          Prev
        </button>
        {/* Pause/Play Toggle Button */}
        <button className="pause-btn" onClick={togglePause} style={{ left: "50%", transform: "translateX(-50%)" }}>
          {isPaused ? "Play" : "Pause"}
        </button>
        <button className="btn" id="next" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Gallery;
