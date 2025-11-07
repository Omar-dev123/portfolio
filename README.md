# Omar's Portfolio Website

A minimal, responsive portfolio website showcasing my work as a Front-End Developer.

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll animations
- ✅ Fixed navigation bar
- ✅ Project showcase section
- ✅ Skills display
- ✅ Contact form
- ✅ Clean, minimal design

## Project Structure

```
portfolio/
├── index.html      # Main HTML file
├── styles.css      # All styles
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Getting Started

1. **Clone or download** this repository
2. **Open `index.html`** in your web browser
3. **Customize** the content with your own information

## Customization

### Update Your Information

1. **Name & Role**: Edit the hero section in `index.html` (lines 42-43)
2. **Bio**: Update the about section text (lines 59-60)
3. **Skills**: Modify the skills grid in `index.html` (lines 65-73)
4. **Projects**: 
   - Update project cards in `index.html` (lines 85-121)
   - Add more projects by duplicating the `.project-card` structure
   - Update project links (Live Demo, GitHub)
5. **Contact Email**: Change the email in `index.html` (line 147)

### Styling

- Colors can be customized in `styles.css`
- Main accent color: `#3498db` (blue)
- Font sizes and spacing can be adjusted in the CSS file

## Hosting Options

### GitHub Pages (Free & Easy)

1. Create a GitHub account if you don't have one
2. Create a new repository (name it `portfolio` or `yourname.github.io`)
3. Upload all files to the repository
4. Go to **Settings** → **Pages**
5. Select the `main` branch as source
6. Your site will be live at `https://yourusername.github.io/repository-name`

**For a custom domain**: Use `yourname.github.io` as the repository name, and your site will be at `https://yourname.github.io`

### Netlify (Free & Easy)

1. Create a Netlify account at [netlify.com](https://netlify.com)
2. Drag and drop your project folder onto Netlify
3. Your site will be live instantly with a free `.netlify.app` domain
4. You can add a custom domain in the site settings

### Vercel (Free & Easy)

1. Create a Vercel account at [vercel.com](https://vercel.com)
2. Import your GitHub repository or upload files
3. Deploy with one click
4. Get a free `.vercel.app` domain

### Other Options

- **GitHub Pages** (recommended for beginners)
- **Netlify** (great for continuous deployment)
- **Vercel** (fast and easy)
- **Surge.sh** (simple command-line deployment)
- **Firebase Hosting** (Google's hosting service)

## Contact Form Setup

The contact form currently shows an alert message. To make it functional, you can:

### Option 1: Formspree (Easiest)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Get your form endpoint
4. Uncomment and update the fetch code in `script.js` (around line 120)
5. Replace `YOUR_FORM_ID` with your Formspree endpoint

### Option 2: EmailJS

1. Sign up at [emailjs.com](https://emailjs.com)
2. Set up email service
3. Add EmailJS SDK to your HTML
4. Update the form handler in `script.js`

### Option 3: Backend API

Create your own backend API endpoint and update the fetch URL in `script.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript (ES6+)

## License

This project is open source and available for personal use.

## Credits

Built with ❤️ by Omar

---

**Need help?** Feel free to reach out or check the code comments for guidance.

