import { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"

import logoIcon from "../assets/logo-icon.png"
import logoText from "../assets/logo-text.png"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const location = useLocation()
  const dropdownRef = useRef(null)

  // ✅ Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // ✅ Close Dropdown When Clicking Outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const isActive = (path) => location.pathname === path

  // Dropdown Items
  const solutionsItems = [
    { name: "Cybersecurity & ISMS", slug: "cybersecurity-isms" },
    { name: "Data Privacy & Governance", slug: "data-privacy-governance" },
    { name: "Quality & IT Compliance", slug: "quality-it-compliance" },
    { name: "ERP & Digital Solutions", slug: "erp-digital-solutions" },
    { name: "ISO Certifications", slug: "iso-certifications" },
    { name: "POSH & Legal Compliance", slug: "posh-legal-compliance" },
    { name: "Environmental & Energy Audits", slug: "environmental-energy-audits" },
  ]

  const trainingItems = [
    { name: "Cybersecurity Training" },
    { name: "Data Privacy Training" },
    { name: "Certified DPO Training" },
    { name: "POSH Training" },
    { name: "ISO Training Programs" },
    { name: "Data Engineering Training" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg"
          : "bg-white bg-opacity-95 backdrop-blur-sm"
      }`}
    >
      {/* ✅ Top Info Bar (Fixed Alignment) */}
      <div className="bg-primary-navy text-white text-xs sm:text-sm">
        <div className="container mx-auto px-4 lg:px-8 py-2">
          
          {/* Desktop View */}
          <div className="hidden md:flex items-center justify-between">
            
            {/* Left */}
            <div className="flex items-center gap-2">
              📧 <span>info@shiverainfotech.com</span>
            </div>

            {/* Center */}
            <div className="flex items-center gap-2">
              📞 <span>80878250238 | 78878888171</span>
            </div>

            {/* Right */}
            <div className="flex items-center gap-2">
              📍 <span>Baner-Pashan Link Road, Pune</span>
            </div>

          </div>

          {/* Mobile View */}
          <div className="md:hidden flex flex-col items-center gap-1 text-center">
            <span>📧 info@shiverainfotech.com</span>
            <span>📞 80878250238 | 78878888171</span>
            <span>📍 Baner-Pashan Link Road, Pune</span>
          </div>

        </div>
      </div>

      {/* ✅ Navbar */}
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* ✅ LOGO SECTION */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={logoIcon}
              alt="Shivera Shield Logo"
              className="w-12 h-12 object-contain"
            />

            <img
              src={logoText}
              alt="Shivera Infotech Logo"
              className="h-10 object-contain hidden sm:block"
            />
          </Link>

          {/* ✅ Desktop Menu */}
          <div
            className="hidden lg:flex items-center space-x-6 font-medium"
            ref={dropdownRef}
          >
            {/* Home */}
            <Link
              to="/"
              className={`hover:text-primary-teal ${
                isActive("/") ? "text-primary-teal font-semibold" : "text-gray-700"
              }`}
            >
              Home
            </Link>

            {/* About */}
            <Link
              to="/about"
              className={`hover:text-primary-teal ${
                isActive("/about")
                  ? "text-primary-teal font-semibold"
                  : "text-gray-700"
              }`}
            >
              About Us
            </Link>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("solutions")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="hover:text-primary-teal text-gray-700">
                Solutions ▾
              </button>

              {activeDropdown === "solutions" && (
                <div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-xl shadow-xl border py-2">
                  {solutionsItems.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/solutions/${item.slug}`}
                      className="block px-4 py-2 text-sm hover:bg-primary-teal hover:text-white transition"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Training Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("training")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="hover:text-primary-teal text-gray-700">
                Training ▾
              </button>

              {activeDropdown === "training" && (
                <div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-xl shadow-xl border py-2">
                  {trainingItems.map((item, index) => (
                    <Link
                      key={index}
                      to="/training"
                      className="block px-4 py-2 text-sm hover:bg-primary-teal hover:text-white transition"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Links */}
            <Link to="/testimonials" className="hover:text-primary-teal text-gray-700">
              Testimonials
            </Link>

            <Link to="/careers" className="hover:text-primary-teal text-gray-700">
              Careers
            </Link>

            <Link to="/collaboration" className="hover:text-primary-teal text-gray-700">
              Why Us
            </Link>

            <Link to="/contact" className="hover:text-primary-teal text-gray-700">
              Contact
            </Link>

            {/* ✅ CTA Button */}
            <Link
              to="/contact"
              className="bg-primary-teal text-white px-5 py-2 rounded-lg font-semibold hover:bg-opacity-90 shadow-md"
            >
              ✅ Schedule Consultation
            </Link>
          </div>

          {/* ✅ Mobile Menu Button */}
          <button
            className="lg:hidden text-3xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* ✅ Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg rounded-xl p-6 space-y-4">
            <Link to="/" className="block text-gray-700">Home</Link>
            <Link to="/about" className="block text-gray-700">About</Link>
            <Link to="/solutions" className="block text-gray-700">Solutions</Link>
            <Link to="/training" className="block text-gray-700">Training</Link>
            <Link to="/contact" className="block text-gray-700">Contact</Link>

            <Link
              to="/contact"
              className="block text-center bg-primary-teal text-white py-3 rounded-lg font-semibold"
            >
              ✅ Schedule Consultation
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
