# Portfolio Website Documentation

## Table of Contents
- [Project Overview](#project-overview)
- [Purpose](#purpose)
- [Features](#features)
- [Languages and Packages Used](#languages-and-packages-used)
- [Hosting](#hosting)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Project Overview
The **Portfolio Website** is a personal project developed by Collins Nyatundo to showcase his skills, projects, and achievements in data science and web development. This website serves as a professional digital portfolio aimed at potential employers and collaborators, providing a comprehensive overview of his work.

## Purpose
The main objectives of this portfolio website are to:
- Present a collection of data science projects and relevant experiences.
- Highlight technical skills, tools, and methodologies used.
- Create an engaging user experience for visitors to explore projects and contact the developer.
- Foster networking opportunities and professional connections.

## Features
- **Responsive Design:** The website is fully responsive, ensuring optimal viewing on both mobile and desktop devices.
- **Project Showcase:** Detailed presentations of various projects with descriptions and links for deeper exploration.
- **User-Friendly Interface:** Clean and modern design that enhances user engagement.
- **Dynamic Content:** Utilizes React components for interactive elements.
- **Contact Information:** Provides accessible means for visitors to get in touch.

## Languages and Packages Used
The project is built using several programming languages and packages:

### Languages
- **TypeScript (69.7%):** A typed superset of JavaScript that improves code quality and maintainability.
- **HTML (13.5%):** For structuring the web content.
- **MDX (10.2%):** Allows the integration of React components within Markdown, enabling dynamic content rendering.
- **JavaScript (5.8%):** Core language for client-side scripting.
- **CSS (0.8%):** For styling and layout.

### Packages
- **React:** For building user interfaces with reusable components.
- **Tailwind CSS:** A utility-first CSS framework that simplifies styling.
- **Vite:** A fast build tool that enhances the development experience with quick refresh capabilities.
- **ESLint:** For maintaining code quality and enforcing coding standards.

## Hosting 
**Host on a Platform**:
   You can deploy the portfolio using any of the following platforms:
   
   - **GitHub Pages**:
   1. Push your code to a GitHub repository.
   2. Go to the repository's **Settings** > **Pages**.
   3. Under "Source," select the branch (e.g., `main`) and folder (e.g., `/root`) to deploy.
   4. Save changes, and your portfolio will be live at `https://<your_username>.github.io/<repository_name>/`.

   - **Netlify**:
   1. Create an account at [Netlify](https://www.netlify.com/).
   2. Drag and drop your project folder onto the Netlify dashboard or link the GitHub repository.
   3. Netlify will automatically deploy and provide a live URL.

   - **Vercel**:
   1. Create an account on [Vercel](https://vercel.com/).
   2. Import your GitHub repository into Vercel.
   3. Follow the prompts to configure and deploy your project.

## Getting Started

### Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js** (version 14 or higher)
- **npm** (Node Package Manager)

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/CollinsNyatundo/portfolio-website.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd portfolio-website
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

## Usage
To start the development server, run the following command:

```bash
npm run dev
```

Open your web browser and visit `http://localhost:3000` to view the portfolio website.

## Folder Structure
The project directory is organized as follows:

```
portfolio-website/
├── .bolt/                     # Bolt configuration files
├── .firebase/                 # Firebase configuration files
├── public/                    # Static assets (images, etc.)
├── src/                       # Source files
│   ├── components/            # Reusable components (e.g., buttons, cards)
│   ├── pages/                 # Page components for different sections
│   ├── styles/                # CSS files or styled components
│   └── index.tsx              # Entry point for the application
├── .firebaserc                # Firebase configuration for hosting
├── .gitignore                  # Git ignore file
├── eslint.config.js           # ESLint configuration for code quality
├── firebase.json              # Firebase hosting configuration
├── index.html                 # Main HTML file
├── package-lock.json          # NPM package lock file
├── package.json               # NPM package configuration
├── postcss.config.js          # PostCSS configuration for processing CSS
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.app.json          # TypeScript configuration for the app
├── tsconfig.json              # Base TypeScript configuration
└── vite.config.ts             # Vite configuration for the build process
```

## Contributing
Contributions are welcome! If you’d like to contribute to this project, please fork the repository and submit a pull request with a description of your changes.

## License
This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgments
- **Tailwind CSS:** For providing a powerful utility-first CSS framework.
- **Vite:** For an efficient and modern development experience.
- **Firebase:** For reliable hosting and backend services.

Feel free to reach out for any questions or further information regarding this project!
