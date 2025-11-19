# Shreyas D — Ultra Modern Portfolio

An ultra-modern, fully functional portfolio website built with cutting-edge web technologies. Featuring a minimalist aesthetic with stunning 3D graphics, smooth animations, and responsive design.

## ✨ Features

- **React 18** - Modern component-based architecture
- **Three.js** - Interactive 3D particle backgrounds and graphics
- **Tailwind CSS** - Utility-first styling with custom theme
- **Framer Motion** - Smooth, professional animations
- **React Router** - Seamless client-side navigation
- **Modern Google Fonts** - Inter, Space Grotesk, JetBrains Mono
- **Responsive Design** - Mobile-first approach
- **Minimalist Aesthetic** - Clean, modern design with cyan/lime accents
- **Vite** - Lightning-fast build tool and dev server

## 🎨 Design Philosophy

The portfolio embraces a **minimalist yet modern** aesthetic with:
- **Color Palette**: Deep blacks (#0a0a0a) with vibrant cyan (#00d9ff) and lime (#00ff00) accents
- **Typography**: Sans-serif (Inter), geometric headings (Space Grotesk), and monospace (JetBrains Mono)
- **Effects**: Subtle glassmorphic designs, smooth transitions, and interactive 3D elements
- **No Purple** - Uses cyan, lime, amber, and emerald instead
- **Performance-First** - Optimized animations and lazy loading

## 📁 Project Structure

```
├── index.html                 # Main HTML entry point
├── src/
│   ├── main.jsx              # React entry point
│   ├── App.jsx               # Main router & layout
│   ├── index.css             # Global styles
│   ├── components/
│   │   ├── Navigation.jsx    # Top navigation bar
│   │   ├── ThreeBackground.jsx # 3D particle system
│   │   └── Footer.jsx        # Footer component
│   └── pages/
│       ├── Hero.jsx          # Landing page
│       ├── About.jsx         # About & skills
│       ├── Projects.jsx      # Portfolio showcase
│       └── Contact.jsx       # Contact form
├── tailwind.config.js        # Tailwind configuration
├── vite.config.js            # Vite configuration
└── package.json              # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs at `http://localhost:5173`

## 📦 Available Scripts

```bash
npm run dev           # Start development server with hot reload
npm run build         # Build optimized production bundle
npm run preview       # Preview production build locally
npm run lint          # Run ESLint
npm run lint:fix      # Fix linting issues automatically
```

## 🎯 Pages

### Home (/)
- Animated hero section with typing effect
- Particle canvas background
- 3D interactive background with Three.js
- Statistics showcase
- Call-to-action buttons

### About (/about)
- Professional biography
- Skill categories (Frontend, Backend, 3D & Animation, Tools)
- Animated counter statistics
- Experience timeline
- Philosophy section

### Projects (/projects)
- Filterable project grid
- Project categories (All, Web, 3D & Animation, Design)
- Interactive project cards
- Modal details view
- Technology tags

### Contact (/contact)
- Contact information
- Social media links
- Functional contact form
- Location details
- CTA sections

## 🎨 Customization

### Color Scheme
Edit `tailwind.config.js` to customize colors:
```js
colors: {
  accent: {
    cyan: '#00d9ff',    // Primary accent
    lime: '#00ff00',    // Secondary accent
    amber: '#fbbf24',   // Tertiary accent
    emerald: '#10b981', // Quaternary accent
  }
}
```

### Fonts
Currently using:
- **Inter**: Main body font
- **Space Grotesk**: Headings
- **JetBrains Mono**: Code/monospace

Change in Google Fonts link in `index.html` and update `tailwind.config.js`

### Content
Update portfolio information in each page component's JSX

## 🔧 Technologies

### Core
- **React 18.2.0** - UI framework
- **React Router DOM 6.16.0** - Client-side routing
- **Vite 5.0.0** - Build tool

### 3D & Graphics
- **Three.js 0.160.0** - 3D graphics
- **@react-three/fiber 8.14.0** - React renderer for Three.js
- **@react-three/drei 9.88.0** - Useful helpers

### Styling & Animation
- **Tailwind CSS 3.3.0** - Utility CSS
- **Framer Motion 10.16.0** - Animation library
- **PostCSS 8.4.31** - CSS processing
- **Autoprefixer 10.4.16** - Vendor prefixes

### Development
- **ESLint 8.52.0** - Code linting
- **@vitejs/plugin-react 4.1.0** - Vite React plugin

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## ⚡ Performance

- Optimized bundle size with tree-shaking
- Lazy-loaded components
- CSS minification
- Asset optimization
- Smooth 60fps animations

## 📝 Notes

- Uses `--legacy-peer-deps` during installation due to Three.js version compatibility
- Chunk size warning in production build can be ignored or optimized with code splitting
- All animations use Framer Motion for optimal performance
- Custom Three.js background is particle-based with mouse interaction
- No external UI component libraries - pure Tailwind CSS

## 🔐 Security

- No sensitive data in client-side code
- Form submissions can be connected to backend service
- XSS protection via React's built-in sanitization

## 📄 License

This project is part of Shreyas D's portfolio. All rights reserved.

## 👤 Author

**Shreyas D**
- Email: hello@shreyas.dev
- Portfolio: [This Website]

---

Built with ❤️ using modern web technologies
