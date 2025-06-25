# 💬 Chat‑Line — Real-Time Chat Application

[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Node.js Version](https://img.shields.io/badge/node-18%2B-brightgreen)](https://nodejs.org/)
[![React Version](https://img.shields.io/badge/react-18.x-blue)](https://react.dev/)
[![Firebase](https://img.shields.io/badge/firebase-realtime_db-orange)](https://firebase.google.com/)
[![Last Commit](https://img.shields.io/github/last-commit/OMSPANDE/Chat-Line)](https://github.com/OMSPANDE/Chat-Line/commits/main)

---

## 📝 Overview

**Chat‑Line** is a modern, real-time chat web application that enables instant messaging between users. Powered by **React.js** on the frontend and **Firebase** (Auth + Realtime Database) on the backend, it allows seamless authentication via Google, persistent chat messages across sessions, and instantaneous updates for all participants.

Whether you're creating a small team chat, a personal messaging app, or a real-time discussion forum — Chat‑Line provides the groundwork with a sleek, responsive UI and scalable architecture.

---

## ✨ Key Features

- 🔐 **Secure Authentication** — Login with Google OAuth via Firebase Auth
- 💬 **Live Chatrooms** — Public chat rooms with instant message updates
- 🧑‍💻 **User Avatars & Display Names** — Personalize your profile
- 📜 **Message Timestamps** — Human-friendly timestamps per message
- 🎨 **Responsive UI** — Mobile- and desktop-friendly interface built with Material-UI
- ⚡ **Real-Time Sync** — Firebase realtime database pushes updates to all clients instantly
- 🔔 **Notifications** — Get notified of new messages (optional feature)
- 🧪 **Extensible & Modular** — Easy to add new chat rooms, moderation tools, image sharing
- 🧠 **Scalable Backend** — Hosted on Firebase for zero-ops scaling

---

## 🧰 Tech Stack

| Layer        | Tech                                      |
|--------------|--------------------------------------------|
| 🎨 Frontend   | React.js 18.x, Vite, Material-UI          |
| 🔐 Auth       | Firebase Authentication (Google OAuth)    |
| 🧠 Backend    | Firebase Realtime Database                |
| 🧪 Tests      | React Testing Library, Jest (optional)    |
| 🏠 Hosting    | Vercel / Netlify / Firebase Hosting       |

---

## 🏗️ Architecture

Chat-Line/
├── public/ # Static assets
├── src/
│ ├── components/ # UI components (MessageInput, MessageList, etc.)
│ ├── hooks/ # Custom hooks (e.g. useAuth, useMessages)
│ ├── pages/ # Login, ChatRoom, etc.
│ ├── services/ # Firebase init and API calls
│ ├── styles/ # Theme & CSS
│ ├── tests/ # Test files
│ ├── App.tsx # Main app container & routing
│ ├── index.tsx # Application entry point
├── .env.example # Example environment vars file
├── package.json # Dependencies and scripts
├── README.md # This file
└── LICENSE # License file


---

## ⚙️ Prerequisites

Before you begin, ensure you have:
- 🐍 **Node.js v18.x** or newer
- 🐬 **MongoDB** *(not required; this version uses Firebase)*
- 🔐 **Firebase account** & a new Firebase web app
- 🔧 Text editor (e.g. VSCode) and Git client installed

---

## 🔧 Setup Instructions

### 1️⃣ Clone the repository:
```bash
git clone https://github.com/OMSPANDE/Chat-Line.git
cd Chat-Line
2️⃣ Install dependencies:
npm install

3️⃣ Configure environment:
cp .env.example .env

And fill in your Firebase credentials in .env:
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_DB_URL=your_database_url
VITE_FIREBASE_PROJECT_ID=your_project_id


🚀 Running the Application Locally
Start the development server:
npm run dev


Open your browser at:

http://localhost:5173
Your app will reload on file changes automatically.

🧪 Running Tests
Example:

npm test


🌐 Deployment Instructions
Deploying to Netlify/Vercel:
Build the app:
npm run build


Push to a GitHub repository.

Link your GitHub repo to Netlify or Vercel.

Configure environment variables in the hosting platform.

Deploy — your app will be live instantly!

1.🔄 Example Usage Flow
2.📧 User visits the site.

3.🧑‍💻 Clicks "Sign in with Google".

4.💬 Enters the chatroom.

5.✍️ Sends a message — instantly visible to all other logged-in users.

6.🔄 Messages persist across sessions in the Firebase DB.

🧠 Roadmap
Here are some future enhancements we plan:

📜 Private messaging and direct chat.

🧑‍💼 User presence indicators (online/offline).

🖼️ Image sharing and file attachments.

🔕 Notification sounds or browser notifications.

🧑‍💼 Admin tools to moderate chat rooms.

🌐 Multi-language support (i18n).



🧭 Frequently Asked Questions (FAQ)
❓ Do I need to pay for Firebase?
✅ Firebase's free tier is enough for small usage — up to 50,000 messages/month.

❓ Can I switch to a different backend?
✅ Absolutely! Replace the src/services/firebase.js file with your own API implementation.

❓ How do I change the UI theme?
✅ Modify src/styles/ or Material-UI theme file.

🧪 Testing Strategy
Unit tests for utility functions.

Component tests using React Testing Library.

E2E tests can be added with Cypress for real user flows.

🧠 Troubleshooting
    Problem	                                                  Solution
Firebase config errors	                   Double-check your .env and Firebase project settings
Messages not appearing in real-time	       Check your Firebase Database Rules and permissions
UI not responsive	                         Inspect the layout CSS, especially Material-UI breakpoints
Google sign-in failing	                   Enable Google sign-in method in Firebase console

🤝 Contributing
We ❤️ contributions!
Here’s how you can help:

1.🍴 Fork the project

2.🌿 Create a feature branch:

3.🧪 Test your changes

4.✅ Commit:
git commit -m "Add my awesome feature"

5.🚀 Push:
git push origin feature/my-feature

6.📜 Open a pull request — we’ll review it promptly!

📢 Support & Contact
If you have questions or suggestions:

⭐ Star this repo if you like it!

🐛 Open an issue for bugs or feature requests.

📧 Reach me at  OMSPANDE on GitHub.

🎉 Acknowledgements
Thanks to:

📄 Firebase for their amazing Realtime Database & Auth.

🎨 Material-UI for elegant design components.

🧠 React.js for making UI a breeze.

💡 Have fun chatting & happy coding!
✨ Feel free to personalize this project and build upon it










