# Data Engineer Portfolio — Component Structure

## Folder Layout


```
portfolio/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                   # React entry point
    ├── data/
    │   └── portfolioData.js       # All content (name, projects, skills…)
    ├── hooks/
    │   └── hooks.js               # useInView · useTypewriter
    ├── styles/
    │   └── styles.js              # Design tokens + style objects
    └── components/
        ├── App.jsx                # Root — wires all sections
        ├── Navbar.jsx             # Sticky nav bar
        ├── Hero.jsx               # Hero section + profile photo
        ├── Projects.jsx           # Project cards grid
        ├── Skills.jsx             # Skill bars
        ├── Experience.jsx         # Timeline
        ├── Contact.jsx            # Contact form
        ├── Footer.jsx             # Footer
        ├── FadeUp.jsx             # Scroll-triggered fade wrapper
        ├── AnimatedCounter.jsx    # Count-up number animation
        └── SkillBar.jsx           # Animated progress bar

## Quick Start

npm install
npm run dev

## Customise

Edit `src/data/portfolioData.js` to change:
- Your name, email, bio
- OWNER.photo → path to your profile image (e.g. "/profile.jpg")
- PROJECTS, SKILLS, TIMELINE arrays
- NAV_LINKS, ROLES, TECH_PILLS

Edit `src/styles/styles.js` to tweak:
- LIME colour (#a3e635) — change one constant, updates everywhere
- BG / SURFACE colours
- Typography, spacing, border radius
