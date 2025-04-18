
import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Mail, 
  PhoneCall, 
  Clock,
  Send,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate sending form data to email
      console.log("Sending form data:", formData);
      console.log("Form would be sent to: samyaks.cseb19@sbjit.edu.in");
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      toast({
        title: "Form Submitted",
        description: "Thank you for contacting us. We will get back to you soon.",
      });
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
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
        <section className="py-16 md:py-24 bg-takshashil-blue/5">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-takshashil-navy">
                  Contact <span className="text-takshashil-blue">Us</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Have questions or want to get involved? We'd love to hear from you.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <div className="glass-card p-8 rounded-xl shadow-md h-full">
                    <h2 className="text-2xl font-bold mb-6 text-takshashil-navy">
                      Get in Touch
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="h-12 w-12 rounded-full bg-takshashil-blue/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-6 w-6 text-takshashil-blue" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-takshashil-navy mb-1">
                            Our Location
                          </h3>
                          <p className="text-gray-600">
                            123 Education Street,<br />Knowledge City,<br />Maharashtra, India - 400001
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="h-12 w-12 rounded-full bg-takshashil-blue/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="h-6 w-6 text-takshashil-blue" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-takshashil-navy mb-1">
                            Email Us
                          </h3>
                          <p className="text-gray-600">
                            info@takshashil.org<br />
                            volunteer@takshashil.org
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="h-12 w-12 rounded-full bg-takshashil-blue/10 flex items-center justify-center flex-shrink-0">
                          <PhoneCall className="h-6 w-6 text-takshashil-blue" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-takshashil-navy mb-1">
                            Call Us
                          </h3>
                          <p className="text-gray-600">
                            +91 12345 67890<br />
                            +91 98765 43210
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="h-12 w-12 rounded-full bg-takshashil-blue/10 flex items-center justify-center flex-shrink-0">
                          <Clock className="h-6 w-6 text-takshashil-blue" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-takshashil-navy mb-1">
                            Opening Hours
                          </h3>
                          <p className="text-gray-600">
                            Monday - Saturday: 8:00 AM - 8:00 PM<br />
                            Sunday: 9:00 AM - 5:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <h3 className="font-semibold text-takshashil-navy mb-4">
                        Connect With Us
                      </h3>
                      <div className="flex space-x-4">
                        <a 
                          href="#" 
                          className="h-10 w-10 rounded-full bg-takshashil-blue/10 hover:bg-takshashil-blue/20 flex items-center justify-center transition-colors"
                        >
                          <svg className="h-5 w-5 text-takshashil-blue" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                          </svg>
                        </a>
                        <a 
                          href="#" 
                          className="h-10 w-10 rounded-full bg-takshashil-blue/10 hover:bg-takshashil-blue/20 flex items-center justify-center transition-colors"
                        >
                          <svg className="h-5 w-5 text-takshashil-blue" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                          </svg>
                        </a>
                        <a 
                          href="#" 
                          className="h-10 w-10 rounded-full bg-takshashil-blue/10 hover:bg-takshashil-blue/20 flex items-center justify-center transition-colors"
                        >
                          <svg className="h-5 w-5 text-takshashil-blue" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                          </svg>
                        </a>
                        <a 
                          href="#" 
                          className="h-10 w-10 rounded-full bg-takshashil-blue/10 hover:bg-takshashil-blue/20 flex items-center justify-center transition-colors"
                        >
                          <svg className="h-5 w-5 text-takshashil-blue" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="glass-card p-8 rounded-xl shadow-md">
                    <h2 className="text-2xl font-bold mb-6 text-takshashil-navy">
                      Send Us a Message
                    </h2>
                    
                    {formSubmitted ? (
                      <div className="text-center py-8">
                        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-takshashil-navy">
                          Message Sent Successfully!
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Thank you for reaching out to us. We will get back to you shortly.
                        </p>
                        <Button 
                          onClick={() => setFormSubmitted(false)}
                          className="bg-takshashil-blue hover:bg-takshashil-darkBlue text-white"
                        >
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                              First Name
                            </label>
                            <input
                              type="text"
                              id="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              required
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
                              value={formData.lastName}
                              onChange={handleChange}
                              required
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
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-takshashil-blue focus:border-transparent"
                            placeholder="Your email address"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                            Subject
                          </label>
                          <input
                            type="text"
                            id="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-takshashil-blue focus:border-transparent"
                            placeholder="Message subject"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Message
                          </label>
                          <textarea
                            id="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-takshashil-blue focus:border-transparent"
                            placeholder="Your message"
                          ></textarea>
                        </div>
                        
                        <div>
                          <Button 
                            type="submit"
                            className="bg-takshashil-blue hover:bg-takshashil-darkBlue text-white"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Sending..." : "Send Message"}
                            <Send className="ml-2 h-5 w-5" />
                          </Button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-takshashil-navy">
                  Our <span className="text-takshashil-blue">Location</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Visit us at our center to explore our facilities and resources.
                </p>
              </div>
              
              <div className="glass-card p-4 rounded-xl shadow-md overflow-hidden">
                {/* Placeholder for a map - in a real project, this would be a Google Maps embed */}
                <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-takshashil-blue mx-auto mb-3" />
                    <p className="text-gray-500">
                      Interactive map would be displayed here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-takshashil-blue/5">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-takshashil-navy">
                  Frequently Asked <span className="text-takshashil-blue">Questions</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Find answers to common questions about our foundation and services.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="glass-card p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-takshashil-navy">
                    What are the operating hours of the library?
                  </h3>
                  <p className="text-gray-600">
                    Our library is open from Monday to Saturday, 8:00 AM to 8:00 PM, 
                    and on Sundays from 9:00 AM to 5:00 PM. We remain closed on national 
                    holidays, which will be announced in advance.
                  </p>
                </div>
                
                <div className="glass-card p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-takshashil-navy">
                    Is membership required to use the library facilities?
                  </h3>
                  <p className="text-gray-600">
                    No, our library is free and open to all. However, we do encourage 
                    regular visitors to register as members, which helps us keep track 
                    of our impact and allows us to communicate with you about events 
                    and new resources.
                  </p>
                </div>
                
                <div className="glass-card p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-takshashil-navy">
                    How can I donate books to the foundation?
                  </h3>
                  <p className="text-gray-600">
                    We welcome book donations! You can drop off books at our center 
                    during operating hours, or contact us to arrange a pickup for 
                    larger donations. We particularly need academic textbooks, 
                    competitive exam preparation materials, and literature on social 
                    justice and equality.
                  </p>
                </div>
                
                <div className="glass-card p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-takshashil-navy">
                    Do you offer any scholarship programs?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we offer limited scholarships to outstanding students from 
                    marginalized communities. The application process typically opens 
                    twice a year. Please visit our Education page or contact us for 
                    more details on eligibility criteria and application deadlines.
                  </p>
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

export default Contact;
