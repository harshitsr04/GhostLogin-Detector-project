# 👻 GhostLogin Detector 
A React + Vite + Tailwind CSS project integrated with an Express server middleware during development. The app is a single-page application (SPA) deployed on Vercel with client-side routing configured properly for zero 404 errors.

---

📌 **Table of Contents**  
- [Overview](#overview)  
- [Problem Statement](#problem-statement)  
- [Tools & Technologies](#tools--technologies)  
- [Project Structure](#project-structure)  
- [Core Features](#core-features)  
- [Logic & Workflow](#logic--workflow)  
- [User Interface & Design](#user-interface--design)  
- [Strengths & Limitations](#strengths--limitations)  
- [Recommendations & Future Work](#recommendations--future-work)  
- [How to Run This Project](#how-to-run-this-project)  
- [Author & Contact](#author--contact)  

---

###  Overview  
GhostLogin Detector React is a frontend application built with React and Vite for blazing fast performance, styled with Tailwind CSS. During development, an Express server runs as middleware integrated with Vite. The app is deployed as an SPA on Vercel with correct routing fallback to avoid 404 errors.

---

###  Problem Statement  
Deploying React SPAs often leads to 404 errors on client-side routes when hosted on platforms like Vercel. This project solves this by configuring build output directories and route rewrites so the app works seamlessly online.

---

###  Tools & Technologies  
- **Frontend:** React, Vite, React SWC plugin  
- **Styling:** Tailwind CSS  
- **Backend (Dev only):** Express server middleware  
- **Deployment:** Vercel  
- **Version Control:** Git & GitHub  

---

###  Project Structure  
ghostlogin-detector-react/
│
├── client/ # React frontend source code
├── shared/ # Shared utilities/components
├── server/ # Express server code (dev only)
├── dist/spa/ # Production build output directory
├── package.json # Project dependencies and scripts
├── vite.config.js # Vite configuration
├── vercel.json # Vercel routing config
└── README.md # Project documentation


---

###  Core Features  
- Blazing fast React frontend powered by Vite  
- Tailwind CSS for responsive, utility-first styling  
- Express server middleware integration during local development  
- Clean client-side routing with React Router  
- SPA rewrite configuration for flawless Vercel deployment  

---

###  Logic & Workflow  
- During development, Vite runs with Express middleware to serve APIs or backend logic if needed  
- `npm run build` creates optimized static files in `dist/spa`  
- `vercel.json` rewrite rules ensure all client-side routes serve `index.html` to prevent 404s  
- Vercel serves the static files from `dist/spa` for production  

---

###  User Interface & Design  
The UI leverages React components styled with Tailwind CSS, supporting dynamic navigation, dashboards, and responsive design suitable for all device sizes.

---

###  Strengths & Limitations  
- **Strengths:** Fast build times, seamless SPA routing, easy Vercel deployment, integrated dev backend support  
- **Limitations:** Express server middleware only works during development, backend not included in production deployment  

---

###  Recommendations & Future Work  
- Separate full backend deployment for APIs (e.g., Render or Railway)  
- Add authentication and user management features  
- Improve accessibility and add dark mode support  
- Implement testing and CI/CD pipelines  

---

###  How to Run This Project  

Clone the repo:  
```bash
git clone https://github.com/harshitsr04/GhostLogin-Detector-project.git
cd ghostlogin-detector-react
npm install
npm run dev
npm run build


Deploy to Vercel with:

Build Command: npm run build

Output Directory: dist/spa

vercel.json in root with rewrite rule:

{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

👨‍💻 Author & Contact ⭐ 

If you like this project, consider giving it a star on GitHub!
