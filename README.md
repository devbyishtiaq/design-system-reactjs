# Design System React Components

A production-ready React component library built with React Bootstrap, styled to match the Figma design system.

## Tech Stack

- **React.js** with **TypeScript**
- **Vite** - Build tool and dev server
- **React Bootstrap** - Component library foundation
- **Bootstrap 5** - CSS framework
- **SCSS** - Styling with design tokens

## Project Overview

This project translates a comprehensive Design System (16+ artifact categories) into reusable React components. Components are built using React Bootstrap as the core logic engine to ensure accessibility and responsiveness, while strictly adhering to the visual styles defined in the Figma design system.

## Project Structure

```
src/
├── components/     # Reusable React components
├── pages/         # Page components (e.g., Gallery page)
├── styles/        # SCSS files and design tokens
│   └── theme.scss # Main theme configuration file
├── App.tsx        # Main app component
└── main.tsx       # Entry point
```

## Design Tokens

All design tokens (colors, typography, spacing, border-radius) are centralized in `src/styles/theme.scss`. This file:

- Overrides Bootstrap's CSS variables to match the Figma design system
- Contains all semantic color scales (Gray, Error, Warning, Success)
- Defines typography using Poppins font family
- Sets up border-radius levels (8 levels from 2px to 32px)

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## How It Works

### Overriding Bootstrap Styles

React Bootstrap components can be styled to match the Figma design system by:

1. **CSS Variables Override**: Bootstrap uses CSS custom properties (e.g., `--bs-primary`, `--bs-border-radius`). These are overridden in `theme.scss` to match design system values.

2. **SCSS Variable Override**: Bootstrap's SCSS variables are overridden before importing Bootstrap, allowing complete control over the theme.

3. **Custom CSS Classes**: Additional styling can be added using CSS Modules or global styles for components that need extra customization beyond Bootstrap's defaults.

### Using Components

Components use React Bootstrap's default components with custom styling:

```tsx
import { Button } from 'react-bootstrap';

// Use standard React Bootstrap components
<Button variant="primary">Primary Button</Button>
<Button variant="success">Success Button</Button>
```

The styling automatically matches the Figma design system through the theme configuration.

## Components Included

- **Actions**: Buttons (Primary, Secondary, Ghost), Toggles
- **Inputs**: Input Fields, Checkboxes, Radio buttons
- **Navigation**: Breadcrumbs, Pagination, Tabs, Sidebar
- **Feedback**: Progress Bars, Badges, Alerts
- **Data**: Avatars with status indicators
- **Additional**: Cards, ListGroups, Dropdowns, Modals, Spinners, Form components

## Next Steps

1. Map Figma design system colors to Bootstrap variables
2. Implement component gallery page
3. Create custom Avatar component
4. Add component documentation

## License

Private project
