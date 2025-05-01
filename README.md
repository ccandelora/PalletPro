# PalletPro

A modern web application for Bay State Pallet, showcasing premium wooden pallets, crates, and packaging solutions. This application provides information about products, services, sustainability efforts, and allows customers to contact the company.

## Features

- **Responsive Design**: Mobile-friendly interface that adapts to any screen size
- **Modern UI**: Built with React and Tailwind CSS for a clean, professional look
- **Contact Form**: Integrated form with validation for customer inquiries
- **Product Showcase**: Detailed information about wooden pallets and crates
- **Performance Optimized**: Fast loading times and smooth interactions

## Tech Stack

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- React Query
- Wouter (for routing)
- Various Radix UI components
- Framer Motion (for animations)

### Backend
- Express.js
- Node.js
- Zod (for validation)
- Nodemailer (for email handling)

### Development & Build Tools
- Vite
- TypeScript
- ESBuild
- Drizzle ORM

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/PalletPro.git
   cd PalletPro
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Setup environment variables (create a .env file in the root directory)
   ```
   EMAIL_HOST=your-smtp-host
   EMAIL_PORT=587
   EMAIL_SECURE=false
   EMAIL_USER=your-email-username
   EMAIL_PASS=your-email-password
   EMAIL_FROM=noreply@yourcompany.com
   EMAIL_TO=contact@yourcompany.com
   ```

### Development

Run the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at http://localhost:5000

### Building for Production

```bash
npm run build
# or
yarn build
```

## Project Structure

```
PalletPro/
├── client/               # Frontend React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utility functions and configuration
│   │   ├── pages/        # Page components
│   │   ├── App.tsx       # Main application component
│   │   └── main.tsx      # Entry point
│   └── index.html        # HTML template
├── server/               # Backend Express application
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes definition
│   ├── storage.ts        # Data storage utilities
│   └── vite.ts           # Vite integration for development
├── shared/               # Shared code between client and server
├── tailwind.config.ts    # Tailwind CSS configuration
├── vite.config.ts        # Vite configuration
└── package.json          # Project dependencies and scripts
```

## License

MIT

## Contact

For questions or support, please email [contact@yourcompany.com](mailto:contact@yourcompany.com) 