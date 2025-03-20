
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Download, Search } from "lucide-react";
import { toast } from "sonner";

interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  imageUrl: string;
  availability: boolean;
}

interface BookCatalogProps {
  category: string;
  onClose: () => void;
}

const BookCatalog = ({ category, onClose }: BookCatalogProps) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  
  // Mock data for books
  useEffect(() => {
    // This would typically be an API call to get books by category
    const mockBooks: Book[] = [
      {
        id: 1,
        title: "The Constitution of India",
        author: "Dr. B.R. Ambedkar",
        category: "Academic Textbooks",
        imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        availability: true
      },
      {
        id: 2,
        title: "Annihilation of Caste",
        author: "Dr. B.R. Ambedkar",
        category: "Ambedkarite Literature",
        imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        availability: true
      },
      {
        id: 3,
        title: "Indian Polity",
        author: "M. Laxmikanth",
        category: "Competitive Exams",
        imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        availability: false
      },
      {
        id: 4,
        title: "Buddhism and Communism",
        author: "Various Authors",
        category: "Buddhism & Philosophy",
        imageUrl: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        availability: true
      },
      {
        id: 5,
        title: "Physical Geography",
        author: "Savindra Singh",
        category: "Academic Textbooks",
        imageUrl: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        availability: true
      },
      {
        id: 6,
        title: "General Science",
        author: "Various Authors",
        category: "General Knowledge",
        imageUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        availability: true
      },
      {
        id: 7,
        title: "Indian Art and Culture",
        author: "Nitin Singhania",
        category: "Competitive Exams",
        imageUrl: "https://images.unsplash.com/photo-1598618443855-232ee0f819f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        availability: true
      },
      {
        id: 8,
        title: "The Buddha and His Dhamma",
        author: "Dr. B.R. Ambedkar",
        category: "Buddhism & Philosophy",
        imageUrl: "https://images.unsplash.com/photo-1528784351875-d797d86873a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        availability: true
      }
    ];
    
    // Filter books by selected category if not "All"
    const categoryBooks = category === "All" 
      ? mockBooks 
      : mockBooks.filter(book => book.category === category);
    
    setBooks(categoryBooks);
    setFilteredBooks(categoryBooks);
  }, [category]);
  
  // Handle search functionality
  useEffect(() => {
    if (!searchTerm) {
      setFilteredBooks(books);
      return;
    }
    
    const results = books.filter(book => 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredBooks(results);
  }, [searchTerm, books]);
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  const handleDownloadCatalog = () => {
    // Generate catalog HTML with all books in the current category
    const catalogHTML = generateCatalogHTML(books, category);
    const blob = new Blob([catalogHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `Takshashil_Foundation_${category}_Catalog.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success("Catalog downloaded successfully!");
  };
  
  const generateCatalogHTML = (books: Book[], categoryName: string): string => {
    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    const booksHTML = books.map(book => `
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${book.title}</td>
        <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${book.author}</td>
        <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${book.category}</td>
        <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
          ${book.availability ? 
            '<span style="color: #10b981; font-weight: 500;">Available</span>' : 
            '<span style="color: #ef4444; font-weight: 500;">Not Available</span>'}
        </td>
      </tr>
    `).join('');
    
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Takshashil Foundation - Book Catalog</title>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          .letterhead {
            border-bottom: 2px solid #3b82f6;
            padding-bottom: 20px;
            margin-bottom: 30px;
          }
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .logo {
            font-size: 24px;
            font-weight: bold;
            color: #3b82f6;
          }
          .logo span {
            color: #fbbf24;
          }
          .contact-info {
            font-size: 14px;
            text-align: right;
            color: #6b7280;
          }
          h1 {
            color: #3b82f6;
            text-align: center;
            font-size: 24px;
            margin: 20px 0;
          }
          p {
            line-height: 1.6;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 30px 0;
          }
          th {
            background-color: #3b82f6;
            color: white;
            padding: 12px;
            text-align: left;
          }
          tr:nth-child(even) {
            background-color: #f3f4f6;
          }
          .footer {
            margin-top: 50px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            font-size: 14px;
            color: #6b7280;
            text-align: center;
          }
          .category-header {
            margin: 20px 0;
            padding: 10px;
            background-color: #dbeafe;
            border-left: 4px solid #3b82f6;
          }
        </style>
      </head>
      <body>
        <div class="letterhead">
          <div class="header">
            <div class="logo">Takshashil <span>Foundation</span></div>
            <div class="contact-info">
              <p>Email: contact@takshashil.org</p>
              <p>Phone: +91 9876543210</p>
              <p>Website: www.takshashil.org</p>
            </div>
          </div>
        </div>
        
        <h1>Book Catalog - ${categoryName === "All" ? "All Categories" : categoryName}</h1>
        
        <p>
          Date: ${date}
        </p>
        
        <p>
          This document contains a list of books available at the Takshashil Foundation Library. 
          Our mission is to provide free access to quality educational resources for all, 
          with a focus on empowering marginalized communities through knowledge.
        </p>
        
        <div class="category-header">
          <h2>${categoryName === "All" ? "Complete Book Listing" : categoryName + " Books"}</h2>
        </div>
        
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${booksHTML}
          </tbody>
        </table>
        
        <p>
          For more information about borrowing these books or visiting our library, 
          please contact us. Our library is open from Monday to Saturday, 9 AM to 6 PM.
        </p>
        
        <div class="footer">
          <p>Takshashil Foundation • Empowering Communities Through Education</p>
          <p>This catalog was generated on ${date}.</p>
        </div>
      </body>
      </html>
    `;
  };
  
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-takshashil-navy">
          {category} Books
        </h2>
        <Button variant="outline" onClick={onClose}>Close</Button>
      </div>
      
      <div className="mb-6">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search by title or author..."
            value={searchTerm}
            onChange={handleSearch}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      
      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBooks.map(book => (
            <div key={book.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-40 bg-gray-200 overflow-hidden">
                <img 
                  src={book.imageUrl} 
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-takshashil-navy truncate">{book.title}</h3>
                <p className="text-gray-600 text-sm">by {book.author}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    book.availability ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {book.availability ? 'Available' : 'Unavailable'}
                  </span>
                  <BookOpen className="h-4 w-4 text-takshashil-blue" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <BookOpen className="mx-auto h-12 w-12 text-gray-400 mb-3" />
          <h3 className="text-lg font-medium text-gray-900">No books found</h3>
          <p className="mt-1 text-sm text-gray-500">Try adjusting your search or category.</p>
        </div>
      )}
      
      <div className="mt-8 text-center">
        <Button 
          onClick={handleDownloadCatalog}
          className="bg-takshashil-blue hover:bg-takshashil-darkBlue"
        >
          <Download className="mr-2 h-4 w-4" />
          Download Complete Catalog
        </Button>
      </div>
    </div>
  );
};

export default BookCatalog;
