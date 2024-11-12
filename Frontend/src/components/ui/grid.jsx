import { useEffect, useRef } from 'react';

const Grid = () => {
  const gridRef = useRef(null);
  
  // Define our three colors
  const colors = [
    '#7CB9E8', // Light Blue
    '#007FFF', // Purple/Lavender
    '#0039a6'  // Yellow
  ];

  useEffect(() => {
    const circles = gridRef.current.children;
    
    // Animation function - changes all circles at once
    const animateColors = () => {
      [...circles].forEach(circle => {
        const newColor = colors[Math.floor(Math.random() * colors.length)];
        circle.style.backgroundColor = newColor;
      });
    };

    // Initial color assignment
    animateColors();

    // Set interval for simultaneous color changes
    const intervalId = setInterval(animateColors, 450); // Adjust timing as needed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div 
        ref={gridRef}
        className="grid grid-cols-12 gap-3"
      >
        {[...Array(96)].map((_, index) => (
          <div
            key={index}
            className="w-3 h-3 rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

export default Grid;
