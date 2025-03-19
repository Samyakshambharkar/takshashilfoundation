
import { useEffect, useRef } from "react";

interface QuoteProps {
  quote: string;
  author: string;
  className?: string;
}

const Quote = ({ quote, author, className = "" }: QuoteProps) => {
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
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
    <blockquote 
      ref={quoteRef} 
      className={`glass-card p-8 md:p-10 rounded-xl shadow-lg animate-on-scroll ${className}`}
    >
      <svg
        className="h-10 w-10 text-takshashil-gold mb-4 opacity-50"
        fill="currentColor"
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
      </svg>
      <p className="text-xl md:text-2xl font-medium mb-6 text-takshashil-navy">
        {quote}
      </p>
      <footer className="mt-2">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="h-10 w-1 bg-takshashil-gold rounded-full"></div>
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-takshashil-blue">{author}</p>
          </div>
        </div>
      </footer>
    </blockquote>
  );
};

export default Quote;
