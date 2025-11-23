import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring physics for the trailing ring
  const springConfig = { damping: 25, stiffness: 150 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device has a fine pointer (mouse/trackpad) to avoid showing on mobile
    const mediaQuery = window.matchMedia('(pointer: fine)');
    
    const handleDeviceChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsVisible(e.matches);
    };

    // Initial check
    handleDeviceChange(mediaQuery);

    // Listen for changes
    mediaQuery.addEventListener('change', handleDeviceChange);

    return () => mediaQuery.removeEventListener('change', handleDeviceChange);
  }, []);

  useEffect(() => {
    // If not on a device with a fine pointer, do not attach listeners or hide cursor
    if (!isVisible) return;

    // Hide default cursor globally when custom cursor is active
    document.documentElement.style.cursor = 'none';

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over interactive elements
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.cursor-hover-trigger')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      // Restore default cursor
      document.documentElement.style.cursor = 'auto';
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible, cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Primary Dot - Instant movement */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      
      {/* Secondary Ring - Trailing with spring physics */}
      <motion.div
        className="fixed top-0 left-0 border border-vi-red rounded-full pointer-events-none z-[9998]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? 48 : 24,
          height: isHovering ? 48 : 24,
          borderColor: isHovering ? '#E60000' : 'rgba(230, 0, 0, 0.5)',
          backgroundColor: isHovering ? 'rgba(230, 0, 0, 0.1)' : 'transparent',
          borderWidth: isHovering ? '2px' : '1px'
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
      />
    </>
  );
};