
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

    // Handle animation end
    const timeout = setTimeout(() => {
      setShow(false);
      onComplete();
    }, 1000); // Match animation duration

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
      <div className="p-2 bg-takshashil-blue text-white rounded-full">
        <Truck className="h-6 w-6" />
      </div>
    </div>
  );
};

export default CartAnimation;
