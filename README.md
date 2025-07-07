# My Travel Journal

A personal travel journal application built with React, showcasing places I've visited around India. This project is created to practice fundamental React concepts such as components, props, and rendering lists.

## 📸 Screenshot

![Travel Journal Screenshot](https://raw.githubusercontent.com/LikhithaBodepudi/my-travel-journal/main/assets/travel-journal-screenshot.png)

## ✨ Features

- **Header:** Simple, clean header with a globe icon.
- **Dynamic Content:** Journal entries are populated from a JavaScript data file.
- **Reusable Card Component:** Each travel entry is rendered using a single, reusable `Card` component.
- **Location Mapping:** Links to Google Maps for each location.
- **Iconography:** Utilizes Font Awesome for scalable icons.

## 🚀 Technologies Used

- **React:** Frontend JavaScript library.
- **HTML5:** Standard markup for web structure.
- **CSS3:** Styling.
- **Font Awesome:** For scalable vector icons (globe, location pin).
- **Git:** Version control.
- **GitHub:** Repository hosting.
- **Netlify:** (Planned for) Continuous deployment.

## 📦 Project Structure

Okay, let's get your index.html updated with the Font Awesome CDN, create a README file specifically for your Travel Journal, and then go through the Git steps to get this new project onto GitHub.

1. public/index.html Code
   This is the standard index.html for a Create React App, with the essential Font Awesome CDN link added within the <head> section.

my-travel-journal/public/index.html

HTML

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZsQyQiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <title>My Travel Journal</title>

  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    </body>
</html>
2. README.md for My Travel Journal
This README is tailored specifically for your my-travel-journal project. Remember to replace placeholder text like YOUR_GITHUB_USERNAME and the live demo link once you deploy.

my-travel-journal/README.md

Markdown

# My Travel Journal

A personal travel journal application built with React, showcasing places I've visited around the world. This project is created to practice fundamental React concepts such as components, props, and rendering lists.

## 📸 Screenshot

![Travel Journal Screenshot](https://raw.githubusercontent.com/YOUR_GITHUB_USERNAME/my-travel-journal/main/assets/travel-journal-screenshot.png)

_(Remember to replace `YOUR_GITHUB_USERNAME` with your actual GitHub username and ensure the image path is correct after you upload your screenshot to GitHub's `assets/` folder.)_

## ✨ Features

- **Header:** Simple, clean header with a globe icon.
- **Dynamic Content:** Journal entries are populated from a JavaScript data file.
- **Reusable Card Component:** Each travel entry is rendered using a single, reusable `Card` component.
- **Location Mapping:** Links to Google Maps for each location.
- **Iconography:** Utilizes Font Awesome for scalable icons.

## 🚀 Technologies Used

- **React:** Frontend JavaScript library.
- **HTML5:** Standard markup for web structure.
- **CSS3:** Styling.
- **Font Awesome:** For scalable vector icons (globe, location pin).
- **Git:** Version control.
- **GitHub:** Repository hosting.
- **Netlify:** (Planned for) Continuous deployment.

## 📦 Project Structure

my-travel-journal/
├── public/
│ ├── index.html # Main HTML file (includes Font Awesome & Google Fonts CDN)
│ ├── favicon.ico
│ ├── logo192.png
│ ├── logo512.png
│ ├── manifest.json
│ └── (your travel entry images, e.g., japan-fuji.jpg, australia-sydney.jpg, norway-geirangerfjord.jpg)
│ └── (your screenshot, e.g., travel-journal-screenshot.png in assets/ or images/ folder)
├── src/
│ ├── components/
│ │ ├── Header.js # Journal header with globe icon
│ │ └── Card.js # Reusable component for each travel entry
│ ├── data.js # JavaScript array of travel entry objects
│ ├── App.js # Main application component, renders Header and maps Card components
│ └── index.js # React app entry point
│ └── style.css # All global and component-specific CSS styles
├── .gitignore # Git ignore rules
├── package.json # Project metadata and dependencies
└── README.md # This file

## 🛠️ Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/en/) and npm (Node Package Manager) installed on your machine.

### Installation

1.  **Clone the repository (if getting from GitHub):**

    ```bash
    git clone [https://github.com/YOUR_USERNAME/my-travel-journal.git](https://github.com/YOUR_USERNAME/my-travel-journal.git)
    cd my-travel-journal
    ```

    _(If you just created the project locally, you are already in the correct directory.)_

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Project Locally

1.  **Start the development server:**
    ```bash
    npm start
    ```
2.  Open your browser and navigate to `http://localhost:3000` to view the application. The page will reload automatically when you make changes.
