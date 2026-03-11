3D Image Rotation – React Gallery

A 3D-perspective React image carousel that dynamically fetches photos from Lorem Picsum
. This project explores React lifecycle behavior with a focus on managing side effects, timer cleanup, and mutable references using React Hooks.

🔗 Live Demo
https://rotating-images-gallery.netlify.app/

Table of Contents
Preview
Key Features
Tech Stack
Technical Deep Dive
Project Structure
Installation & Setup
License
Author

Preview
screenshots/rotating-gallery.png

Key Features
Dynamic 3D Transformation: Uses CSS perspective and rotateY to create a smooth rotating carousel effect.
Intelligent Auto-Rotation: Centralized timer logic manages automatic rotation while allowing manual overrides.
Manual Controls: Users can navigate using Previous, Next, and Pause/Play controls.
Accessibility (A11y): Descriptive alt attributes for images and semantic button controls.
Lifecycle Cleanup: Proper timer management prevents memory leaks during component unmount.
Responsive Design: Mobile-first layout built with fluid CSS styling.

Tech Stack
Technology	Purpose
React	Component-based UI framework
Vite	Fast development server and build tool
CSS3	3D transforms, perspective, and transitions
Lorem Picsum API	Dynamic image source


Technical Deep Dive
The core challenge of this project was managing a resetting timer pattern while allowing manual interruptions (Next / Prev) and a persistent Pause state.

Memory-Efficient Timer Management
Instead of naive setInterval implementations, the carousel uses useRef to maintain a mutable reference to the timer. This approach allows the application to clear and reset timers without triggering unnecessary component re-renders.

// Core lifecycle logic from Gallery.jsx
useEffect(() => {
  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);

    if (!isPaused) {
      timerRef.current = setTimeout(() => {
        setX((prevX) => prevX - 45);
      }, 3000);
    }
  };

  resetTimer();

  return () => clearTimeout(timerRef.current);
}, [x, isPaused]);

This effect responds to both carousel movement and pause state changes, ensuring consistent behavior while preventing timer collisions or memory leaks.

Project Structure
src/
 ├── components/
 │    └── Gallery.jsx
 ├── App.jsx
 ├── main.jsx
 └── index.css

 
Installation & Setup
Clone the repository:
git clone https://github.com/newdevmike22/image-rotation.git

Navigate into the project directory:
cd image-rotation

Install dependencies:
npm install
Start the development server:
npm run dev

Local development server:
http://localhost:5173


License
Distributed under the MIT License.

Author
Michael Dodson

GitHub:
https://github.com/newdevmike22
