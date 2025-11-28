import React from "react";
import PropTypes from "prop-types";

/**
 * DotNavigation Component
 * Displays a series of dots for carousel/slider navigation
 * 
 * @param {number} total - Total number of dots to display
 * @param {number} current - Current active index (0-based)
 * @param {function} onDotClick - Callback function when a dot is clicked
 * @param {string} activeColor - Custom color for active dot (default: secondary-light-blue)
 * @param {string} nextColor - Custom color for next dot (default: principal-dark-blue)
 * @param {string} inactiveColor - Custom color for inactive dots (default: gray-200)
 */
export default function DotNavigation({ 
  total, 
  current, 
  onDotClick,
  activeColor = "secondary-light-blue",
  nextColor = "principal-dark-blue",
  inactiveColor = "gray-200"
}) {
  const getDotColor = (index) => {
    if (index === current) return `bg-${activeColor}`;
    if (index === current + 1) return `bg-${nextColor}`;
    return `bg-${inactiveColor}`;
  };

  return (
    <div 
      className="flex flex-row justify-center items-center p-0 gap-[6px] w-[90px] h-[6px] mx-auto my-5"
    >
      {Array.from({ length: total }, (_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          aria-label={`Go to slide ${index + 1}`}
          className={`${getDotColor(index)} w-[6px] h-[6px] rounded-full border-none p-0 cursor-pointer transition-colors duration-300 ease-in-out`}
        />
      ))}
    </div>
  );
}

DotNavigation.propTypes = {
  total: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  onDotClick: PropTypes.func.isRequired,
  activeColor: PropTypes.string,
  nextColor: PropTypes.string,
  inactiveColor: PropTypes.string,
};