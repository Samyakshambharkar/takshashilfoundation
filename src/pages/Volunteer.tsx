
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Quote from "@/components/ui/Quote";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  GraduationCap, 
  Calendar, 
  HelpingHand,
  Users,
  CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";

const Volunteer = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const roles = [
    {
      title: "Library Assistant",
      description: "Help manage our library, organize books, and assist visitors in finding resources.",
      icon: BookOpen,
      commitment: "4-8 hours per week",
    },
    {
      title: "Subject Mentor",
      description: "Share your knowledge by tutoring students in your area of expertise.",
      icon: GraduationCap,
      commitment: "2-6 hours per week",
    },
    {
      title: "Event Organizer",
      description: "Help plan and execute educational events, workshops, and community programs.",
      icon: Calendar,
      commitment: "Project-based",
    },
    {
      title: "Community Outreach",
      description: "Spread awareness about our foundation and help reach more people in need.",
      icon: HelpingHand,
      commitment: "Flexible",
    },
  ];
  
  const benefits = [
    "Opportunity to make a meaningful impact on marginalized communities",
    "Develop leadership and teaching skills",
    "Connect with like-minded individuals committed to social justice",
    "Gain experience in the education and non-profit sector",
    "Certificate of appreciation and letters of recommendation",
    "Regular volunteer appreciation events"
  ];

  const testimonials = [
    {
      quote: "Volunteering at Takshashil has been the most rewarding experience of my life. Seeing the direct impact of our work on students' lives is incredibly fulfilling.",
      name: "Priya Sharma",
      role: "Subject Mentor, 2 years",
    },
    {
      quote: "As a library assistant, I've witnessed firsthand how access to books can transform lives. The foundation does incredible work, and I'm proud to be part of it.",
      name: "Rahul Patel",
      role: "Library Assistant, 1 year",
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
                  Become a <span className="text-takshashil-blue">Volunteer</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Join our mission to empower communities through education and make a 
                  meaningful difference in the lives of others.
                </p>
              </div>
              
              <div className="glass-card p-8 md:p-10 rounded-xl shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                  <div>
                    <div className="inline-block px-3 py-1 mb-4 rounded-full bg-takshashil-gold/10 text-takshashil-gold text-sm font-medium">
                      Join Our Community
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-takshashil-navy">
                      Make an Impact Through Volunteering
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Takshashil Foundation relies on dedicated volunteers to help us 
                      fulfill our mission of providing free educational resources and 
                      support to marginalized communities.
                    </p>
                    <p className="text-gray-600 mb-6">
                      Whether you can commit to regular hours or occasional support, 
                      your contribution can make a significant difference in helping 
                      us create educational opportunities for those who need them most.
                    </p>
                    <Button asChild className="bg-takshashil-blue hover:bg-takshashil-darkBlue text-white">
                      <a href="#apply">
                        Apply Now
                        <Users className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                  
                  <div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-takshashil-blue/20 rounded-xl -translate-x-4 -translate-y-4"></div>
                      <img 
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                        alt="Volunteers at Takshashil Foundation" 
                        className="rounded-xl shadow-xl relative z-10 w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Volunteer Roles */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-takshashil-navy">
                  Volunteer <span className="text-takshashil-blue">Roles</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  We offer various volunteering opportunities based on your skills, 
                  interests, and availability.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {roles.map((role) => (
                  <div 
                    key={role.title}
                    className="glass-card p-6 rounded-xl shadow-md transition-transform duration-300 hover:translate-y-[-5px]"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="h-12 w-12 rounded-full bg-takshashil-blue/10 flex items-center justify-center flex-shrink-0">
                        <role.icon className="h-6 w-6 text-takshashil-blue" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-takshashil-navy">
                          {role.title}
                        </h3>
                        <p className="text-gray-600 mb-3">
                          {role.description}
                        </p>
                        <div className="inline-block px-3 py-1 rounded-full bg-takshashil-blue/10 text-takshashil-blue text-xs font-medium">
                          {role.commitment}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block px-3 py-1 mb-4 rounded-full bg-takshashil-blue/10 text-takshashil-blue text-sm font-medium">
                    Why Volunteer With Us
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-takshashil-navy">
                    Benefits of Volunteering
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Beyond the satisfaction of making a difference, volunteering with 
                    Takshashil Foundation offers numerous personal and professional benefits.
                  </p>
                  
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle2 className="h-6 w-6 text-takshashil-blue flex-shrink-0 mt-1" />
                        <p className="text-gray-700">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="space-y-6">
                    {testimonials.map((testimonial, index) => (
                      <div 
                        key={index}
                        className="glass-card p-6 rounded-xl shadow-md"
                      >
                        <svg
                          className="h-8 w-8 text-takshashil-gold mb-4 opacity-50"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="text-gray-700 mb-4">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex items-center">
                          <div className="ml-3">
                            <p className="text-sm font-semibold text-takshashil-navy">
                              {testimonial.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Application Form */}
        <section id="apply" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-takshashil-navy">
                  Apply to <span className="text-takshashil-blue">Volunteer</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Fill out the form below to express your interest in volunteering 
                  with Takshashil Foundation.
                </p>
              </div>
              
              <div className="glass-card p-8 rounded-xl shadow-md">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-takshashil-blue focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-takshashil-blue focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-takshashil-blue focus:border-transparent"
                      placeholder="Your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-takshashil-blue focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Role
                    </label>
                    <select
                      id="role"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-takshashil-blue focus:border-transparent"
                    >
                      <option value="">Select your preferred role</option>
                      <option value="library">Library Assistant</option>
                      <option value="mentor">Subject Mentor</option>
                      <option value="event">Event Organizer</option>
                      <option value="outreach">Community Outreach</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
                      Availability
                    </label>
                    <select
                      id="availability"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-takshashil-blue focus:border-transparent"
                    >
                      <option value="">Select your availability</option>
                      <option value="weekdays">Weekdays</option>
                      <option value="weekends">Weekends</option>
                      <option value="both">Both Weekdays and Weekends</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Why do you want to volunteer with us?
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-takshashil-blue focus:border-transparent"
                      placeholder="Tell us a bit about yourself and why you're interested in volunteering"
                    ></textarea>
                  </div>
                  
                  <div className="text-center pt-4">
                    <Button className="bg-takshashil-blue hover:bg-takshashil-darkBlue text-white px-6 py-6 w-full md:w-auto">
                      Submit Application
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* Quote Section */}
        <section className="py-16 md:py-24 bg-takshashil-blue/5">
          <div className="container mx-auto px-4">
            <Quote 
              quote="Be Educated, Be Organized, Be Agitated."
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

export default Volunteer;
