# Vedifai - EdTech Course Platform

Welcome to the **Vedifai** frontend repository! This project is a modern, highly interactive, and responsive educational technology platform built using React and Tailwind CSS. 

It provides a stunning user interface for students to discover, compare, and enroll in top-tier industry courses, while also offering a robust support hub and community forum.

## ✨ Key Features

- **Dynamic Theme Toggling**: Seamless switching between Light and Dark mode, with system preference detection and persistent local storage.
- **Interactive Course Discovery**: 
  - Discover trending courses with hover-activated details.
  - View comprehensive course information via sleek modal popups (`CourseDetailsPopup`).
  - Compare multiple courses side-by-side on a dedicated comparison page.
- **Support & Community Hub**: 
  - Browse FAQs, verification guides, and calculators.
  - View community forum discussions with auto-generated, randomized user profile avatars (via DiceBear API).
- **Integrated Chatbot Widget**: A custom, floating chatbot widget with predefined action buttons and responses, powered by an external JSON data source for easy configuration.
- **Custom Animations**: 
  - A unique, pulsing mascot loading screen (`IntroAnimation`) that greets users.
  - Auto-scrolling mentor/mascot banners that pause on hover.
  - Smooth page transitions and fade-in effects.
- **State Persistence**: Utilizes native browser History API (`pushState`/`popstate`) and `sessionStorage` for flawless back/forward navigation without page reloads, cleanly resetting upon closing the tab.

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/) (for lightning-fast HMR and optimized builds)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) (Utility-first CSS framework for rapid UI development)
- **Icons**: [Lucide React](https://lucide.dev/) (Clean, consistent SVG icons)
- **Avatars**: [DiceBear API](https://www.dicebear.com/) (Dynamic forum user avatars)

## 📁 Project Structure

The project is thoughtfully organized to separate logic, UI components, and mock data:

```text
src/
├── assets/           # Static images, logos, and mascots
├── components/       # Reusable React UI components
│   ├── App.jsx       # Main routing and global state controller
│   ├── ChatbotWidget # Support chat interface
│   ├── Course*       # Course discovery, details, and comparison components
│   ├── Hero & Nav    # Top-level layout components
│   └── ...           # Various feature sections (Trending, Support, etc.)
├── data/             # JSON files acting as a mock database
│   ├── chatbotData.json
│   ├── coursesData.json
│   └── mentorsData.json
├── index.css         # Global styles and Tailwind directives
└── main.jsx          # React application entry point
```

## 🚀 Getting Started

Follow these instructions to run the project on your local machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/riturajjhaba938/WebPage_Templates.git
   cd WebPage_Templates/Green-Themed-Courses
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the app:**
   Open your browser and navigate to `http://localhost:5173/`

## ⚙️ Customization

This template is designed to be easily extensible without modifying complex React logic:
- **Change Courses/Mentors**: Edit the JSON files located inside the `src/data/` directory. The UI will automatically populate and adapt to new entries.
- **Update Chatbot Responses**: Modify `src/data/chatbotData.json` to change the predefined options and bot replies.
- **Theming**: The primary color palette revolves around custom shades of green (Brand Lime `#bef264`, Dark Forest `#0f4d38`). These can be adjusted globally via Tailwind classes.

---
*Developed with a focus on modern UI/UX design and scalable React architecture.*
