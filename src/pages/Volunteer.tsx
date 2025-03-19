
import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Send, Book, Calendar, Users, Heart, Star, Pencil, HeartHandshake, School } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Define volunteer roles data
const roles = [
  {
    title: "Library Assistant",
    description: "Help manage our library resources, assist visitors in finding books, and maintain our catalog system.",
    commitment: "4-8 hours/week",
    icon: Book
  },
  {
    title: "Study Mentor",
    description: "Guide students in their studies, provide academic support, and help with exam preparation.",
    commitment: "6-10 hours/week",
    icon: School
  },
  {
    title: "Event Coordinator",
    description: "Plan and organize educational events, workshops, and community gatherings.",
    commitment: "Flexible",
    icon: Calendar
  },
  {
    title: "Outreach Volunteer",
    description: "Help spread awareness about our foundation's mission and connect with marginalized communities.",
    commitment: "3-6 hours/week",
    icon: HeartHandshake
  },
  {
    title: "Digital Content Creator",
    description: "Create educational content, manage social media, and help with our online presence.",
    commitment: "5-8 hours/week",
    icon: Pencil
  },
  {
    title: "Administrative Support",
    description: "Assist with day-to-day operations, record keeping, and general administrative tasks.",
    commitment: "4-8 hours/week",
    icon: Users
  }
];

// Define volunteer testimonials
const testimonials = [
  {
    quote: "Volunteering at Takshashil has been the most rewarding experience of my life. Seeing the impact of education on these young minds is truly transformative.",
    name: "Priya Sharma",
    role: "Library Assistant",
    duration: "2 years"
  },
  {
    quote: "As a study mentor, I've been able to share my knowledge while learning so much from the students. Their determination inspires me every day.",
    name: "Rajesh Kumar",
    role: "Study Mentor",
    duration: "1.5 years"
  },
  {
    quote: "The foundation provides a supportive environment where volunteers can truly make a difference. I'm proud to be part of such a meaningful initiative.",
    name: "Anjali Desai",
    role: "Event Coordinator",
    duration: "3 years"
  },
  {
    quote: "Working with Takshashil has helped me understand the power of education in transforming lives and communities. It's been an eye-opening journey.",
    name: "Vikram Singh",
    role: "Outreach Volunteer",
    duration: "1 year"
  }
];

const Volunteer = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    interest: "",
    experience: "",
    availability: "weekends",
    message: ""
  });

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate sending form data to email
      console.log("Sending volunteer form data:", formData);
      console.log("Form would be sent to: samyaks.cseb19@sbjit.edu.in");
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      toast({
        title: "Form Submitted",
        description: "Thank you for volunteering. We will get back to you soon.",
      });
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        interest: "",
        experience: "",
        availability: "weekends",
        message: ""
      });
      
      setFormSubmitted(true);
      
      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "There was an error submitting the form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-takshashil-blue/10 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-takshashil-navy">
                Become a <span className="text-takshashil-blue">Volunteer</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Join our team of dedicated volunteers and help us make education accessible 
                to all. Your time and skills can make a meaningful difference.
              </p>
              
              <div className="glass-card p-8 md:p-12 rounded-xl shadow-md mt-12 text-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-takshashil-navy text-center">
                  Volunteer Application
                </h2>
                
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-takshashil-navy">
                      Application Submitted Successfully!
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Thank you for your interest in volunteering with Takshashil Foundation. 
                      We'll review your application and contact you soon.
                    </p>
                    <Button 
                      onClick={() => setFormSubmitted(false)}
                      className="bg-takshashil-blue hover:bg-takshashil-darkBlue text-white"
                    >
                      Submit Another Application
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-takshashil-navy">
                        Personal Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                            First Name *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-takshashil-blue focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-takshashil-blue focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-takshashil-blue focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-takshashil-blue focus:border-transparent"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                            Address
                          </label>
                          <input
                            type="text"
                            id="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-takshashil-blue focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-takshashil-navy">
                        Volunteer Information
                      </h3>
                      <div className="space-y-6">
                        <div>
                          <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                            Areas of Interest *
                          </label>
                          <input
                            type="text"
                            id="interest"
                            value={formData.interest}
                            onChange={handleChange}
                            required
                            placeholder="e.g., Library management, Teaching, Event organization"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-takshashil-blue focus:border-transparent"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                            Relevant Experience
                          </label>
                          <input
                            type="text"
                            id="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            placeholder="Any previous volunteer or relevant work experience"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-takshashil-blue focus:border-transparent"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
                            Availability *
                          </label>
                          <select
                            id="availability"
                            value={formData.availability}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-takshashil-blue focus:border-transparent"
                          >
                            <option value="weekends">Weekends</option>
                            <option value="weekdays">Weekdays</option>
                            <option value="evenings">Evenings</option>
                            <option value="flexible">Flexible</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Why do you want to volunteer with us?
                          </label>
                          <textarea
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-takshashil-blue focus:border-transparent"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <Button 
                        type="submit"
                        className="bg-takshashil-blue hover:bg-takshashil-darkBlue text-white px-8 py-6 text-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                        <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Volunteer Roles Section */}
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
        
        {/* Volunteer Stories Section */}
        <section className="py-16 md:py-24 bg-takshashil-blue/5">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-takshashil-navy">
                  Volunteer <span className="text-takshashil-blue">Stories</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Hear from our volunteers about how their work has made a difference.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104-6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-gray-700 mb-4">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="text-sm font-semibold text-takshashil-navy">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {testimonial.role}, {testimonial.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Volunteer;
