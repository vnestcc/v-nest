import React from 'react';

/**
 * SectionHeading component for consistent heading styling across the website
 * @param {Object} props - Component props
 * @param {string} props.children - Heading text content
 * @param {string} props.className - Additional custom classes
 * @param {boolean} props.isHero - Whether this is the hero section (exempt from global styling)
 * @param {boolean} props.isFirstComponent - Whether this is the first component (exempt from global styling)
 */
const SectionHeading = ({ 
  children, 
  className = '', 
  isHero = false,
  isFirstComponent = false
}) => {
  // All headings use the same base styling
  const baseClasses = "text-5xl md:text-7xl font-bold text-white tracking-wide uppercase";
  
  // Determine which classes to apply based on exceptions
  let headingClass = '';
  
  if (isHero) {
    // For hero, use original styling without title-glow effect
    headingClass = `${baseClasses} ${className}`;
  } else if (isFirstComponent) {
    // For the first component, keep its original styling with title-glow effect
    headingClass = `${baseClasses} title-glow ${className}`;
  } else {
    // For all other sections, apply the consistent section heading style with title-glow effect
    headingClass = `${baseClasses} title-glow ${className}`;
  }
  
  return (
    <h1 className={headingClass}>
      {children}
    </h1>
  );
};

export default SectionHeading; 