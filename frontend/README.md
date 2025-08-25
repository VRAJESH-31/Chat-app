# ChatApp: Real-Time Full-Stack Chat Platform

Welcome to **ChatApp**, a modern full-stack chat application built with the MERN stack (MongoDB, Express.js, React, Node.js). ChatApp enables users to communicate in real-time, manage their profiles, and enjoy a seamless messaging experience with a clean, responsive UI.

---

## ✨ Key Features

- **Real-Time Messaging:** Instant chat between users using Socket.IO.
- **User Authentication:** Secure JWT-based signup, login, and protected routes.
- **Profile Management:** Users can update their profile details and avatar.
- **Online Status:** See which users are online, with online users shown at the top of the sidebar.
- **Image Sharing:** Send text and image messages in chats.
- **Responsive Design:** Mobile-first UI built with Tailwind CSS.
- **Toast Notifications:** Non-intrusive feedback for actions like login, logout, and errors.
- **Persistent Chat History:** Messages are stored in MongoDB and loaded on refresh.
- **Animated UI:** Smooth transitions and skeleton loaders for a polished experience.

---

## 🛠️ Tech Stack

| Category   | Technology                                                                 |
|------------|----------------------------------------------------------------------------|
| Frontend   | React, Vite, React Router, Tailwind CSS, Axios, Lucide React               |
| Backend    | Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt, Socket.IO, Cloudinary |
| Development| Nodemon, ESLint                                                            |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm
- MongoDB Atlas account or local MongoDB
- Cloudinary account (for image uploads)

### Installation & Setup

**Clone the repository:**
```bash
git clone https://github.com/your-username/chatapp.git
cd chatapp
```

**Setup the Backend:**
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` directory:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
CLIENT_URL=http://localhost:5173
```

**Setup the Frontend:**
```bash
cd ../frontend
npm install
```

### Running the Application

Open two terminals:

**Start the Backend:**
```bash
cd backend
npm run dev
```
Backend runs at `http://localhost:5001`

**Start the Frontend:**
```bash
cd frontend
npm run dev
```
Frontend runs at `http://localhost:5173`

---

## 📂 Project Structure

```
chatapp/
  backend/
    src/
      controllers/
      lib/
      middlewares/
      models/
      routes/
    .env
    package.json
  frontend/
    src/
      components/
      lib/
      pages/
      store/
      assets/
    package.json
```

---

## 📖 API Endpoints

| Method | Endpoint                | Description                       | Protected |
|--------|------------------------ |-----------------------------------|-----------|
| POST   | /api/auth/signup        | Register a new user               | No        |
| POST   | /api/auth/login         | Log in and get JWT                | No        |
| POST   | /api/auth/logout        | Log out user                      | Yes       |
| GET    | /api/auth/check         | Check authentication status       | Yes       |
| PUT    | /api/auth/update-profile| Update user profile               | Yes       |
| GET    | /api/message/users      | Get all users for sidebar         | Yes       |
| GET    | /api/message/:id        | Get chat messages with user       | Yes       |
| POST   | /api/message/send/:id   | Send a message to user            | Yes       |

---

## 👨‍💻 Author

Vrajesh Pandya  
Date: August 25, 2025

---

**Enjoy chatting! For issues or contributions, open a pull request or