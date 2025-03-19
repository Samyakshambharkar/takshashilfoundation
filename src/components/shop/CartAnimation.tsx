
import { useState, useEffect } from 'react';
import { Truck } from 'lucide-react';

interface CartAnimationProps {
  startPosition: { x: number; y: number };
  endPosition: { x: number; y: number };
  onComplete: () => void;
}

const CartAnimation = ({ startPosition, endPosition, onComplete }: CartAnimationProps) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Set CSS variables for animation
    document.documentElement.style.setProperty('--tx', `${endPosition.x - startPosition.x}px`);
    document.documentElement.style.setProperty('--ty', `${endPosition.y - startPosition.y}px`);

    // Handle animation end with longer duration
    const timeout = setTimeout(() => {
      setShow(false);
      onComplete();
    }, 1500); // Increased animation duration from 1000ms to 1500ms

    return () => clearTimeout(timeout);
  }, [endPosition, startPosition, onComplete]);

  if (!show) return null;

  return (
    <div 
      className="cart-animation"
      style={{ 
        left: `${startPosition.x}px`, 
        top: `${startPosition.y}px`,
      }}
    >
      <div className="p-3 bg-takshashil-blue text-white">
        <Truck className="h-10 w-10" />
      </div>
    </div>
  );
};

export default CartAnimation;
