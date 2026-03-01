# SoulScape - Travel Project Documentation

## 📋 Project Overview

**Project Name:** SoulScape (Wanderlust)  
**Version:** 0.1.0  
**Type:** Travel Discovery Web Application  
**Framework:** Next.js 14.2.15  
**Description:** A modern, interactive web application for discovering and exploring famous tourist destinations across Indian states.

---

## 🏗️ Project Architecture

### **Framework & Technology Stack**

#### **Core Technologies**
- **Next.js 14.2.15** - React framework with App Router
- **React 18** - UI library
- **TypeScript 5.9.3** - Type safety (configured but using JSX)
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **PostCSS 8** - CSS processing

#### **UI & Animation Libraries**
- **Framer Motion 11.18.2** - Advanced animations and transitions
- **Lucide React 0.452.0** - Modern icon library
- **next-themes 0.3.0** - Dark mode support

#### **3D & Visualization**
- **Three.js 0.169.0** - 3D graphics library
- **@react-three/fiber 8.17.10** - React renderer for Three.js
- **@react-three/drei 9.114.3** - Helper components for Three.js

#### **Maps & Location Services**
- **Leaflet 1.9.4** - Interactive maps
- **react-leaflet 4.2.1** - React components for Leaflet
- **Mapbox GL 3.7.0** - Advanced mapping

#### **Form & Date Handling**
- **react-datepicker 7.6.0** - Date picker component

#### **Communication**
- **@emailjs/browser 4.4.1** - Email service integration
- **Nodemailer 7.0.9** - Email sending (server-side)

#### **AI Integration**
- **@google/generative-ai 0.24.1** - Google's Generative AI API

#### **Utilities**
- **node-cron 4.2.1** - Task scheduling

---

## 📁 Project Structure

