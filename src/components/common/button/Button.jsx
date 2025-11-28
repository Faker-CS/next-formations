import React from "react";

/**
 * Reusable Button component for Next.js with Tailwind
 * Props:
 * - variant: 'primary' | 'secondary' | 'ghost' | 'inactive' (default: 'primary')
 * - size: 'normal' | 'small' (default: 'normal')
 * - href: if provided, renders as <a> (for links)
 * - children: Button content
 * - className: Additional Tailwind classes
 * - ...props: Forwarded to the underlying element (e.g., onClick, disabled)
 */
export default function Button({
  variant = "primary",
  size = "normal",
  href,
  children,
  className = "",
  ...props
}) {
  // Base classes for all buttons
  let baseClasses = `
    inline-flex items-center justify-center gap-2
    font-lato font-bold text-button-large leading-none
    rounded-lg cursor-pointer transition-all duration-200 ease-in-out
    focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-principal-yellow
  `;

  // Size-specific classes
  const sizeClasses =
    size === "small" ? "px-4 py-2 text-sm" : "px-10 py-4 text-base";

  // Variant-specific classes (including hover and active states)
  let variantClasses = "";
  switch (variant) {
    case "primary":
      variantClasses = `
        bg-principal-gradient text-white border-none
        hover:bg-secondary-orange hover:text-white
        active:bg-secondary-orange active:text-bg-beige
      `;
      break;
    case "secondary":
      variantClasses = `
        bg-principal-dark-blue text-white border border-gray-100
        hover:bg-bg-light-blue hover:text-principal-dark-blue hover:border-secondary-light-blue
        active:bg-bg-light-blue active:text-principal-dark-blue active:border-secondary-light-blue
      `;
      break;
    case "ghost":
      variantClasses = `
        bg-white text-secondary-orange border-2 border-transparent
        bg-clip-padding [background-origin:border-box]
        border-principal-gradient
        hover:bg-secondary-orange hover:text-white hover:border-secondary-orange hover:-translate-y-0.5
        active:bg-secondary-orange active:text-bg-beige active:border-secondary-orange
      `;
      break;
    case "inactive":
      variantClasses = `
        bg-gray-200 text-gray-600 border-none cursor-not-allowed
        hover:bg-gray-200 hover:text-gray-600
        active:bg-gray-200 active:text-gray-600
      `;
      props.disabled = true; // Enforce disabled for inactive
      break;
    default:
      variantClasses = ""; // Fallback to base
  }

  // Combine all classes
  const classes =
    `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={props.type || "button"} className={classes} {...props}>
      {children}
    </button>
  );
}
