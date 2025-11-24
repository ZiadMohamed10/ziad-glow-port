import { useCallback } from "react";

export const useRipple = () => {
  const createRipple = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const button = event.currentTarget;
    
    // Only create ripple in dark mode
    if (!document.documentElement.classList.contains('dark')) {
      return;
    }

    // Add ripple-container class if not present
    if (!button.classList.contains('ripple-container')) {
      button.classList.add('ripple-container');
    }

    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add("ripple");

    button.appendChild(ripple);

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  }, []);

  return { createRipple };
};
