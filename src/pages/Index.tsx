
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Quote from "@/components/ui/Quote";
import StatCard from "@/components/home/StatCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Features Section */}
        <Features />

        {/* Quote Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Quote 
              quote="Education is the most powerful weapon which you can use to change the world."
              author="Dr. B.R. Ambedkar"
              className="max-w-3xl mx-auto"
            />
          </div>
        </section>
        
        {/* Statistics Section */}
        <section className="py-16 md:py-24 bg-takshashil-blue/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-takshashil-navy">
                Our <span className="text-takshashil-blue">Impact</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Through dedicated effort and community support, we've made a 
                significant impact on education accessibility.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <StatCard value={5000} suffix="+" label="Books Available" delay={0} />
              <StatCard value={1000} suffix="+" label="Students Supported" delay={200} />
              <StatCard value={50} suffix="+" label="Volunteers" delay={400} />
              <StatCard value={100} suffix="+" label="Success Stories" delay={600} />
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-takshashil-navy text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Us in Empowering Through Education
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Whether you want to volunteer, donate books, or support our mission 
                financially, your contribution makes a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-white hover:bg-gray-100 text-takshashil-navy px-6 py-6 text-base">
                  <Link to="/volunteer">
                    Become a Volunteer
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-6 text-base">
                  <a href="#">
                    Donate Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Programs Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-takshashil-navy">
                Our <span className="text-takshashil-blue">Programs</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer a range of educational programs designed to empower 
                marginalized communities and create opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:translate-y-[-5px]">
                <div className="h-48 bg-gradient-to-r from-takshashil-blue to-takshashil-lightBlue flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-takshashil-navy">
                    Free Library Access
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Access our collection of over 5,000 books including textbooks, 
                    novels, and specialized resources for competitive exams.
                  </p>
                  <Link to="/library" className="text-takshashil-blue font-medium inline-flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              <div className="glass-card rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:translate-y-[-5px]">
                <div className="h-48 bg-gradient-to-r from-takshashil-darkBlue to-takshashil-blue flex items-center justify-center">
                  <Award className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-takshashil-navy">
                    Scholarship Programs
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We help talented students from marginalized communities 
                    access higher education through our scholarship programs.
                  </p>
                  <Link to="/education" className="text-takshashil-blue font-medium inline-flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              <div className="glass-card rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:translate-y-[-5px]">
                <div className="h-48 bg-gradient-to-r from-takshashil-lightBlue to-blue-300 flex items-center justify-center">
                  <Users className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-takshashil-navy">
                    Community Workshops
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Regular workshops and seminars on various topics to 
                    enhance skills and awareness in our communities.
                  </p>
                  <Link to="/education" className="text-takshashil-blue font-medium inline-flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
