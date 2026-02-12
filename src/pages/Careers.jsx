import { Link } from 'react-router-dom'

const Careers = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-navy to-primary-teal text-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Careers</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Join our team of experts in IT, cybersecurity, and compliance consulting
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6">
              Openings Coming Soon
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We're growing and will be posting exciting career opportunities soon. Stay connected with us to be the first to know about new openings in:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {[
                'Cybersecurity Consulting',
                'Data Privacy & Compliance',
                'ISO Implementation',
                'IT Compliance & CSV',
                'Training & Development',
                'Business Development',
              ].map((role, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="text-primary-teal font-semibold">{role}</div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-primary-teal to-primary-navy text-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Stay Connected With Us</h3>
              <p className="text-gray-100 mb-6">
                Send us your resume and we'll keep you informed about upcoming opportunities that match your profile.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white text-primary-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-md hover:shadow-lg"
              >
                📧 Send Your Resume
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-8 text-center">
              Why Work With Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: '🎓', title: 'Continuous Learning', desc: 'Work with industry experts and stay updated with latest regulations and technologies' },
                { icon: '🌐', title: 'Diverse Projects', desc: 'Engage with clients across industries including pharma, healthcare, finance, and technology' },
                { icon: '🤝', title: 'Collaborative Culture', desc: 'Work in a supportive environment that values teamwork and knowledge sharing' },
                { icon: '📈', title: 'Career Growth', desc: 'Clear growth paths and opportunities to develop expertise in multiple domains' },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-bold text-primary-navy mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Careers

