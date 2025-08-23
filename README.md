# React Template

A modern React template with routing, animations, and GitHub Pages deployment ready to go.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 📦 What's Included

- **React 19** with Vite for fast development
- **React Router DOM** for client-side routing
- **Framer Motion** for smooth animations
- **React Icons** (includes Font Awesome icons)
- **Dark/Light Mode** with context-based theme switching
- **GitHub Pages** deployment configuration

## 🎨 Styling Philosophy

This template uses **inline styles** for component styling to keep everything contained and maintainable. All colors are managed through a centralized color palette (`src/utils/colors.js`) that responds to dark/light mode themes.

## 🔧 Configuration

### GitHub Pages Deployment
- Configured with basename `/react-template/`
- Run `npm run deploy` to deploy to GitHub Pages
- Your site will be available at `https://username.github.io/react-template/`

### Custom Domain (Optional)
For custom domains, you'll need to add a `CNAME` file to the `public/` directory:

```bash
echo "yourdomain.com" > public/CNAME
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
├── pages/              # Route components
├── context/            # React contexts (theme, etc.)
├── hooks/              # Custom hooks
├── utils/              # Utilities (colors, fetch, etc.)
└── buttons/            # Button components
```

## 🎯 Features Ready for Use

- ✅ **React Router DOM**: Client-side routing with GitHub Pages support
- ✅ **Framer Motion**: Animation library installed and ready
- ✅ **React Icons/FA**: Font Awesome and other icon sets available
- ✅ **Dark/Light Theme**: Context-based theme switching
- ✅ **GitHub Pages**: One-command deployment

## 🔗 Navigation

Add new pages by:
1. Creating a component in `src/pages/`
2. Adding the route to `src/App.jsx`
3. Adding the page to the `pages` array in `src/components/navBar.jsx`

The navigation will automatically update!

---

This template is designed to get you up and running quickly with a modern React setup and deployment pipeline.
