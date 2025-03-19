
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Quote from "@/components/ui/Quote";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ambedkarImageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Dr._Bhimrao_Ambedkar.jpg/800px-Dr._Bhimrao_Ambedkar.jpg";
  
  const values = [
    "Equal access to education for all regardless of caste or socioeconomic status",
    "Empowerment through knowledge and skill development",
    "Community service and support for marginalized populations",
    "Social justice and equality as advocated by Dr. B.R. Ambedkar",
    "Dignity and respect for all individuals",
    "Continuous learning and personal growth"
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
                  About <span className="text-takshashil-blue">Takshashil Foundation</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  A community-driven initiative providing free educational resources and 
                  library services to empower marginalized communities.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-takshashil-navy">
                    Our Story
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Takshashil Foundation was established with a vision to create equal 
                    educational opportunities for marginalized communities, including 
                    Scheduled Castes, Scheduled Tribes, and Dalits. Inspired by the 
                    principles of Dr. B.R. Ambedkar, we believe that education is the 
                    most powerful tool for social transformation.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Our journey began as a small community library and has grown into a 
                    comprehensive educational center with over 5,000 books and resources 
                    covering a wide range of subjects from academic textbooks to 
                    literature on social justice.
                  </p>
                  <p className="text-gray-600">
                    Today, we continue to expand our services and reach, guided by our 
                    commitment to empowerment through education and the teachings of 
                    Dr. Ambedkar.
                  </p>
                </div>
                
                <div className="order-1 md:order-2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-takshashil-blue/20 rounded-xl -translate-x-4 -translate-y-4"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Students at Takshashil Foundation" 
                      className="rounded-xl shadow-xl relative z-10 w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission & Vision */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="glass-card p-8 rounded-xl shadow-md">
                  <div className="inline-block px-3 py-1 mb-4 rounded-full bg-takshashil-blue/10 text-takshashil-blue text-sm font-medium">
                    Our Mission
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-takshashil-navy">
                    Empowering Through Education
                  </h2>
                  <p className="text-gray-600">
                    To provide free access to quality educational resources and create 
                    learning environments that empower marginalized communities to overcome 
                    social barriers and achieve their full potential.
                  </p>
                </div>
                
                <div className="glass-card p-8 rounded-xl shadow-md">
                  <div className="inline-block px-3 py-1 mb-4 rounded-full bg-takshashil-gold/10 text-takshashil-gold text-sm font-medium">
                    Our Vision
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-takshashil-navy">
                    A Just & Educated Society
                  </h2>
                  <p className="text-gray-600">
                    To foster a society where education is accessible to all, regardless 
                    of social background, and where knowledge serves as a catalyst for 
                    equality, dignity, and social justice as envisioned by Dr. B.R. Ambedkar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-takshashil-navy">
                  Our <span className="text-takshashil-blue">Core Values</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  These principles guide our work and define our approach to serving communities.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4">
                    <CheckCircle2 className="h-6 w-6 text-takshashil-blue flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Ambedkar Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block px-3 py-1 mb-4 rounded-full bg-takshashil-blue/10 text-takshashil-blue text-sm font-medium">
                    Our Inspiration
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-takshashil-navy">
                    Dr. B.R. Ambedkar's Legacy
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Our foundation is deeply inspired by the life and work of Dr. B.R. Ambedkar, 
                    a visionary leader, social reformer, and the chief architect of the 
                    Indian Constitution.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Dr. Ambedkar's emphasis on education as a tool for social emancipation 
                    and his commitment to justice and equality form the cornerstone of our 
                    foundation's philosophy and approach.
                  </p>
                  <p className="text-gray-600">
                    We strive to carry forward his vision by creating educational opportunities 
                    that challenge social hierarchies and empower the marginalized to become 
                    agents of change in society.
                  </p>
                </div>
                
                <div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-takshashil-gold/20 rounded-xl translate-x-4 translate-y-4"></div>
                    <img 
                      src={ambedkarImageUrl} 
                      alt="Dr. B.R. Ambedkar" 
                      className="rounded-xl shadow-xl relative z-10 w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Quote Section */}
        <section className="py-16 md:py-24 bg-takshashil-navy/5">
          <div className="container mx-auto px-4">
            <Quote 
              quote="Cultivation of mind should be the ultimate aim of human existence."
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

export default About;
