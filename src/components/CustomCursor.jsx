// src/components/CustomCursor.js
import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);

  // Spring physics for the cursor's main position
  const cursorSpringConfig = { stiffness: 400, damping: 30, mass: 0.5 };
  const smoothPosition = {
    x: useSpring(-100, cursorSpringConfig),
    y: useSpring(-100, cursorSpringConfig),
  };
  
  // Spring physics for the size (for a softer size transition)
  const sizeSpringConfig = { stiffness: 400, damping: 25 };
  const smoothSize = useSpring(60, sizeSpringConfig);

  useEffect(() => {
    const onMouseMove = (e) => {
      smoothPosition.x.set(e.clientX);
      smoothPosition.y.set(e.clientY);
    };

    const onMouseEnter = (e) => {
      const hoverTarget = e.target.closest('[data-cursor-hover]');
      if (hoverTarget) {
        setIsHovering(true);
        const rect = hoverTarget.getBoundingClientRect();
        // Set the spring's target to the center of the element
        smoothPosition.x.set(rect.left + rect.width / 2);
        smoothPosition.y.set(rect.top + rect.height / 2);
        smoothSize.set(30);
      }
    };

    const onMouseLeave = (e) => {
      if (e.target.closest('[data-cursor-hover]')) {
        setIsHovering(false);
        smoothSize.set(60);
      }
    };
    
    // During a hover, we stop listening to the raw mouse move and let the spring rest at the target
    const targetElement = isHovering ? document.querySelector('[data-cursor-hover]:hover') : window;

    targetElement.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseEnter);
    document.addEventListener('mouseout', onMouseLeave);

    return () => {
      targetElement.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseEnter);
      document.removeEventListener('mouseout', onMouseLeave);
    };
  }, [isHovering, smoothPosition.x, smoothPosition.y, smoothSize]);

  const cursorVariants = {
    default: {
      backgroundColor: "rgba(255, 255, 255, 0.8)", // Light color for default state
    },
    hover: {
      backgroundColor: "rgba(0, 255, 255, 0.2)", // Cyan color on hover
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50"
      style={{
        width: smoothSize,
        height: smoothSize,
        translateX: smoothPosition.x,
        translateY: smoothPosition.y,
        x: '-50%', // Center the div on its position
        y: '-50%',
        mixBlendMode: 'difference',
        filter: 'blur(10px)',
      }}
      variants={cursorVariants}
      animate={isHovering ? 'hover' : 'default'}
      transition={{ type: 'tween', duration: 0.3 }}
    />
  );
};

export default CustomCursor;