# 👻 GhostLogin Detector 
A React + Vite + Tailwind CSS project integrated with an Express server middleware during development. The app is a single-page application (SPA) deployed on Vercel with client-side routing configured properly for zero 404 errors.

---

📌 **Table of Contents**  
- [Overview](#overview)  
- [Problem Statement](#problem-statement)  
- [Tools & Technologies](#tools--technologies)  
- [Project Structure](#project-structure)  
- [Core Features](#core-features)
- [What Makes It Stand Out](#What-Makes-It-Stand-Out)  
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
Despite advanced authentication methods, credential misuse remains one of the biggest causes of account breaches. Attackers can easily log in using stolen or shared credentials, and users are never informed until the damage is done. Most platforms lack real-time anomaly detection, device tracking, or behavioral analysis during login. The problem is the absence of an intelligent system that can verify if the login activity truly matches the real user’s identity and behavior. A solution is needed to detect unauthorized logins in real time and take immediate defensive action.
<img width="13257" height="109" alt="image" src="https://github.com/user-attachments/assets/c68cd752-1b98-4435-a361-82af1c3732ac" />


---

###  Tools & Technologies  
1. Frontend :-
	React  – Modern, responsive dashboard for users and admins
	Chart.js – Visualize suspicious login events and risk scores
	Tailwind CSS – Clean UI styling
2. Backend :-
	Spring Boot (Java) – Core server logic and REST API endpoints
	Auth0 – User authentication, login management, device fingerprinting
	AWS Lambda – Real-time login risk scoring
	AWS SNS – Instant alerts via email, SMS, or push notifications
	REST APIs – Connect frontend and backend for login, alerts, and dashboard data
3. Database :-
	MongoDB Atlas – Stores user sessions, login history, device fingerprints, risk scores
	Collections: users, sessions, device, fingerprints, risk events
4. Cloud :-
	AWS – Lambda, SNS, S3 (storage of logs and audit data)
	Deployment: AWS Amplify 
5. Reporting & Monitoring :-
	MLH Base – Generate real-time security reports and visualizations
	Dashboard – View alerts, login history, and risk analytics
<img width="1365" height="1096" alt="image" src="https://github.com/user-attachments/assets/d8cd5f91-426a-4b20-b0dc-60e28d7a89a3" />

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
### Core Features

Detect unauthorized logins in real time.
Generate risk scores for each login attempt.
Block or challenge suspicious sessions automatically.
Provide user-friendly dashboard with alerts and login history.
Improve account security and protect sensitive data.

---

### What Makes It Stand Out 

Proactive Security: Unlike traditional systems that only detect after breaches, GhostLogin Detector identifies threats before damage occurs.
AI-Powered Detection: Uses machine learning to spot unusual login patterns, not just basic IP checks
Cross-Platform Monitoring: Works for web and mobile apps seamlessly.
Real-Time Alerts: Users get instant notifications about suspicious access, increasing accountability.
Easy Integration: Can be added to any app using Auth0 and standard APIs, making it highly versatile.
Unique Threat Visualization: Provides an interactive dashboard showing suspicious login locations, devices, and risk scores, giving users and admins clear insights at a glance.
<img width="2731" height="942" alt="image" src="https://github.com/user-attachments/assets/5ea42f34-2c4a-4d60-bf77-2306ba8645b3" />

---


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