```
soulscape/
├── public/
│   ├── travel.png                    # Main logo/brand image
│   └── images/                       # Tourist destination images
│       ├── andaman/                  # Andaman & Nicobar Islands (4 images)
│       ├── arunachal/                # Arunachal Pradesh (3 images)
│       ├── assam/                    # Assam (3 images)
│       ├── bihar/                    # Bihar (4 images)
│       ├── chhattisgarh/            # Chhattisgarh (4 images)
│       ├── delhi/                    # Delhi (6 images, including 1 GIF)
│       ├── goa/                      # Goa (4 images)
│       ├── haryana/                  # Haryana (4 images)
│       ├── himachal/                 # Himachal Pradesh (4 images)
│       ├── jharkhand/                # Jharkhand (4 images)
│       ├── karnataka/                # Karnataka (4 images)
│       ├── kerala/                   # Kerala (4 images)
│       ├── madhya/                   # Madhya Pradesh (4 images)
│       ├── maharashtra/              # Maharashtra (4 images)
│       ├── manipur/                  # Manipur (4 images)
│       ├── rajasthan/                # Rajasthan (9 images)
│       ├── sikkim/                   # Sikkim (4 images)
│       ├── tamilnadu/                # Tamil Nadu (4 images)
│       ├── telangana/                # Telangana (4 images)
│       ├── tripura/                  # Tripura (3 images)
│       ├── uttarakhand/              # Uttarakhand (4 images)
│       ├── uttarpradesh/             # Uttar Pradesh (4 images)
│       └── westbengal/               # West Bengal (4 images)
├── src/
│   └── app/
│       ├── components/               # Reusable components
│       │   ├── Header.jsx           # Navigation header with theme toggle
│       │   └── Footer.jsx           # Footer with links and social media
│       ├── data/
│       │   └── famous_places_india.json  # Database of all tourist places
│       ├── destinations/
│       │   └── page.jsx             # All states listing page
│       ├── fonts/
│       │   ├── GeistVF.woff         # Variable font
│       │   └── GeistMonoVF.woff     # Monospace variable font
│       ├── place/
│       │   └── [state]/
│       │       └── [place]/
│       │           └── page.jsx     # Individual place details page
│       ├── search/
│       │   └── page.jsx             # Search results page
│       ├── state/
│       │   └── [state]/
│       │       └── page.jsx         # State-specific places page
│       ├── favicon.ico              # Site favicon
│       ├── globals.css              # Global styles
│       ├── layout.js                # Root layout with Header/Footer
│       └── page.jsx                 # Home page
├── jsconfig.json                    # JavaScript configuration
├── next-env.d.ts                    # Next.js TypeScript declarations
├── next.config.mjs                  # Next.js configuration
├── package.json                     # Dependencies and scripts
├── postcss.config.mjs              # PostCSS configuration
├── README.md                        # Project README
├── tailwind.config.js              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

---

## 🎯 Core Features

### 1. **Home Page (`/`)**
- **Hero Section** with animated search bar
- **Autocomplete Search** with dropdown suggestions
- **Featured States** showcase (first 3 states)
- **About Section** explaining the platform
- **Why Choose Us** section with 4 key features
- **Loading Animation** during search operations
- **Dark Mode** support

### 2. **Search Functionality**
- Real-time search suggestions
- Searches across states and place names
- Keyboard navigation (Arrow keys, Enter)
- Click outside to close dropdown
- Redirects to place detail or search results

### 3. **Destinations Page (`/destinations`)**
- Grid display of all Indian states
- State cards with featured images
- Count of famous places per state
- Animated card entrance
- Hover effects with scale transformations

### 4. **State Details Page (`/state/[state]`)**
- Dynamic routing based on state name
- Displays all places within a state
- Animated place cards
- Back to destinations navigation
- Gradient text headings

### 5. **Place Details Page (`/place/[state]/[place]`)**
- Comprehensive place information
- Full-screen image modal
- **Schedule Visit** feature with email confirmation
- **Open in Maps** integration (Google Maps/mobile geo)
- Timings and ticket price display
- Back navigation to state

### 6. **Search Results Page (`/search?q=[query]`)**
- Displays filtered results by query
- Groups results by state
- Loading spinner during search
- No results message
- Direct links to place details

---

## 🗄️ Data Structure

### **famous_places_india.json**

The application's data source containing information about 24+ Indian states/UTs with 100+ tourist destinations.

**Structure:**
```json
{
  "State Name": [
    {
      "name": "Place Name",
      "description": "Brief description of the place",
      "timings": "Operating hours",
      "ticket_price": "Entry fee details",
      "image_url": "/images/state/1.jpg"
    }
  ]
}
```

**Covered States:**
- Delhi (6 places)
- Andaman and Nicobar Islands (4 places)
- Arunachal Pradesh (3 places)
- Assam (3 places)
- Bihar (4 places)
- Chhattisgarh (4 places)
- Goa (4 places)
- Haryana (4 places)
- Himachal Pradesh (4 places)
- Jharkhand (4 places)
- Karnataka (4 places)
- Kerala (4 places)
- Madhya Pradesh (4 places)
- Maharashtra (4 places)
- Manipur (4 places)
- Rajasthan (9 places)
- Sikkim (4 places)
- Tamil Nadu (4 places)
- Telangana (4 places)
- Tripura (3 places)
- Uttar Pradesh (4 places)
- Uttarakhand (4 places)
- West Bengal (4 places)

---

## 🎨 Styling & Design System

### **Color Palette**
- **Primary:** Teal (600-700) - `#0d9488` to `#0f766e`
- **Secondary:** Blue (600-700) - `#2563eb` to `#1d4ed8`
- **Background (Light):** Gray (50-100) - `#f9fafb` to `#f3f4f6`
- **Background (Dark):** Gray (800-900) - `#1f2937` to `#111827`
- **Text (Light):** Gray (700) - `#374151`
- **Text (Dark):** Gray (300) - `#d1d5db`

### **Design Principles**
1. **Gradient Backgrounds** - Teal to Blue gradients for CTAs
2. **Card-Based Layout** - Consistent shadow and rounded corners
3. **Hover Effects** - Scale transformations and shadow elevations
4. **Responsive Design** - Mobile-first approach
5. **Smooth Animations** - Framer Motion for entrance/exit effects
6. **Dark Mode Support** - System preference detection

### **Typography**
- **Primary Font:** Inter (Google Font)
- **Display Font:** Geist Sans (Local Font)
- **Monospace:** Geist Mono (Local Font)
- **Heading Sizes:** 7xl, 4xl, 3xl, 2xl
- **Body Text:** Base to XL

---

## 🔄 Routing & Navigation

### **App Router Structure (Next.js 14)**

**Static Routes:**
- `/` - Home page
- `/destinations` - All states listing
- `/search?q=[query]` - Search results

**Dynamic Routes:**
- `/state/[state]` - State-specific places (e.g., `/state/Delhi`)
- `/place/[state]/[place]` - Place details (e.g., `/place/Delhi/India%20Gate`)

**Route Parameters:**
- URL encoded for special characters
- Decoded using `decodeURIComponent()`
- Fetched using Next.js `useParams()` hook

---

## ⚡ Key Components & Logic

### **1. Home Page Component**

**State Management:**
```javascript
const [searchQuery, setSearchQuery] = useState('')
const [suggestions, setSuggestions] = useState([])
const [isDropdownOpen, setIsDropdownOpen] = useState(false)
const [selectedIndex, setSelectedIndex] = useState(-1)
const [isLoading, setIsLoading] = useState(false)
```

