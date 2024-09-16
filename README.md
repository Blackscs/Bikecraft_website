# Bikcraft

Welcome to **Bikcraft** – a custom-built site developed with Solid.js, TailwindCSS, JavaScript, and TypeScript. This project focuses on creating a responsive, modern, and optimized website for a fictional bike customization service.

You can check out the live version of the site [here](https://bikecraft-website.vercel.app).

## Technologies Used

- **Solid.js**: The core framework used for building fast and reactive user interfaces.
- **TailwindCSS**: Utility-first CSS framework for styling, ensuring a responsive and clean design.
- **JavaScript/TypeScript**: TypeScript was used to enhance type safety and improve the development process, combined with plain JavaScript functionality.
- **Vercel**: For deployment and continuous integration.

## Features

- Fully responsive design
- Dynamic routing with Solid.js
- Reusable components for efficient code
- CSS utility classes with TailwindCSS for fast styling
- Optimized for both desktop and mobile experiences

## Installation

To run this project locally, follow these steps:

1. Clone this repository:
   ```bash
   git clone https://github.com/Blackscs/bikcraft.git
   ```

2. Navigate to the project directory:
   ```bash
   cd bikcraft
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:5176` to view the site.

## Project Structure

```
├── public
│   ├── assets        # Images and other static resources
├── src
│   ├── components    # Reusable interface components
│   ├── hooks         # Custom hooks
│   ├── layouts       # General site layouts
│   ├── pages         # Pages for routing
│   ├── routes        # Route definitions
│   ├── store         # State management
│   ├── styles        # Styles and TailwindCSS configurations
│   ├── utils         # Utilities and helper functions
│   ├── App.tsx       # Main application component
│   ├── index.tsx     # Entry point file
│   └── vite-env.d.ts # Vite environment types
├── .gitignore        # Files ignored by Git
├── index.html        # Main HTML file for the application
├── package-lock.json # npm dependency lock file
├── package.json      # Project dependencies and scripts
├── postcss.config.js # PostCSS configuration
├── README.md         # README file with project information
├── tailwind.config.js# TailwindCSS configuration
├── tsconfig.json     # TypeScript configuration
├── tsconfig.node.json# TypeScript configuration for Node.js
├── vercel.json       # Deployment configurations for Vercel
└── vite.config.ts    # Vite configuration
```

## Deployment

The project is deployed using [Vercel](https://vercel.com/), which provides seamless integration with GitHub for automatic deployments on push.

## Contributing

Feel free to contribute by opening an issue or submitting a pull request. All kinds of improvements are welcome!
