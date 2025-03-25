import { ReactNode } from 'react';

interface ScreenReaderTextProps {
  children: ReactNode;
}

/**
 * Utility component for text that is only visible to screen readers
 * Important for accessibility while keeping visual design clean
 */
const ScreenReaderText = ({ children }: ScreenReaderTextProps) => {
  return (
    <span className="sr-only">{children}</span>
  );
};

export default ScreenReaderText; 