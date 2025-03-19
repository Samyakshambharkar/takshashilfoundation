
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Quote from "@/components/ui/Quote";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  GraduationCap,
  BookOpen,
  Users,
  Target,
  Clock,
  Calendar 
} from "lucide-react";
import { Link } from "react-router-dom";

const Education = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const examPrograms = [
    {
      name: "JEE Preparation",
      description: "Comprehensive study material and guidance for IIT-JEE aspirants.",
      icon: GraduationCap,
    },
    {
      name: "NEET Preparation",
      description: "Specialized resources for medical entrance examination preparation.",
      icon: GraduationCap,
    },
    {
      name: "Civil Services",
      description: "Study materials and mock tests for UPSC and state service examinations.",
      icon: GraduationCap,
    },
    {
      name: "Law Entrance",
      description: "Focused preparation for CLAT and other law entrance examinations.",
      icon: GraduationCap,
    },
  ];
  
  const workshops = [
    {
      title: "Digital Literacy",
      description: "Basic to advanced computer skills for the digital age.",
      date: "Every Saturday",
      time: "10:00 AM - 12:00 PM",
      icon: Calendar,
    },
    {
      title: "English Speaking",
      description: "English language skills for academic and professional success.",
      date: "Every Sunday",
      time: "11:00 AM - 1:00 PM",
      icon: Calendar,
    },
    {
      title: "Career Counseling",
      description: "Guidance on career paths and opportunities.",
      date: "First Sunday of Month",
      time: "3:00 PM - 5:00 PM",
      icon: Calendar,
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
                  Education <span className="text-takshashil-blue">Programs</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive educational support and resources for academic excellence.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block px-3 py-1 mb-4 rounded-full bg-takshashil-blue/10 text-takshashil-blue text-sm font-medium">
                    Our Approach
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-takshashil-navy">
                    Empowering Through Quality Education
                  </h2>
                  <p className="text-gray-600 mb-4">
                    At Takshashil Foundation, we believe that quality education is the key 
                    to breaking cycles of disadvantage. Our educational programs are designed 
                    to provide comprehensive support to students from marginalized communities.
                  </p>
                  <p className="text-gray-600 mb-6">
                    From competitive exam preparation to skill development workshops, 
                    our initiatives aim to equip learners with the knowledge, resources, 
                    and confidence needed to achieve academic excellence and secure better futures.
                  </p>
                  
                  <Button asChild className="bg-takshashil-blue hover:bg-takshashil-darkBlue text-white">
                    <Link to="/volunteer">
                      Join as a Volunteer Educator
                      <ChevronRight className="ml-1 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
                
                <div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-takshashil-blue/20 rounded-xl translate-x-4 translate-y-4"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Students at Takshashil Education Center" 
                      className="rounded-xl shadow-xl relative z-10 w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Competitive Exam Programs */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block px-3 py-1 mb-4 rounded-full bg-takshashil-blue/10 text-takshashil-blue text-sm font-medium">
                  Specialized Programs
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-takshashil-navy">
                  Competitive Exam <span className="text-takshashil-blue">Preparation</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  We offer specialized resources and guidance for students preparing 
                  for various competitive examinations.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {examPrograms.map((program) => (
                  <div 
                    key={program.name}
                    className="glass-card p-6 rounded-xl shadow-md transition-transform duration-300 hover:translate-y-[-5px]"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="h-12 w-12 rounded-full bg-takshashil-blue/10 flex items-center justify-center flex-shrink-0">
                        <program.icon className="h-6 w-6 text-takshashil-blue" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-takshashil-navy">
                          {program.name}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {program.description}
                        </p>
                        <a href="#" className="text-takshashil-blue font-medium inline-flex items-center text-sm">
                          Learn more <ChevronRight className="ml-1 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Education Features */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="inline-block px-3 py-1 mb-4 rounded-full bg-takshashil-gold/10 text-takshashil-gold text-sm font-medium">
                    Study Center Features
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-takshashil-navy">
                    A Complete Learning Environment
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Our study centers are equipped with all necessary amenities to 
                    facilitate effective learning and academic growth.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="h-10 w-10 rounded-full bg-takshashil-blue/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <BookOpen className="h-5 w-5 text-takshashil-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-takshashil-navy mb-1">Reference Materials</h3>
                        <p className="text-gray-600 text-sm">
                          Comprehensive collection of textbooks, question banks, and study guides
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="h-10 w-10 rounded-full bg-takshashil-blue/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Users className="h-5 w-5 text-takshashil-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-takshashil-navy mb-1">Volunteer Mentors</h3>
                        <p className="text-gray-600 text-sm">
                          Guidance from experienced educators and professionals
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="h-10 w-10 rounded-full bg-takshashil-blue/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Target className="h-5 w-5 text-takshashil-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-takshashil-navy mb-1">Mock Tests</h3>
                        <p className="text-gray-600 text-sm">
                          Regular practice tests and assessments for exam preparation
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="h-10 w-10 rounded-full bg-takshashil-blue/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Clock className="h-5 w-5 text-takshashil-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-takshashil-navy mb-1">Extended Hours</h3>
                        <p className="text-gray-600 text-sm">
                          Open for long hours to accommodate different study schedules
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 md:order-2">
                  <img 
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Takshashil Study Center" 
                    className="rounded-xl shadow-xl w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Workshops Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-takshashil-navy">
                  Regular <span className="text-takshashil-blue">Workshops</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Enhance your skills with our regularly scheduled workshops on various topics.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {workshops.map((workshop) => (
                  <div 
                    key={workshop.title}
                    className="glass-card p-6 rounded-xl shadow-md transition-transform duration-300 hover:translate-y-[-5px]"
                  >
                    <div className="h-12 w-12 rounded-full bg-takshashil-blue/10 flex items-center justify-center mb-4">
                      <workshop.icon className="h-6 w-6 text-takshashil-blue" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-takshashil-navy">
                      {workshop.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {workshop.description}
                    </p>
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-1">
                        <Calendar className="h-4 w-4" />
                        <span>{workshop.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>{workshop.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <Button asChild className="bg-takshashil-blue hover:bg-takshashil-darkBlue text-white">
                  <Link to="/contact">
                    Register for a Workshop
                    <ChevronRight className="ml-1 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Quote Section */}
        <section className="py-16 md:py-24 bg-takshashil-blue/5">
          <div className="container mx-auto px-4">
            <Quote 
              quote="The education which does not help the common mass of people to equip themselves for the struggle for life, which does not bring out strength of character, a spirit of philanthropy, and the courage of a lion – is it worth the name?"
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

export default Education;
