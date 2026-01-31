import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Menu,
  X,
  Layers,
  Cpu,
  PenTool,
  MessageSquare,
  Activity,
  ShieldCheck,
  Users,
  Briefcase,
  Smartphone,
  ShoppingCart,
  Compass,
  Code
} from 'lucide-react';
import crossbeamLogo from './assets/crossbeam-logo.png';

/* CROSSBEAM - Agency Website
   Tone: Quiet Authority, Elegant Minimalism
   Palette: Neutral (White, Black, Soft Greys)
*/

// --- Components ---

const Navigation = ({ activeSection, isScrolled, toggleMenu, isMenuOpen, scrollToSection }) => {
  const navLinks = [
    { name: 'Philosophy', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Engagement', id: 'how-we-work' },
    { name: 'Experience', id: 'experience' },
    { name: 'Careers', id: 'careers' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled || isMenuOpen
          ? 'bg-white border-gray-200 py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div
          onClick={() => scrollToSection('home')}
          className="cursor-pointer z-50"
        >
          <img
            src={crossbeamLogo}
            alt="Crossbeam"
            className={`h-12 transition-all duration-300 ${
              isScrolled || isMenuOpen ? '' : 'invert'
            }`}
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`text-xs font-bold uppercase tracking-widest transition-colors hover:opacity-70 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-black" />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-black' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-white transform transition-transform duration-300 ease-in-out z-40 flex flex-col justify-center px-8 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-2xl font-light text-black text-left hover:text-gray-600 transition-colors border-b border-gray-100 pb-4"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Abstract Structural Background */}
      <div className="absolute inset-0 opacity-50">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
          alt="Architectural Intersection"
          className="w-full h-full object-cover grayscale brightness-75"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-20">
        <div className="max-w-5xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
            Great products are built <br/>
            <span className="text-gray-400">at intersections.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed mb-10 font-light border-l-2 border-white/30 pl-6">
            CROSSBEAM defines, designs, and delivers digital products and experiences people love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              Work with us <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-4 border border-white/30 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-colors"
            >
              Our Philosophy
            </button>
          </div>
        </div>
      </div>

      {/* Ticker / Definition Teaser */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-black/80 backdrop-blur-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
          <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">
            Definition: Crossbeam [n.]
          </div>
          <div className="text-sm font-light text-gray-400 italic">
            "A horizontal support that distributes load and increases stability."
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionHeader = ({ title, subtitle, dark = false }) => (
  <div className="mb-16 md:mb-24">
    <h2 className={`text-xs font-bold uppercase tracking-[0.2em] mb-4 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
      {title}
    </h2>
    <h3 className={`text-3xl md:text-5xl font-light tracking-tight leading-tight max-w-3xl ${dark ? 'text-white' : 'text-gray-900'}`}>
      {subtitle}
    </h3>
  </div>
);

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Subtle Background Image */}
      <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2670&auto=format&fit=crop"
          alt="Structural Beams"
          className="w-full h-full object-cover grayscale"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
             <SectionHeader
              title="The Name"
              subtitle="Why Crossbeam?"
            />
            <div className="prose prose-lg text-gray-600 leading-relaxed font-light">
              <p className="mb-6 text-xl text-black">
                In architecture, a crossbeam is the horizontal support that runs perpendicular to the primary support structure to distribute load and increase stability.
              </p>
              <p>
                It's rarely the most visible part, but without it everything weakens. We exist to be that structure for our partners—providing the stability required to build ambitious products.
              </p>
            </div>
          </div>

          <div className="bg-gray-50/90 backdrop-blur-sm p-10 md:p-14 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Layers className="w-48 h-48" />
            </div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-black">What We Believe</h4>
            <div className="space-y-8">
              <p className="text-2xl md:text-3xl font-light text-gray-900 leading-tight">
                Great products are built at intersections.
              </p>
              <ul className="space-y-4">
                {[
                  "Between strategy and execution.",
                  "Between design and engineering.",
                  "Between ambition and constraint."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    <p className="text-lg text-gray-600 font-light">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Compass className="w-6 h-6" />,
      title: "Strategy & Planning",
      description: "Defining the path from ambition to execution."
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Product Design & UX",
      description: "Interfaces that feel intuitive and inevitable."
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Ecommerce",
      description: "Commerce systems built for scale and conversion."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "App Development",
      description: "Native and cross-platform mobile experiences."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Content & Copywriting",
      description: "Clarity over hype. Words that work."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Product Management",
      description: "Roadmap ownership and delivery rigor."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Product Engineering",
      description: "Robust architecture and clean, maintainable code."
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          title="What We Do"
          subtitle="Design and language stripped to essentials, letting products feel intuitive."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-10 hover:bg-gray-50 transition-colors group flex flex-col justify-between h-64 relative z-10">
              <div>
                <div className="mb-6 text-gray-400 group-hover:text-black transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h4>
              </div>
              <p className="text-gray-500 leading-relaxed text-sm border-t border-gray-100 pt-4">
                {service.description}
              </p>
            </div>
          ))}
          {/* Filler block to complete grid */}
          <div className="bg-white p-10 flex flex-col justify-center items-center text-center">
             <h4 className="text-xl font-bold mb-2">Need something bespoke?</h4>
             <p className="text-gray-500 text-sm mb-6">We adapt to complex requirements.</p>
             <a href="#contact" className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-opacity">
                Contact Us
             </a>
          </div>
          <div className="bg-gray-100 hidden lg:block"></div> {/* Spacer for 3-col grid alignment */}
        </div>
      </div>
    </section>
  );
};