**Key Functions:**
- `handleSearch()` - Submits search and navigates
- `handleInputChange()` - Updates search query and suggestions
- `updateSuggestions()` - Filters places data
- `handleSuggestionClick()` - Navigates to selected place
- `handleKeyDown()` - Keyboard navigation

**Features:**
- Debounced search suggestions
- Click-outside detection
- Loading state with animation
- Responsive grid layout

### **2. Place Details Component**

**Modals:**
- `ScheduleVisitModal` - Date picker and email form
- `FullSizeImageModal` - Image lightbox

**Integration:**
- **EmailJS** - Sends visit confirmation emails
- **Google Maps** - Opens location in maps
- **Mobile Detection** - Uses `geo:` protocol on mobile

**Email Configuration:**
```javascript
emailjs.send(
  'service_p4m9pai',      // Service ID
  'template_pg089w8',     // Template ID
  {
    to_email: email,
    place_name: placeName,
    visit_date: visitDate.toDateString(),
  },
  'NgdKj8r3XNS-DvkZH'    // Public Key
)
```

### **3. Search Results Component**

**Features:**
- Suspense boundary for loading state
- AnimatePresence for smooth transitions
- Grouped results by state
- Image blur placeholders
- Responsive grid layout

### **4. Header Component**

**Features:**
- Sticky navigation bar with backdrop blur
- Dark/light theme toggle
- Responsive mobile menu
- Animated brand logo
- Navigation links with hover effects
- Mobile hamburger menu

**State Management:**
```javascript
const [mounted, setMounted] = useState(false)
const { theme, setTheme } = useTheme()
const [isMenuOpen, setIsMenuOpen] = useState(false)
```

**Menu Items:**
- About (anchor link)
- Contact (anchor link)
- Destinations (route)

### **5. Footer Component**

**Features:**
- Brand information with tagline
- Social media links (Facebook, Twitter, Instagram)
- Quick links (Explore, Support sections)
- Contact information display
- Copyright notice
- Privacy and cookie policy links
- Animated scroll reveal effects
- Responsive grid layout

**Contact Info Display:**
- Location: India
- Email: info@soulscape.com
- Phone: +91 XXX XXX XXXX

---

## 🎭 Animation Patterns

### **Framer Motion Usage**

**Page Entrance:**
```javascript
initial={{ opacity: 0, y: -20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
```

**Card Hover:**
```javascript
whileHover={{ scale: 1.03 }}
whileTap={{ scale: 0.98 }}
```

**Staggered Children:**
```javascript
variants={containerVariants}
transition={{ staggerChildren: 0.1 }}
```

**Loading Animation:**
- Rotating spinner
- Scale pulsation
- Progress bar animation

---

## 🌓 Dark Mode Implementation

**Using next-themes:**
```javascript
<ThemeProvider attribute="class" defaultTheme="system" enableSystem />
```

**CSS Classes:**
- Light: Default classes
- Dark: `dark:` prefix classes
- System: Follows OS preference

**Example:**
```jsx
className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
```

---

## 📱 Responsive Design

### **Breakpoints (Tailwind)**
- **sm:** 640px (mobile)
- **md:** 768px (tablet)
- **lg:** 1024px (laptop)
- **xl:** 1280px (desktop)
- **2xl:** 1536px (large desktop)

### **Grid Layouts:**
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3-4 columns

### **Touch Optimizations:**
- Larger tap targets
- Swipe gestures (planned)
- Mobile-specific map handling

---

## 🔌 API Integrations

### **1. EmailJS**
- **Purpose:** Send visit schedule confirmations
- **Service ID:** `service_p4m9pai`
- **Template ID:** `template_pg089w8`
- **Public Key:** `NgdKj8r3XNS-DvkZH`

### **2. Google Maps API**
- **Purpose:** Open places in Google Maps
- **Desktop:** Opens in new tab
- **Mobile:** Uses `geo:` protocol

### **3. Google Generative AI**
- **Package:** `@google/generative-ai`
- **Status:** Installed but not yet implemented
- **Potential Use:** AI-powered travel recommendations

---

## 🚀 Getting Started

### **Installation**

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd soulscape

# Install dependencies
npm install
# or
yarn install
```

### **Development**

```bash
# Start development server
npm run dev

# Server runs at http://localhost:3000
```

### **Build & Production**

```bash
# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

## 🔧 Configuration Files

### **1. next.config.mjs**
```javascript
const nextConfig = {}
export default nextConfig;
```
- Minimal configuration
- Uses Next.js defaults

### **2. tailwind.config.js**
```javascript
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
}
```

