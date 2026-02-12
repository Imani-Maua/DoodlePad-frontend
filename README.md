# 📝 Doodlepad

A full-stack notes application built with the MERN stack (MongoDB, Express.js, React, Node.js). This app allows users to create, edit, delete, and search their personal notes with a beautiful, modern UI.

## ✨ Features

- 🔐 **Authentication System**
  - User signup with email validation
  - Secure login with JWT tokens
  - Email uniqueness check (prevents duplicate accounts)
  - Protected routes

- 📝 **Notes Management**
  - Create notes with title and content
  - Edit existing notes
  - Delete notes with confirmation
  - View all your notes in a beautiful grid layout

- 🔍 **Search Functionality**
  - Search notes by title
  - Real-time filtering

- 🎨 **Modern UI/UX**
  - Beautiful gradient designs
  - Smooth animations and transitions
  - Responsive layout (mobile, tablet, desktop)
  - Glassmorphism effects
  - TailwindCSS styling

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **React Router** - Routing
- **Axios** - HTTP client
- **TailwindCSS** - Styling
- **Context API** - State management

## 📁 Project Structure

```
Notes App/
├── backend/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js  # Authentication logic
│   │   └── noteController.js  # Notes CRUD operations
│   ├── middleware/
│   │   └── auth.js            # JWT verification
│   ├── models/
│   │   ├── User.js            # User schema
│   │   └── Note.js            # Note schema
│   ├── routes/
│   │   ├── authRoutes.js      # Auth endpoints
│   │   └── noteRoutes.js      # Notes endpoints
│   ├── .env                   # Environment variables
│   ├── server.js              # Entry point
│   └── package.json
│
└── frontend/notes-app/
    ├── src/
    │   ├── components/
    │   │   ├── NoteCard.jsx   # Individual note card
    │   │   ├── NoteModal.jsx  # Create/Edit modal
    │   │   └── PrivateRoute.jsx # Route protection
    │   ├── context/
    │   │   └── AuthContext.jsx # Auth state management
    │   ├── pages/
    │   │   ├── Login.jsx      # Login page
    │   │   ├── Signup.jsx     # Signup page
    │   │   └── Dashboard.jsx  # Main notes dashboard
    │   ├── services/
    │   │   └── api.js         # API calls
    │   ├── App.jsx            # Main app component
    │   ├── index.css          # Global styles
    │   └── main.jsx           # Entry point
    └── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd "Notes App"
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   ```

3. **Configure Environment Variables**
   
   Create a `.env` file in the backend directory (already created):
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/notes-app
   JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
   NODE_ENV=development
   ```

4. **Setup Frontend**
   ```bash
   cd ../frontend/notes-app
   npm install
   ```

### Running the Application

1. **Start MongoDB** (if running locally)
   ```bash
   mongod
   ```

2. **Start Backend Server**
   ```bash
   cd backend
   npm run dev
   ```
   Server runs on: `http://localhost:5000`

3. **Start Frontend Development Server**
   ```bash
   cd frontend/notes-app
   npm run dev
   ```
   App runs on: `http://localhost:5173`

## 📡 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Notes
- `GET /api/notes` - Get all user's notes (protected)
- `POST /api/notes` - Create a new note (protected)
- `PUT /api/notes/:id` - Update a note (protected)
- `DELETE /api/notes/:id` - Delete a note (protected)
- `GET /api/notes/search?q=query` - Search notes (protected)

## 🎯 Usage

1. **Sign Up**: Create a new account with your name, email, and password
2. **Login**: Sign in with your credentials
3. **Create Note**: Click "Create Note" button and fill in the modal
4. **Search**: Use the search bar to find notes by title
5. **Edit**: Click the edit icon on any note card
6. **Delete**: Click the delete icon (confirms before deleting)
7. **Logout**: Click the logout button in the header

## 🔒 Security Features

- Passwords hashed with bcryptjs
- JWT tokens for authentication
- Protected API routes
- Input validation on both frontend and backend
- CORS enabled for secure cross-origin requests

## 🎨 Design Features

- Gradient backgrounds
- Glassmorphism UI elements
- Smooth hover effects
- Loading states
- Error handling with user-friendly messages
- Responsive grid layout
- Custom animations (fadeIn, slideUp, shake)

## 🚀 Deployment

### Backend Deployment (Example: Heroku, Railway, Render)
1. Set environment variables
2. Update MongoDB URI to production database
3. Deploy backend

### Frontend Deployment (Example: Vercel, Netlify)
1. Update API URL in `src/services/api.js`
2. Build: `npm run build`
3. Deploy the `dist` folder

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Built with ❤️ by Maua Imani

## 🙏 Acknowledgments

- MERN Stack
- TailwindCSS for beautiful styling
- Vite for fast development experience

---

**Happy Note Taking! 📝✨**
