import { Link } from 'react-router-dom'

const Home = () => {
  const solutions = [
    {
      title: 'Cybersecurity & ISMS Implementation',
      description: 'Comprehensive information security management systems and risk assessments.',
      icon: '🛡️',
      slug: 'cybersecurity-isms',
    },
    {
      title: 'Data Privacy & DPDP Compliance Consulting',
      description: 'Expert guidance on data protection regulations and privacy program execution.',
      icon: '🔒',
      slug: 'data-privacy-governance',
    },
    {
      title: 'ISO Certifications & Audit Support',
      description: 'End-to-end ISO certification journeys with audit-ready implementation.',
      icon: '✅',
      slug: 'iso-certifications',
    },
    {
      title: 'IT CSV & GxP Compliance',
      description: 'Computer system validation and GxP infrastructure qualification services.',
      icon: '💻',
      slug: 'quality-it-compliance',
    },
    {
      title: 'ERPNext Implementation & Support',
      description: 'Business process optimization and ERP integration services.',
      icon: '📊',
      slug: 'erp-digital-solutions',
    },
    {
      title: 'POSH Compliance & Legal Training',
      description: 'Prevention of Sexual Harassment awareness and compliance programs.',
      icon: '⚖️',
      slug: 'posh-legal-compliance',
    },
    {
      title: 'Environmental & Energy Audits',
      description: 'Green audits, energy optimization, and regulatory compliance support.',
      icon: '🌱',
      slug: 'environmental-energy-audits',
    },
  ]

  const testimonials = [
    { company: 'Encube', feedback: 'Excellent service and expertise in compliance across our regulated operations.', rating: 5 },
    { company: 'HTPL', feedback: 'Professional and thorough implementation support with clear, audit-ready deliverables.', rating: 5 },
    { company: 'IIK', feedback: 'Outstanding cybersecurity and ISMS consulting services for our enterprise environment.', rating: 5 },
    { company: 'IQSYS', feedback: 'Trusted partner for ISO and quality system journeys with strong implementation focus.', rating: 5 },
    { company: 'HERBAYU WELLNESS', feedback: 'Engaging privacy and compliance training that resonated with our teams.', rating: 5 },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-navy via-primary-navy to-primary-teal text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary-teal rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fadeIn">
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3">
                <svg className="w-6 h-6 text-primary-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-sm font-semibold">Enterprise Trusted</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Empowering Organizations with Trusted IT, Data Privacy, and Compliance Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              We help enterprises achieve secure, compliant, and sustainable growth through expert-led cybersecurity, privacy, and regulatory compliance services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-primary-teal text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                ✅ Schedule a Consultation
              </Link>
              <Link
                to="/solutions"
                className="bg-white text-primary-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Our Solutions
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl mb-2">✔</div>
                <div className="text-sm font-semibold">Audit Ready</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl mb-2">✔</div>
                <div className="text-sm font-semibold">Regulator Aligned</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl mb-2">✔</div>
                <div className="text-sm font-semibold">Enterprise Trusted</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl mb-2">✔</div>
                <div className="text-sm font-semibold">20+ Years Expertise</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Founded in 2022, <strong>SHIVERA INFOTECH LLP</strong> delivers implementation-first IT and compliance solutions across industries. We combine deep regulatory expertise with practical implementation to help organizations build robust cybersecurity, data privacy, and compliance frameworks.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center bg-primary-teal text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg"
            >
              ➡ Read More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Core Solutions Section */}
      <section id="solutions" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
              Our Core Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT, cybersecurity, and compliance services tailored to your enterprise needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <Link
                key={solution.slug}
                to={`/solutions/${solution.slug}`}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100 group"
              >
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold text-primary-navy mb-3 group-hover:text-primary-teal transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <div className="text-primary-teal font-semibold flex items-center">
                  Learn More
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Training Highlights Section */}
      <section id="training" className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
                Training & Certifications
              </h2>
              <p className="text-lg text-gray-600">
                Professional development programs to build expertise in cybersecurity, data privacy, and compliance
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-primary-teal to-primary-navy text-white rounded-xl p-6">
                <div className="text-3xl mb-3">🎓</div>
                <h3 className="text-xl font-bold mb-2">Cybersecurity Training</h3>
                <p className="text-gray-100 mb-4">Comprehensive programs covering ISMS, risk management, and incident response.</p>
              </div>
              <div className="bg-gradient-to-br from-primary-navy to-primary-teal text-white rounded-xl p-6">
                <div className="text-3xl mb-3">🔐</div>
                <h3 className="text-xl font-bold mb-2">Data Privacy Training</h3>
                <p className="text-gray-100 mb-4">DPDP, GDPR, and privacy program implementation training.</p>
              </div>
            </div>
            <div className="text-center">
              <Link
                to="/training"
                className="inline-flex items-center bg-primary-teal text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg"
              >
                ➡ Explore Full Training Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview Section */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.feedback}"</p>
                <div className="font-semibold text-primary-navy">{testimonial.company}</div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/testimonials"
              className="inline-flex items-center bg-primary-teal text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg"
            >
              ➡ View All Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
              Why Choose Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: '👥', title: '20+ Years Leadership Expertise', desc: 'Combined experience across IT, privacy, and compliance domains' },
              { icon: '🏆', title: 'Certified Privacy & Cybersecurity Experts', desc: 'IAPP certified professionals and ISO lead implementers' },
              { icon: '✅', title: 'Audit-Ready Implementation Delivery', desc: 'End-to-end support ensuring regulator alignment' },
              { icon: '📋', title: 'Regulator-Aligned Compliance Solutions', desc: 'Solutions designed to meet DPDP, GDPR, and ISO standards' },
              { icon: '🌐', title: 'Cross-Industry Consulting Excellence', desc: 'Proven track record across pharma, corporate, and institutions' },
              { icon: '🤝', title: 'Implementation-First Approach', desc: 'We don\'t just consult—we implement and deliver results' },
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-primary-navy mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-navy to-primary-teal text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to strengthen your IT and compliance foundation?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our experts to discuss your cybersecurity, privacy, and compliance needs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary-navy px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            ✅ Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home

