import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import crossbeamLogo from '../assets/crossbeam-logo.png';

const positions = [
  {
    title: 'Managing Director',
    description: 'Lead strategic direction and oversee operations across all client engagements. Drive growth while maintaining our commitment to excellence.',
    type: 'Leadership'
  },
  {
    title: 'Senior Recruiter',
    description: 'Build exceptional teams by identifying and attracting top talent. Partner with leadership to shape our growing organization.',
    type: 'Operations'
  },
  {
    title: 'Creative Director',
    description: 'Set the creative vision across projects. Lead design teams in delivering work that balances aesthetics with strategic outcomes.',
    type: 'Creative'
  },
  {
    title: 'Senior Copywriter',
    description: 'Craft compelling narratives that resonate. Transform complex ideas into clear, engaging content across all touchpoints.',
    type: 'Creative'
  },
  {
    title: 'Product Manager',
    description: 'Own product strategy and roadmap execution. Bridge business objectives with user needs to deliver impactful solutions.',
    type: 'Product'
  },
  {
    title: 'Designer',
    description: 'Create thoughtful, user-centered designs. Collaborate across disciplines to bring digital experiences to life.',
    type: 'Design'
  },
  {
    title: 'UI Designer',
    description: 'Design pixel-perfect interfaces that delight users. Establish and evolve design systems that scale.',
    type: 'Design'
  }
];

const generateMailtoLink = (position) => {
  const email = 'alex@crossbeam.agency';
  const subject = encodeURIComponent(`Application: ${position}`);
  const body = encodeURIComponent(
`Hi,

I'm interested in the ${position} position at Crossbeam.

Please find my resume attached.

Job posting: https://website1-steel-seven.vercel.app/careers`
  );
  return `mailto:${email}?subject=${subject}&body=${body}`;
};

const CareersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="cursor-pointer">
            <img src={crossbeamLogo} alt="Crossbeam" className="h-12" />
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Open Positions</h1>
          <p className="text-xl text-gray-500 font-light max-w-2xl">
            We're building a team of people comfortable in the intersections. If you value clarity, creativity, and meaningful work, we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {positions.map((position, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-8 hover:border-gray-400 transition-colors group flex flex-col justify-between min-h-[280px]"
              >
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                    {position.type}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    {position.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {position.description}
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <a
                    href={generateMailtoLink(position.title)}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black hover:text-gray-600 transition-colors"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Our Culture</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 font-light">
              We look for people comfortable in the intersections. Emotion is present but restrained. We value wonder, creativity, and empowerment—expressed through simplicity.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-black mb-3">Values</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>Autonomy & Responsibility</li>
                  <li>Small, focused teams</li>
                  <li>Clarity over noise</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-black mb-3">Work Style</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>Remote-first</li>
                  <li>Async communication</li>
                  <li>Deep work prioritized</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-black mb-3">Growth</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>Learning budget</li>
                  <li>Conference attendance</li>
                  <li>Cross-discipline exposure</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <img src={crossbeamLogo} alt="Crossbeam" className="h-8" />
            <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">
              © {new Date().getFullYear()} Crossbeam Agency.
            </p>
          </div>
          <div className="flex gap-8 text-xs text-gray-500 font-bold uppercase tracking-widest">
            <Link to="/#about" className="hover:text-black">Philosophy</Link>
            <Link to="/#services" className="hover:text-black">Services</Link>
            <Link to="/#how-we-work" className="hover:text-black">Engagement</Link>
            <Link to="/#experience" className="hover:text-black">Experience</Link>
            <Link to="/careers" className="hover:text-black">Careers</Link>
            <Link to="/#contact" className="hover:text-black">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CareersPage;
