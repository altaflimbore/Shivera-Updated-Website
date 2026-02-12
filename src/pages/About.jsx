import { Link } from 'react-router-dom'

const About = () => {
  const certifications = [
    { name: 'IAPP Certified Privacy Professionals', icon: '🔐' },
    { name: 'Certified Privacy Assessors', icon: '✅' },
    { name: 'ISO Lead Implementers & Auditors', icon: '📋' },
    { name: 'ISMS & Compliance Certifications', icon: '🛡️' },
  ]

  const achievements = [
    'DPDP readiness programs',
    'Enterprise privacy audits',
    'ISO certification journeys',
    'Compliance awareness training',
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-navy to-primary-teal text-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Delivering implementation-first IT and compliance solutions across industries
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section id="story" className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6">Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 2025, <strong>SHIVERA INFOTECH LLP</strong> was established to address the growing need for IT, cybersecurity, and compliance excellence in an increasingly regulated business environment.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We specialize in helping organizations navigate complex regulatory landscapes while building robust information security, data privacy, and quality management systems. Our team combines deep technical expertise with practical implementation experience to deliver solutions that are both compliant and operationally effective.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From startups to enterprise organizations, we work across industries including pharmaceuticals, healthcare, financial services, technology, and manufacturing to ensure they meet regulatory requirements while maintaining business agility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="text-4xl mb-4">🎯</div>
                <h2 className="text-2xl font-bold text-primary-navy mb-4">Vision</h2>
                <p className="text-gray-700 leading-relaxed">
                  To be a trusted partner setting benchmarks of integrity and reliability in IT, cybersecurity, data privacy, and compliance consulting. We envision a future where organizations operate with confidence, knowing their systems are secure, compliant, and aligned with global best practices.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="text-4xl mb-4">🚀</div>
                <h2 className="text-2xl font-bold text-primary-navy mb-4">Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                  To empower enterprises through authentic, tailored IT and compliance programs. We are committed to delivering implementation-first solutions that go beyond documentation to create sustainable, audit-ready frameworks. Our mission is to bridge the gap between regulatory requirements and practical business operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6 text-center">Leadership</h2>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-md">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong>SHIVERA INFOTECH LLP</strong> is led by experts across IT, privacy, cybersecurity, regulatory compliance, and quality systems. Our leadership team brings together:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-teal mr-3">✓</span>
                  <span><strong>20+ years</strong> of combined experience in enterprise IT and compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-teal mr-3">✓</span>
                  <span><strong>Certified professionals</strong> in privacy (IAPP), cybersecurity (ISO 27001), and quality management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-teal mr-3">✓</span>
                  <span><strong>Cross-industry expertise</strong> spanning pharmaceuticals, healthcare, finance, and technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-teal mr-3">✓</span>
                  <span><strong>Implementation-first mindset</strong> focused on delivering audit-ready, regulator-aligned solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-teal mr-3">✓</span>
                  <span><strong>Regulatory alignment</strong> with DPDP, GDPR, ISO standards, and industry-specific requirements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6 text-center">Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md flex items-center">
                  <div className="text-3xl mr-4">🏆</div>
                  <div className="text-lg font-semibold text-primary-navy">{achievement}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6 text-center">Certifications</h2>
            <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
              Our team holds industry-recognized certifications ensuring expertise in privacy, cybersecurity, and compliance domains.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gradient-to-br from-primary-teal to-primary-navy text-white rounded-xl p-6 shadow-lg">
                  <div className="text-4xl mb-3">{cert.icon}</div>
                  <div className="text-xl font-semibold">{cert.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-navy to-primary-teal text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to work with us?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help strengthen your IT and compliance foundation.
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

export default About

