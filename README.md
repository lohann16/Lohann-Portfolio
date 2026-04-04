# Daniel Lohann Doualla Ekwe - Portfolio

A modern, responsive portfolio website showcasing my journey as a Software Engineer & Data Enthusiast. Built with clean design principles and interactive elements to highlight my skills, experience, and projects.



## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark Theme**: Modern dark aesthetic with accent colors
- **Interactive Elements**: Smooth scrolling, fade-in animations, and hover effects
- **Contact Form**: Integrated EmailJS for direct messaging
- **Skill Showcase**: Comprehensive display of technical skills and competencies
- **Project Gallery**: Featured projects with detailed descriptions and tech stacks
- **Experience Timeline**: Professional journey with detailed role descriptions
- **Education & Certifications**: Academic background and ongoing professional development

## Technologies Used

### Frontend
- **HTML5**: Semantic markup and accessibility
- **CSS3**: Custom properties, flexbox, grid, and animations
- **JavaScript (ES6+)**: DOM manipulation and interactivity

### Libraries & Tools
- **EmailJS**: Client-side email sending functionality
- **Google Fonts**: Syne and DM Mono typography
- **Font Awesome**: Icons for contact links

### Design System
- **Color Palette**: Dark theme with green accent (#4ef5b0)
- **Typography**: Monospace body text, sans-serif headings
- **Spacing**: Consistent 8px grid system

## Prerequisites

- Modern web browser with JavaScript enabled
- Internet connection for EmailJS functionality

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/lohann16/lohann-portfolio.git
   cd lohann-portfolio
   ```

2. **Open in browser**
   - Simply open `index.html` in your preferred web browser
   - No build process or server required

3. **Configure EmailJS (Optional)**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a service and email template
   - Update the credentials in `email.js`:
     ```javascript
     emailjs.init("your_public_key");
     // Update service and template IDs in the sendForm call
     ```

## Usage

### Navigation
- Use the top navigation bar to jump to different sections
- Smooth scrolling automatically activates on section links

### Contact Form
- Fill out the contact form with your name, email, and message
- Submit to send a direct email (requires EmailJS configuration)
- Success message appears after successful submission

### Responsive Design
- Desktop: Side-by-side layout for hero and contact sections
- Mobile: Stacked layout with optimized spacing

## Project Structure

```
lohann-portfolio/
│
├── index.html          # Main portfolio page
├── styles.css          # Custom styles and design system
├── scripts.js          # JavaScript for animations and interactions
├── email.js           # EmailJS configuration and form handling
└── README.md          # Project documentation
```

## Design Philosophy

### Color Scheme
- **Primary Background**: `#0b0c0e` (Dark)
- **Secondary Background**: `#111316` (Surface)
- **Accent**: `#4ef5b0` (Green)
- **Text**: `#e8eaf0` (Light)
- **Muted Text**: `#6b7280` (Gray)

### Typography
- **Headings**: Syne (Sans-serif, weights 400-800)
- **Body**: DM Mono (Monospace, weights 300-400)
- **Consistent letter spacing and sizing**

### Layout Principles
- **Grid-based**: CSS Grid and Flexbox for responsive layouts
- **Mobile-first**: Progressive enhancement for larger screens
- **Accessibility**: Semantic HTML and keyboard navigation

## Contributing

While this is a personal portfolio, suggestions for improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Daniel Lohann Doualla Ekwe**

- **Email**: [lodoualla@gmail.com](mailto:lodoualla@gmail.com)
- **LinkedIn**: [Daniel Lohann Doualla Ekwe](https://www.linkedin.com/in/daniel-lohann-doualla-ekwe-861ba619b/)
- **GitHub**: [@lohann16](https://github.com/lohann16)
- **Phone**: +27 65 879 4376

**Location**: Johannesburg, South Africa
**Languages**: English, French (Bilingual)

---

*Built with vanilla HTML, CSS, and JavaScript*