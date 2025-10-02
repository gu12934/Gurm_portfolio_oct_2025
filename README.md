# Gurm_portfolio_oct_2025

# Gurm Portfolio Website

## Overview

This is a static portfolio website for Gurm, a Calgary-based data developer who transitioned from pre-med (BSc Biological Sciences) to technology. The site showcases his professional journey, projects, experience, and personal story. Built entirely with vanilla HTML, CSS, and JavaScript, it's designed for deployment on GitHub Pages or any static hosting service.

The website features:
- Multi-page navigation (Home, Projects, Experience, About)
- Interactive chatbot with pre-loaded Q&A using a conversation tree
- Responsive design for mobile, tablet, and desktop
- StatCounter visitor tracking integration
- Social media integration (LinkedIn, GitHub, Medium)
- Professional timeline and skills showcase

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Static Site Approach**
- **Problem**: Need a deployable portfolio website without backend infrastructure
- **Solution**: Pure static HTML/CSS/JS architecture
- **Rationale**: No server-side processing required; can be hosted on GitHub Pages for free; fast loading times and simple deployment
- **Pros**: Zero hosting costs, extremely fast, simple deployment, no server maintenance
- **Cons**: Limited to static content, no server-side data processing

**Page Structure**
- Multi-page architecture with separate HTML files for each section (index, projects, experience, about)
- Shared navigation component across all pages for consistency
- Container-based responsive layout system with max-width constraints

**CSS Architecture**
- CSS Custom Properties (variables) for theming and consistency
- Single global stylesheet (main.css) shared across all pages
- Mobile-first responsive design with media queries
- Modern layout techniques (Flexbox, Grid where applicable)

**JavaScript Modules**
- `main.js`: Core navigation functionality and utilities (mobile menu toggle, image error handling)
- `chatbot.js`: Chatbot interaction logic with state management
- `chatbot-data.json`: Conversation tree data structure for chatbot responses

### Chatbot System

**Conversation Tree Architecture**
- **Problem**: Need interactive Q&A without backend API
- **Solution**: JSON-based conversation tree with client-side state management
- **Structure**: Each node contains a message and multiple option buttons leading to next states
- **State Management**: Simple currentState variable tracks user's position in conversation
- **Alternatives Considered**: Backend API (rejected due to static hosting requirement), hardcoded responses (rejected for maintainability)
- **Pros**: Easy to update content, no API calls needed, works offline
- **Cons**: All conversation data loaded upfront, limited to pre-defined paths

**Data Loading Pattern**
- Fetch API loads chatbot-data.json asynchronously
- Fallback hardcoded data structure if fetch fails
- Event-driven UI updates based on user selections

### Navigation System

**Mobile-First Navigation**
- Hamburger menu for mobile devices
- Horizontal navigation bar for desktop
- Active page highlighting for current location
- Sticky navigation bar remains visible on scroll

### Asset Management

**Image Handling**
- Avatar/profile image stored in assets/images/
- Error fallback to placeholder image if avatar fails to load
- External icon library (Font Awesome CDN) for social media icons

### Styling System

**Theme Variables**
- Centralized color palette using CSS custom properties
- Consistent spacing and shadow definitions
- Easy theme updates by modifying root variables

**Component Styling**
- Timeline components for experience display
- Card-based project grid layout
- Hero section with image and text combination
- Reusable button and link styles

## External Dependencies

### CDN Resources
- **Font Awesome 6.4.0**: Icon library for social media icons and UI elements
- **Purpose**: Provides professional icons without local asset management
- **Integration**: Loaded via CDN link in HTML head sections

### Analytics
- **StatCounter**: Website visitor tracking and analytics
- **Purpose**: Monitor site traffic and user behavior
- **Integration**: Integrated on all pages with tracking script (project ID: 13048084)
- **Note**: User can update with their own StatCounter credentials

### Static Hosting
- **GitHub Pages**: Primary deployment target
- **Requirements**: Standard static HTML/CSS/JS files, no build process needed
- **Configuration**: Deploy from main branch, serves from root directory

### Social Media Integrations
- **LinkedIn**: Profile link (linkedin.com/in/gurmol-s/)
- **GitHub**: Repository showcase (github.com/gu12934)
- **Medium**: Blog articles (@gurmolsofly12)
- **Integration**: Direct hyperlinks, no API integration

### Browser APIs
- **Fetch API**: Asynchronous loading of chatbot conversation data
- **DOM API**: Dynamic content manipulation and event handling
- **CSS Variables**: Modern browser theming support
- 

================================

This is a static portfolio website for Gurm built with HTML, CSS, and JavaScript.
It can be deployed to GitHub Pages or any static hosting service.

## FILE STRUCTURE
--------------
/
├── index.html              - Home page
├── projects.html           - Projects showcase
├── experience.html         - Professional experience & education
├── about.html              - Personal story & journey
├── LICENSE.txt             - MIT License
├── assets/
│   ├── css/
│   │   └── main.css       - Global stylesheet
│   ├── js/
│   │   ├── main.js        - Navigation & utilities
│   │   ├── chatbot.js     - Chatbot functionality
│   │   └── chatbot-data.json - Chatbot conversation tree
│   └── images/
│       └── avatar.jpg     - Profile picture (REPLACE THIS)

FEATURES
--------
✓ Responsive design for mobile, tablet, and desktop
✓ Interactive chatbot with pre-loaded Q&A
✓ StatCounter visitor tracking integration
✓ Professional timeline and skills matrix
✓ Project showcase with GitHub links
✓ Social media integration
✓ Modern gradient design with smooth animations

DEPLOYMENT TO GITHUB PAGES
---------------------------
1. Create a new GitHub repository
2. Push all files to the repository:
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin [your-repo-url]
   git push -u origin main

3. Enable GitHub Pages:
   - Go to repository Settings
   - Navigate to Pages section
   - Select "main" branch as source
   - Click Save
   - Your site will be available at: https://[username].github.io/[repo-name]

CUSTOMIZATION
-------------
1. Replace avatar image:
   - Add your photo to: assets/images/avatar.jpg
   - Recommended size: 250x250px or larger (square format)

2. Update StatCounter tracking (optional):
   - Sign up at https://statcounter.com
   - Get your project ID and security code
   - Update the script in all HTML files (index.html, projects.html, etc.)
   - Replace: sc_project=13048084 and sc_security="0e0c84d5"

3. Customize chatbot conversations:
   - Edit: assets/js/chatbot-data.json
   - Follow the existing JSON structure
   - Each conversation state needs: "message" and "options" array
   - Options link to the "next" state

4. Update content:
   - Edit HTML files directly to modify text, links, and information
   - Update social media links in the hero section
   - Add or remove projects in projects.html
   - Modify experience timeline in experience.html

BROWSER COMPATIBILITY
---------------------
✓ Chrome/Edge (latest)
✓ Firefox (latest)
✓ Safari (latest)
✓ Mobile browsers (iOS Safari, Chrome Mobile)

CONTACT
-------
For questions about this website, contact:
Gurmol Sohi - gurmolsofly12@gmail.com
LinkedIn: https://www.linkedin.com/in/gurmol-s/
GitHub: https://github.com/gu12934

LICENSE
-------
MIT License - See LICENSE.txt for details

