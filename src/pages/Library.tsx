
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Quote from "@/components/ui/Quote";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Search, Download, BookText } from "lucide-react";
import { Link } from "react-router-dom";

const Library = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const categories = [
    {
      name: "Academic Textbooks",
      count: 1500,
      icon: BookText,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Competitive Exams",
      count: 1200,
      icon: BookOpen,
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Ambedkarite Literature",
      count: 800,
      icon: BookOpen,
      color: "from-takshashil-blue to-takshashil-darkBlue",
    },
    {
      name: "General Knowledge",
      count: 600,
      icon: BookOpen,
      color: "from-green-500 to-green-600",
    },
    {
      name: "Novels & Fiction",
      count: 500,
      icon: BookOpen,
      color: "from-amber-500 to-amber-600",
    },
    {
      name: "Buddhism & Philosophy",
      count: 400,
      icon: BookOpen,
      color: "from-red-500 to-red-600",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-takshashil-blue/5">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-takshashil-navy">
                  Our <span className="text-takshashil-blue">Library</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Access over 5,000 books and educational resources completely free of charge.
                </p>
              </div>
              
              <div className="glass-card rounded-xl shadow-md overflow-hidden">
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-takshashil-navy">
                        Find the Perfect Book
                      </h2>
                      <p className="text-gray-600">
                        Explore our vast collection of resources for all your educational needs.
                      </p>
                    </div>
                    <div className="w-full md:w-auto">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Search for books..."
                          className="w-full md:w-80 px-4 py-3 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-takshashil-blue focus:border-transparent"
                        />
                        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-takshashil-navy">
                  Book <span className="text-takshashil-blue">Categories</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our library includes resources across various categories to support
                  diverse educational needs.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((category, index) => (
                  <div 
                    key={category.name}
                    className="glass-card rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:translate-y-[-5px]"
                  >
                    <div className={`h-24 bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                      <category.icon className="h-12 w-12 text-white" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-takshashil-navy">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        <span className="font-medium text-takshashil-blue">{category.count}+</span> resources available
                      </p>
                      <Button variant="outline" className="w-full border-takshashil-blue text-takshashil-blue hover:bg-takshashil-blue/5">
                        Explore Category
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Library Features */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-takshashil-navy">
                  Library <span className="text-takshashil-blue">Features</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our library is designed to provide a comfortable and productive 
                  learning environment for all visitors.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Takshashil Library Interior" 
                    className="rounded-xl shadow-xl w-full h-80 object-cover mb-8"
                  />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass-card p-4 rounded-lg">
                      <h3 className="font-semibold text-takshashil-navy mb-1">Quiet Study Areas</h3>
                      <p className="text-sm text-gray-600">Dedicated spaces for focused learning</p>
                    </div>
                    <div className="glass-card p-4 rounded-lg">
                      <h3 className="font-semibold text-takshashil-navy mb-1">Free Wi-Fi</h3>
                      <p className="text-sm text-gray-600">High-speed internet for research</p>
                    </div>
                    <div className="glass-card p-4 rounded-lg">
                      <h3 className="font-semibold text-takshashil-navy mb-1">Digital Resources</h3>
                      <p className="text-sm text-gray-600">Access to online educational materials</p>
                    </div>
                    <div className="glass-card p-4 rounded-lg">
                      <h3 className="font-semibold text-takshashil-navy mb-1">Study Groups</h3>
                      <p className="text-sm text-gray-600">Collaborative learning opportunities</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-takshashil-navy">
                      A Supportive Learning Environment
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Our library provides more than just books; it offers a nurturing 
                      space where students can focus, collaborate, and access resources 
                      that might otherwise be unavailable to them.
                    </p>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start space-x-3">
                        <div className="h-6 w-6 rounded-full bg-takshashil-blue/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="h-2 w-2 rounded-full bg-takshashil-blue"></div>
                        </div>
                        <p className="text-gray-700">
                          <span className="font-medium text-takshashil-navy">Comfortable seating</span> with proper lighting for extended study sessions
                        </p>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="h-6 w-6 rounded-full bg-takshashil-blue/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="h-2 w-2 rounded-full bg-takshashil-blue"></div>
                        </div>
                        <p className="text-gray-700">
                          <span className="font-medium text-takshashil-navy">Study materials</span> including stationery and reference books
                        </p>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="h-6 w-6 rounded-full bg-takshashil-blue/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="h-2 w-2 rounded-full bg-takshashil-blue"></div>
                        </div>
                        <p className="text-gray-700">
                          <span className="font-medium text-takshashil-navy">Mentorship support</span> from volunteer educators and professionals
                        </p>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="h-6 w-6 rounded-full bg-takshashil-blue/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="h-2 w-2 rounded-full bg-takshashil-blue"></div>
                        </div>
                        <p className="text-gray-700">
                          <span className="font-medium text-takshashil-navy">Regular workshops</span> on study techniques and exam preparation
                        </p>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-auto">
                    <Button asChild className="w-full bg-takshashil-blue hover:bg-takshashil-darkBlue text-white">
                      <Link to="/contact">
                        Visit Our Library
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Catalog Download */}
        <section className="py-16 md:py-24 bg-takshashil-navy text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Download Our Complete Book Catalog
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get a comprehensive list of all available books and resources in our library.
              </p>
              <Button className="bg-white hover:bg-gray-100 text-takshashil-navy px-6 py-6 text-base inline-flex items-center">
                Download Catalog
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Quote Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Quote 
              quote="I measure the progress of a community by the degree of progress which women have achieved."
              author="Dr. B.R. Ambedkar"
              className="max-w-3xl mx-auto"
            />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Library;
