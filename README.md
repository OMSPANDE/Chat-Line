# 💎 Jewel Sales — E-commerce Web Application

**Jewel Sales** is a full-stack e-commerce platform for selling fine jewellery online. Users can browse products with filters, manage a shopping cart, and securely check out. It also provides a rich admin interface to manage inventory, view sales, and process orders.



## 🎯 Features

### 🧑‍💻 User Features
- 🔍 Browse jewellery catalog with **category** and **price** filters.
- 🛍️ View detailed product pages with images, descriptions, and ratings.
- 🧾 Maintain a personal **shopping cart** across sessions.
- 🔐 Register and log in with secure JWT authentication.
- 💳 Complete checkout with integrated **Stripe/PayPal** payment gateway.
- 🧑‍💼 View order history and manage profile settings.

### 🧑‍💻 Admin Features
- ⚙️ Add/edit/remove products (images, prices, categories, etc.).
- 📦 View and process new orders.
- 📊 See summary statistics (total sales, number of customers, etc.).
- 🔐 Role-based access control for admins.

---

## 🧰 Tech Stack

| Layer       | Tech Stack                                       |
|------------|--------------------------------------------------|
| 🖥️ Frontend  | React.js, Tailwind CSS, Axios, Redux Toolkit     |
| ⚙️ Backend   | Node.js, Express.js, Mongoose (MongoDB ODM)     |
| 🗄️ Database  | MongoDB Atlas                                   |
| 🔐 Auth      | JSON Web Tokens (JWT), bcrypt for password hashing |
| 💳 Payment   | Stripe (or Razorpay/PayPal — customize as needed) |
| 📜 Build     | npm, Webpack, Babel                             |

---

## ⚠️ Prerequisites

- 🐍 **Node.js v18+** and npm
- 🐬 **MongoDB** URI (local or Atlas)
- 🔐 **JWT_SECRET** for signing tokens
- 💳 **Stripe Secret & Public Keys** (or equivalent if using different gateway)

---

## ⚡ Getting Started

Follow these steps to set up the project locally.

### 🔧 Backend

1. Clone the repository:
   
   git clone https://github.com/OMSPANDE/jewel_sales.git
   cd jewel_sales/backend
2.Install dependencies:
npm install

Set up environment variables:

Copy .env.example to .env

Fill in:

MONGODB_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key

3.Run the server:
npm run dev
The backend will run at http://localhost:5000.


🎨 Frontend
1.Go to the frontend directory:
cd ../frontend
2.Install dependencies:
npm install
3.Run the app:
npm start
4.Access the app at http://localhost:3000.


🧪 Testing
Backend Tests
You can add unit and integration tests under backend/tests using Jest and Supertest.

Run:
cd backend
npm test

Frontend Tests
Add tests under frontend/src/__tests__ with React Testing Library or Cypress.
Run:
cd frontend
npm test


📁 Project Structure
jewel_sales/
├── backend/
│   ├── controllers/     # Business logic
│   ├── models/          # MongoDB schemas
│   ├── routes/          # Express routes
│   ├── middleware/      # Auth and error handling
│   ├── tests/           # Backend tests
│   ├── server.js        # Entry point
│   └── .env             # Environment variables
├── frontend/
│   ├── public/          # Static files
│   ├── src/
│   │   ├── components/  # Shared UI components
│   │   ├── pages/       # Application pages
│   │   ├── redux/       # State management
│   │   ├── hooks/       # Custom hooks
│   │   ├── App.js       # Main app component
│   │   ├── index.js     # Entry point
│   │   └── styles/      # CSS/Tailwind
├── README.md
└── package.json
🌐 Deployment
You can deploy the app easily using:

Backend: Heroku, Render, or AWS Elastic Beanstalk.

Frontend: Netlify, Vercel, or GitHub Pages.

Make sure to:
✅ Set the environment variables on the hosting platform
✅ Configure CORS settings
✅ Enable SSL for secure HTTPs

🧭 Roadmap
Here are some future features planned:

🔄 Implement Wishlists

🌐 Internationalization (multi-language support)

📝 Product Reviews & Ratings

📢 Notification/Email service for order updates

📊 Enhanced admin reports with charts


🤝 Contributing
🍴 Fork the repo

🌿 Create a feature branch (git checkout -b feature/awesome-feature)

✏️ Commit changes (git commit -m "Add awesome feature")

🚀 Push to branch (git push origin feature/awesome-feature)

🔃 Create a Pull Request

🧑‍💻 Author & Contact
OMSPANDE — GitHub
Feel free to reach out if you have questions or suggestions.

⭐ Acknowledgements
Stripe Docs

MongoDB Docs

React Docs