### **3. jsconfig.json**
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```
- Path aliasing for imports

### **4. tsconfig.json**
- TypeScript support enabled
- JSX preservation
- Module: ESNext
- Strict mode: Disabled

---

## 📊 Performance Optimizations

### **Next.js Image Component**
- Automatic image optimization
- Lazy loading
- Blur placeholders
- Responsive images

### **Code Splitting**
- Automatic route-based splitting
- Dynamic imports for modals
- Suspense boundaries

### **CSS Optimization**
- Tailwind CSS purging
- PostCSS minification
- Critical CSS inlining

---

## 🎯 User Flow

### **Discovery Flow**
1. User lands on home page
2. Views hero section with search bar
3. Types in search query
4. Sees autocomplete suggestions
5. Clicks suggestion → Lands on place detail
   OR Clicks search → Lands on search results
6. Explores place information
7. Schedules visit or opens in maps

### **Browse Flow**
1. User lands on home page
2. Clicks "Explore All Destinations"
3. Views all states grid
4. Clicks on a state card
5. Views all places in that state
6. Clicks on a place
7. Views detailed information
8. Schedules visit or opens in maps

---

## 🔐 Security Considerations

### **Current State**
- Client-side only application
- Public EmailJS keys (not ideal for production)
- No authentication system
- No rate limiting

### **Recommendations**
1. Move EmailJS to server-side API route
2. Implement environment variables for API keys
3. Add CAPTCHA for form submissions
4. Implement rate limiting
5. Add Content Security Policy headers

---

## 🐛 Known Issues & Limitations

1. **EmailJS Keys Exposed** - Public keys in client-side code
2. **No Error Boundaries** - App crashes on errors
3. **Limited Error Handling** - Network failures not handled
4. **No Loading States** - Some async operations lack feedback
5. **SEO Limited** - Missing meta tags and structured data
6. **Accessibility** - Some ARIA labels missing

---

## 🔮 Future Enhancements

### **Short Term**
- [ ] Create Header and Footer components
- [ ] Add error boundaries
- [ ] Implement proper loading states
- [ ] Add SEO meta tags
- [ ] Improve accessibility (ARIA labels)

### **Medium Term**
- [ ] User authentication
- [ ] Favorites/Wishlist functionality
- [ ] User reviews and ratings
- [ ] Trip planning feature
- [ ] Share functionality
- [ ] Multi-language support

### **Long Term**
- [ ] AI-powered recommendations (using Google Gen AI)
- [ ] Virtual tours (using Three.js)
- [ ] Interactive 3D maps
- [ ] Travel blog/community
- [ ] Booking integrations
- [ ] Mobile app (React Native)

---

## 📝 Code Quality

### **Strengths**
- ✅ Consistent component structure
- ✅ Good use of React hooks
- ✅ Responsive design
- ✅ Modern animation patterns
- ✅ Clean routing structure

### **Areas for Improvement**
- ⚠️ Missing PropTypes/TypeScript typing
- ⚠️ Some code duplication
- ⚠️ Limited error handling
- ⚠️ No unit/integration tests
- ⚠️ Missing documentation comments

---

## 🧪 Testing (Not Implemented)

### **Recommended Testing Strategy**
1. **Unit Tests** - Jest + React Testing Library
2. **Integration Tests** - Testing routes and navigation
3. **E2E Tests** - Playwright or Cypress
4. **Visual Regression** - Chromatic or Percy

---

## 📦 Deployment

### **Vercel (Recommended)**
```bash
# Connect GitHub repository
# Vercel auto-detects Next.js
# Automatic deployments on push
```

### **Environment Variables Needed**
```env
EMAILJS_SERVICE_ID=service_p4m9pai
EMAILJS_TEMPLATE_ID=template_pg089w8
EMAILJS_PUBLIC_KEY=NgdKj8r3XNS-DvkZH
GOOGLE_AI_API_KEY=your_key_here
```

---

## 👥 Team & Contribution

### **Project Type**
Solo/Learning Project

### **Contribution Guidelines**
1. Fork the repository
2. Create feature branch
3. Follow existing code style
4. Write meaningful commit messages
5. Submit pull request

---

## 📚 Resources & References

### **Documentation**
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)

### **APIs Used**
- [EmailJS](https://www.emailjs.com/)
- [Google Maps](https://developers.google.com/maps)
- [Google Generative AI](https://ai.google.dev/)

---

## 📄 License

**Status:** Private project (no license specified)

---

## 📞 Support & Contact

**Project Location:** `G:\travelproject\soulscape`

---

**Last Updated:** March 1, 2026

---

*This documentation provides a comprehensive overview of the SoulScape project structure, technologies, features, and implementation details. It serves as a guide for developers to understand, maintain, and extend the application.*
