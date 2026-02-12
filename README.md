# SHIVERA INFOTECH LLP - Enterprise Consulting Website

A premium, enterprise-level corporate website built with React + Vite + TailwindCSS for SHIVERA INFOTECH LLP, a professional IT + Cybersecurity + Data Privacy + Compliance + Training consulting firm.

## 🚀 Features

- **Premium Enterprise Design**: Deloitte/EY/KPMG style consulting website
- **Fully Functional Multi-Page Site**: Complete navigation, routing, and interactive elements
- **Cookie & Privacy Compliance Popup**: Mandatory compliance popup on first visit
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Sticky Header**: Navigation remains visible while scrolling
- **Smooth Animations**: Professional hover effects and transitions
- **Lead Generation Ready**: Contact forms and consultation CTAs throughout

## 🎨 Design

- **Primary Color**: Teal Green (#2AD190)
- **Background**: White (#FFFFFF)
- **Supporting Colors**: Deep Navy + Soft Gray
- **Typography**: Inter font family
- **Style**: Clean, modern, premium enterprise consulting aesthetic

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Sticky navigation with dropdowns
│   │   ├── Footer.jsx          # Footer with links and contact info
│   │   └── CookiePopup.jsx    # Privacy compliance popup
│   ├── pages/
│   │   ├── Home.jsx            # Homepage with all sections
│   │   ├── About.jsx           # About Us page
│   │   ├── Solutions.jsx       # Solutions overview
│   │   ├── SolutionDetail.jsx  # Individual solution pages
│   │   ├── Training.jsx        # Training & Certifications
│   │   ├── Testimonials.jsx    # Client testimonials
│   │   ├── Careers.jsx         # Careers page
│   │   ├── Contact.jsx         # Contact page with form
│   │   └── Collaboration.jsx   # Why Us / Collaboration Services
│   ├── App.jsx                 # Main app with routing
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🛠️ Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📄 Pages

- **Home**: Hero section, Who We Are, Core Solutions, Training Highlights, Testimonials Preview, Why Choose Us, Final CTA
- **About Us**: Company overview, Vision & Mission, Leadership, Achievements, Certifications
- **Solutions**: Overview of all services with individual detail pages
- **Training & Certifications**: Training programs with enrollment CTAs
- **Testimonials**: Client testimonials with carousel and grid view
- **Careers**: Coming soon page with resume submission
- **Contact**: Contact form and contact information
- **Collaboration Services**: Why Us page with partner information

## 🎯 Key Features

### Navigation
- Sticky header that remains visible while scrolling
- Desktop: Horizontal menu with dropdowns
- Mobile: Hamburger menu
- Active page highlighting
- Smooth scroll navigation

### Cookie Popup
- Mandatory privacy compliance popup
- Accept/Reject options
- Privacy policy view
- LocalStorage persistence

### Forms
- Contact form with validation
- Success message display
- Service dropdown selection
- Form state management

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Touch-friendly interactions
- Optimized layouts for all screen sizes

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: {
    teal: '#2AD190',
    navy: '#1e3a5f',
    gray: '#6b7280',
  },
}
```

### Content
All content is in the respective page components. Edit the JSX files in `src/pages/` to update content.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔒 Privacy & Compliance

The website includes:
- Cookie consent popup
- Privacy policy information
- DPDP and GDPR compliance messaging
- Data protection best practices

## 📞 Contact Information

- **Contact Person**: Aruna Uttamrao Deshmukh
- **Phone**: 8208986057, 8087250238
- **Email**: aruna.deshmukh@shiverainfotech.com

## 🚀 Deployment

The site is ready for deployment to:
- Vercel
- Netlify
- AWS S3 + CloudFront
- Any static hosting service

Build the production bundle:
```bash
npm run build
```

The `dist/` folder contains the production-ready files.

## 📝 License

© 2024 SHIVERA INFOTECH LLP. All rights reserved.

