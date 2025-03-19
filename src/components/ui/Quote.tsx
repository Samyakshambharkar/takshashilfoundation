
import React, { useEffect, useRef, useState } from "react";

interface QuoteProps {
  quote: string;
  author: string;
  className?: string;
}

const Quote = ({ quote, author, className = "" }: QuoteProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const quoteRef = useRef<HTMLDivElement>(null);

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

    if (quoteRef.current) {
      observer.observe(quoteRef.current);
    }

    return () => {
      if (quoteRef.current) {
        observer.unobserve(quoteRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={quoteRef}
      className={`${className} text-center animate-on-scroll ${isVisible ? 'active' : ''}`}
    >
      <div className="text-6xl text-takshashil-blue/20 font-serif leading-none mb-6">"</div>
      <blockquote>
        <p className="text-xl md:text-2xl font-medium text-gray-800 italic mb-6">
          {quote}
        </p>
        <footer className="text-lg text-takshashil-blue font-semibold">
          — {author}
        </footer>
      </blockquote>
      <div className="text-6xl text-takshashil-blue/20 font-serif leading-none mt-6">"</div>
    </div>
  );
};

export default Quote;