const Methodology = () => {
  return (
    <section id="how-we-work" className="relative py-24 md:py-32 bg-black text-white overflow-hidden">
       {/* Subtle Background Image - Dark */}
       <div className="absolute inset-0 opacity-20 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop"
          alt="Dark Structure"
          className="w-full h-full object-cover grayscale invert"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          title="Engagement Models"
          subtitle="We adapt to how our partners need to build."
          dark={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: "Standalone Projects",
              desc: "Defined initiatives with clear scope and outcomes.",
              detail: "Best for: New product launches, rebrands, audits."
            },
            {
              title: "Dedicated External Teams",
              desc: "Embedded, long‑term teams aligned to a client's roadmap.",
              detail: "Best for: Ongoing product development, retained support."
            },
            {
              title: "Integrated Internal Teams",
              desc: "We plug directly into existing teams, tools, and workflows.",
              detail: "Best for: Capacity augmentation, skill-gap filling."
            }
          ].map((model, i) => (
            <div key={i} className="border-t border-white/20 pt-8 flex flex-col justify-between h-full group hover:border-white transition-colors duration-500 bg-black/50 backdrop-blur-sm p-4">
              <div>
                <div className="text-xs font-mono text-gray-500 mb-6">0{i+1}</div>
                <h4 className="text-2xl font-bold mb-4">{model.title}</h4>
                <p className="text-gray-400 mb-8 leading-relaxed font-light">{model.desc}</p>
              </div>
              <div className="text-xs text-gray-600 font-mono uppercase tracking-widest">
                {model.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 md:py-32 bg-white overflow-hidden">
       {/* Subtle Background Image - Light Intersections */}
       <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=2564&auto=format&fit=crop"
          alt="Architectural Lines"
          className="w-full h-full object-cover grayscale"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <SectionHeader
              title="Experience"
              subtitle="Quiet authority. Outcomes over hype."
            />
            <p className="text-lg text-gray-600 max-w-md leading-relaxed mb-8 font-light">
              We work with partners who value precision. Our tone is clean, precise, and optimistic. We let the work speak for itself.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
             {[
               { sector: "Fintech", type: "Platform Architecture" },
               { sector: "Healthcare", type: "Digital Product" },
               { sector: "Retail", type: "Global Ecommerce" },
               { sector: "Enterprise", type: "App Development" },
             ].map((caseStudy, i) => (
               <div key={i} className="aspect-square bg-gray-50/80 backdrop-blur-sm border border-gray-100 flex flex-col justify-end p-6 hover:bg-gray-100 transition-colors cursor-default">
                 <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">{caseStudy.sector}</div>
                 <div className="text-lg font-light text-gray-900 leading-tight">{caseStudy.type}</div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Careers = () => {
  return (
    <section id="careers" className="relative py-24 bg-gray-100 text-black overflow-hidden">
      {/* Subtle Background Image - Glass Structure */}
      <div className="absolute inset-0 opacity-[0.05] z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop"
          alt="Corporate Structure"
          className="w-full h-full object-cover grayscale"
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">Join Crossbeam</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
              We look for people comfortable in the intersections. Emotion is present but restrained. We value wonder, creativity, and empowerment—expressed through simplicity.
            </p>
            <div className="flex flex-wrap gap-8">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-black mb-3">Culture</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>Autonomy & Responsibility</li>
                  <li>Small, focused teams</li>
                  <li>Clarity over noise</li>
                </ul>
              </div>
            </div>
          </div>

          <a href="mailto:careers@crossbeam.agency" className="group flex items-center gap-4 text-black hover:text-gray-600 transition-colors">
            <div className="w-16 h-16 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
              <Briefcase className="w-6 h-6" />
            </div>
            <span className="text-lg font-medium">View Open Roles</span>
          </a>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-white overflow-hidden">
       {/* Subtle Background Image - Minimal Lines */}
      <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1488972685288-c3cc15799269?q=80&w=2670&auto=format&fit=crop"
          alt="Minimal Architecture"
          className="w-full h-full object-cover grayscale"
        />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tighter">Let's build structure.</h2>
          <p className="text-xl text-gray-500 font-light">
            If you're looking for a partner to deliver with clarity and accountability, we should talk.
          </p>
        </div>

        <form className="space-y-8 max-w-2xl mx-auto bg-white/50 backdrop-blur-sm p-8 rounded-lg border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Name</label>
              <input type="text" className="w-full bg-transparent border-b border-gray-200 py-3 text-lg focus:outline-none focus:border-black transition-colors" placeholder="Jane Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email</label>
              <input type="email" className="w-full bg-transparent border-b border-gray-200 py-3 text-lg focus:outline-none focus:border-black transition-colors" placeholder="jane@company.com" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Organization</label>
            <input type="text" className="w-full bg-transparent border-b border-gray-200 py-3 text-lg focus:outline-none focus:border-black transition-colors" placeholder="Company Ltd." />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Project Context</label>
            <textarea rows="4" className="w-full bg-transparent border-b border-gray-200 py-3 text-lg focus:outline-none focus:border-black transition-colors resize-none" placeholder="Tell us what you're trying to solve..."></textarea>
          </div>

          <div className="pt-8 text-center">
            <button type="submit" className="px-12 py-5 bg-black text-white font-bold tracking-widest text-xs uppercase hover:bg-gray-800 transition-all">
              Initiate Conversation
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <img src={crossbeamLogo} alt="Crossbeam" className="h-8" />
          <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">© {new Date().getFullYear()} Crossbeam Agency.</p>
        </div>

        <div className="flex gap-8 text-xs text-gray-500 font-bold uppercase tracking-widest">
          <button onClick={() => scrollToSection('home')} className="hover:text-black">Home</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-black">Philosophy</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-black">Contact</button>
          <span className="text-gray-300">|</span>
          <a href="#" className="hover:text-black">LinkedIn</a>
          <a href="#" className="hover:text-black">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = ['home', 'about', 'services', 'how-we-work', 'experience', 'careers', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      setIsMenuOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="font-sans text-gray-900 bg-white selection:bg-gray-200 selection:text-black">
      <Navigation
        activeSection={activeSection}
        isScrolled={isScrolled}
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
        scrollToSection={scrollToSection}
      />

      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Services />
        <Methodology />
        <Experience />
        <Careers />
        <Contact />
      </main>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default App;
