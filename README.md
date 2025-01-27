# Portfolio Website Frontend

This repository contains the frontend code for my personal portfolio website. The site showcases my professional projects, hobby projects, and blog posts, providing visitors with an overview of my skills and experience in web development.

## Features

- **Homepage**: A welcoming landing page with a hero section introducing my work and highlighting key skills.
- **Projects Page**: Dynamically displays a list of professional and hobby projects, with filtering options.
- **Blogs Page**: Fetches and displays blog posts using an unofficial Medium API through RapidAPI.
- **Responsive Design**: Built with Tailwind CSS for a seamless experience across devices.

## Technologies Used

- **Vite**: Fast and modern build tool for optimized React development.
- **React**: JavaScript library for building the user interface.
- **React Router**: Client-side routing for seamless navigation.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **RapidAPI**: Integration with the unofficial Medium API to fetch blog posts.
- **Custom API**: Fetches project data from a Django REST Framework backend hosted on Heroku.

## Deployment

The frontend is deployed on Vercel, ensuring fast, reliable hosting with continuous integration for updates.

## Getting Started

### Prerequisites
- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:
```bash
    git clone https://github.com/your-username/portfolio-frontend.git
```

2. Navigate to the project directory:
```bash
    cd portfolio-frontend
```

3. Install dependencies:
```bash
    npm install
```
### Development Server

Start the development server:
```bash
    npm run dev
```
The application will be available at `http://localhost:5173`.

### Build for Production

Build the application for deployment:
```bash
npm run build
```
The output files will be located in the `dist` directory.

## API Endpoints

### Medium Blog Articles

**Endpoint**: `https://medium2.p.rapidapi.com/user/2b99c617ee3a/articles`

**Description**: Fetches a list of blog articles associated with the user.

### Projects API

**Endpoint**: `https://projects-database-d25a17e83152.herokuapp.com/api/projects/`

**Description**: Fetches a list of professional and hobby projects.

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit).