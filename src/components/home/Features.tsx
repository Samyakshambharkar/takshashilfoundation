
import { useEffect, useRef } from "react";
import { Book, GraduationCap, Users, Heart } from "lucide-react";

const features = [
  {
    name: "Free Library Access",
    description:
      "Access to over 5,000 books including educational materials, novels, and specialized texts covering various subjects and interests.",
    icon: Book,
  },
  {
    name: "Education Programs",
    description:
      "Comprehensive study centers equipped with learning resources for competitive exams like JEE, NEET, Law, and more.",
    icon: GraduationCap,
  },
  {
    name: "Community Support",
    description:
      "Dedicated to supporting marginalized communities including SC, ST, and Dalit populations with educational resources.",
    icon: Users,
  },
  {
    name: "Ambedkarite Values",
    description:
      "Founded on the principles of Dr. B.R. Ambedkar, promoting education as the path to social equality and justice.",
    icon: Heart,
  },
];

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".animate-on-scroll");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("active");
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  return (
    <div className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-takshashil-navy">
            How We <span className="text-takshashil-blue">Empower</span> Communities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our foundation provides essential educational resources and support
            to help marginalized communities access quality education.
          </p>
        </div>

        <div
          ref={featuresRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className="glass-card p-6 rounded-xl shadow-md flex flex-col items-center text-center animate-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-14 w-14 rounded-full bg-takshashil-blue/10 flex items-center justify-center mb-5">
                <feature.icon className="h-7 w-7 text-takshashil-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-takshashil-navy">
                {feature.name}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
