
import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
  delay?: number;
}

const StatCard = ({ 
  value, 
  suffix = "", 
  label, 
  duration = 2000, 
  delay = 0 
}: StatCardProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = Math.min(value, 9999);
    
    // First add a delay if specified
    const timer = setTimeout(() => {
      // Calculate the increment based on the duration
      const incrementTime = duration / end;
      
      // Use an interval to count up to the value
      const counter = setInterval(() => {
        start += 1;
        setCount(start);
        
        if (start >= end) {
          clearInterval(counter);
        }
      }, incrementTime);
      
      // Clean up the interval when the component unmounts
      return () => {
        clearInterval(counter);
      };
    }, delay);
    
    return () => clearTimeout(timer);
  }, [value, duration, isVisible, delay]);

  return (
    <div 
      ref={countRef} 
      className="glass-card p-6 rounded-xl shadow-md text-center animate-on-scroll"
    >
      <div className="text-3xl md:text-4xl font-bold text-takshashil-blue mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

export default StatCard;
