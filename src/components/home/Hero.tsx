
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 opacity-20 blur-3xl w-96 h-96 rounded-full bg-takshashil-blue animate-float" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 opacity-20 blur-3xl w-96 h-96 rounded-full bg-takshashil-gold animate-float-delay-1" />
      <div className="absolute bottom-1/2 right-1/4 opacity-10 blur-3xl w-48 h-48 rounded-full bg-takshashil-lightBlue animate-float-delay-2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-takshashil-blue/10 text-takshashil-blue text-sm font-medium animate-fade-in">
            Empowering Communities Through Education
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in delay-75">
            <span className="text-gradient">Knowledge is Liberty.</span> We Provide{" "}
            <span className="text-takshashil-blue">Free Education</span> For All
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-in delay-150 font-poppins">
            A community-driven foundation providing free library services and educational 
            resources to marginalized communities, inspired by the principles of 
            Dr. B.R. Ambedkar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-200">
            <Button asChild className="btn-primary">
              <Link to="/library">
                Explore Our Library
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="btn-secondary">
              <Link to="/about">
                Learn About Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
