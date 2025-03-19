
import { useEffect, useRef } from "react";

interface Book {
  id: number;
  x: number;
  y: number;
  rotation: number;
  color: string;
  size: number;
  speed: number;
  direction: number;
}

const FlyingBooks = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const booksRef = useRef<Book[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas to full width
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 400; // Fixed height
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Create books
    const colors = ["#335C81", "#274060", "#1B2845", "#5899E2", "#818FB4"];
    const createBooks = () => {
      const books: Book[] = [];
      const bookCount = Math.max(5, Math.floor(window.innerWidth / 200));
      
      for (let i = 0; i < bookCount; i++) {
        books.push({
          id: i,
          x: Math.random() * canvas.width,
          y: canvas.height + Math.random() * 400,
          rotation: Math.random() * 360,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 20 + Math.random() * 30,
          speed: 0.5 + Math.random() * 1.5,
          direction: Math.random() > 0.5 ? 1 : -1
        });
      }
      
      booksRef.current = books;
    };

    createBooks();

    // Draw book function
    const drawBook = (book: Book) => {
      if (!ctx) return;

      ctx.save();
      ctx.translate(book.x, book.y);
      ctx.rotate((book.rotation * Math.PI) / 180);

      // Book spine
      ctx.fillStyle = book.color;
      ctx.fillRect(-book.size/2, -book.size/6, book.size, book.size/3);
      
      // Book pages (slightly larger than spine)
      ctx.fillStyle = "#f0f0f0";
      ctx.fillRect(-book.size/2, -book.size/6, book.size * 0.9, -book.size/12);
      
      // Book cover
      ctx.strokeStyle = "#000";
      ctx.lineWidth = 0.5;
      ctx.strokeRect(-book.size/2, -book.size/6, book.size, book.size/3);
      
      ctx.restore();
    };

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      booksRef.current.forEach(book => {
        // Update position
        book.y -= book.speed;
        book.x += book.direction * (book.speed * 0.2);
        book.rotation += book.direction * 0.2;
        
        // Reset if off-screen
        if (book.y < -50) {
          book.y = canvas.height + Math.random() * 100;
          book.x = Math.random() * canvas.width;
        }
        
        // Draw the book
        drawBook(book);
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-[400px] pointer-events-none z-0 opacity-40"
    />
  );
};

export default FlyingBooks;
